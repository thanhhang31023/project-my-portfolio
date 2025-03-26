import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import bg from "assets/section.svg";
import Introduction from "components/sections/introduction";
import Divider from "components/sections/divider";
import Skill from "components/sections/skill";
import ContactSection from "components/sections/ContactSection";

const HomePage = () => {
    const skillRef = useRef<HTMLElement>(null);

    const scrollToSkillSection = () => {
        skillRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    return (
        <div className="homepage-screen">
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    width: "100%",
                    height: 500,
                    position: "absolute",
                    top: 0,
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                }}
            ></div>
            <section className="mt-md-7 mt-2">
                <Container style={{ position: "relative" }}>
                    <Row>
                        <Col className="d-flex d-md-block" md={6}>
                            <HeroLeft scrollToSkillSection={scrollToSkillSection} />
                        </Col>
                        <Col md={6}>
                            <HeroRight />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Introduction />
                </Container>
            </section>

            <Divider />
            <section ref={skillRef}>
                <Container>
                    <Skill />
                </Container>
            </section>

            <Divider />
            <div>
                <section id="contact">
                    <ContactSection />
                </section>
            </div>
        </div>
    );
};

export default HomePage;
