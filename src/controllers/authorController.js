import AUTHORS from '../../data/authors.js'

//Création d'une variable permettant d'incrémenter l'id lors de la création d'un auteur
let AUTHORID = 3

const getAuthors = (req, res) => {
  return res.status(200).json(AUTHORS)
}

const getAuthor = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'AuthorID is invalid' })
  }
  const team = AUTHORS.find((t) => t.id == id)
  if (!team) {
    return res.status(404).json({ error: 'There is no such team' })
  }
  res.status(200).json(team)
}

//Create a new author by incrementing the AUTHORID variable
const createAuthor = (req, res) => {
  const { name, grade, teamId } = req.body
  if (!name || !grade || !teamId) {
    return res.status(404).json({ error: 'Missing fields' })
  }
  AUTHORID++
  const author = { id: AUTHORID, name: name, grade: grade, teamId: teamId }
  AUTHORS.push(author)
  res.status(200).json(author)
}

//Update a author by his ID
const updateAuthor = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = AUTHORS.findIndex((t) => t.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'There is no such author' })
  }

  AUTHORS[index] = { ...AUTHORS[index], ...req.body }

  res.status(200).json(AUTHORS[index])
}

//Delete a author by his ID
const deleteAuthor = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = AUTHORS.findIndex((t) => t.id == id)
  if (index !== -1) {
    const deletedAuthor = AUTHORS.splice(index, 1)[0]
    res.status(200).json(deletedAuthor)
  } else {
    res.status(404).json({ error: 'There is no such author' })
  }
}

export default {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
}
