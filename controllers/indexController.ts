import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'

export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

export const getHomePage = asyncHandler(async (req: Request, res: Response) => {
  res.render('home', { messages: messages })
})
