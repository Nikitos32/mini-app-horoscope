import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { MainPage } from './pages/MainPage';
import { SignPage } from './pages/SignPage';
import { createContext, useState } from 'react';

export const LanguageContext = createContext({
  isTranlated: true,
  toggleIsTranslated: () => {},
});

function App() {
  const [isTranlated, setIsTranlated] = useState<boolean>(
    navigator.language.includes('ru') ? false : true
  );

  const toggleIsTranslated = () => {
    setIsTranlated(!isTranlated);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/mini-app-horoscope" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/mini-app-horoscope/:sign" element={<SignPage />} />
      </Route>
    )
  );
  return (
    <LanguageContext.Provider value={{ isTranlated, toggleIsTranslated }}>
      <RouterProvider router={router} />
    </LanguageContext.Provider>
  );
}
export default App;
