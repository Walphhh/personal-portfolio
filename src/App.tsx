import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/ui/Layout";
import Homepage from "./components/pages/Homepage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="p-0">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
