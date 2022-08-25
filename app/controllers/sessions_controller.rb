class SessionsController < ApplicationController
    before_action :authorized, only: :create
    # for session and cookie management
    def index
    end
    # login information for username
    def create
        player = Player.find_by(user_name: params[:username])
        byebug
        if user&.authenticate(params[:password])
            sessions[:player_id] = player.id
            render json: player, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
end
