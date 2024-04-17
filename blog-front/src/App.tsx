import { top3boardListMock } from "mocks";
import "./App.css";
import Top3Item from "components/Top3Item";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
        {top3boardListMock.map((top3ListItem) => (
          <Top3Item top3ListItem={top3ListItem} />
        ))}
      </div>
    </>
  );
}

export default App;
