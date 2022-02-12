import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.NODE_ENV === 'production' ? 'mongodb+srv://wangdu422:pass1997422@cluster0.mqhdp.mongodb.net/linkforme' : 'mongodb://localhost:27017/linkforme'),
  },
];