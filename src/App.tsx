import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/ui/Layout";
import Homepage from "./components/pages/Homepage";
import { ThemeProvider } from "./components/contexts/ThemeContext";

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
      <ThemeProvider>
        <div className="bg-background-0 text-fontDefault">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
