import { Router } from 'express';
import { signup, login } from '../services/authService';

const router = Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const newUser = await signup(email, password, role);
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await login(email, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;
