import VENUES from '../../data/venues.js'

let VENUEID = 3

//Get all the venues
const getVenues = (req, res) => {
  res.status(200).json(VENUES)
}

//Get a single venue by her ID
const getVenue = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'VenueId is invalid' })
  }
  const venue = VENUES.find((t) => t.id == id)
  if (!venue) {
    return res.status(404).json({ error: 'There is no such venue' })
  }
  res.status(200).json(venue)
}

//Create a new venue by incrementing the VENUEID variable
const createVenue = (req, res) => {
  const { name, rank } = req.body
  if (!name || !rank) {
    return res.status(404).json({ error: 'Missing fields' })
  }
  VENUEID++
  const venue = { id: VENUEID, name: name, rank: rank }
  VENUES.push(venue)
  res.status(200).json(venue)
}

//Update a venue by her ID
const updateVenue = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = VENUES.findIndex((t) => t.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'There is no such Venue' })
  }

  VENUES[index] = { ...VENUES[index], ...req.body }

  res.status(200).json(VENUES[index])
}

//Delete a venue by her ID
const deleteVenue = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = VENUES.findIndex((t) => t.id == id)
  if (index !== -1) {
    const deletedVenue = VENUES.splice(index, 1)[0]
    res.status(200).json(deletedVenue)
  } else {
    res.status(404).json({ error: 'There is no such Venue' })
  }
}

export default {
  getVenues,
  getVenue,
  createVenue,
  updateVenue,
  deleteVenue,
}
