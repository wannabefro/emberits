class SessionController < Devise::SessionsController

  respond_to :json

  def create
    user = User.find_for_database_authentication(login: params[:username])

    if user && user.valid_password?(params[:password])
      sign_in user
      @user = user
      render json: {
        user_id: user.id, username: user.username
      }, status: :created
    else
      render json: {
        errors: {
          username: "invalid username or password"
        }
      }, status: :unprocessable_entity
    end
  end

  def show
    if user_signed_in?
      render json: current_user
    else
      render nothing: true
    end
  end

  def destroy
    sign_out :user
    render json: {}, status: :accepted
  end

end
