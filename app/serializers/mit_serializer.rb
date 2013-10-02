class MitSerializer < ActiveModel::Serializer

  embed :ids, include: true
  attributes :title, :description, :id, :created_at, :complete
  has_many :comments, key: :comments
  has_many :tags, key: :tags
  has_one :user

end
