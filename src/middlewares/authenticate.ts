import jwt from 'jsonwebtoken'
import { NextFunction, Request,Response } from 'express'
import creaditionals from '../commons/creadtionals';
import { JwtPayload } from 'jsonwebtoken';


export const authenticate = (req:Request|any, res:Response, next:NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, creaditionals.secreat_key);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid authentication token' });
  }
};





