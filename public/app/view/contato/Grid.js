Ext.define('SGA.view.contato.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.contatogrid',
     
    requires: ['Ext.toolbar.Paging'],
     
    iconCls: 'icon-grid',
 
    title : 'Contatos',
    // store: 'Contatos',
 
    columns: [{
        header: "NOME",
        width: 170,
        flex:1,
        dataIndex: 'name'
    },{
        header: "TELEFONE",
        width: 160,
        flex:1,
        dataIndex: 'phone'
    },{
        header: "EMAIL",
        width: 170,
        flex:1,
        dataIndex: 'email'
    }],
 
    initComponent: function() {
        this.callParent(arguments);
    }
});