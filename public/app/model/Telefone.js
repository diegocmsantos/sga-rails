Ext.define('SGA.model.Telefone', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'codigo'},
        {name: 'numero'},
        {name: 'pessoa_id', type: 'int'}
    ],

    validations: [
        {type: 'presence', field: 'numero'}
    ],

    belongsTo: {model: 'SGA.model.Pessoa'}
});