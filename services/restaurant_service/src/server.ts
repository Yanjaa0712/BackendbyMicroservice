// food_service/src/server.ts
import app from './app';

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Restaurant service (food management) running on port ${PORT}`);
});
