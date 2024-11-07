import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const configSchema = z.object({
  port: z.string().default('3000'),
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  jwtSecret: z.string().min(1),
});

const validateConfig = (config: Record<string, unknown>) => {
  try {
    return configSchema.parse({
      port: process.env.PORT,
      nodeEnv: process.env.NODE_ENV,
      jwtSecret: process.env.JWT_SECRET,
    });
  } catch (error) {
    console.error('Invalid configuration:', error);
    process.exit(1);
  }
};

export const config = validateConfig(process.env);