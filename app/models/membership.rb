class Membership < ActiveRecord::Base

  belongs_to :user
  belongs_to :team

  state_machine :state, :initial => :pending do

    event :approve do
      transition :pending => :accepted
    end

    event :reject do
      transition :pending => :rejected
    end

  end

end
