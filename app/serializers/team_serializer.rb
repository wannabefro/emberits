class TeamSerializer < ActiveModel::Serializer

  embed :ids
  attributes :name, :id
  has_many :users, key: :users

end
