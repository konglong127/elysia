import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './user';

const sequelize = new Sequelize('test', 'root', 'Gundam.00', {
  host: 'localhost',
  dialect: 'mysql',
});

export const User = UserModel(sequelize);
