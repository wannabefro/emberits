class Team < ActiveRecord::Base

  validates_presence_of :name
  validates_uniqueness_of :name

  has_many :user_teams
  has_many :users, through: :user_teams

end
