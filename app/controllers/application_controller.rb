class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorize

  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :player_id
  # end
end
