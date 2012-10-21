Ext.define('SGA.store.Enderecos', {
    extend: 'Ext.data.Store',
    model: 'SGA.model.Endereco',
    // autoLoad: true,
    pageSize: 35,
    // autoLoad: {start: 0, limit: 35},
 
    proxy: {
        type: 'rest',
        format: 'json',
        // api: {
        //     create:  'enderecos.json',
        //     read:    'enderecos.json',
        //     update:  'enderecos/edit.json',
        //     destroy: 'enderecos/destroy.json',
        // },
        reader: {
            type: 'json',
            root: 'enderecos',
            // idProperty: 'endereco_id',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'endereco'
        },
        // writer: new custom.writer.Json({
        //     writeAllFields: true,
        //     root: 'pessoa' //Optional
        // }),
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});