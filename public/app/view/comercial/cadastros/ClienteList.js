Ext.define('SGA.view.comercial.cadastros.ClienteList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.clientegrid',
     
    requires: ['Ext.toolbar.Paging'],
     
    iconCls: 'icon-grid',
 
    title : 'Clientes',
    store: 'Pessoas',
 
    columns: [{
        header: "Razão Social",
        width: 170,
        flex:1,
        dataIndex: 'razao_social'
    },{
        header: "Fantasia",
        width: 170,
        flex:1,
        dataIndex: 'nome_fantasia'
    },{
        header: "CPF / CNPJ",
        width: 160,
        flex:1,
        dataIndex: 'cnpf'
    },{
        header: "EMAIL",
        width: 170,
        flex:1,
        dataIndex: 'email'
    },{
        header: "Rua",
        width: 170,
        flex:1,
        dataIndex: "endereco",
        renderer: function(value) {
            // return Ext.String.format('<a href="mailto:{0}">{1}</a>', value.logradouro, value.logradouro);
            return value.logradouro
        }
    },{
        header: "Residencial",
        width: 170,
        flex:1,
        dataIndex: "telefone",
        renderer: function(value) {
            // return Ext.String.format('<a href="mailto:{0}">{1}</a>', value.logradouro, value.logradouro);
            return value.numero
        }
    }],
 
    initComponent: function() {
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            dock:'bottom',
            store: 'Pessoas',
            displayInfo: true,
            displayMsg: 'Mostrando Contatos {0} - {1} de {2}',
            emptyMsg: "Nenhum cliente encontrado."
        },{
            xtype: 'toolbar',
            dock:'bottom',
            items: [{
                iconCls: 'icon-save',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        }];

        this.callParent(arguments);
    }
});