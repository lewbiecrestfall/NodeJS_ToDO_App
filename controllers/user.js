import { User } from "../models/user.js";

export const getAllUser = async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users,
    });
}

export const getNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    const users = await User.create({
        name,
        email,
        password,
    });

    res.status(201).cookie("temoi", "lol").json({
        success: true,
        message: "Registered Success",
    });
}

export const specialFunc = (req, res) => {
    res.json({
        success: true,
        message: "Just Jocking",
    })
}


export const getUserDetails = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    })

}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message : "Updated User",
    })

}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message : "Deleted User",
    })

}