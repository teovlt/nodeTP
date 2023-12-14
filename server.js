import express from 'express'
import teamsRoutes from './src/routes/teamsRoutes.js'
import authorsRoutes from './src/routes/authorsRoutes.js'
import laboratoryRoutes from './src/routes/laboratoryRoutes.js'
import contributionsRoutes from './src/routes/contributionsRoutes.js'
import submissionsRoutes from './src/routes/submissionsRoutes.js'
import venuesRoutes from './src/routes/venuesRoutes.js'

//express app
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/', laboratoryRoutes)
app.use('/api/teams', teamsRoutes)
app.use('/api/authors', authorsRoutes)
app.use('/api/contributions', contributionsRoutes)
app.use('/api/submissions', submissionsRoutes)
app.use('/api/venues', venuesRoutes)

app.listen(3000, () => {
  console.log('Server listening on port', 3000, '🚀')
})
