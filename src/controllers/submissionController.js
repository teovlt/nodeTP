import SUBMISSIONS from '../../data/submissions.js'

let SUBMISSIONID = 3

//Get all the submissions
const getSubmissions = (req, res) => {
  res.status(200).json(SUBMISSIONS)
}

//Get a single submission by her ID
const getSubmission = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'SubmissionId is invalid' })
  }
  const submission = SUBMISSIONS.find((t) => t.id == id)
  if (!submission) {
    return res.status(404).json({ error: 'There is no such submission' })
  }
  res.status(200).json(submission)
}

//Create a new submission by incrementing the SUBMISSIONID variable
const createSubmission = (req, res) => {
  const { title, abstract, submissionDate, materialCost, venueId, contributionId } = req.body
  if (!title || !abstract || !submissionDate || !materialCost || !venueId || !contributionId) {
    return res.status(404).json({ error: 'Missing fields' })
  }
  SUBMISSIONID++
  const submission = {
    id: SUBMISSIONID,
    title: title,
    abstract: abstract,
    submissionDate: submissionDate,
    materialCost: materialCost,
    venueId: venueId,
    contributionId: contributionId,
  }
  SUBMISSIONS.push(submission)
  res.status(200).json(submission)
}

//Update a submission by her ID
const updateSubmission = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = SUBMISSIONS.findIndex((t) => t.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'There is no such submission' })
  }

  SUBMISSIONS[index] = { ...SUBMISSIONS[index], ...req.body }

  res.status(200).json(SUBMISSIONS[index])
}

//Delete a submission by her ID
const deleteSubmission = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'The ID is invalid' })
  }

  const index = SUBMISSIONS.findIndex((t) => t.id == id)
  if (index !== -1) {
    const deletedSubmission = SUBMISSIONS.splice(index, 1)[0]
    res.status(200).json(deletedSubmission)
  } else {
    res.status(404).json({ error: 'There is no such Submission' })
  }
}

export default {
  getSubmissions,
  getSubmission,
  createSubmission,
  updateSubmission,
  deleteSubmission,
}
