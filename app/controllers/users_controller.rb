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
end
