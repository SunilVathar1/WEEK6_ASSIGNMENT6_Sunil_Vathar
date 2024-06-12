import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { tokenGenerator } from "../middlewares/tokenService";


export const registerUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const password = userInfo.password;
  try {
    let hasshedpassword = await bcrypt.hash(password, 10);
    userInfo.password = hasshedpassword;
    let user = await User.create(userInfo);
    let token=tokenGenerator({user})
    res.json({ msg: "User created Sucessfully", user: user,token:token });
  } catch (error) {
    // res.json({ err: error });
    throw error;
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      let token=tokenGenerator({user});
      (await bcrypt.compare(password, user.password))
        ? res.json({ msg: "Login Sucessfully",user:user,token:token })
        : res.json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    throw error;
  }
};



export const getCurrentUser = async (req:Request|any, res:Response) => {
  const user=req.user
    try {
      const currentUser = await User.findOne(user);
      if (!currentUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(currentUser);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch user details' });
    }
  };
  
