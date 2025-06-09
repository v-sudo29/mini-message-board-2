import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { messages } from './indexController'

export const getNewMessageForm = asyncHandler(
  async (req: Request, res: Response) => {
    res.render('newMessageForm')
  }
)

export const createNewMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const body = req.body

    if (body && body.name && body.messageText) {
      messages.push({
        user: body.name,
        text: body.messageText,
        added: new Date(),
      })
    } else throw new Error('Need all input contents :(')

    res.redirect('/')
  }
)
