import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/global.scss";
import "styles/contact.scss";
import Layout from "@/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/home";
import ProjectPage from "pages/project";
import AboutPage from "pages/about";
import { AppContextProvider } from "components/context/app.context";
import "@/i18n";

// ⚡ Thêm đoạn xử lý trước khi render
if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  if (!localStorage.getItem('i18nextLng')) {
    localStorage.setItem('i18nextLng', 'ja');
  }

  // Xử lý bật dark mode nếu chưa có theme
const userTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/project",
                element: <ProjectPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    </StrictMode>
);
