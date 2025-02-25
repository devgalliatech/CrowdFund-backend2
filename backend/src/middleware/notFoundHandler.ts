import { RequestHandler } from 'express';

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
  });
};