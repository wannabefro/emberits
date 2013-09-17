class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(:id => params[:ids]).all
    render json: @comments
  end

end
