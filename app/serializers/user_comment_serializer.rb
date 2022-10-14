class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_comment

  belongs_to :user
end
