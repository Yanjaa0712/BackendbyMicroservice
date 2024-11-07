import app from './app';
import { gatewayConfig } from './config/gatewayConfig';

const PORT = gatewayConfig.port;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
