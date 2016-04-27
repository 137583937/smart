/*
 * File: app/view/NoticeWindow.js
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

Ext.define('smart.view.NoticeWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.panel.Panel',
        'Ext.XTemplate'
    ],

    autoShow: true,
    height: 500,
    id: 'NoticeWindow',
    width: 700,
    resizable: false,
    layout: 'border',
    title: '通知详情',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            margins: '10 0',
                            border: '2px solid #006699',
                            itemId: 'NoticeQuit',
                            width: 100,
                            text: '关闭'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    data: {
                        title: '我是小标题',
                        content: '没有文本内容',
                        time: '2012-2-2'
                    },
                    height: '100%',
                    id: 'NoticeTitle',
                    tpl: [
                        '<h3 style=\'width:100%;text-align:center\'>{title}</h3>',
                        '<div style=\'padding:10px;\'>{content}</div>',
                        '<div style=\'width:100%;text-align:right;color:#006699\'>{time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'
                    ],
                    header: false,
                    manageHeight: false,
                    overlapHeader: false,
                    title: 'My Panel',
                    titleAlign: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});