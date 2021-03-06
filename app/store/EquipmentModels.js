/*
 * File: app/store/EquipmentModels.js
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

Ext.define('smart.store.EquipmentModels', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentmodels',

    requires: [
        'smart.model.EquipmentModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'smart.model.EquipmentModel',
            storeId: 'EquipmentModels',
            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: 'EquipmentListAction',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});