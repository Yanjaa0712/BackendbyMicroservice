// src/config/dbConfig.ts
import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'English2024@',
  database: 'order-service',
});

export default pool;