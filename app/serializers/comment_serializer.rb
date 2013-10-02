class CommentSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :body, :created_at
  has_one :mit, key: :mit
  has_one :user, key: :user
end
