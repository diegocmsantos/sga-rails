Ext.define('SGA.view.home.Layout' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.homelayout',
    requires: ['SGA.view.home.Center',],
    width: 700,
    height: 500,
    // title: 'Border Layout',
    layout: 'border',
    defaults:{
        xtype: 'panel'
    },
    items: [{
            // title: 'North Region is resizable',
            region: 'north',
            collapsible: true,
            height: 100
        },{
            // title: 'Center Region',
            xtype: 'centerregion',
            region: 'center',
            // layout: 'fit'
            height: 600
    }]
});
