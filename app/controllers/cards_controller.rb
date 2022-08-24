class CardsController < ApplicationController

    def Index 
        render JSON: Cards.all 
    end 
end
