import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./component/layout/layout";
import Home from "./pages";
import Login from "./pages/login";
import MyPage from "./pages/mypage";
import MyPageOrder from "./pages/mypage/order";
import TodoList from './pages/todo-list'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
  {
    path: "/todo-list",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TodoList />
      }
    ]
  },
  {
    path: '/login',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login/>
      }
    ]
  },
  {
    path: '/my-page',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MyPage/>
      },
      {
        path: 'order',
        element: <MyPageOrder/>
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}