class MitSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :title, :description, :date, :id, :tag_list
end
