var Realm = require('realm');

const UserSchema = {
  name: 'User',
	primaryKey: 'id',
  properties: {
	  id: 'string',
    phoneNumber: 'string',
    inventories: {type: 'list', objectType: 'Inventory'}
  }
};

const InventorySchema = {
  name: 'Inventory',
	primaryKey: 'id',
  properties: {
	  id: 'string',
    name: 'string',
    items: {type: 'list', objectType: 'Item'}
  }
};

const ItemSchema = {
  name: 'Item',
	primaryKey: 'id',
  properties: {
	  id: 'string',
    name: 'string',
    price: 'int',
    cost: 'int',
    quantity: 'int'
  }
};

const TransactionSchema = {
	name: 'Transaction',
	primaryKey: 'id',
	properties: {
		id: 'string',
		price: 'int',
		cost: 'int',
		quantity: {type: 'int', default: 1},
		createdAt: {type: 'int', default: Date.now()},
		item: {type: 'object', objectType: 'Item'}
	}
};



let schemas = new Realm({
	schema: [UserSchema, InventorySchema, ItemSchema, TransactionSchema],
	schemaVersion: 11
});

module.exports = schemas;
