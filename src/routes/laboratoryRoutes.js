import express from 'express'
import laboratoryController from '../controllers/laboratoryController.js'

const router = express.Router()

//Get all the informations of the laboratory
router.get('/', laboratoryController.getInfos)

export default router
