import CommentItem from "components/CommentItem";
import "./App.css";
import {
  commentListMock,
  favoriteListMock,
  latestBoardListMock,
  top3boardListMock,
} from "mocks";
import FavoriteItem from "components/FavoriteItem";
import Top3Item from "components/Top3Item";
import BoardItem from "components/BoardItem";
import InputBox from "components/InputBox";

function App() {
  return (
    <>
      {/* 작성 게시물 목록 컴포넌트 테스트 */}
      {latestBoardListMock.map((item) => (
        <BoardItem boardListItem={item} />
      ))}
      {/*  주간 상위 3 게시물 컴포넌트 테스트 */}
      <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
        {top3boardListMock.map((top3ListItem) => (
          <Top3Item top3ListItem={top3ListItem} />
        ))}
      </div>
      {/* 댓글 컴포넌트 테스트  */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {commentListMock.map((item) => (
          <CommentItem commentListItem={item} />
        ))}
      </div>
      {/* 좋아요 목록 컴포넌트 테스트  */}
      <div style={{ display: "flex", columnGap: "30px", rowGap: "20px" }}>
        {favoriteListMock.map((item) => (
          <FavoriteItem favoriteListItem={item} />
        ))}
      </div>
      {/* 입력창 컴포넌트 테스트 */}
      <InputBox />
    </>
  );
}

export default App;
