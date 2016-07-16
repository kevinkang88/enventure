var Realm = require('realm')

const UserSchema = {
  name: 'User',
  properties: {
    phoneNumber: 'string',
    inventories: {type: 'list', objectType: 'Inventory'}
  }
};

const InventorySchema = {
  name: 'Inventory',
  properties: {
    name: 'string',
    items: {type: 'list', objectType: 'Item'}
  }
}

const ItemSchema = {
  name: 'Item',
  properties: {
    name: 'string'
  }
}

let schemas = new Realm({schema: [UserSchema, InventorySchema, ItemSchema]});

module.exports = schemas;
