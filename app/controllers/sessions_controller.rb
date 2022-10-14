class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def create
        user = User.find_by(username: params[:username])
        if params[:password_digest] == user.password_digest
        session[:user_id] = user.id
        render json: user, status: :created
        else 
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

      private

    def not_found_response
        render json: {error: "User not found"}, status: :not_found
    end
    
    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
