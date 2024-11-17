import app from './app';
import cors from 'cors';
import { gatewayConfig } from './config/gatewayConfig';

const PORT = gatewayConfig.port;

app.use(cors());
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
