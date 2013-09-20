class Comment < ActiveRecord::Base

  validates_presence_of :content
  validates_presence_of :mit

  belongs_to :mit

end
