Ext.Loader.setConfig({enabled: true});
 
Ext.application({
    name: 'SGA',
    
    models: ['Pessoa', 'Endereco', 'Telefone', 'Empresa'],
    stores: ['Pessoas', 'Enderecos'],

    controllers: [
        'Pessoa',
        'Menu',
        'Cadastro'
    ],
 
    autoCreateViewport: true
});