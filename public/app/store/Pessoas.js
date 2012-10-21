// Ext.define('custom.writer.Json', {
//     extend: 'Ext.data.writer.Json',
//     getRecordData: function(record) { 
//         Ext.apply(record.data,record.getAssociatedData());
//         return record.data; 
//     }
// });

Ext.define('SGA.store.Pessoas', {
    extend: 'Ext.data.Store',
    model: 'SGA.model.Pessoa',
    // autoLoad: true,
    pageSize: 10,
    // autoLoad: {start: 0, limit: 35},
 
    proxy: {
        type: 'ajax',
        format: 'json',
        api: {
            create:  'pessoas',
            read:    'pessoas',
            update:  'pessoas/edit',
            destroy: 'pessoas/destroy',
        },
        reader: {
            type: 'json',
            root: 'pessoas',
            // idProperty: 'pessoa_id',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'pessoa'
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