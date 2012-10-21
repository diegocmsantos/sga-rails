Ext.define('SGA.model.Pessoa', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: 'id'},
        {name: 'razao_social'},
        {name: 'nome_fantasia'},
        {name: 'cnpf'},
        {name: 'email'},
        {name: 'insc_municipal'},
        {name: 'insc_estadual'},
        {name: 'nascimento', type: 'date', dateFormat: 'd/m/Y'},
        {name: 'rg'},
        {name: 'sexo', list: ['M', 'F']},
        {name: 'is_juridica', type: 'boolean'},
        {name: 'obs'},
        {name: 'endereco', mapping: "enderecos[0]"},
        {name: 'telefone', mapping: "telefones[0]"}
    ],

    validations: [
        {type: 'presence', field: 'razao_social'},
        {type: 'presence', field: 'cnpf'},
        {type: 'presence', field: 'email'}
    ],

    hasMany: [
        {model: 'SGA.model.Endereco', name: 'enderecos', associationKey: 'enderecos'},
        {model: 'SGA.model.Telefone', name: 'telefones', associationKey: 'telefones'}
    ]
    // belongsTo: {model: 'SGA.model.Empresa', foreignKey: 'empresa_id'}

    // proxy: {
    //     type: 'rest',
    //     url : '/pessoas'
    // }
});