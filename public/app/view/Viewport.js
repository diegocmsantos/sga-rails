Ext.define('SGA.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'SGA.view.home.Layout',
        // 'SGA.view.contato.Formulario'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
            items: [
                {
                    xtype: 'homelayout'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});