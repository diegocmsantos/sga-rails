Ext.define('SGA.model.Empresa', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'codigo'},
        {name: 'razao_social'},
        {name: 'nome_fantasia'},
        {name: 'valor_capital_social', type: 'float'},
        {name: 'retem_inss', type: 'boolean'},
        {name: 'ativo', type: 'boolean'},
        {name: 'grupo_empresa_id', type: 'int'},
    ],

    validations: [
        {type: 'presence', field: 'razao_social'}
    ]

    hasMany: {model: 'Pessoa', foreignKey: 'empresa_id'},
    belongsTo: {model: 'GrupoEmpresa', foreignKey: 'grupo_empresa_id'}
});