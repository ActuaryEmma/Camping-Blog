class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user, status: :ok
    end

    def update
        user= User.find_by!(id: params[:id])
        user.update(username: params[:username])
        render json: user, status: :accepted
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private
    def user_params
        params.permit :username, :password_digest, :email
    end
end
