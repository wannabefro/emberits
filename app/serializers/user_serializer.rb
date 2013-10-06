class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :username, :email
  has_many :mits, keys: :mits
  has_many :comments, keys: :comments
  has_many :teams, keys: :teams
end
