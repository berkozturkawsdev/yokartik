import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import NewsGrid from "./components/news/NewsGrid";

import Article from "./pages/Article";
import Analytics from "./Analytics";


function App() {

  return (

    <BrowserRouter>
      <Analytics />

      <Navbar />

      <main className="container">

        <Routes>

          <Route
            path="/"
            element={<NewsGrid />}
          />


          <Route
            path="/article/:id"
            element={<Article />}
          />

        </Routes>

      </main>

    </BrowserRouter>
  );
}


export default App;