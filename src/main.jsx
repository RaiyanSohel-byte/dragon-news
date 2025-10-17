import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";
import BookmarkProvider from "./Contexts/BookmarkContext/BookmarkProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookmarkProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </BookmarkProvider>
  </StrictMode>
);
