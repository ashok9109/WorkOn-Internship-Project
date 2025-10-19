import { createBrowserRouter, RouterProvider } from 'react-router'
import UserLayout from '../layout/UserLayout'
import ProtectedRoutes from '../components/ProtectedRoutes'
import HomeLayout from '../layout/HomeLayout'
import HomePage from '../pages/HomePage'
import MessagesLayout from '../layout/MessagesLayout'
import MessagePage from '../pages/MessagePage'
import DashboardPage from '../pages/DashboardPage'
import ProfilePage from '../pages/ProfilePage'
import SettingsPage from '../pages/SettingsPage'

const AppRouter = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />
    },
    {
      path: "/home",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <HomePage />
            },
            {
              path: "dashboard",
              element: <DashboardPage />
            },
            {
              path: "profile",
              element: <ProfilePage />
            },
            {
              path: "settings",
              element: <SettingsPage />
            },
            {
              path: "messages",
              element: <MessagesLayout />,
              children: [
                {
                  path: "chat",
                  element: <MessagePage />
                }
              ]
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter;
