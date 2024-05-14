import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { AUTH_PATH, MAIN_PATH, USER_PATH } from "constant";
import { useCookies } from "react-cookie";
import { useState } from "react";
import SearchButton from "./components/SearchButton";
import { useLoginUserStore } from "stores";
//            component : 헤더 레이아웃           //
const Header = () => {
  //            state : 로그인 유저 상태            //
  const { loginUser, setLoginUser, resetLoginUser } = useLoginUserStore();
  //            state : cookie 상태           //
  const [cookie, setCookie] = useCookies();
  //            state : 로그인 상태           //
  const [isLogin, setLogin] = useState<boolean>(false);

  //            function : 네비게이트 함수            //
  const navigate = useNavigate();
  //            event handler : 로고 클릭 이벤트 처리 함수            //
  const onLogoClickHandler = () => {
    navigate(MAIN_PATH());
  };
  //            component : 로그인 또는 마이페이지 버튼 컴포넌트            //
  const MyPagesButton = () => {
    //            state : userEmail path variable 상태            //
    const { userEmail } = useParams();
    //            event handler : 마이페이지 버튼 클릭 이벤트 처리 함수             //
    const onMyPageButtonClickHandler = () => {
      if (!loginUser) return;
      const { email } = loginUser;
      navigate(USER_PATH(email));
    };
    //            event handler : 마이페이지 버튼 클릭 이벤트 처리 함수             //
    const onSighOutButtonClickHandler = () => {
      resetLoginUser();
      navigate(MAIN_PATH());
    };
    //            event handler : 로그인 버튼 클릭 이벤트 처리 함수             //
    const onSighInButtonClickHandler = () => {
      navigate(AUTH_PATH());
    };

    //            render : 로그아웃 버튼 컴포넌트 렌더링            //
    if (isLogin && userEmail === loginUser?.email)
      return (
        <div
          className="white-button"
          onClick={onSighOutButtonClickHandler}
        >{`로그아웃`}</div>
      );
    if (isLogin)
      //            render : 마이페이지 버튼 컴포넌트 렌더링            //
      return (
        <div
          className="white-button"
          onClick={onMyPageButtonClickHandler}
        >{`마이페이지`}</div>
      );
    //            render : 로그인 버튼 컴포넌트 렌더링            //
    return (
      <div
        className="black-button"
        onClick={onSighInButtonClickHandler}
      >{`로그인`}</div>
    );
  };

  //            render : 헤더 레이아웃 렌더링         //
  return (
    <div id="header">
      <div className="header-container">
        <div className="header-left-box" onClick={onLogoClickHandler}>
          <div className="icon-box">
            <div className="icon logo-dark-icon"></div>
          </div>
          <div className="header-logo">{`현진 개발블로그`}</div>
        </div>
        <div className="header-right-box">
          <SearchButton navigate={navigate} />
          <MyPagesButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
