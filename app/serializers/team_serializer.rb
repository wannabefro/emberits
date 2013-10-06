class TeamSerializer < ActiveModel::Serializer

  embed :ids, include: :true
  attributes :name, :id
  has_many :users, key: :users

end
