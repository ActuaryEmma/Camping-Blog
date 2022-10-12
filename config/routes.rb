Rails.application.routes.draw do

  resources :users, only:[:index, :show, :update, :create]
  resources :comments, only:[:index, :show, :update, :create]
  resources :blogs, only:[:index, :show, :update]

end
