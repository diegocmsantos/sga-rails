Ext.define('SGA.controller.Menu', {
    extend: 'Ext.app.Controller',

    views: ['home.Menu'],

    refs: [{
        ref: 'teste', // will be create the method this.getViewDocuments();
        selector: 'toolbarmenu'
    }],

    init: function() {
        // console.log(Ext.ComponentQuery.query('toolbarmenu'));

        this.control({
            'toolbarmenu #cadastros_id': {
                afterrender: this.onStationSelect
            }
            // 'newstation': {
            //     select: this.onNewStationSelect
            // }
        });
    },
    
    onStationSelect: function(comp, eOpts){
        // console.log(this.getTeste()); 
        // console.log(Ext.ComponentQuery.query('#menu_id'));
        // console.log(comp);
    }
});