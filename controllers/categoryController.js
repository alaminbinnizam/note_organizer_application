import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
import userModel from "../models/userModel.js";

//create category
export const createCategoryController = async (req, res) => {
    try {
        const { categoryname } = req.body
        if (!categoryname) {
            return res.status(401).send({
                message:'Category name is Required'
            })
        }

        const existingCategory = await categoryModel.findOne({ categoryname });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'Category Already Exists'
            })
        }

        const category = await new categoryModel({
            categoryname,
            slug: slugify(categoryname),
            users: req.user._id
        }).save();
        await userModel.updateOne({
            _id: req.user._id
        },{
            $push: {
                category: category._id
            }
        })
        res.status(201).send({
            success: true,
            message: 'New Category Created',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Category',
            error
        })
    }
}

//updating category
export const updateCategoryController = async (req, res) => {
    try {
        const { categoryname } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, {
            categoryname,
            slug: slugify(categoryname)
        }, {
            new: true
        });

        res.status(200).send({
            success: true,
            message: 'Category Updated Successfully',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while updating category',
            error
        })
    }
}

//single category 
export const getSingleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({
            slug: req.params.slug
        });

        res.status(200).send({
            success: true,
            message: 'Get Single Category Successfully',
            category
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in single categories',
            error
        })
    }
}

//deleting category
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'Category Deleted successfully',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleteing categories',
            error
        })
    }
}