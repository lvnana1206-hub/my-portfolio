// --- Complete Multilingual Dictionary ---
const langData = {
    en: {
        name: "Nana Lyu (吕娜娜)",
        title: "AI Product Operations | User Growth | BD",
        desc: '"I turn user insights into growth, and partnerships into scalable results."',
        tag_ps: "💡 Creative Problem Solver",
        tag_bd: "🤝 Expert Negotiator",
        tag_data: "📊 Data Enthusiast",
        tag_lang: "🌍 Intercultural Navigator",
        skills_viz: "Skills & Power Index",
        p_t: "AI & Data Projects",
        p_insight_desc: "NLP-based User Voice Analysis Platform (Python/Streamlit). 📊 Analyzed 3.1w+ user entries.",
        p_narr_t: "Intercultural Narrative Analysis",
        p_narr_desc: "Quantifying literary structure using Digital Humanities methods (R). ✒️ Narratology modeling.",
        intern_t: "Professional Experience (Internships)",
        intern1_name: "Shanghai Adream Charitable Foundation",
        intern1_desc: "BD & Operations: Connected 17 Fortune 500 companies (Lenovo, Schneider) for educational programs.",
        intern2_name: "XYZ Robotics (Starry Sky Tech) ToB/ToG BD",
        intern2_desc: "Cross-functional ToB BD coordination; obtained critical policy certifications (AI Innovation Catalog) with 100% success rate.",
        footer: '"Let’s build scalable and meaningful products together."',
        btn_lang: "中文"
    },
    zh: {
        name: "吕娜娜 (Nana)",
        title: "AI 产品运营 | 用户增长 | 商务拓展 (BD)",
        desc: "“将用户洞察转化为增长，将商务合作转化为可规模化的成果。”",
        tag_ps: "💡 创新型问题解决者",
        tag_bd: "🤝 资深商务谈判家",
        tag_data: "📊 数据分析发烧友",
        tag_lang: "🌍 跨文化商业向导",
        skills_viz: "核心技能与能力指数",
        p_t: "AI 与数据项目",
        p_insight_desc: "基于 NLP 的用户声音分析平台 (Python/Streamlit)。📊 清洗分析 3.1w+ 条数据。",
        p_narr_t: "跨媒介叙事结构挖掘",
        p_narr_desc: "运用数字人文方法量化文学分析 (R)。✒️ 建立叙事学模型。",
        intern_t: "工作经历（BD 与运营实习）",
        intern1_name: "上海真爱梦想公益基金会",
        intern1_desc: "运营与商务拓展 (BD)：对接 17 家世界 500 强企业（联想、施耐德）落地研学项目。",
        intern2_name: "星猿哲科技 (XYZ Robotics) 机器人政企 BD",
        intern2_desc: "跨职能 ToB BD 协同；主导高价值政策项目申报（创新产品目录），获 100% 成功率。",
        footer: "“期待与你一起创造有价值的产品与合作。”",
        btn_lang: "English"
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'en'; // English default

function applyLang(lang) {
    const data = langData[lang];
    document.body.classList.add('fade'); // Start fade out

    setTimeout(() => {
        // --- 1. Hero & Tags ---
        document.getElementById('hero-name').innerText = data.name;
        document.getElementById('hero-title').innerText = data.title;
        document.getElementById('hero-desc').innerText = data.desc;
        const tags = document.querySelectorAll('.personal-tags .tag');
        tags[0].innerText = data.tag_ps;
        tags[1].innerText = data.tag_bd;
        tags[2].innerText = data.tag_data;
        tags[3].innerText = data.tag_lang;

        // --- 2. Sections Titles ---
        document.getElementById('skills-viz-title').innerText = data.skills_viz;
        document.getElementById('project-title').innerText = data.p_t;
        document.getElementById('intern-title').innerText = data.intern_t;

        // --- 3. Projects (Innovator) ---
        document.getElementById('p-insight-desc').innerText = data.p_insight_desc;
        document.getElementById('p-narrative-title').innerText = data.p_narr_t;
        document.getElementById('p-narrative-desc').innerText = data.p_narr_desc;

        // --- 4. Internships (Achiever) ---
        document.getElementById('intern1-name').innerText = data.intern1_name;
        document.getElementById('intern1-desc').innerText = data.intern1_desc;
        document.getElementById('intern2-name').innerText = data.intern2_name;
        document.getElementById('intern2-desc').innerText = data.intern2_desc;

        // --- 5. Footer ---
        document.getElementById('footer-cta').innerText = data.footer;
        document.getElementById('lang-btn').innerText = data.btn_lang;

        document.body.classList.remove('fade'); // Fade back in
    }, 200); // Small delay for fade effect
}

// --- Skill Bar Magic: Fill on Hover/Scroll ---
function activateSkillBars() {
    const fills = document.querySelectorAll('.bar-fill');
    fills.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%'; // Start at 0
        
        // Use a slight delay to allow the 'width 0%' to take effect, then fill
        setTimeout(() => {
            bar.style.width = targetWidth; // Fill to original value
        }, 100);
    });
}

// Hover event for skill viz section to re-trigger bars
document.querySelector('.skills-viz').addEventListener('mouseenter', activateSkillBars);

// --- Initial Setup & Language Switcher ---
applyLang(currentLang);
activateSkillBars(); // Initial fill

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    applyLang(currentLang);
    localStorage.setItem('preferredLang', currentLang); // Remember choice
});
