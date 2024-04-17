import React from "react";
import "./style.css";
import defaultProfileImage from "assets/image/default-image.png";
import { BoardListItem } from "types/interface";
import { useNavigate } from "react-router-dom";

/** Interface  */
interface Props {
  top3ListItem: BoardListItem;
}

/** Component : Top 3 List Item 컴포넌트 */
export default function Top3Item({ top3ListItem }: Props) {
  /** Properties */
  const { boardNumber, title, content, boardTitleImage } = top3ListItem;
  const { favoriteCount, commentCount, viewCount } = top3ListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = top3ListItem;

  /** funtion : navigate*/
  // const navigator = useNavigate();

  /** event handler : 게시물 아이템 클릭 이벤트 함수 */
  const onClickHander = () => {
    // navigator(boardNumber)
  };
  /** render : Tip 3 List Item */
  return (
    <div
      className="top-3-list-item"
      style={{ backgroundImage: `url(${boardTitleImage})` }}
      onClick={onClickHander}
    >
      {/* main */}
      <div className="top-3-list-item-main-box">
        {/* main-top */}
        <div className="top-3-list-item-top">
          <div className="top-3-list-item-profile-box">
            <div
              className="top-3-list-item-profile-image"
              style={{
                backgroundImage: `url(${
                  writerProfileImage ? writerProfileImage : defaultProfileImage
                })`,
              }}
            ></div>
          </div>
          <div className="top-3-list-item-write-box">
            <div className="top-3-list-item-nickname"> {writerNickname}</div>
            <div className="top-3-list-item-write-date">{writeDatetime}</div>
          </div>
        </div>

        {/* main-middle */}
        <div className="top-3-list-item-middle">
          <div className="top-3-list-item-title">{title}</div>
          <div className="top-3-list-item-content">{content}</div>
        </div>

        {/* main-bottom */}
        <div className="top-3-list-item-bottom">
          <div className="top-3-list-item-counts">
            {`댓글 : ${commentCount} • 좋아요 : ${favoriteCount} • 조회수 : ${viewCount} `}
          </div>
        </div>
      </div>
    </div>
  );
}
