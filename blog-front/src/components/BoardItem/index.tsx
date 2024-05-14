import "./style.css";
import type { BoardListItem } from "types/interface";
import { useNavigate } from "react-router-dom";
import DefaultProfileImage from "assets/image/default-profile-image.png";
interface Props {
  boardListItem: BoardListItem;
}
/*  component : Board List Item 컴포넌트 정의  */
const BoardItem = ({ boardListItem }: Props) => {
  /**  properties */
  const { boardNumber, title, content, boardTitleImage } = boardListItem;
  const { favoriteCount, commentCount, viewCount } = boardListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = boardListItem;

  /**  fuction : 네비게이트 함수  */
  // const navigator = useNavigate();

  /**  event handler : 게시물 아이템 클릭 이벤트 처리 함수 */
  const onClickHandler = () => {
    // navigator(boardNumber);
  };
  /**  render : Board List Item 컴포넌트  */
  return (
    <div className="board-list-item" onClick={onClickHandler}>
      <div className="board-list-item-main-box">
        {/* top */}
        <div className="board-list-item-top">
          <div className="board-list-item-profile-box">
            <div
              className="board-list-item-profile-image"
              style={{
                backgroundImage: `url(${
                  writerProfileImage ? writerProfileImage : DefaultProfileImage
                })`,
              }}
            ></div>
          </div>
          <div className="board-list-item-write-box">
            <div className="board-list-item-nickname">{writerNickname}</div>
            <div className="board-list-item-write-date">{writeDatetime}</div>
          </div>
        </div>
        {/* middle */}
        <div className="board-list-item-middle">
          <div className="board-list-item-title">{title}</div>
          <div className="board-list-item-content">{content}</div>
        </div>
        {/* bottom */}
        <div className="board-list-item-bottom">
          <div className="board-list-item-counts">
            {`댓글 : ${commentCount} • 좋아요 : ${favoriteCount} • 조회수 : ${viewCount} `}
          </div>
        </div>
      </div>
      {/* image */}
      {boardTitleImage !== null && (
        <div className="board-list-item-image-box">
          <div
            className="board-list-item-image"
            style={{
              backgroundImage: `url(data:image/jpeg;base64,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)`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default BoardItem;
