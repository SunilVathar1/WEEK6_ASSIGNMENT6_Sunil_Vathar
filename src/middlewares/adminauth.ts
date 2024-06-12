import { NextFunction, Request, Response } from "express";

declare module "express" {
  interface Request {
    user?: {
      role: string;
      id: number;
    };
  }
}

const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Access forbidden: Admins only" });
  }
};

export default authorizeAdmin;
