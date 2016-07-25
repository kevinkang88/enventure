var AddCost = require('../Components/InventoryAddUnitCostForm');
var AddItems = require('../Components/InventoryAddItemsForm');
var Inventory = require('../Components/Inventory');
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
            component: Inventory
        },
        ADD_ITEMS: {
            title: 'Add Items To Inventory',
            component: AddItems
        },
        ADD_COST: {
            title: 'Add Cost To Inventory',
            component: AddCost
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