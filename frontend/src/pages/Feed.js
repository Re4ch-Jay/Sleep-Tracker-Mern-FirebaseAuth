import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, Divider, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import {formatDistanceToNow, format} from "date-fns"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { motion } from "framer-motion";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Feed() {
  const [expanded, setExpanded] = useState(false);
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchPost = async () => {
      await axios.get("api/sleep")
        .then(res => {
          console.log(res.data)
          setPosts(res.data)
          setError(false)
          setLoading(false)
        })
        .catch(err => {
          setError("Failed to fetch the data :(")
          setPosts([])
          setLoading(false)
          console.log(err)
        })
    }
    fetchPost()
  }, [])

  const deletePost = async (_id) => {
    await axios.delete(`api/sleep/${_id}`)
      .then(res => {
        console.log(res.data)
        const newPost = posts.filter(post => post._id !== _id)
        setPosts(newPost);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <motion.section
    initial={{x: '-100vw'}}
    animate={{x: 0}}
    transition={{delay: 0.5}}
    >
    <Container sx={{margin: "80px auto"}}>
      <div className="text-center"> 
      <Box sx={{
        margin: "80px auto",
        textAlign: "center",
      }}>
        <Typography variant="h3" color={"primary"} gutterBottom>
          Hey welcome to the<span className='text-warning'> sleep tracker feeds</span> 
        </Typography>
        <Typography variant="p" color={"error"} gutterBottom sx={{margin: "20px auto", padding: "20px auto"}}>
            Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in
            good company on Blogger. Sign up to discover why millions of people 
            have published their passions here.
        </Typography>
      </Box>
        <Link to="/post">
          <Button variant="contained">
            Post Your Sleep
          </Button>
        </Link>
      </div>
      <Divider sx={{margin: "20px auto"}}/>


      {error && <Typography variant="h5" color="error" sx={{textAlign: "center"}}>{error}</Typography>}
      {loading && <Typography variant="h5" color="error" sx={{textAlign: "center"}}>Loading...</Typography>}


      {posts && posts.map(post => (
            <Grid item sm={12} md={4} key={post._id} className="my-5">
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "primary" }} aria-label="recipe">
                    {post.name[0]}
                  </Avatar>
                }
                title={`Username: ${post.name}`}
                subheader={`${formatDistanceToNow(new Date(post.createdAt), {addSuffix: true})} on ${format(new Date(post.createdAt), "MM/dd/yyyy")}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <strong>Day I sleep: </strong> {post.days} <br/>
                  <strong>How long do I sleep last night: </strong> {post.hour} hours<br/>
                  <strong>How is your feeling: </strong> {post.feeling}

                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <DeleteIcon color="error" aria-label="show more" onClick={() => deletePost(post._id)} sx={{cursor: "pointer"}}/>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                  {post.description}
                  </Typography>
                  
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
      ))}
    </Container>
    </motion.section>
  )
}

export default Feed