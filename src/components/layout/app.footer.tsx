import { useTranslation } from "react-i18next";

const AppFooter = () => {
        const { t } = useTranslation();
    return (
        <div className="text-center my-3 text-sm mt-2">
            <p className="slogan text-2xl md:text-xl sm:text-lg text-center px-4">
            {t("appFooter.slogan")}
            </p>
            <p className="text-gray-400 text-sm mt-2">
                Copyright © {new Date().getFullYear()} Hang dev front end
            </p>
        </div>
    );
}

export default AppFooter;
