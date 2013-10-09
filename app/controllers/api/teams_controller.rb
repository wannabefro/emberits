class Api::TeamsController < ApplicationController

  def index
    @teams = current_user.teams
    render json: @teams
  end

  def create
    @team = Team.new(team_params)
    @team.users = User.where(id: params[:team][:users])
    if @team.save
      membership = @team.memberships.where(user_id: current_user.id).first
      membership.approve
      membership.save
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
