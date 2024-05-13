import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CommentItem from "components/CommentItem";
import FavoriteItem from "components/FavoriteItem";
import Top3Item from "components/Top3Item";
import BoardItem from "components/BoardItem";
import InputBox from "components/InputBox";
import Footer from "layouts/Footer";
import Main from "views/Main";
import Authentication from "views/Authentication";
import Search from "views/Search";
import User from "views/User";
import BoardDetail from "views/Board/Detail";
import BoardUpdate from "views/Board/Update";
import BoardWrite from "views/Board/Write";
import Container from "layouts/Container";
import {
  MAIN_PATH,
  AUTH_PATH,
  SEARCH_PATH,
  USER_PATH,
  BOARD_PATH,
  BOARD_WRITE_PATH,
  BOARD_DETAIL_PATH,
  BOARD_UPDATE_PATH,
} from "constant";
import {
  commentListMock,
  favoriteListMock,
  latestBoardListMock,
  top3boardListMock,
} from "mocks";
//            component: Application 컴포넌트             //
function App() {
  const [value, setValue] = useState<string>("");

  //               render : Application 컴포넌트 렌더링               //
  // description : 메인 화면 : '/' - Main //
  // description : 로그인 + 회원가입 화면 : '/auth' - Authentication //
  // description : 검색 화면 : '/search/:word' - Search //
  // description : 유저 페이지 : '/user/:userEmail' - User //
  // description : 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail //
  // description : 게시물 작성하기 : '/board/write' - BoardWrite //
  // description : 게시물 수정하기 : '/board/update/:boardNumber' - BoardUpdate //

  return (
    <>
      <Routes>
        <Route element={<Container />}>
          <Route path={MAIN_PATH()} element={<Main />} />
          <Route path={AUTH_PATH()} element={<Authentication />} />
          {/*  콜론(:)은 해당 부분이 동적으로 변하는 값을 나타내는 것을 의미 */}
          <Route path={SEARCH_PATH(":searchWord")} element={<Search />} />
          <Route path={USER_PATH(":userEmail")} element={<User />} />
          <Route path={BOARD_PATH()}>
            <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />}></Route>
            <Route
              path={BOARD_DETAIL_PATH(":boardNumber")}
              element={<BoardDetail />}
            ></Route>
            <Route
              path={BOARD_UPDATE_PATH(":boardNumber")}
              element={<BoardUpdate />}
            ></Route>
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>

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
      <InputBox
        label="이메일"
        type="text"
        placeholder="이메일 주소를 입력해주세요"
        value={value}
        setValue={setValue}
        error={true}
        message="aaaa"
      />
      {/* 하단 배너 테스트 */}
      <Footer></Footer>
    </>
  );
}

export default App;
