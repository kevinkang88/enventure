var Realm = require('realm')



const UserSchema = {
  name: 'User',
  properties: {
    phoneNumber: 'string'
  }
};



let schemas = new Realm({schema: [UserSchema]});

module.exports = schemas;
