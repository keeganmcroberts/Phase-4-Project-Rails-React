class CardsController < ApplicationController

def index

    render json :Cards.all
end 
end
