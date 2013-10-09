class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :username, :email
  has_many :mits, key: :mits
  has_many :comments, key: :comments
  # has_many :teams, keys: :teams
  has_many :memberships, key: :memberships
end
