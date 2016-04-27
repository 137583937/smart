/*
 * File: app/view/MainView.js
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

Ext.define('smart.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.button.Button'
    ],

    id: 'MainView',
    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            style: {
                background: '#ccddee'
            },
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    html: '<div style=\'margin:0 auto;width:1003px;color:#006699;\'>\n<h1>智慧家居运维客户端</h1>\n<p>Name属性使用小写，例如mainview，ID属性使用首字母大写，例如MainView</p>\n<div>',
                    itemId: 'headerPanel',
                    minWidth: 1003,
                    layout: 'fit'
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    splitterResize: false,
                    itemId: 'menuPanel',
                    width: 180,
                    layout: 'fit',
                    collapseDirection: 'left',
                    collapsible: true,
                    title: '功能',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'sideMenu',
                            manageHeight: false,
                            items: [
                                {
                                    xtype: 'menuitem',
                                    cls: 'itemborder',
                                    height: 40,
                                    id: 'First',
                                    margin: 1,
                                    hideOnClick: false,
                                    text: '首页概览'
                                },
                                {
                                    xtype: 'menuitem',
                                    cls: 'itemborder',
                                    height: 40,
                                    id: 'UserMgr',
                                    margin: 1,
                                    text: '用户管理'
                                },
                                {
                                    xtype: 'menuitem',
                                    cls: 'itemborder',
                                    height: 40,
                                    id: 'EquipmentMgr',
                                    margin: 1,
                                    text: '设备管理'
                                },
                                {
                                    xtype: 'menuitem',
                                    cls: 'itemborder',
                                    height: 40,
                                    id: 'SeverMgr',
                                    margin: 1,
                                    text: '服务器管理'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'button',
                            dock: 'bottom',
                            id: 'Quit',
                            margin: 10,
                            padding: 10,
                            text: '退出'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    id: 'Content',
                    itemId: 'contentPanel',
                    minWidth: 800,
                    layout: 'card',
                    items: [
                        {
                            xtype: 'panel',
                            items: [
                                Ext.create('smart.view.First')
                            ],
                            id: 'F',
                            layout: 'fit'
                        },
                        {
                            xtype: 'panel',
                            items: [
                                Ext.create('smart.view.User')
                            ],
                            id: 'S',
                            layout: 'fit'
                        },
                        {
                            xtype: 'panel',
                            items: [
                                Ext.create('smart.view.Equipment')
                            ],
                            id: 'T',
                            layout: 'fit'
                        },
                        {
                            xtype: 'panel',
                            items: [
                                Ext.create('smart.view.Sever')
                            ],
                            id: 'Fr',
                            layout: 'fit'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});