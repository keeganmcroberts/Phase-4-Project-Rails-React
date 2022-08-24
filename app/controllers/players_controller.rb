class PlayersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
      player = Player.create(player_params)
      if player.valid?
        session[:player_id] = player.id
        render json: player, status: :created
      else
        render json: { error: player.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def show
      player = Player.find_by(id: session[:player_id])
      render json: player
    end
  
    private
  
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :player_id
    end
  
    def player_params
      params.permit(:username, :password, :password_confirmation)
    end
  
  end
