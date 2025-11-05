import { createBrowserRouter, RouterProvider } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import RootLayout from "./layout";
import QueryProvider from "./lib/query-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    // loader: checkAuthLoader,
    children: [
      // {
      //   path: '/',
      //   element: <Overview />,
      // },
      // {
      //   path: '/courses',
      //   element: <Courses />,
      // },
      // {
      //   path: '/insights',
      //   element: <Insights />,
      // },
      // {
      //   path: '/earnings',
      //   element: <Earnings />,
      // },
      // {
      //   path: '/sessions',
      //   element: <Sessions />,
      // },
      // {
      //   path: '/settings',
      //   element: <Settings />,
      // },
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
