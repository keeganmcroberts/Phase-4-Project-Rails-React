class GameTablesController < ApplicationController
    def index 

        render json :GameTables.all
    end
end
