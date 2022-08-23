class GameTableSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :player
end
