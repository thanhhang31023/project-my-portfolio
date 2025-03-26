import { Container } from "react-bootstrap";
import About from "components/sections/about";
import bg from "assets/section.svg";

const AboutPage = () => {
    return (
        <div className="about-screen">
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
            <section className="mt-md-5 mt-2 t-md-5 pt-0">
                <Container>
                    <About />
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;
