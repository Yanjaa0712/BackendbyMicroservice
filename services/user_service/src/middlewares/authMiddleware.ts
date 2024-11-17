import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Use a stronger secret in production

export const verifyToken = (req: any, res: any, next: any) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    req.user = decoded; // Attach user info to request object
    next();
  });
};

export const checkRole = (role: string) => {
  return (req: any, res: any, next: any) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
};
