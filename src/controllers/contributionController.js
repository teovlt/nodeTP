import CONTRIBUTIONS from '../../data/contributions.js'
import TEAMS from '../../data/teams.js'

//Création d'une variable permettant d'incrémenter l'id lors de la création d'un auteur
let CONTRIBUTIONID = 3

const getContributions = (req, res) => {
  return res.status(200).json(CONTRIBUTIONS)
}

const getContribution = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'ContributionId is invalid' })
  }
  const contribution = CONTRIBUTIONS.find((t) => t.id == id)
  if (!contribution) {
    return res.status(404).json({ error: 'There is no such contribution' })
  }
  res.status(200).json(contribution)
}

//Create a new contribution by incrementing the CONTRIBUTIONID variable
const createContribution = (req, res) => {
  const { title, startDate, abstract, teamId } = req.body
  if (!title || !startDate || !abstract || !teamId) {
    return res.status(404).json({ error: 'Missing fields' })
  }
  CONTRIBUTIONID++
  const contribution = { id: CONTRIBUTIONID, title: title, startDate: startDate, abstract: abstract, teamId: teamId }
  CONTRIBUTIONS.push(contribution)
  res.status(200).json(contribution)
}

//Update a contribution by his ID
const updateContribution = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = CONTRIBUTIONS.findIndex((t) => t.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'There is no such contribution' })
  }

  CONTRIBUTIONS[index] = { ...CONTRIBUTIONS[index], ...req.body }

  res.status(200).json(CONTRIBUTIONS[index])
}

//Delete a contribution by his ID
const deleteContribution = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = CONTRIBUTIONS.findIndex((t) => t.id == id)
  if (index !== -1) {
    const deletedContribution = CONTRIBUTIONS.splice(index, 1)[0]
    res.status(200).json(deletedContribution)
  } else {
    res.status(404).json({ error: 'There is no such contribution' })
  }
}

//Get the team of the contribution by her ID
const getTeamOfContribution = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }
  const contribution = CONTRIBUTIONS.find((t) => t.id == id)
  if (!contribution) {
    return res.status(404).json({ error: 'There is no such contribution' })
  }
  const team = TEAMS.find((t) => t.id === contribution.teamId)
  if (!team) {
    return res.status(404).json({ error: 'There is no such team' })
  }
  res.status(200).json(team)
}

export default {
  getContributions,
  getContribution,
  createContribution,
  updateContribution,
  deleteContribution,
  getTeamOfContribution,
}
