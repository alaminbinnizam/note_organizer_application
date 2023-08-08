import slugify from "slugify";
import notesModel from "../models/notesModel.js";
import userModel from "../models/userModel.js";
import categoryModel from "../models/categoryModel.js";

export const createNotesController = async (req, res) => {
    try {
        const { title, content, category } = req.fields;
        //validation
        switch (true) {
            case !title:
                return res.status(500).send({ error: 'Title is required' });

            case !content:
                return res.status(500).send({ error: 'Content is required' });

            case !category:
                return res.status(500).send({ error: 'Category is required' });

        }

        const notes = await new notesModel({ ...req.fields, slug: slugify(title), users: req.user._id }).save();
        //saving device data
        await userModel.updateOne({
            _id: req.user._id
        }, {
            $push: {
                notes: notes._id
            }
        })


        res.status(201).send({
            success: true,
            message: 'Notes Created Successfully',
            notes
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating notes',
            error
        })
    }
}

// updating notes
export const updatingNotesController = async (req, res) => {
    try {
        const { title, content, category } =
            req.fields;
        //validation
        switch (true) {
            case !title:
                return res.status(500).send({ error: "Title is Required" });
            case !content:
                return res.status(500).send({ error: "content is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
        }

        const notes = await notesModel.findByIdAndUpdate(
            req.params.id,
            { ...req.fields, slug: slugify(title) },
            { new: true }
        );

        await notes.save();
        res.status(201).send({
            success: true,
            message: "Notes Updated Successfully",
            notes,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updating Notes",
        });
    }
}
// get all notes
export const getAllNoteController = async (req, res) => {
    try {
        const notes = await notesModel
            .find({})
            .populate('category')
            .populate('users')
            .sort({ createdAt: -1 });
        res.send({
            success: true,
            totalCount: notes.length,
            message: 'All Notes',
            notes
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting notes',
            error
        })
    }
}

//get single note 
export const getSingleNoteController = async (req, res) => {
    try {
        const notes = await notesModel
            .findById(req.params.id)
            .populate('category')
        res.status(200).send({
            success: true,
            message: 'Single Note fetched',
            notes
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting single Note',
            error
        })
    }
}

//deleting note
export const deleteNoteController = async (req, res) => {
    try {
        const notes = await notesModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: 'Note deleted succesfully',
            notes
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting Note',
            error
        })
    }
}