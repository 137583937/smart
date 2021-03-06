/*
 * File: app/view/EquipmentDetail.js
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

Ext.define('smart.view.EquipmentDetail', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 435,
    width: 745,
    title: '设备详细信息',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 385,
                    layout: 'column',
                    bodyPadding: 10,
                    header: false,
                    manageHeight: false,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.5,
                            height: 313,
                            margin: 5,
                            title: '设备详细信息',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'MAC'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    fieldLabel: '类型'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '描述'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Label'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Label'
                                },
                                {
                                    xtype: 'datefield',
                                    anchor: '100%',
                                    fieldLabel: '安装日期'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.5,
                            height: 314,
                            margin: 5,
                            title: '设备关联用户',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    itemId: 'EquipmentWithUser',
                                    header: false,
                                    title: 'My Grid Panel',
                                    store: 'EquipmentWithUsers',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            width: '50%',
                                            dataIndex: 'id',
                                            text: '用户ID',
                                            format: '00'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: '50%',
                                            dataIndex: 'name',
                                            text: 'Name'
                                        }
                                    ],
                                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                                    }),
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    text: '查看选中用户'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: '删除选中关联'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: '关联新用户'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    text: '编辑设备信息'
                                },
                                {
                                    xtype: 'button',
                                    id: 'DeleteSelectedEquipmentBtn',
                                    text: '删除该设备'
                                },
                                {
                                    xtype: 'button',
                                    text: '关联新用户'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});