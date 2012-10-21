Ext.define('SGA.view.itemmenu.Cadastros', {
    extend: 'Ext.menu.Menu',
    alias:  'widget.menucadastros',

    initComponent: function(){
        this.items = [{
            // id: 'cadastros_id',
            text: 'Cadastros',
            menu: Ext.create('Ext.menu.Menu', {
                id: 'cadastrar_cliente',
                // text: 'Cliente',
                items: [{
                    text: 'Cliente'
                    // handler: function(item, e, eOpts) {
                    //     var tabpanel = Ext.ComponentQuery.query('#maintabs');
                    //     console.log(tabpanel[0].items.items[0]);
                    //     var tabpanel = tabpanel[0];
                    //     var new_tab = tabpanel.add({title:'Button 1'});
                    //     tabpanel.setActiveTab(new_tab);
                    // }
                }]
            })
        },{
            text: 'regular item 2'
        },{
            text: 'regular item 3'
        }];
        this.callParent(arguments);
    }
});
