class CardSerializer < ActiveModel::Serializer
  attributes :id, :emblem, :number
  has_one :player
end
