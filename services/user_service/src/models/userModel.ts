// src/models/userModel.ts
import pool from "../config/dbConfig";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

// Create a new user
export const createUser = async (user: Omit<User, "id">): Promise<any> => {
  try {
    const [result] = await pool.execute(
      "INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)",
      [user.username, user.email, user.password, user.role]
    );
    return result; // Return the result of the insertion
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Internal Server Error");
  }
};

// Find user by email
export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const [rows]: [any[], any] = await pool.execute(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0]; // Return the first matched user
    }
    return null; // No user found
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Internal Server Error");
  }
};

// Find user by id
export const findUserById = async (id: number): Promise<User | null> => {
  try {
    const [rows]: [any[], any] = await pool.execute(
      "SELECT * FROM user WHERE id = ?",
      [id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0]; // Return the user by id
    }
    return null; // No user found
  } catch (error) {
    console.error("Error fetching user by id:", error);
    throw new Error("Internal Server Error");
  }
};

export const getAllUsers = async () => {
  const [users] = await pool.query('SELECT * FROM user');
  return users;
};
