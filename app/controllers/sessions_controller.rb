class SessionsController < ApplicationController
    # for session and cookie management
    def index
    end
    # login information for username
    def create
        player = Player.find_by(username: params[:username])
        sessions[:player_id] = Player.id
        byebug
        if player
            render json: player
        else
            render json: {error: "player does not exist"}, status: :unprocessable_entity
        end
        
    end
end
