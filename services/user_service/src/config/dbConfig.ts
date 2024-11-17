import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'English2024@',  // Make sure this matches your MySQL credentials
  database: 'user-service',
});

// Check database connection on startup
pool.getConnection()
  .then(() => console.log('Connected to the user-service database successfully!'))
  .catch((err) => {
    console.error('User service database connection failed:', err);
    process.exit(1);  // Exit if the database connection fails
  });

export default pool;
