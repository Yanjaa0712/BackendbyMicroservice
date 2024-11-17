// src/controllers/authController.ts
import { Request, Response } from 'express';
import { signup, login } from '../services/authService';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const result = await signup(email, password, role);
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await login(email, password);
    res.json({ message: 'Login successful', token, user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(401).json({ message: 'An unknown error occurred' });
    }
  }
};
