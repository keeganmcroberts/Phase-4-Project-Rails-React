class PlayersController < ApplicationController
    # allows the backend to retrieve the player's data from the database
    def show
        player = Player.find_by(id: session[:player_id])
    if player
      render json: player
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end

    # creates a new player/signup
    def create
        player = Player.create!(player_params)
        if player.valid?
            render json: player, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def player_params
        params.permit(:username, :password, :password_confirmation )
    end
end



end
