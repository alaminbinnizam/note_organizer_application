import express from 'express';
import ExpressFormidable from "express-formidable";
import { requireSignIn } from '../middlewares/authmiddleware.js';
import { createNotesController, deleteNoteController, getSingleNoteController, updatingNotesController } from '../controllers/noteController.js';



const router = express.Router()

//creating device
router.post('/create-note', requireSignIn, ExpressFormidable(), createNotesController);
// updating device
router.put('/update-note/:id', requireSignIn, ExpressFormidable(), updatingNotesController);
// //get single device
router.get('/getsingle-note/:id', requireSignIn, getSingleNoteController)
//get single device
router.delete('/delete-note/:id', requireSignIn, deleteNoteController)

export default router