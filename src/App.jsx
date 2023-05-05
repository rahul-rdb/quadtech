import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import View from "./pages/View";

function App() {
  return (
    <div className="App w-full h-full min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/:id" element={<View />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
