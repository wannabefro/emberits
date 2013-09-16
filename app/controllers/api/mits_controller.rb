class Api::MitsController < ApplicationController

  def index
    @mits = Mit.all
    render json: @mits
  end

end
