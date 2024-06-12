import jwt from 'jsonwebtoken'
import User from '../models/User'
import creaditionals from '../commons/creadtionals'

export const tokenGenerator=(userData: string | object)=>{
    return  jwt.sign(userData,creaditionals.secreat_key)
}

export function tokenValidator(token: string, secret: string): any | null {
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }