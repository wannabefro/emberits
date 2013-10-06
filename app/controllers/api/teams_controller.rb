class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)
    @team.users = User.where(id: params[:team][:users])
    if @team.save
      render json: @team
    else
      render json: { errors: @team.errors }, status: :unprocessable_entity
    end
  end

  protected

  def team_params
    params.require(:team).permit(:name, :users)
  end

end
