import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/error';
import carRouter from './routes/car';
import motorcyclesRouter from './routes/motorcycle';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use('/motorcycles', motorcyclesRouter);
app.use(errorHandler);

export default app;
