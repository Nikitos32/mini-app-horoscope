import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { MainPage } from './pages/MainPage';
import { SignPage } from './pages/SignPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/mini-app-horoscope" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/mini-app-horoscope/:sign" element={<SignPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
