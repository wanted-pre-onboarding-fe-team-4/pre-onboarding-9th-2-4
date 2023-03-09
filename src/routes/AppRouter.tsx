import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { DefaultLayout } from '@src/layouts/DefaultLayout';
import { ErrorPage } from '@src/pages/Error';
import { MainPage } from '@src/pages/Main';
import { ReservationsPage } from '@src/pages/Reservations/index';

export const AppRouter = () => {
  const routerInfo = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={routerInfo}></RouterProvider>;
};
