import express from 'express'
import venueController from '../controllers/venueController.js'

const router = express.Router()

//GET all venue
router.get('/', venueController.getVenues)

//GET a single venue by her ID
router.get('/:id', venueController.getVenue)

//POST a new venue
router.post('/', venueController.createVenue)

//PUT a venue by her ID
router.put('/:id', venueController.updateVenue)

//DELETE a venue by her ID
router.delete('/:id', venueController.deleteVenue)

export default router
