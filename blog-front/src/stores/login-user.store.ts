import { User } from "types/interface";
import { create } from "zustand";

// 전역으로 관리하는 로그인 사용자 상태 변수와 관련된 인터페이스 정의
interface LoginUserStore {
  loginUser: User | null;
  setLoginUser: (loginUser: User) => void;
  resetLoginUser: () => void;
}
// Zustand를 사용하여 전역으로 관리되는 로그인 사용자 상태 변수 생성
// loginUser : 초기값은 null
// setLoginUser : loginUser 설정 함수 정의
// resetLoginUser : loginUser 초기화 함수 정의
const useLoginUserStore = create<LoginUserStore>((set) => ({
  loginUser: null,
  setLoginUser: (loginUser) => set((state) => ({ ...state, loginUser })),
  resetLoginUser: () => set((state) => ({ ...state, loginUser: null })),
}));

export default useLoginUserStore;
