class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index
        render json: Comment.all, status: :ok
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment, status: :ok
    end

    def update
        comment= Comment.find_by(id: params[:id])
        comment.update!(user_comment: params[:user_comment])
        render json: comment, status: :accepted
    end

    def create 
        blog = Blog.find(params[:blog_id])
        comment = blog.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        head :no_content
    end

    private
    def comment_params
        params.permit :user_comment, :user_id, :blog_id
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
