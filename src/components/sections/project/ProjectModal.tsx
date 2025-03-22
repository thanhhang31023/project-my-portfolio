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
      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
  {/* Slide ảnh */}
  <Carousel interval={null} className="mb-3">
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

  {/* Demo */}
  <div>
    <Button variant="primary" href={data.demoLink} target="_blank">
      🌐 Demo
    </Button>
    <div className="text-muted small mt-2">
      🔗 Link demo dự án:{" "}
      <a
        href={data.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-underline text-info"
      >
        {data.demoLink}
      </a>
    </div>
  </div>

  {/* GitHub */}
  <div>
    <Button variant="primary" href={data.githubLink} target="_blank">
   
    <BsGithub className="me-1" />
      GitHub
    </Button>
    <div className="text-muted small mt-2">
      💻Link source code:{" "}
      <a
        href={data.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-underline text-info"
      >
        {data.githubLink}
      </a>
    </div>
  </div>
</div>


  {/* Mô tả chi tiết */}
  <h5>📝 Mô tả chi tiết</h5>
  <p>
    Đây là website portfolio cá nhân giới thiệu thông tin, kỹ năng và dự án của tôi.
    Trang bao gồm các phần: Giới thiệu, Kỹ năng, Dự án, Liên hệ.
    Website hỗ trợ responsive, đa ngôn ngữ (Nhật – Việt), chế độ sáng tối, tối ưu SEO.
    Gửi mail liên hệ qua EmailJS mà không cần backend.
  </p>

  {/* Lịch sử & nguồn cảm hứng */}
  <h5>💡 Lịch sử phát triển & cảm hứng</h5>
  <p>
    Dự án được phát triển để giới thiệu bản thân khi ứng tuyển vị trí Frontend Developer.
    Lấy cảm hứng từ các portfolio nổi tiếng như Hỏi Dân IT, Soumyajit, Abusaid.
    Vừa học vừa làm giúp tôi củng cố kiến thức React & Typescript.
  </p>

  {/* Công nghệ */}
  <h5>🛠 Công nghệ sử dụng</h5>
  <ul>
    <li>React</li>
    <li>Typescript</li>
    <li>Vite</li>
    <li>React-Bootstrap</li>
    <li>React Router DOM</li>
    <li>EmailJS</li>
    <li>i18next (đa ngôn ngữ)</li>
    <li>React Toastify</li>
    <li>Dark/Light Mode</li>
    <li>SEO meta tags</li>
  </ul>

  {/* Lý do chọn công nghệ */}
  <h5>🎯 Lý do lựa chọn công nghệ</h5>
  <p>
    React + Typescript là bộ đôi phổ biến, dễ mở rộng. Vite giúp build nhanh.
    EmailJS hỗ trợ gửi email mà không cần server.
    i18next là giải pháp dịch hiệu quả.
    Kết hợp thư viện UI giúp làm nhanh và đẹp.
  </p>
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
