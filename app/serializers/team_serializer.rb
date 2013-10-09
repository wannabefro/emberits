class TeamSerializer < ActiveModel::Serializer

  embed :ids, include: :true
  attributes :name, :id
  # has_many :users, key: :users
  has_many :memberships, key: :memberships

end
