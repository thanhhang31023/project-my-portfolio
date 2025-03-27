import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar4.png";
import './introduction.scss';
import { useTranslation } from 'react-i18next';
import AnimationLottie from "@/components/share/animation-lottie";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";


const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "ja" ? <>
                             <span className='text-pink-100'> 自己概要 </span> 
                        </>
                            :
                            <>
                                <span className='text-pink-100'>Đôi nét </span>về bản thân
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        <br />
                        <br />{t("introSection.heading2")}
                        <i>
                            <b className='text-pink-100'> Html, Css, Javascript, Typescript {t("introSection.and4")} React. </b>
                        </i>
                        
                        <br />
                        <br />
                        {t("introSection.heading5")}
                        <i><b className='text-pink-100'>&nbsp; {t("introSection.and1")}</b> </i>
                        {t("introSection.and")}
                        <i>
                            <b className='text-pink-100'>
                                {" "}
                                {t("introSection.and2")}
                            </b>
                        </i>
                        <br />
                        <br />
                        {t("introSection.heading3")} &nbsp;
                        <i>
                            <b className='text-pink-100'>
                                {t("introSection.heading4")}
                            </b>
                        </i>

                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
    <Tilt>
        <img src={avatarImg} className="img-fluid avatar-image" alt="個人写真" />
    </Tilt>
</Col>

            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>


            
            <Row>   
                <Col md={6} xs={12}
                    className="d-flex align-items-center justify-content-center d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t("introSection.edu")}</h4></div>
                        <div>
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2022-2024</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("introSection.job")}</p>
                                                <p className="company">{t("introSection.school")}</p>
                                                <p className="company">{t("introSection.school1")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
        
    )
}

export default Introduction;