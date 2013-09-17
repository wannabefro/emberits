class MitSerializer < ActiveModel::Serializer
  embed :ids
  attributes :title, :description, :day_id, :id, :tag_list
end
