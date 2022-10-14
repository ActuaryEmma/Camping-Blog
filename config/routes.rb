Rails.application.routes.draw do

  resources :users, only:[:index, :show, :update, :create]
  resources :comments
  resources :blogs, only:[:index, :show, :update, :create]

  # get "/blogcomments" to: "blogs#show"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
