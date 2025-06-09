import Router from 'express'
import { getNewMessageForm } from '../controllers/newMessageFormController'

const newMessageFormRouter = Router()

newMessageFormRouter.get('/', getNewMessageForm)

export default newMessageFormRouter
