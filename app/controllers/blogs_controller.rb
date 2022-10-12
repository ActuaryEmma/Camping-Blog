class BlogsController < ApplicationController
    def index
        render json: Blog.all, status: :ok
    end

    def show
        blog = Blog.find_by!(id: params[:id])
        render json: blog, status: :ok
    end

    def update
        blog= Blog.find_by!(id: params[:id])
        blog.update(description: params[:description])
        render json: blog, status: :accepted
    end
end
