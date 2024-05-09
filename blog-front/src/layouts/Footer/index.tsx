// import React from "react";
import "./style.css";

//          component : Footer Layout             //

const Footer = () => {
  //        event handler : 인스타 아이콘 버튼 클릭 이벤트 처리         //
  const onInstaIconButtonClickHandler = () => {
    window.open("https://www.instagram.com");
  };

  //        event handler : 네이버 블로그 버튼 클릭 이벤트 처리         //
  const onNaverBlogIconButtonClickHandler = () => {
    window.open("https://blog.naver.com");
  };
  //         render : Footer Layout 렌더링       //
  return (
    <div id="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-logo-box">
            <div className="icon-box">
              <div className="icon logo-light-icon"></div>
            </div>
            <div className="footer-logo-text">{`hyunjin blog`}</div>
          </div>
          <div className="footer-link-box">
            <div className="footer-email-link">{`text@text.com`}</div>
            <div
              className="icon-button"
              onClick={onInstaIconButtonClickHandler}
            >
              <div className="icon instagram-icon"></div>
            </div>
            <div
              className="icon-button"
              onClick={onNaverBlogIconButtonClickHandler}
            >
              <div className="icon naver-blog-icon"></div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">{`asdasdasdasd`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
