import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

import Fallbacks from "components/skeletons/fallbacks";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import bg from "assets/section.svg";

import Divider from "components/sections/divider";

<Helmet>
    <title>ハン | フロントエンド開発者・ポートフォリオ</title>

    <meta
        name="description"
        content="React, TypeScript, Javascript, HTML, CSS, Bootstrap を使ったフロントエンド開発者・グェン ティ タィン ハン のポートフォリオです。"
    />
    <meta
        name="keywords"
        content="ポートフォリオ, フロントエンド, React, TypeScript, Javascript, HTML, CSS, Bootstrap Web開発, Scss, Sass, SEO, 開発者, グェン ティ タィン ハン"
    />

    <meta name="author" content="グェン ティ タィン ハン" />
    <meta property="og:title" content="ハン | フロントエンド開発者・ポートフォリオ" />

    <meta
        property="og:description"
        content="React, TypeScript, Javascript, HTML, CSS, Bootstrap を使ったフロントエンド開発者・グェン ティ タィン ハン のポートフォリオです。このポートフォリオサイトでは、自己紹介、スキル、プロジェクトを紹介しています。"
    />

    <meta property="og:url" content="https://hang-frontend.jp/" />
    <meta property="og:image" content="/demo-project.png" />
    <meta property="og:type" content="website" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>;

const Skill = lazy(() => import("components/sections/skill"));
const Introduction = lazy(() => import("components/sections/introduction"));
const ContactSection = lazy(() => import("components/sections/ContactSection"));

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
                <Suspense fallback={Fallbacks.Page}>
                        <Introduction />
                    </Suspense>
                </Container>
            </section>

            <Divider />
            <section ref={skillRef}>
                <Container>
                <Suspense fallback={Fallbacks.Page}>
                        <Skill />
                    </Suspense>
                </Container>
            </section>

            <Divider />
            <div>
                <section id="contact">
                <Suspense fallback={Fallbacks.Page}>
                        <ContactSection />
                    </Suspense>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
