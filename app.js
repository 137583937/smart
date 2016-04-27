/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    models: [
        'NoticeModel',
        'UserModel',
        'UserEquipmentModel',
        'EquipmentModel',
        'SeverMemoryModel',
        'SeverHttpRequestModel',
        'SeverClusterModel',
        'EquipmentWithUser',
        'SeverRuningLog',
        'MgrList'
    ],
    stores: [
        'NoticeModels',
        'UserModels',
        'UserEquipmentModels',
        'EquipmentModels',
        'SeverMemoryModels',
        'SeverHttpRequestModels',
        'SeverClusterModels',
        'EquipmentWithUsers',
        'SeverRuningLogs',
        'SeverErrorLog',
        'SeverOutLog',
        'MgrLists'
    ],
    views: [
        'MainView',
        'Login',
        'User',
        'Sever',
        'First',
        'Equipment',
        'NoticeWindow',
        'UserDetail',
        'AddNewEquipment',
        'AddNewUser',
        'EquipmentDetail',
        'AddNews',
        'Mgr.List',
        'Mgr.AddAndEdit',
        'User.Search',
        'MyGridPanel2'
    ],
    controllers: [
        'MainConroller',
        'FirstController',
        'UserController',
        'EquipmentController',
        'SeverController'
    ],
    name: 'smart',

    launch: function() {
        Ext.create('smart.view.Login', {renderTo: Ext.getBody()});
        Ext.getBody().setStyle({
            'background':'#99ccff'
        });
    }

});
