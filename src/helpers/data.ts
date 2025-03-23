// import nestImg from 'assets/project/nestjs.png';
// import nextjsImg from 'assets/project/nextjs.png';
// import reactNativeImg from 'assets/project/react-native.png';
// import reactUltimateImg from 'assets/project/react-ultimate.png';
// import springMvcImg from 'assets/project/spring-mvc.png';
// import springRestImg from 'assets/project/spring-rest.png';

export const APP_DATA = {
    GITHUB_URL: "https://github.com/thanhhang31023?tab=repositories",
    EMAIL: "mailto:thanhhang31023@gmail.com",
    PHONE: "tel:09052266309",
    LINE_URL: "https://line.me/ti/p/nYU8XGkwue",
    FACEBOOK_URL: "https://www.facebook.com/thanhhang3002/",
};

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Công ty TNHH Kusuda Products",
            ja: "株式会社楠田商品",
        },
        company: {
            vi: "Làm thực tập sinh chế biến thủy sản, trải qua đào tạo kỹ thuật tại Nhật Bản.",
            ja: "水産加工の実習生として、日本での技術研修を経験しました。",
        },
        company2: {
            vi: "✅Học về văn hóa làm việc tại Nhật Bản và tầm quan trọng của làm việc nhóm.",
            ja: "✅ 日本の職場文化やチームワークの重要性を学びました。",
        },
        duration: {
            vi: "Tháng 3/2020 - Tháng 2/2023",
            ja: "3月 2020年 — 2月 2023年",
        },
    },
    {
        id: 2,
        title: {
            vi: "Công ty TNHH Yakiniku Sakai Holdings",
            ja: "株式会社焼肉坂井ホールディングス",
        },

        company: {
            vi: "Làm nhân viên chính thức tại nhà hàng mì ramen, phụ trách phục vụ khách hàng và hỗ trợ chế biến món ăn.",
            ja: "メンラーメン店の正社員として勤務し、接客・調理補助を担当しました。",
        },
        company2: {
            vi: "✅Rèn luyện kỹ năng giao tiếp với khách hàng, học cách làm việc hiệu quả.",
            ja: "✅ 顧客対応スキルを磨き、効率的な仕事の進め方を学びました。",
        },
        duration: {
            vi: "Tháng 2/2023 - Tháng 7/2023",
            ja: "2月 2023年 — 7月 2023年",
        },
    },
    {
        id: 3,
        title: {
            vi: "Tự học tại nhà",
            ja: "自宅学習",
        },
        company: {
            vi: "Học kiến thức mới mỗi ngày",
            ja: "毎日新しい知識を学ぶしています。",
        },
        company2: {
            vi: "💻Thực hành phát triển ứng dụng web bằng HTML, CSS, JavaScript, TypeScript, React.",
            ja: "💻 HTML、CSS、JavaScript、Typescript、React を使ったWebアプリケーション開発を実践中。",
        },
        duration: {
            vi: "Tháng 7/2023 - Hiện tại",
            ja: "7月 2023年 — 現在",
        },
    },
];

export const PROJECTS = [
    {
        id: 1,
        images: [
            "/projects/react-native.png",
            "/projects/po2.png",
            "/projects/po3.png",
            "/projects/po4.png",
            "/projects/po5.png",
            "/projects/po1.png",
            "/projects/po6.png",
        ],
        title: "project.portfolio.title",
        description: "project.portfolio.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "portfolio",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "Typescript", "Vite"]
            },
            {
              group: "ui",
              items: ["Tailwind CSS", "Sass", "React-Bootstrap", "Lottie-react"]
            },
            {
                group: "intl",
                items: ["i18next", "SEO meta tags"]
              },
            {
              group: "utils",
              items: ["EmailJS", "React Toastify", "React Router DOM"]
            }
          ],
          
            },
    {
        id: 2,
        images: ["/projects/todo2.png", "/projects/spring-rest.png", "/projects/todo3.png", "/projects/todo4.png"],
        title: "project.todo.title",
        description: "project.todo.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "todo",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "TypeScript", "React Hooks"]
            },
            {
              group: "ui",
              items: ["SCSS (CSS Modules)", "Google Fonts"]
            },
            {
                group: "intl",
                items: ["LocalStorage", "@hello-pangea/dnd (Drag & Drop)"]
              },
            {
              group: "utils",
              items: ["Prettier", "ESLint"]
            }
          ],
        
          
    },
    {
        id: 3,
        images: ["/projects/spring-rest.png", "/projects/nestjs.png", "/projects/spring-mvc.png"],
        title: "project.library.title",
        description: "project.library.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "library",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "TypeScript", "React Hooks"]
            },
            {
              group: "ui",
              items: ["SCSS (CSS Modules)", "Google Fonts"]
            },
            {
                group: "intl",
                items: ["SCSS (CSS Modules)", "Google Fonts"]
              },
            {
              group: "utils",
              items: ["LocalStorage", "@hello-pangea/dnd"]
            }
          ],
        
    },
    {
        id: 4,
        images: ["/projects/spring-rest.png", "/projects/nestjs.png", "/projects/spring-mvc.png"],
        title: "project.todo2.title",
        description: "project.todo2.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "todo2",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "TypeScript", "React Hooks"]
            },
            {
              group: "ui",
              items: ["SCSS (CSS Modules)", "Google Fonts"]
            },
            {
                group: "intl",
                items: ["SCSS (CSS Modules)", "Google Fonts"]
              },
            {
              group: "utils",
              items: ["LocalStorage", "@hello-pangea/dnd"]
            }
          ],
        
    },
    {
        id: 5,
        images: ["/projects/spring-rest.png", "/projects/nestjs.png", "/projects/spring-mvc.png"],
        title: "project.mart.title",
        description: "project.mart.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "mart",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "TypeScript", "React Hooks"]
            },
            {
              group: "ui",
              items: ["SCSS (CSS Modules)", "Google Fonts"]
            },
            {
                group: "intl",
                items: ["SCSS (CSS Modules)", "Google Fonts"]
              },
            {
              group: "utils",
              items: ["LocalStorage", "@hello-pangea/dnd"]
            }
          ],
        
    },
    {
        id: 6,
        images: ["/projects/spring-rest.png", "/projects/nestjs.png", "/projects/spring-mvc.png"],
        title: "project.landing.title",
        description: "project.landing.description",
        githubLink: "https://github.com/thanhhang31023?tab=repositories",
        demoLink: "https://github.com/thanhhang31023?tab=repositories",
        namePro: "landing",
        techs: [
            {
              group: "core", // dùng làm key dịch
              items: ["React", "TypeScript", "React Hooks"]
            },
            {
              group: "ui",
              items: ["SCSS (CSS Modules)", "Google Fonts"]
            },
            {
                group: "intl",
                items: ["SCSS (CSS Modules)", "Google Fonts"]
              },
            {
              group: "utils",
              items: ["LocalStorage", "@hello-pangea/dnd"]
            }
          ],
        
    },
];

export const SKILLS_DATA = ["HTML5", "CSS3", "Sass", "Javascript", "Typescript", "React", "Github"];
