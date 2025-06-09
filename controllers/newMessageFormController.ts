import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'

export const getNewMessageForm = asyncHandler(
  async (req: Request, res: Response) => {
    res.render('newMessageForm')
  }
)
