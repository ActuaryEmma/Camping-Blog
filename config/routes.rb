Rails.application.routes.draw do

  resources :users, only:[:index, :show, :update]
  resources :comments, only:[:index, :show, :update]
  resources :blogs, only:[:index, :show, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
