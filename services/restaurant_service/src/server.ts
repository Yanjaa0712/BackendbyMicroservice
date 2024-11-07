// src/server.ts
import { app } from './app'; // Change to named import

const PORT = process.env.RESTAURANT_SERVICE_PORT || 4001;

app.listen(PORT, () => {
  console.log(`Restaurant service running on port ${PORT}`);
});
