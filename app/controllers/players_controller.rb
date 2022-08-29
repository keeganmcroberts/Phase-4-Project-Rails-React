class PlayersController < ApplicationController
    wrap_parameters format: []
    # allows the backend to retrieve the player's data from the database
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def show
        player = Player.find_by(id: session[:player_id])
        if player
            render json: player
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # creates a new player/signup
    def create
        player = Player.create(user_name: params[:username],
        password: params[:password])
        # byebug
        if player
            render json: player, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    #strong params
    # we should talk about this later thou

    def player_params
        params.permit(:username, :password)
    end
    # error handling
    def render_unprocessable_entity
        render json: {errors: "try again" }, status: :unprocessable_entity
    end
end



