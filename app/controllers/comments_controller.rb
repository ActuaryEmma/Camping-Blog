class CommentsController < ApplicationController
    def index
        render json: Comment.all, status: :ok
    end

    def show
        comment = Comment.find_by!(id: params[:id])
        render json: comment, status: :ok
    end

    def update
        comment= Comment.find_by!(id: params[:id])
        comment.update(user_comment: params[:user_comment])
        render json: comment, status: :accepted
    end
end
