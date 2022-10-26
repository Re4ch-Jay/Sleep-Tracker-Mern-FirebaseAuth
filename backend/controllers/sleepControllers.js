const Sleeps = require('../models/sleepModels')

const GET_SLEEPS = async (req, res) => {
    try {
        const sleeps =  await Sleeps.find().sort({createdAt: -1})
        res.status(200).json(sleeps)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server is error"})
    }
}

const POST_SLEEP = async (req, res) => {
    const {name, hour, days, feeling, description} = req.body;

    try {
        if(!name || !hour || !days || !feeling || !description) return res.status(400).json({message: "All fields are required"})
        if(hour > 48 || hour < 0) return res.status(400).json({message: "Cannot higher than 48 hours or below 0 hour"})
        const sleeps =  await Sleeps.create({name, hour, days, feeling, description})
        res.status(200).json(sleeps)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Cannot post"})
    }
}

const GET_SINGLE_SLEEP = async (req, res) => {
    try {
        const sleep =  await Sleeps.findById(req.params.id)
        if(!sleep) return res.status(404).json({message: "Cannot find this sleep post"})
        res.status(200).json(sleep)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Cannot find this sleep post"})
    }
}

const DELETE_SLEEP = async (req, res) => {
    try {
        const sleep =  await Sleeps.findByIdAndDelete(req.params.id)
        res.status(200).json(sleep)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Cannot find and delete this sleep post"})
    }
}

const UPDATE_SLEEP = async (req, res) => {
    try {
        const sleep =  await Sleeps.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(sleep)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Cannot find and update this sleep post"})
    }
}

module.exports = {
    GET_SLEEPS,
    POST_SLEEP,
    GET_SINGLE_SLEEP,
    DELETE_SLEEP,
    UPDATE_SLEEP
}