class User < ApplicationRecord
    has_many :comments
    has_many :blogs, through: :comments
end
