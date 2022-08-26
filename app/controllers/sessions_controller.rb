class SessionsController < ApplicationController
    # skip_before_action :authorize, only: [:index, :create]
    # # for session and cookie management
    # def index
    #     session[:player_id] ||= "hello"
    #     render json: {session: session}

    # end
    # # login information for username
    # def create
    #     player = Player.find_by!(user_name: params[:username])
    #     # byebug
    #     if player&.authenticate(params[:password])
    #         session[:player_id] = player.id
    #         # byebug
    #         render json: player, status: :ok
    #     else
    #         render json: { error: "Invalid username or password" }, status: :unauthorized
    #     end
    # end


    # # logout user
    # def destroy
    #     session.delete :user_id
    #     head :no_content
    # end
end
