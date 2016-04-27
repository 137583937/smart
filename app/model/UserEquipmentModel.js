/*
 * File: app/model/UserEquipmentModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('smart.model.UserEquipmentModel', {
    extend: 'Ext.data.Model',
    alias: 'model.userequipmentmodel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'mac',
            type: 'string'
        },
        {
            name: 'descirption',
            type: 'string'
        },
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'more1',
            type: 'auto'
        },
        {
            name: 'more2',
            type: 'auto'
        },
        {
            name: 'more3',
            type: 'auto'
        }
    ]
});