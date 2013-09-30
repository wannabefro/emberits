class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :username
  has_many :mits, keys: :mits
  has_many :comments, keys: :comments
end
