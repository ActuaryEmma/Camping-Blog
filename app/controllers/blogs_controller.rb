class BlogsController < ApplicationController
    def index
        render json: Blog.all, status: :ok
    end
end
