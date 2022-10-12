class Comment < ApplicationRecord
    validates :user_comment, presence: true, uniqueness: false
    validates :user_id, presence: true, uniqueness: false
    validates :blog_id, presence: true, uniqueness: false

    belongs_to :user
    belongs_to :blog
end
