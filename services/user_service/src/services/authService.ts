import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser, findUserById  } from '../models/userModel';

const JWT_SECRET = 'your_jwt_secret';  // Replace with your secret key

// Signup service - hash password and store user
export const signup = async (email: string, password: string, role: string) => {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash password

  const user = {
    email,
    password: hashedPassword,
    role,
  };

  // Call the model to save the user to the database
  const createdUser = await createUser(user);
  return createdUser;
};

// Login service - compare password and generate JWT token
export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('User not found');

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error('Invalid password');

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token, user };
};
