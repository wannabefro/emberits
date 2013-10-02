class Api::TagsController < ApplicationController

  def index
    @tags = ActsAsTaggableOn::Tag.where(:id => params[:ids]).all
    render json: @tags, each_serializer: ActsAsTaggableOn::TagSerializer
  end

end
