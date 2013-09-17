class Api::MitsController < ApplicationController

  def index
    @mits = Mit.where(:id => params[:ids]).all
    render json: @mits
  end

  def show
    @mit = Mit.find(params[:id])
    render json: @mit
  end

end
