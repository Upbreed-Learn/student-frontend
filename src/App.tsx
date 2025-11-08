import { createBrowserRouter, RouterProvider } from 'react-router';
import { NuqsAdapter } from 'nuqs/adapters/react';
import RootLayout from './layout';
import QueryProvider from './lib/query-provider';
import Welcome from './pages/welcome';
import Home from './pages/home';
import CourseDetails from './pages/courses/details';
import Courses from './pages/courses';
import ErrorPage from './pages/ErrorPage';
import Settings from './pages/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // loader: checkAuthLoader,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/courses',
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: '/courses/:id',
            element: <CourseDetails />,
          },
        ],
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  // {
  //   path: '/auth',
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: '/auth/login',
  //       element: <Login />,
  //     },
  //     { path: '/auth/verify', element: <VerifyEmail /> },
  //     {
  //       path: '/auth/reset-password',
  //       element: <ResetPassword />,
  //     },
  //   ],
  // },
]);

function App() {
  return (
    <div className="App">
      <NuqsAdapter>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </NuqsAdapter>
    </div>
  );
}

export default App;
