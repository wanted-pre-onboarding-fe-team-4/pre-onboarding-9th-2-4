import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { ReservationsPage } from '@src/pages/Reservations/\bindex';
import { MainPage } from '@src/pages/Main';
import { ErrorPage } from '@src/pages/Error';

export const AppRouter = () => {
  const routerInfo = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/main' />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/main',
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/reservations',
      element: <ReservationsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/*',
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={routerInfo}></RouterProvider>;
};
