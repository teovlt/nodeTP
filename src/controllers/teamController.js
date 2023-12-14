import TEAMS from '../../data/teams.js'

//Je crée une variable Générale car je ne possède pas de base de données
let TEAMID = 3

//Get all the users
const getTeams = (req, res) => {
  res.status(200).json(TEAMS)
}

//Get a single user by her ID
const getTeam = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'TeamID is invalid' })
  }
  const team = TEAMS.find((t) => t.id == id)
  if (!team) {
    return res.status(404).json({ error: 'There is no such team' })
  }
  res.status(200).json(team)
}

//Create a new team by incrementing the TEAMID variable
const createTeam = (req, res) => {
  const { name, description, location, contributions, authors } = req.body
  if (!name || !description || !location || !authors) {
    return res.status(404).json({ error: 'Missing fields' })
  }
  TEAMID++
  const team = { id: TEAMID, name: name, description: description, location: location, contributions: contributions, authors: authors }
  TEAMS.push(team)
  res.status(200).json(team)
}

//Update a team by her ID
const updateTeam = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = TEAMS.findIndex((t) => t.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'There is no such Team' })
  }

  TEAMS[index] = { ...TEAMS[index], ...req.body }

  res.status(200).json(TEAMS[index])
}

//Delete a team by her ID
const deleteTeam = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = TEAMS.findIndex((t) => t.id == id)
  if (index !== -1) {
    const deletedTeam = TEAMS.splice(index, 1)[0]
    res.status(200).json(deletedTeam)
  } else {
    res.status(404).json({ error: 'There is no such Team' })
  }
}

export default {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
}
