import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
//import axios from "axios";
//import { toast } from "react-toastify";
//import * as axios from "axios";
//import * as toast from "react-toastify";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//toast.configure(); // Cấu hình toast một lần trong component

const ContactForm = () => {
    const { t } = useTranslation();

    //const [error, setError] = useState({ email: false, required: false });
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    // const checkRequired = () => {
    //     if (userInput.email && userInput.message && userInput.name) {
    //         setError({ ...error, required: false });
    //     }
    // };

    const handleSendMail = async (e: React.FormEvent) => {
        e.preventDefault();

        // if (!userInput.email || !userInput.message || !userInput.name) {
        //     toast.error("Vui lòng điền đầy đủ thông tin!");
        //     return;
        // }

        setIsLoading(true);

        const templateParams = {
            name: userInput.name, // Phải khớp với {{name}}
            email: userInput.email, // Phải khớp với {{email}}
            message: userInput.message, // Phải khớp với {{message}}
        };

        emailjs
            .send(
                "service_1d03xnb", // Thay bằng Service ID của bạn
                "template_1rpxyki", // Thay bằng Template ID của bạn
                templateParams,
                "HjV1dyYbgw3ztJ849" // Thay bằng Public Key của bạn
            )
            .then(() => {
                toast.success(t("toast.success"));
                setUserInput({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Lỗi gửi email:", error);
                toast.error(t("toast.error"));
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="contact-form">
            <p className="title">{t("contact.title2")}</p>
            <form className="form-container" onSubmit={handleSendMail}>
                <p className="description">{t("contact.title3")}</p>

                <div className="input-group">
                    <label>{t("contact.name")}</label>
                    <input
                        type="text"
                        value={userInput.name}
                        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>{t("contact.mail")}</label>
                    <input
                        type="email"
                        value={userInput.email}
                        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>{t("contact.mes")}</label>
                    <textarea
                        rows={4}
                        value={userInput.message}
                        onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                        required
                    />
                </div>

                <button className="submit-btn" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        t("toast.mes")
                    ) : (
                        <>
                            {t("contact.send")}&nbsp;
                            <TbMailForward />
                        </>
                    )}
                </button>

                {/* Thêm ToastContainer để hiển thị thông báo */}
                <ToastContainer />
            </form>
        </div>
    );
};

export default ContactForm;
