import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  server: {
    port: 3003, // 서버 포트 번호 변경
  },
  define: {
    global: "{}", // 글로벌 객체를 빈 객체로 대체
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build", // build 폴더명 변경
    assetsDir: "static", // build 폴더 내 assets 폴더명 변경
  },
});
