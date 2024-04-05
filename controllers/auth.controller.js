const User = require('../models/user.models');
const bcryptjs = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword});
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ ...user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    signup
};