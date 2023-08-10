const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            return res.json(thoughts);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params._id})
            .select('-__v')
            .lean();

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            return res.json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try { 
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params._id },
                { runValidators: true, new: true }
            )

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = Thought.findOneAndRemove({ _id: req.params._id });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought successfully deleted' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOne(
            { _id: req.params.thoughtId},
            { $push: {reactions: req.params.reactions}},
            { new: true })
            .select('-__v')
            .lean();

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought = Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            )

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};