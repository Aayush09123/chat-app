import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        // check password and confirmPassword match correctly or not
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

        const user = await User.findOne({ username });

        // check if user already exists or not
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // Hash password here

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup controller", error?.message);
        res.status(500).json({ error: "Internal server error" });
    }
}