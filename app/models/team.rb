class Team < ActiveRecord::Base

  validates_presence_of :name
  validates_uniqueness_of :name

  has_many :memberships
  has_many :users, through: :memberships

end
