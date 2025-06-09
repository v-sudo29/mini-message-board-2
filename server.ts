import express from 'express'
import indexRouter from './routes/indexRouter'
import path from 'path'
import newMessageFormRouter from './routes/newMessageFormRouter'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/new', newMessageFormRouter)

app.listen(8080, () => console.log(`Server is running on port ${8080}`))
