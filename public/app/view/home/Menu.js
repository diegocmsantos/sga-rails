Ext.define('SGA.view.home.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias:  'widget.toolbarmenu',
    id: 'toolbarmenu_id',
    requires: ['SGA.view.itemmenu.Cadastros'],

    initComponent: function(){
        this.items = [{
            id: 'cadastros_id',
            text: 'Cadastros',
            menu: Ext.widget('menucadastros')
        },{
            text: 'regular item 2',
            menu: {
                xtype: 'menu',
                text: 'adsf',
                items: {
                    text: 'mais'
                }
            }
        },{
            text: 'regular item 3'
        }];
        this.callParent(arguments);
    }
});
