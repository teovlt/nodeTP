import express from 'express'
import submissionController from '../controllers/submissionController.js'

const router = express.Router()

//GET all submissions
router.get('/', submissionController.getSubmissions)

//GET a single submission by her ID
router.get('/:id', submissionController.getSubmission)

//POST a new submission
router.post('/', submissionController.createSubmission)

//PUT a submission by her ID
router.put('/:id', submissionController.updateSubmission)

//DELETE a submission by her ID
router.delete('/:id', submissionController.deleteSubmission)

export default router
