import express from 'express'
import teamController from '../controllers/teamController.js'

const router = express.Router()

//GET all teams
router.get('/', teamController.getTeams)

//GET a single team by her ID
router.get('/:id', teamController.getTeam)

//POST a new team
router.post('/', teamController.createTeam)

//PUT a team by her ID
router.put('/:id', teamController.updateTeam)

//DELETE a team by her ID
router.delete('/:id', teamController.deleteTeam)

export default router
