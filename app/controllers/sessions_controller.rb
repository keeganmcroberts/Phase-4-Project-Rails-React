class SessionsController < ApplicationController
    # for session and cookie management
    def index
    end
    # login information for username
    def create
        user = User.find_by(username: params[:username])
        sessions[:user_id] = user.id
        render json: user
    end
end
