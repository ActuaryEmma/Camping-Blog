class Blog < ApplicationRecord
    validates :title, presence: true, uniqueness: false
    validates :description, presence: true, uniqueness: false

    has_many :comments
    has_many :users, through: :comments
end
