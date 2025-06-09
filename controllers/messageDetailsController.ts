import asyncHandler from 'express-async-handler'
import { messages } from './indexController'

export const getMessageDetails = asyncHandler(async (req, res) => {
  const { user } = req.params

  if (!user) throw new Error('Please enter user')

  const message = messages.find((message) => message.user === user)

  if (!message) throw new Error('No message found :(')

  res.send(`Message details from ${user}: ${message.text}, on ${message.added}`)
})
