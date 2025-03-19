import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import viFlag from "assets/svg/language/vi.svg";
import jaFlag from "assets/svg/language/ja.svg";
type ThemeContextType = "light" | "dark";

function AppHeader() {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    // Xử lý sự kiện cuộn trang
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute("data-bs-theme", mode);
        setTheme(mode);
    };

    const renderFlag = (language: string) => {
        return <img style={{ height: 20, width: 20 }} src={language === "ja" ? jaFlag : viFlag} alt={language} />;
    };

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
            style={{ zIndex:9 }}
        >
            <Container>
                <Link className="navbar-brand" to="/" onClick={() => window.scrollTo(0, 0)}>
                    <span className="brand-green">{t("appHeader.brand")}</span>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>
                            {t("appHeader.home")}
                        </NavLink>

                        <NavLink className="nav-link" to="/project" onClick={() => window.scrollTo(0, 0)}>
                            {t("appHeader.project")}
                        </NavLink>

                        <NavLink className="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>
                            {t("appHeader.about")}
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <div className="nav-link" style={{ cursor: "pointer" }}>
                            {theme === "light" ? (
                                <MdOutlineLightMode onClick={() => handleMode("dark")} style={{ fontSize: 20 }} />
                            ) : (
                                <MdNightlight onClick={() => handleMode("light")} style={{ fontSize: 20 }} />
                            )}
                        </div>

                        <NavDropdown title={renderFlag(i18n.resolvedLanguage!)}>
                            <div
                                onClick={() => i18n.changeLanguage("ja")}
                                className="dropdown-item d-flex gap-2 align-items-center"
                                style={{ cursor: "pointer" }}
                            >
                                <img style={{ height: 20, width: 20 }} src={jaFlag} alt="日本語" />
                                <span>日本語</span>
                            </div>
                            <div
                                onClick={() => i18n.changeLanguage("vi")}
                                className="dropdown-item d-flex gap-2 align-items-center"
                                style={{ cursor: "pointer" }}
                            >
                                <img style={{ height: 20, width: 20 }} src={viFlag} alt="vietnamese" />
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
