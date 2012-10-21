// Ext.override(Ext.data.Store, {//because loadData doesnt work with mapping
//     loadDataViaReader: function (data, append) {
//         var me = this,
//             result = me.proxy.reader.read(data),
//             records = result.records;

//         console.log('result');
//         console.log(data);
//         me.loadRecords(records, { addRecords: append });
//         me.fireEvent('load', me, result.records, true);
//     }
// });

Ext.define('SGA.controller.Pessoa', {
    extend: 'Ext.app.Controller',
    views: [
        'comercial.cadastros.ClienteList',
        'comercial.cadastros.ClienteForm'
    ],
    stores: ['Pessoas', 'Enderecos', 'Telefones'],
    models: ['Pessoa', 'Endereco', 'Telefone'],

    refs: [{
        ref: 'clienteList', // will be create the method this.getClienteList();
        selector: 'clientegrid'
    },{
        ref:        'formPanel',
        selector:   'clientewindowform form'
    }],

    init: function() {
        this.control({
            'clientegrid': {
                beforerender: this.onBeforeRenderGrid,
                itemdblclick: this.onItemGridDoubleClick
            },
            'clientegrid button[action=add]': {
                click: this.onMenuClick
            },
            'clientewindowform form #pessoa_is_juridica': {
                change: this.onRadioPessoaSelect
            },
            'clientewindowform form button[action=submit]': {
                click: this.onClickFormSubmit
            }
        });
    },

    onItemGridDoubleClick: function(comp, record, item, index, e, eOpts){
        var win  = Ext.widget('clientewindowform');
        var form = win.down('form');
        console.log('form');
        console.log(this.getPessoasStore());
        console.log(form);
        // console.log(form.down('textfield[id=logradouro]'));
        // CEP
        form.down('textfield[id=cep]').setValue(record.enderecosStore.data.items[0].data.cep);
        // Logradouro
        form.down('textfield[id=logradouro]').setValue(record.enderecosStore.data.items[0].data.logradouro);
        // Número
        form.down('textfield[id=numero]').setValue(record.enderecosStore.data.items[0].data.numero);
        // Complemento
        form.down('textfield[id=complemento]').setValue(record.enderecosStore.data.items[0].data.complemento);
        // Telefone Residencial
        form.down('textfield[id=numero_residencial]').setValue(record.telefonesStore.data.items[0].data.numero);
        // Telefone Comercial
        form.down('textfield[id=numero_celular]').setValue(record.telefonesStore.data.items[1].data.numero);
        console.log(record.telefonesStore.data);

        // console.log('record');
        // console.log(record);
        // console.log(record.enderecosStore.data.items[0].data);

        // SGA.model.Pessoa.load(record.data.id, {

        //     success: function(pessoa) {
        //         console.log('enderecos');
        //         var enderecos = pessoa.enderecos();
        //         console.log(enderecos);
        //         pessoa.enderecos().each(function(endereco){
        //             console.log('entrou');
        //             console.log(endereco.get('logradouro'));
        //         })
        //     }
        // })

        form.loadRecord(record);
        // this.getPessoasStore().loadRawData(record.raw);
        win.show();
    },

    onBeforeRenderGrid: function(comp, eOpts){
        var store = this.getPessoasStore();
        store.load(function(records, operation, success) {
            console.log(records);
        });
        // store.loadDataViaReader(store['data']['items'][0]);
    },
    
    onMenuClick: function(comp, eOpts){
        var win = Ext.widget('clientewindowform');
        if (win)
            win.show();
    },

    onRadioPessoaSelect: function(comp, newValue, oldValue, eOpts){
        // console.log(newValue);
        // Ext.Msg.alert('asdf', newValue['pessoa']);
        // console.log(comp.up('form').down("textfield[name='cnpf']"));
        // console.log(newValue["pessoa[is_juridica]"]);
        if (!newValue["pessoa[is_juridica]"]){
            comp.up('form').down("textfield[id='pessoa_cnpf']").setFieldLabel("CPF");

            // changing razao_social textfield label
            var razaoSocialField = comp.up('form').down("textfield[id='pessoa_razao_social']");
            razaoSocialField.setFieldLabel("Nome");

            // changing nome_fantasia textfield label
            var fantasiaField = comp.up('form').down("textfield[id='pessoa_nome_fantasia']");
            fantasiaField.setFieldLabel("Apelido");

            // hide insc_estadual and municipal fields
            comp.up('form').down("textfield[id='pessoa_insc_estadual']").setVisible(false);
            comp.up('form').down("textfield[id='pessoa_insc_municipal']").setVisible(false);

            // showing sexo and rg fields
            comp.up('form').down("textfield[id='pessoa_sexo']").setVisible(true);
            comp.up('form').down("textfield[id='pessoa_rg']").setVisible(true);
            comp.up('form').down("textfield[id='pessoa_nascimento']").setVisible(true);
        } else {
            comp.up('form').down("textfield[id='pessoa_cnpf']").setFieldLabel("CNPJ");

            // changing razao_social textfield label
            var razaoSocialField = comp.up('form').down("textfield[id='pessoa_razao_social']");
            razaoSocialField.setFieldLabel("Razão Social");

            // changing nome_fantasia textfield label
            var fantasiaField = comp.up('form').down("textfield[id='pessoa_nome_fantasia']");
            fantasiaField.setFieldLabel("Fantasia");

            // hide insc_estadual and municipal fields
            comp.up('form').down("textfield[id='pessoa_insc_estadual']").setVisible(true);
            comp.up('form').down("textfield[id='pessoa_insc_municipal']").setVisible(true);

            // showing sexo and rg fields
            comp.up('form').down("textfield[id='pessoa_sexo']").setVisible(false);
            comp.up('form').down("textfield[id='pessoa_rg']").setVisible(false);
            comp.up('form').down("textfield[id='pessoa_nascimento']").setVisible(false);
        }
    },

    onClickFormSubmit: function(comp, e, eOpts) {
        // Ext.Msg.alert('click');
        var iForm       = this.getFormPanel().getForm(),
            iRecord     = iForm.getRecord(),
            iValues     = iForm.getValues(),
            store       = this.getPessoasStore();
        var pessoa = Ext.create('SGA.model.Pessoa', iValues);
        var enderecos = pessoa.enderecos();
        pessoa.enderecos().add({
            logradouro  : iValues.logradouro,
            numero      : iValues.numero,
            bairro      : iValues.bairro,
            complemento : iValues.complemento,
            cep         : iValues.cep
        });

        // console.log(pessoa);
        store.add(pessoa);
        // pessoa.save();
        // console.log(iValues);
        store.sync();
        // console.log('after save');
    }
    
});