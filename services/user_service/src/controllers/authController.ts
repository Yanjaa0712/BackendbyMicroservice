// src/controllers/authController.ts
import { Request, Response } from 'express';
import { signup, login, getUserById, getUsers } from '../services/authService';

export const signUp = async (req: Request, res: Response) => {
  try {
    const {username, email, password, role } = req.body;
    const result = await signup(username, email, password, role);
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

// Get user by ID controller
export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Send user details
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// Get user by ID controller
export const getUserList = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    if (!users) {
      return res.status(404).json({ message: "Don't get users" });
    }
    res.status(200).json(users); // Send user details
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
