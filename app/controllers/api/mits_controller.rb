class Api::MitsController < ApplicationController

  def index
    if params[:date]
      @mits = Mit.where(created_at: params[:date].."#{params[:date]} 23:59:59")
    else
      @mits = Mit.where(:user_id => current_user.id).all
    end
    render json: @mits
  end

  def show
    @mits = Mit.where(id: params[:id]).any? ? Mit.find(params[:id]) : Mit.where(created_at: params[:id].."#{params[:id]} 23:59:59")
    render json: @mits
  end

  def create
    @mit = Mit.new(mit_params)
    @mit.user_id = params[:mit][:user]
    @mit.tag_list = params[:mit][:tagList]
    if @mit.save
      render json: @mit, serializer: NewMitSerializer, root: 'mit'
    else
      render json: { errors: @mit.errors }, status: :unprocessable_entity
    end
  end

  def update
    @mit = Mit.find(params[:id])
    @mit.update_attributes!(mit_params)
    render json: @mit, serializer: NewMitSerializer, root: 'mit'
  end

  private

  def mit_params
    params.require(:mit).permit(:title, :description, :complete)
  end

end
