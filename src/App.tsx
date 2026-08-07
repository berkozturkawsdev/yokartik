import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import NewsGrid from "./components/news/NewsGrid";
import { HelmetProvider } from "react-helmet-async";

import Article from "./pages/Article";


function App() {

  return (

    <HelmetProvider>
      <BrowserRouter>

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
    </HelmetProvider>
  );
}


export default App;