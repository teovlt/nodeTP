import express from 'express'
import contributionController from '../controllers/contributionController.js'

const router = express.Router()

//Get all the contributions
router.get('/', contributionController.getContributions)

//Get a contribution by his ID
router.get('/:id', contributionController.getContribution)

//Create an new contribution
router.post('/', contributionController.createContribution)

//Update a contribution by his ID
router.put('/:id', contributionController.updateContribution)

//Delete a contribution by his ID
router.delete('/:id', contributionController.deleteContribution)

//Get the team of a contribution by her ID
router.get('/:id/team', contributionController.getTeamOfContribution)

export default router
