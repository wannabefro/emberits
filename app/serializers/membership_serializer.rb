class MembershipSerializer < ActiveModel::Serializer

  embed :ids, include: :true
  attributes :id, :state, :role
  has_one :team, key: :team
  has_one :user, key: :user

end
