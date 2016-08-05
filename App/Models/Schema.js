var Realm = require('realm');

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
};

const ItemSchema = {
  name: 'Item',
  properties: {
    name: 'string',
    price: 'int',
    cost: 'int',
    quantity: 'int' 
  }
};

let schemas = new Realm({
	schema: [UserSchema, InventorySchema, ItemSchema],
	schemaVersion: 2
});

module.exports = schemas;
