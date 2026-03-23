console.log("Nana's Script Running...");

const translations = {
    zh: {
        langBtn: "English Version",
        heroName: "吕娜娜 (Nana) 🎀",
        heroTagline: "AI 产品运营 | 商务 BD | 用户增长",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位",
        eduM1: "英语 (English)",
        eduM2: "行政管理",
        eduList: "<li>✨ 复合学科背景：兼具国际化沟通视野与组织管理逻辑。</li><li>✨ 专业技能：英语专业八级 (TEM-8) 证书。</li>",
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "Python / SQL / 数据分析",
        s3Text: "商务洽谈 / 资源对接 / SOP 优化",
        s4Text: "英语专业能力 (TEM-8)",
        p1Title: "AI 用户洞察分析平台 (Nana Insight AI) 🤖",
        p1Desc: "<li>构建“数据输入—NLP 分析—可视化—洞察输出”完整流程。</li><li>自动定位负面集中点，实现决策闭环。</li>",
        p2Title: "跨媒介叙事与情感计算研究 (R + NLP) 📚",
        contactEmail: "Email: lvnana1206@163.com",
        contactPhone: "Phone: +86 153-3931-4431",
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Ops | International BD | Growth",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Adept",
        badge3: "📊 Data-Driven",
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Competencies",
        titleProjects: "🚀 Projects",
        eduSchool: "Shanghai Jiao Tong University",
        eduDegree: "Bachelor's | Double Major",
        eduM1: "English",
        eduM2: "Admin Management",
        eduList: "<li>✨ Global vision with interdisciplinary logic.</li><li>✨ TEM-8 Certified (English Major Band 8).</li>",
        s1Text: "NLP / Prompt Engineering",
        s2Text: "Python / SQL / Data Analysis",
        s3Text: "BD Negotiation / Resource / SOP",
        s4Text: "Professional English (TEM-8)",
        p1Title: "AI User Insight Platform (Nana Insight AI) 🤖",
        p1Desc: "<li>Full NLP pipeline from data to insight.</li><li>Automated PM reporting & decision loop.</li>",
        p2Title: "Narrative & Sentiment Analysis (R + NLP) 📚",
        contactEmail: "Email: lvnana1206@163.com",
        contactPhone: "Phone: +86 153-3931-4431",
        footerText: "Explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("active");
        }
    });
}

function updateContent() {
    const lang = translations[currentLang];
    const mapping = [
        ['lang-toggle', 'langBtn'], ['hero-name', 'heroName'], ['hero-tagline', 'heroTagline'],
        ['badge1', 'badge1'], ['badge2', 'badge2'], ['badge3', 'badge3'],
        ['title-edu', 'titleEdu'], ['title-skills', 'titleSkills'], ['title-projects', 'titleProjects'],
        ['edu-school', 'eduSchool'], ['edu-degree', 'eduDegree'], ['edu-m1', 'eduM1'], ['edu-m2', 'eduM2'],
        ['edu-list', 'eduList'], ['s1-text', 's1Text'], ['s2-text', 's2Text'], ['s3-text', 's3Text'], ['s4-text', 's4Text'],
        ['p1-title', 'p1Title'], ['p1-desc', 'p1Desc'], ['p2-title', 'p2Title'],
        ['contact-email', 'contactEmail'], ['contact-phone', 'contactPhone'], ['footer-text', 'footerText']
    ];

    mapping.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = lang[key];
    });

    document.documentElement.lang = currentLang;
    setTimeout(handleReveal, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    updateContent();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.onclick = () => {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            updateContent();
        };
    }
    window.addEventListener("scroll", handleReveal);
});