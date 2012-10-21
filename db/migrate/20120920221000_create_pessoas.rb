class CreatePessoas < ActiveRecord::Migration
  def change
    create_table :pessoas do |t|
      t.string :razao_social
      t.string :cnpf
      t.boolean :is_juridica
      t.string :nome_fantasia
      t.string :email
      t.string :insc_municipal
      t.string :insc_estadual
      t.string :sexo
      t.string :rg
      t.date :nascimento
      t.string :obs
      t.integer :empresa_id

      t.timestamps
    end
  end
end
