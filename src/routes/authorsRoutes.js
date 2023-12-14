import express from 'express'
import authorController from '../controllers/authorController.js'

const router = express.Router()

//Get all the authors
router.get('/', authorController.getAuthors)

//Get an author by his ID
router.get('/:id', authorController.getAuthor)

//Create an new author
router.post('/', authorController.createAuthor)

//Update an author by his ID
router.put('/:id', authorController.updateAuthor)

//Delete an author by his ID
router.delete('/:id', authorController.deleteAuthor)

//Get the team of the author
router.get('/:id/team', authorController.getTeamOfAuthor)

export default router
