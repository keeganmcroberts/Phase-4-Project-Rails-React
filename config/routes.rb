Rails.application.routes.draw do
  
  resources :cards
  resources :leader_boards
  resources :game_tables
  resources :players
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
#custom routes
  # Login route
  # post "/login", to: "sessions#create"

  # # authorized/stay logged in
  # get "/auth", to: "players#show"

  # # Signup
  # post "/auth", to: "players#create"

  # # Log-out
  # delete "/logout", to: "sessions#destroy"

end
