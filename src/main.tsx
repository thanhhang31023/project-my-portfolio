import { lazy, Suspense } from "react";
import Fallbacks from "components/skeletons/fallbacks";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/global.scss";
import "styles/contact.scss";
import Layout from "@/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppContextProvider } from "components/context/app.context";
import "@/i18n";

// lazy import
const HomePage = lazy(() => import("pages/home"));
const ProjectPage = lazy(() => import("pages/project"));
const AboutPage = lazy(() => import("pages/about"));

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

// lazy load Google Tag Manager
window.addEventListener(
    "scroll",
    () => {
      const script = document.createElement("script")
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-YMHMKMGP9G"
      script.defer = true
      document.head.appendChild(script)
  
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
  
      gtag("js", new Date())
      gtag("config", "G-YMHMKMGP9G")
    },
    { once: true }
  )
  


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppContextProvider>
        <Suspense fallback={Fallbacks.Layout}>
                {" "}
                <RouterProvider router={router} />
            </Suspense>
        </AppContextProvider>
    </StrictMode>
);
