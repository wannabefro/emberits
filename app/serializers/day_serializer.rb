class DaySerializer < ActiveModel::Serializer

  embed :ids, include: true
  attributes :date, :id
  has_many :mits, key: :mits

end
