import { Sequelize, DataTypes } from 'sequelize';

export default function UserModel(sequelize: Sequelize) {

  const UserInit = sequelize.define('User', {
    // 定义表的列
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 其他列...
  }, {
    // 设置存储引擎为 InnoDB
    engine: 'InnoDB',
    // 设置字符集为 utf8mb4
    charset: 'utf8mb4',
    // 设置校对规则为 utf8mb4_general_ci
    collate: 'utf8mb4_general_ci'
  });

  UserInit.sync({ force: true });

  return UserInit;
}

