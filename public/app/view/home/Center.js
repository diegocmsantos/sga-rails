Ext.define('SGA.view.home.Center' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.centerregion',
     
    requires: [
        'SGA.view.home.Menu'
    ],

    layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'stretch',    // Each takes up full width
        padding: 5
    },

    items: [{
            xtype: 'toolbarmenu'
        },{
            flex: 2,
            id: 'maintabs',
            xtype: 'tabpanel',
            items: [{
                title: 'Foo',
                width: 300
            }, {
                title: 'Bar',
                tabConfig: {
                    title: 'Custom Title',
                    tooltip: 'A button tooltip'
                }
            }]
        }
    ]
});