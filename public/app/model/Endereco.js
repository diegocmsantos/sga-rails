Ext.define('SGA.model.Endereco', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'codigo'},
        {name: 'logradouro'},
        {name: 'numero'},
        {name: 'bairro'},
        {name: 'complemento'},
        {name: 'cep'},
        {name: 'cidade_id', type: 'int'},
        {name: 'estado_id', type: 'int'},
        {name: 'pessoa_id', type: 'int'},
        {name: 'observacao'},
    ],

    validations: [
        {type: 'presence', field: 'logradouro'},
        {type: 'presence', field: 'numero'},
        {type: 'presence', field: 'bairro'},
        {type: 'presence', field: 'cep'},
    ],

    belongsTo: {model: 'SGA.model.Pessoa'}
});