import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Layout from "./components/ui/Layout";
import Homepage from "./components/pages/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{}],
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
