import laboratory from '../../data/laboratory.js'

const getInfos = (req, res) => {
  res.status(200).json(laboratory)
}

export default {
  getInfos,
}
