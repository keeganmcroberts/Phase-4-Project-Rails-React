class SessionsController < ApplicationController
    # for session and cookie management
    def index
    end
    # login information for username
    def create
        player = Player.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            sessions[:player_id] = Player.id
            render json: player, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
end
