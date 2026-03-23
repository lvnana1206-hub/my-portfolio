console.log("Nana's Portfolio Script Running...");

const translations = {
    zh: {
        langBtn: "English Version",
        heroName: "吕娜娜 (Nana) 🎀",
        heroTagline: "AI 产品运营 | 海外商务 BD | 用户增长策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位",
        eduM1: "英语 (English)",
        eduM2: "行政管理 (Admin Management)",
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "Python / SQL / 数据看板",
        s3Text: "海外商务洽谈 / 资源对接 / SOP",
        s4Text: "英语专业能力 (TEM-8)",
        p1Title: "Nana AI Strategy Insight (V16.0) 🤖",
        p1Desc: "<li><b>BD 思维：</b>构建从用户反馈到 PM 决策的 SOP 闭环，赋能业务增长。</li><li>利用 NLP 自动识别痛点，转化率提升显著。</li>",
        p2Title: "跨媒介叙事与情感计算研究 (R + NLP) 📚",
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
        s1Text: "NLP / Prompt Engineering",
        s2Text: "Python / SQL / Dashboard",
        s3Text: "International BD / Resource / SOP",
        s4Text: "Professional English (TEM-8)",
        p1Title: "Nana AI Strategy Insight (V16.0) 🤖",
        p1Desc: "<li>Established SOP loop to drive conversion via BD mindset.</li><li>Boosted growth by quantifying pain points via NLP.</li>",
        p2Title: "Narrative & Sentiment Analysis (R + NLP) 📚",
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

function resetProgressBars() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        // 先重置
        fill.style.width = '0';
        // 强制重绘
        fill.offsetHeight;
        // 赋予新的宽度以触发 CSS transition
        fill.style.width = fill.getAttribute('data-width');
    });
}

function updateContent() {
    const lang = translations[currentLang];
    const mapping = [
        ['lang-toggle', 'langBtn'], ['hero-name', 'heroName'], ['hero-tagline', 'heroTagline'],
        ['badge1', 'badge1'], ['badge2', 'badge2'], ['badge3', 'badge3'],
        ['title-edu', 'titleEdu'], ['title-skills', 'titleSkills'], ['title-projects', 'titleProjects'],
        ['edu-school', 'eduSchool'], ['edu-degree', 'eduDegree'], ['edu-m1', 'eduM1'], ['edu-m2', 'eduM2'],
        ['s1-text', 's1Text'], ['s2-text', 's2Text'], ['s3-text', 's3Text'], ['s4-text', 's4Text'],
        ['p1-title', 'p1Title'], ['p1-desc', 'p1Desc'], ['p2-title', 'p2Title'],
        ['footer-text', 'footerText']
    ];

    mapping.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = lang[key];
    });

    document.documentElement.lang = currentLang;
    setTimeout(() => {
        handleReveal();
        resetProgressBars(); // 内容更新后，重新跑一次生长动画
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    updateContent();
    window.addEventListener('scroll', handleReveal);
    document.getElementById('lang-toggle').onclick = () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});