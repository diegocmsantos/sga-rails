class Endereco < ActiveRecord::Base
  attr_accessible :bairro, :cep, :cidade_id, :complemento, :estado_id, :logradouro, :numero, :observacao, :pessoa_id

  belongs_to :pessoa
end
