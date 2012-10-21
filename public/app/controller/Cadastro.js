Ext.define('SGA.controller.Cadastro', {
    extend: 'Ext.app.Controller',

    views: ['itemmenu.Cadastros'],

    refs: [{
        ref: 'teste', // will be create the method this.getViewDocuments();
        selector: 'menucadastros'
    }],

    init: function() {
        console.log('Init Cadastro Controller');
        this.control({
            'menucadastros #cadastrar_cliente': {
                click: this.onMenuClick
            }
            // 'newstation': {
            //     select: this.onNewStationSelect
            // }
        });
    },
    
    onMenuClick: function(comp, eOpts){
        var tabpanel = Ext.ComponentQuery.query('#maintabs');
        console.log()
        if (tabpanel.length > 0){
            tabpanel = tabpanel[0];
            var searched_tab = tabpanel.child("panel[title='Clientes']");
            if (searched_tab) {
                tabpanel.setActiveTab(searched_tab);
            } else {
                var added_tab = tabpanel.add(Ext.create('SGA.view.comercial.cadastros.ClienteList'));
                tabpanel.setActiveTab(added_tab);
            }
        }
    }
});