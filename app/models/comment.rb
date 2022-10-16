class Comment < ApplicationRecord
     validates :user_comment, presence: true
    validates :blog_id, presence: true

    belongs_to :user
    belongs_to :blog
end
