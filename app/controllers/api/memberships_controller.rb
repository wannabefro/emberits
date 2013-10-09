class Api::MembershipsController < ApplicationController

  def update
    @membership = Membership.find(params[:id])
    @membership.update_attributes!(membership_params)
    render json: @membership
  end

  private

  def membership_params
    params.require(:membership).permit(:state)
  end


end
