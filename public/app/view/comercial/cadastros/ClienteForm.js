Ext.define('SGA.view.comercial.cadastros.ClienteForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.clientewindowform',

    modal: true,
    title: 'Cliente',
    height: 600,
    width: 500,
    layout: 'fit',
    items: {
        xtype: 'form',

        // title: 'Form Panel',
        url: '/pessoas',
        bodyStyle: 'padding:5px 5px 0',
        width: 800,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side',
            anchor: '98%'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },

        items: [{
            // id: 'pessoa_id',
            name: 'id',
            hidden: true,
            value: 0
        },{
            id:     'pessoa_is_juridica',
            name:   'is_juridica',
            anchor: '40%',
            xtype      : 'radiogroup',
            fieldLabel : 'Pessoa',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel    : 'Jurídica',
                    name        : 'is_juridica',
                    inputValue  : true,
                    id          : 'radio1',
                    checked     : true
                }, {
                    boxLabel  : 'Física',
                    name      : 'is_juridica',
                    inputValue: false,
                    id        : 'radio2'
                }
            ]
        },{
            fieldLabel: 'CNPJ',
            id: 'pessoa_cnpf',
            name: 'cnpf',
            xtype: 'textfield',
            allowBlank: false,
            anchor: '30%'
        },{
            fieldLabel: 'Razão Social',
            id: 'pessoa_razao_social',
            name: 'razao_social',
            allowBlank: false,
            xtype: 'textfield'
        },{
            fieldLabel: 'Nome Fantasia',
            id: 'pessoa_nome_fantasia',
            name: 'nome_fantasia',
            allowBlank: false,
            xtype: 'textfield'
        },{
            fieldLabel: 'Email',
            id: 'pessoa_email',
            name: 'email',
            xtype: 'textfield',
            allowBlank: false,
            vtype: 'email'
        },{
            xtype: 'container',
            layout:'hbox',
            items:[{
                xtype: 'container',
                flex: 1,
                border:false,
                layout: 'anchor',
                defaultType: 'textfield',
                items: [{
                    id: 'pessoa_insc_municipal',
                    name: 'insc_municipal',
                    fieldLabel: 'Insc. Municipal',
                    anchor:'95%'
                },{
                    xtype: 'combo',
                    fieldLabel: 'Sexo',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['value', 'nome'],
                        data : [
                            {"value":"M", "nome":"Masculino"},
                            {"value":"F", "nome":"Feminino"}
                        ]
                    }),
                    emptyText: 'Selecione...',
                    editable: false,
                    queryMode: 'local',
                    displayField: 'nome',
                    valueField: 'value',
                    id: 'pessoa_sexo',
                    name: 'sexo',
                    anchor:'95%',
                    hidden: true
                }]
            },{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Insc. Estadual',
                    id: 'pessoa_insc_estadual',
                    name: 'insc_estadual',
                    anchor:'95%'
                },{
                    fieldLabel: 'RG:',
                    id: 'pessoa_rg',
                    name: 'rg',
                    anchor:'95%',
                    hidden: true
                }]
            },{
                id: 'pessoa_nascimento',
                name: 'nascimento',
                fieldLabel: 'Nascimento',
                xtype: 'datefield',
                hidden: true,
                anchor:'80%',
                editable: false,
                format: "Y-m-d H:i:s"
            }]
        },{
            xtype:'tabpanel',
            plain:true,
            activeTab: 0,
            height:235,
            defaults:{
                bodyPadding: 10
            },
            items:[{
                title:'Endereço',
                defaults: {
                    // width: 230
                },
                defaultType: 'textfield',

                items: [{
                    fieldLabel  : 'CEP',
                    id        : 'cep',
                    name        : 'endereco.cep',
                    width       : '15%'
                },{
                    xtype: 'container',
                    layout:'hbox',
                    items:[{
                        xtype: 'container',
                        flex: 3,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            fieldLabel: 'Rua',
                            id: 'logradouro',
                            name: 'endereco.logradouro',
                            anchor:'95%'
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            fieldLabel: 'Número',
                            id: 'numero',
                            name: 'numero',
                            anchor:'95%'
                        }]
                    }]
                },{
                    fieldLabel: 'Complemento',
                    id: 'complemento',
                    name: 'complemento'
                }]
            },{
                title:'Telefone',
                defaults: {
                    width: 230
                },
                defaultType: 'textfield',

                items: [{
                    fieldLabel: 'Residencial',
                    id: 'numero_residencial',
                    name: 'telefone_numero0'
                },{
                    fieldLabel: 'Celular',
                    id: 'numero_celular',
                    name: 'telefone_numero1'
                }]
            }]
        }],

        // Reset and Submit buttons
        buttons: [{
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }, {
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            action: 'submit',
            // handler: function() {
            //     var form = this.up('form').getForm();
            //     if (form.isValid()) {
            //         form.submit({
            //             success: function(form, action) {
            //                Ext.Msg.alert('Success', action.result.msg);
            //             },
            //             failure: function(form, action) {
            //                 Ext.Msg.alert('Failed', action.result.msg);
            //             }
            //         });
            //     }
            // }
        }]
    }
});