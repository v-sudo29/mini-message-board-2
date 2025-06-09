import Router from 'express'
import { getMessageDetails } from '../controllers/messageDetailsController'

const messageDetailsRouter = Router()

messageDetailsRouter.get('/:user', getMessageDetails)

export default messageDetailsRouter
