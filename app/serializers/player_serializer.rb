class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password, :rounds_won, :rounds_lost, :private_account
end
