class BlogsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

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

    private
    def not_found_response
        render json: {error: "Blog not found"}, status: :not_found
    end
    
    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
