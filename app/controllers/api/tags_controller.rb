class Api::TagsController < ApplicationController

  def index
    @tags = ActsAsTaggableOn::Tag.all
    render json: @tags, each_serializer: ActsAsTaggableOn::TagSerializer
  end

end
