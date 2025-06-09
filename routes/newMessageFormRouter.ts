import Router from 'express'
import {
  getNewMessageForm,
  createNewMessage,
} from '../controllers/newMessageFormController'

const newMessageFormRouter = Router()

newMessageFormRouter.get('/', getNewMessageForm)

newMessageFormRouter.post('/', createNewMessage)

export default newMessageFormRouter
