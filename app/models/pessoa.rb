class Pessoa < ActiveRecord::Base
  attr_accessible :cnpf, :email, :empresa_id, :insc_estadual, :insc_municipal, :is_juridica, :nascimento, :nome_fantasia, :obs, :razao_social, :rg, :sexo, :enderecos_attributes, :telefones_attributes

  has_many :enderecos
  has_many :telefones
  accepts_nested_attributes_for :enderecos, :telefones
end
