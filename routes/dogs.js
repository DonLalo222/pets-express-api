import express from 'express';
import { search, detailsById, findAllByFirstLetter } from "../controllers/dogs-controller.js";

const router = express.Router();

router.get('/search', search);
router.get('/details/:id', await detailsById);
router.get('/letter/:letter', findAllByFirstLetter );


export { router };