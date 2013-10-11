class Api::UsersController < ApplicationController

  def index
    @users = User.where(username: params[:username])
    render json: @users, each_serializer: OnlyUserSerializer, root: 'users'
  end

  def show
    if params[:id] == 'currentUser'
      @user = current_user
    else
      @user = User.find(params[:id])
    end
    render json: @user
  end

end
