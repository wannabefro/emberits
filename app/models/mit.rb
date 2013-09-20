class Mit < ActiveRecord::Base
  acts_as_taggable

  validates_presence_of :title

  validates_length_of :description, maximum: 500

  has_many :comments
  # has_many :tags, as: :taggable

end
