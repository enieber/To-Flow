'use strict';

module.exports = (sequelize, DataType) => {
    return sequelize.define('task', {
    id: {
	    type: DataType.UUID,
	    defaultValue: DataType.UUIDV4,
	    unique: true,
	    primaryKey: true,
	    allowNull: false
	  },
	  title: {
	    type: DataType.STRING(100),
	    allowNull: false,
	    unique: true
	  },
	  roles: {
	    type: DataType.ENUM,
	    values: ['main', 'dependency', 'build'],
	    defaultValue: 'dependency'
	  },
	  status: {
	    type: DataType.ENUM,
      values: ['to-do', 'doing', 'done'],
	    defaultValue: 'to-do'
	  }
  }, {
      createdAt: 'created_at',
      updatedAt: 'update_at',
      tableName: 'task',

    //   hooks: {
    //   	beforeCreate: function (task) {
    //   	  task.set({
    //   	    password: hashPassword(user.get('password'))
    //   	  });
    //   	},
    //   	beforeUpdate: function (user) {
    //   	  if (!user.changed('password')) {
    //   	    return;
    //   	  }
    //   	  user.set({
    //   	    password: hashPassword(user.get('password'))
    //       });
    //     }
    //  },
  });
};
