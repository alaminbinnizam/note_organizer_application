import express from 'express';
import {
    createCategoryController,
    deleteCategoryController,
    getAllCategoryController,
    getSingleCategoryController,
    updateCategoryController
} from '../controllers/categoryController.js';
import { requireSignIn } from '../middlewares/authmiddleware.js';


const router = express.Router()

//creating category
router.post('/create-category', requireSignIn, createCategoryController);
//updating category
router.put('/update-category/:id', requireSignIn, updateCategoryController);
//get all category
router.get('/getall-category',requireSignIn, getAllCategoryController);
//get single category
router.get('/getsingle-category/:slug', requireSignIn, getSingleCategoryController)
//get single category
router.delete('/delete-category/:id', requireSignIn, deleteCategoryController)

export default router