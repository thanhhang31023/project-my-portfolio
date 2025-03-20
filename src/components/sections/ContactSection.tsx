import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Col } from "react-bootstrap";

import ContactForm from "./ContactForm";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
        const { t } = useTranslation();
    return (
        <div id="contact" className="contact-section">
            <div className="contact-header">
                <span>{t("contact.title")}</span>
                <div className="line"></div>
            </div>

            <div className="contact-content">
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
                <div className="contact-info">
                    <p>
                        <MdAlternateEmail />thanhhang31023@gmail.com
                    </p>
                    <p>
                        <IoMdCall />09052266309
                    </p>
                    <p>
                        <CiLocationOn />Hiroshima
                    </p>
                    <Col md={6} xs={12} className=" mt-md-5 mt-3">
                        <SocialMedia
                            github={APP_DATA.GITHUB_URL}
                            email={APP_DATA.EMAIL}
                            phone={APP_DATA.PHONE}
                            line={APP_DATA.LINE_URL}
                            facebook={APP_DATA.FACEBOOK_URL}
                        />
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
