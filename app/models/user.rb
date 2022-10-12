class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    
    has_many :comments
    has_many :blogs, through: :comments
end
