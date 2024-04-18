import { CommentListItem } from "types/interface";
import "./style.css";
import defaultProfileImage from "assets/image/default-image.png";
interface Props {
  commentListItem: CommentListItem;
}
/** Component : CommentListItem 컴포넌트 */
const CommentItem = ({ commentListItem }: Props) => {
  /** properties */
  const { nickname, profileImage, writeDatetime, content } = commentListItem;

  /** render : CommentListItem */
  return (
    <div className="comment-list-item">
      {/* comment-list-item-top  */}
      <div className="comment-list-item-top">
        <div className="comment-list-item-profile-box">
          <div
            className="comment-list-item-profile-image"
            // 이미지가 없다면 기본이미지로 대체
            style={{
              backgroundImage: `url(${
                profileImage ? profileImage : defaultProfileImage
              })`,
            }}
          ></div>
        </div>
        <div className="comment-list-item-nickname">{nickname}</div>
        <div className="comment-list-item-divider">{`|`}</div>
        <div className="comment-list-item-time">{writeDatetime}</div>
      </div>
      {/* comment-list-item-main */}
      <div className="comment-list-item-main">
        <div className="comment-list-item-content">{content}</div>
      </div>
    </div>
  );
};

export default CommentItem;
