import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a string',
  }).int().positive().lte(2500),
});

type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export { motorcycleZodSchema, IMotorcycle };