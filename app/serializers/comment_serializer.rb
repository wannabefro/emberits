class CommentSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :content, :created_at
end
