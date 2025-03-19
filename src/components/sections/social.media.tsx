import { FaFacebook, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";
import { SiLine } from "react-icons/si";

interface IProps {
    github: string;
    email: string;
    phone: string;
    line: string;
    facebook: string;
}

const SocialMedia = (props: IProps) => {
    const { github, email, phone, line, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target="_blank" className="highlight" title="GitHub">
                <FaGithub size={30} />
            </a>
            <a href={`mailto:${email}`} className="highlight" title="Email">
                <FaEnvelope size={30} />
            </a>
            <a href={`tel:${phone}`} className="highlight" title="Gọi điện">
                <FaPhone size={30} />
            </a>
            <a href={line} target="_blank" className="highlight" title="Line">
                <SiLine size={30} />
            </a>
            <a href={facebook} target="_blank" className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
        </div>
    );
};

export default SocialMedia;
