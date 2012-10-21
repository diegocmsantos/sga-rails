class Telefone < ActiveRecord::Base
  attr_accessible :numero, :pessoa_id

  belongs_to :pessoa
end
