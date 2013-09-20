class Api::MitsController < ApplicationController

  def index
    @mits = Mit.all
    render json: @mits
  end

  def show
    @mit = Mit.find(params[:id])
    render json: @mit
  end

end
