class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :player_id
  end

  def current_player
    @_current_player ||= session[:player_id] && Player.find_by(id: session[:player_id])
  end
end
