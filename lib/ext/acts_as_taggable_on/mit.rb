module ActsAsTaggableOnExtension

  extend ActiveSupport::Concern

  included do

    def mits
      Mit.tagged_with(name)
    end
  end


end

ActsAsTaggableOn::Tag.send(:include, ActsAsTaggableOnExtension)
