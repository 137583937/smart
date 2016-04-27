/*
 * File: app/view/Equipment.js
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

Ext.define('smart.view.Equipment', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Number',
        'Ext.panel.Tool'
    ],

    width: 790,
    layout: 'anchor',
    manageHeight: false,
    title: '用户设备详细信息',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    anchor: '0 30%',
                    height: 187,
                    itemId: 'Equipment',
                    padding: '10 0 0 10',
                    layout: 'column',
                    manageHeight: false,
                    title: '',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'left',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'AddEquipment',
                                    text: '添加新设备'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'DeleteEquipment',
                                    text: '删除选中设备'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'fieldset',
                            height: 163,
                            title: '系统设备详情',
                            layout: {
                                type: 'table',
                                columns: 3
                            },
                            items: [
                                {
                                    xtype: 'displayfield',
                                    colspan: 3,
                                    padding: '0 10',
                                    fieldLabel: '设备总数',
                                    labelStyle: 'color:#000099',
                                    labelWidth: 80,
                                    name: 'equipmentsum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '空调',
                                    labelStyle: 'color:#116655',
                                    labelWidth: 80,
                                    name: 'containersum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '灯光',
                                    labelStyle: 'color:#884466',
                                    labelWidth: 80,
                                    name: 'lightsum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '加湿器',
                                    labelStyle: 'color:#114400',
                                    labelWidth: 80,
                                    name: 'humidifiersum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '仪表类',
                                    labelStyle: 'color:#001199',
                                    labelWidth: 80,
                                    name: 'instrumentsum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '传感类',
                                    labelStyle: 'color:#996633',
                                    labelWidth: 80,
                                    name: 'sensorsum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    fieldLabel: '其它',
                                    labelStyle: 'color:#cc6600',
                                    labelWidth: 80,
                                    name: 'othersum',
                                    value: 'N/n'
                                },
                                {
                                    xtype: 'displayfield',
                                    padding: '0 10',
                                    style: 'color:#00FF00',
                                    fieldLabel: '今日新增',
                                    labelStyle: 'color:#009900',
                                    labelWidth: 80,
                                    name: 'addtotoday',
                                    value: 'N/n'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    anchor: '0 70%',
                    title: '',
                    items: [
                        {
                            xtype: 'gridpanel',
                            itemId: 'EquipmentList',
                            title: '设备列表',
                            store: 'EquipmentModels',
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    width: 360,
                                    afterPageText: '页/{0}',
                                    beforePageText: '第',
                                    displayInfo: true,
                                    displayMsg: '记录: {0} - {1} / {2}',
                                    store: 'EquipmentModels'
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'id',
                                    text: 'ID',
                                    format: '00'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'mac',
                                    text: 'Mac地址'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'style',
                                    text: '设备类型'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'description',
                                    text: '设备描述'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'isworking',
                                    text: '是否启用'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'installation date',
                                    text: '按照日期'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'manufacturer',
                                    text: '厂商'
                                }
                            ],
                            tools: [
                                {
                                    xtype: 'tool',
                                    itemId: 'puls',
                                    type: 'plus',
                                    listeners: {
                                        click: {
                                            fn: me.onPulsClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onPulsClick: function(tool, e, eOpts) {
        var equip=Ext.create('smart.view.AddNewEquipment');
                        equip.show();
    }

});