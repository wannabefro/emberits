class Mit < ActiveRecord::Base
  acts_as_taggable

  validates_presence_of :title

  validates_length_of :description, maximum: 500

  has_many :comments

  belongs_to :user


  def niceDate
    created_at.strftime("%m-%d-%Y")
  end

end
