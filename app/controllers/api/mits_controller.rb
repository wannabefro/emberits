class Api::MitsController < ApplicationController

  def index
    @mits = Mit.all
    render json: @mits
  end

  def show
    @mits = Mit.where(created_at: params[:id].."#{params[:id]} 23:59:59")
    render json: @mits
  end

  def create
    @mit = Mit.new(mit_params)
    @mit.tag_list = params[:mit][:tagList]
    if @mit.save
      @mit.save
      render json: @mit
    else
      render json: { errors: @mit.errors }, status: :unprocessable_entity
    end
  end

  private

  def mit_params
    params.require(:mit).permit(:title, :description)
  end

end
