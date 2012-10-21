class CreateTelefones < ActiveRecord::Migration
  def change
    create_table :telefones do |t|
      t.string :numero
      t.integer :pessoa_id

      t.timestamps
    end
  end
end
