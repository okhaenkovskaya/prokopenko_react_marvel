import {lazy} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleCharPage = lazy(() => import('../pages/SingleCharPage'));

const App = () => {
    return (
      <Router>
        <div className="app">
            <AppHeader/>
            <main>
              <Routes>
                <Route element={<MainPage />} path="/" />
                <Route element={<ComicsPage />} path="/comics" />
                <Route element={<SingleComicPage />} path="/comics/:comicId" />
                <Route element={<SingleCharPage />} path="/characters/:charId" />
                <Route element={<Page404 />} path="*" />
              </Routes>
            </main>
        </div>
      </Router>
    )
}

export default App;