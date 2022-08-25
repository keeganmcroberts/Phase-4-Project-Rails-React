class CardsController < ApplicationController

    def index 
        render json: Card.all 
    end 
end
