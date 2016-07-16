var Realm = require('realm')

const UserSchema = {
  name: 'User',
  properties: {
    name: {type: 'string', optional: true},
    phoneNumber: 'int'
  }
}

let realm = new Realm({schema: [UserSchema]})
