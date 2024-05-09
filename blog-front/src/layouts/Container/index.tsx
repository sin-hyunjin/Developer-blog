import { Outlet, useLocation } from "react-router-dom";
import Footer from "layouts/Footer";
import Header from "layouts/Header";

//            component : 레이아웃           //
const Container = () => {
  //            state : 현재 페이지 path name 상태           //
  const { pathname } = useLocation();

  //            render : 레이아웃 렌더링           //
  return (
    <>
      <Header />
      {/* Outlet은 중첩 라우팅을 통해 상위 컴포넌트를 레이아웃화 할 수 있고 {children}을 사용하는 것과 같은 효과가 난다. */}
      <Outlet />
      {pathname !== "/auth" && <Footer />}
    </>
  );
};

export default Container;
