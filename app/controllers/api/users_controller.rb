class Api::UsersController < ApplicationController

  def index
    @users = User.where(username: params[:username])
    render json: @users, each_serializer: OnlyUserSerializer, root: 'users'
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

end
