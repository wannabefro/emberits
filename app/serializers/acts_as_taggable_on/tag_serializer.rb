class ActsAsTaggableOn::TagSerializer < ActiveModel::Serializer

  embed :ids, include: true
  attributes :id, :name
  has_many :mits, key: :mits

end
