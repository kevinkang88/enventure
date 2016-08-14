var AddItems = require('../Components/InventoryAddItemsForm.android');
var AddQuantity = require('../Components/InventoryAddQuantityForm.android');
var InventoryList = require('../Components/InventoryList.android');
var Login = require('../Components/Login');
var Main = require('../Components/Main');

module.exports = {
    //================================================================================
    // App Routes
    //================================================================================
    ROUTES: {
        MAIN: {
            title: 'Main',
            component: Main
        },
        LOGIN: {
            title: 'Login',
            component: Login
        },
        INVENTORY: {
            title: 'Inventory',
            component: InventoryList
        },
        ADD_ITEMS: {
            title: 'Add Items To Inventory',
            component: AddItems
        },
        ADD_QUANTITY: {
            title: 'Add Item Quantity',
            component: AddQuantity
        }
    },

    //================================================================================
    // Color Constants
    //================================================================================
    CYAN: '#6BCEBB',
    GREY: '#666666',
    BLACK: '#000000',
    WHITE: '#FFFFFF',

    //================================================================================
    // Button Constants
    //================================================================================
    BUTTON_HEIGHT: 60,
    BUTTON_BORDER_RADIUS: 10,
    BUTTON_FONT_SIZE: 25,
    BUTTON_FONT_WEIGHT: 'bold'
};