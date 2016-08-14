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

const TransactionSchema = {
	name: 'Transaction',
	properties: {
		price: 'int',
		cost: 'int',
		quantity: {type: 'int', default: 1},
		createdAt: {type: 'int', default: Date.now()},
		item: {type: 'object', objectType: 'Item'}
	}
};



let schemas = new Realm({
	schema: [UserSchema, InventorySchema, ItemSchema, TransactionSchema],
	schemaVersion: 7
});

module.exports = schemas;
