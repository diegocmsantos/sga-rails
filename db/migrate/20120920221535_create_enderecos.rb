class CreateEnderecos < ActiveRecord::Migration
  def change
    create_table :enderecos do |t|
      t.string :cep
      t.string :logradouro
      t.string :numero
      t.string :complemento
      t.string :bairro
      t.integer :estado_id
      t.integer :cidade_id
      t.string :observacao
      t.integer :pessoa_id

      t.timestamps
    end
  end
end
