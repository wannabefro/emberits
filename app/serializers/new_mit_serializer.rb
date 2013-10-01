class NewMitSerializer < ActiveModel::Serializer

  embed :ids
  attributes :title, :description, :created_at, :id
  has_many :comments, key: :comments
  has_many :tags, key: :tags
  has_one :user

end
