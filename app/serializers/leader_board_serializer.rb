class LeaderBoardSerializer < ActiveModel::Serializer
  attributes :id
  has_one :player
end
