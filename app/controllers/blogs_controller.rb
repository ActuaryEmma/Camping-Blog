class BlogsController < ApplicationController
    def index
        render json: Blog.all, status: :ok
    end

    def show
        blog = Blog.find_by!(id: params[:id])
        render json: blog, status: :ok
    end
end
