import { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
    theme: ThemeContextType;
    setTheme: (v: ThemeContextType) => void;
}

type ThemeContextType = "light" | "dark";

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeContextType>(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeContextType;
    
        if (savedTheme) return savedTheme;
    
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme: ThemeContextType = prefersDark ? "dark" : "light";
    
        localStorage.setItem("theme", defaultTheme);
        return defaultTheme;
    });
    

    useEffect(() => {
        const mode = localStorage.getItem("theme") as ThemeContextType;
        if (mode) {
            setTheme(mode);
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, [])

    return (
        <AppContext.Provider value={{
            theme, setTheme
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    return currentAppContext;
};
