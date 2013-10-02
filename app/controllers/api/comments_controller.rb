class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(:id => params[:ids]).all
    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = params[:comment][:user]
    @comment.mit_id = params[:comment][:mit]
    if @comment.save
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :mit_id)
  end

end
