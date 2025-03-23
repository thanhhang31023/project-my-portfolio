import { Modal, Button,Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsGithub } from "react-icons/bs";

//import { CgWebsite } from "react-icons/cg";

interface Props {
  show: boolean;
  onHide: () => void;
  data: {
    title: string;
    description: string;
    images: string[]; // sử dụng mảng ảnh
    githubLink: string;
    demoLink: string;
    techs?: string[]; // có thể dùng để liệt kê công nghệ sử dụng
  };
}

function ProjectModal({ show, onHide, data }: Props) {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(data.title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto", paddingBottom: "1rem" }}>
      {/* Mỗi mục có margin dưới để tạo khoảng cách rõ ràng */}
  {/* Slide ảnh */}
  <Carousel
  interval={null}
  className="mb-3"
  nextIcon={
    <span
      aria-hidden="true"
      style={{
        color: "#00BFFF", // Màu sáng dễ thấy cả dark & light
        fontSize: "5rem",
        fontWeight: "200",
        backgroundColor: "transparent"
      }}
    >
      ›
    </span>
  }
  prevIcon={
    <span
      aria-hidden="true"
      style={{
        color: "#00BFFF",
        fontSize: "5rem",
        fontWeight: "200",
        backgroundColor: "transparent"
      }}
    >
      ‹
    </span>
  }
>
  {data.images.map((src, index) => (
    <Carousel.Item key={index}>
      <img
        src={src}
        alt={`slide-${index}`}
        className="d-block w-100 rounded"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
    </Carousel.Item>
  ))}
</Carousel>


   {/* Demo + GitHub */}
   <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
    <div>
      <Button variant="primary" href={data.demoLink} target="_blank">🌐 Demo</Button>
      <div className="text-muted small mt-2">
        🔗 {t("project.modal.demoLink")}:{" "}
        <a href={data.demoLink} target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-info">
          {data.demoLink}
        </a>
      </div>
    </div>
    <div>
      <Button variant="primary" href={data.githubLink} target="_blank">
        <BsGithub className="me-1" /> GitHub
      </Button>
      <div className="text-muted small mt-2">
        💻 {t("project.modal.sourceCode")}{" "}
        <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-info">
          {data.githubLink}
        </a>
      </div>
    </div>
  </div>

  {/* Mô tả chi tiết */}
  <h5 className="mt-3 mb-2 fw-bold">📝 {t("project.modal.detailTitle")}</h5>
  <p className="mb-4" style={{ lineHeight: "1.8", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: t("project.modal.detailDescription") }} />

  {/* Cảm hứng phát triển */}
  <h5 className="mt-4 mb-3 fw-bold">💡 {t("project.modal.inspirationTitle")}</h5>
  <p className="mb-1" style={{ lineHeight: "1.8", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: t("project.modal.inspirationDescription1") }} />
  <p
  style={{ lineHeight: "1.8", fontSize: "1rem" }}
  dangerouslySetInnerHTML={{ __html: t("project.modal.inspiration") }}
/>


  {/* Công nghệ sử dụng */}
  <h5 className="mt-4 mb-2 fw-bold">🛠️ {t("project.modal.technologiesTitle")}</h5>
  <ul className="mb-4" style={{ lineHeight: "1.8", fontSize: "1rem" }}>
    <li className="fw-bold mt-2">{t("project.modal.tech.core")}</li>
    <ul>{["React", "Typescript", "Vite"].map(item => <li key={item}>{item}</li>)}</ul>

    <li className="fw-bold mt-2">{t("project.modal.tech.ui")}</li>
    <ul>{["Tailwind CSS", "Sass", "React-Bootstrap", "Lottie-react"].map(item => <li key={item}>{item}</li>)}</ul>

    <li className="fw-bold mt-2">{t("project.modal.tech.intl")}</li>
    <ul>{["i18next", "SEO meta tags"].map(item => <li key={item}>{item}</li>)}</ul>

    <li className="fw-bold mt-2">{t("project.modal.tech.utils")}</li>
    <ul>{["EmailJS", "React Toastify", "React Router DOM"].map(item => <li key={item}>{item}</li>)}</ul>
  </ul>

  {/* Lý do chọn công nghệ */}
  <h5 className="mt-4 mb-3 fw-bold">📌 {t("project.modal.whyTech")}</h5>
  <ul className="ps-3" style={{ lineHeight: "1.8", fontSize: "1rem" }}>
    {Array.from({ length: 9 }, (_, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: t(`project.modal.why.${i + 1}`) }} />
    ))}
  </ul>
</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t("projectModal.close")}
        </Button>
        {/* <Button variant="primary" href={data.githubLink} target="_blank">
          <BsGithub /> GitHub
        </Button>
        <Button
          variant="primary"
          href={data.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          🌐Demo
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
