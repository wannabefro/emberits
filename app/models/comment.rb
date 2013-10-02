class Comment < ActiveRecord::Base

  validates_presence_of :body
  validates_presence_of :mit_id
  validates_presence_of :user_id

  belongs_to :mit
  belongs_to :user

end
