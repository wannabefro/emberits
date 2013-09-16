class Mit < ActiveRecord::Base

  validates_presence_of :title
  validates_presence_of :date

  validates_length_of :description, maximum: 500

  acts_as_taggable

end
