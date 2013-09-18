class MitSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :title, :description, :day_id, :id, :tag_list
  has_many :comments, key: :comments
  has_one :day, key: :day

end
