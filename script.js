/**
 * Nana's Portfolio Master Dynamic Script 🍭
 * 集成：背景音乐控制、语言切换、全量内容更新
 */

const translations = {
    zh: {
        langBtn: "English Version",
        heroName: "吕娜娜 (Nana)🎀",
        heroTagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位",
        eduM1: "英语 (English)",
        eduM2: "行政管理 (Admin Management)",
        eduList: "<li>✨ 复合学科背景：兼具国际化沟通视野与组织管理逻辑。</li><li>✨ 专业技能：英语专业八级 (TEM-8) 证书。</li>",
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "内容策略 / SOP 流程优化",
        s4Text: "英语专业能力 (TEM-8)",
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP 分析—可视化—洞察输出”完整流程。</li>",
        p2Title: "《紫色》跨媒介叙事与情感计算综合研究 📚",
        p2Desc: "<li><b>理论建模：</b>基于热奈特叙事学理论。</li>",
        p2Btn1: "📄 阅读全文 (SJTU)",
        p2Btn2: "📊 数据实验报告",
        p3Title: "上海市预防接种服务公众诉求分析 💉",
        p3Desc: "<li><b>文本分类建模：</b>清洗 3.1w+ 条数据。</li>",
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人",
        exp1Content: "<p>✨主理多个核心专栏，累计阅读 50,000+。</p>",
        exp2Title: "上海真爱梦想公益基金会 🕊️",
        exp2Role: "去远方项目运营",
        exp2Content: "<p>🍭优化活动 SOP，提升转化效率。</p>",
        exp3Title: "星猿哲科技 (XYZ Robotics) 🤖",
        exp3Role: "政府事务管理",
        exp3Content: "<p>✅ 100%通过率，助力企业获得资质背书。</p>",
        exp4Title: "北京中科始创科技 🧪",
        exp4Role: "内容运营",
        exp4Content: "<p>🔍 将复杂科研信息结构化，提升完读率。</p>",
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Operations | Growth | Content Strategy",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Collaborator",
        badge3: "📊 Data-Driven",
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Competencies",
        titleProjects: "🚀 Projects",
        titleExp: "📅 Experience",
        eduSchool: "Shanghai Jiao Tong University",
        eduDegree: "Bachelor's | Double Major",
        eduM1: "English",
        eduM2: "Admin Management",
        eduList: "<li>✨ Interdisciplinary background with global vision.</li>",
        s1Text: "NLP / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "Strategy / SOP Optimization",
        s4Text: "English Proficiency (TEM-8)",
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li>Full pipeline from data input to insight output.</li>",
        p2Title: "Narrative & Sentiment Analysis 📚",
        p2Desc: "<li>Cross-media narrative modeling.</li>",
        p2Btn1: "📄 Read Thesis",
        p2Btn2: "📊 Data Report",
        p3Title: "Vaccination Analysis 💉",
        p3Desc: "<li>Processed 31k+ records with 92% accuracy.</li>",
        exp1Title: "SJTU Official Media 📝",
        exp1Role: "Head of Content Operations",
        exp1Content: "<p>Managed columns with 50,000+ reads.</p>",
        exp2Title: "Adream Foundation 🕊️",
        exp2Role: "Project Operations",
        exp2Content: "<p>Optimized SOPs for corporate partners.</p>",
        exp3Title: "XYZ Robotics (Unicorn) 🤖",
        exp3Role: "Gov Affairs Management",
        exp3Content: "<p>✅ 100% success rate in gov certifications.</p>",
        exp4Title: "Zhongke Shichuang Tech 🧪",
        exp4Role: "Content Operations",
        exp4Content: "<p>Structured complex research data.</p>",
        footerText: "Explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';
let audio;

// 1. 初始化背景音乐
function initBGM() {
    audio = new Audio('./assets/bg-music.mp3'); 
    audio.loop = true;
    audio.volume = 0.2;

    const musicBtn = document.getElementById('music-toggle');

    // 监听全局第一次点击以启动播放
    const startAudioOnFirstClick = () => {
        audio.play().then(() => {
            musicBtn.innerText = "🎵 On";
            document.removeEventListener('click', startAudioOnFirstClick);
        }).catch(e => console.log("等待交互..."));
    };
    document.addEventListener('click', startAudioOnFirstClick);

    // 绑定暂停/播放键
    if (musicBtn) {
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止触发全局点击
            if (audio.paused) {
                audio.play();
                musicBtn.innerText = "🎵 On";
            } else {
                audio.pause();
                musicBtn.innerText = "🔇 Off";
            }
        });
    }
}

// 2. 滚动动画逻辑
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) el.classList.add("active");
    });
}

// 3. 内容更新逻辑
function updateContent() {
    const lang = translations[currentLang];
    const allIds = [
        'lang-toggle', 'hero-name', 'hero-tagline', 'badge1', 'badge2', 'badge3',
        'title-edu', 'title-skills', 'title-projects', 'title-exp',
        'edu-school', 'edu-degree', 'edu-m1', 'edu-m2', 'edu-list',
        'p1-title', 'p1-desc', 'p2-title', 'p2-desc', 'p2-btn1', 'p2-btn2',
        'p3-title', 'footer-text',
        'exp1-title', 'exp1-role', 'exp1-content',
        'exp2-title', 'exp2-role', 'exp2-content',
        'exp3-title', 'exp3-role', 'exp3-content',
        'exp4-title', 'exp4-role', 'exp4-content'
    ];

    allIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        let key = id.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        if (id === 'lang-toggle') key = 'langBtn';
        if (lang[key]) el.innerHTML = lang[key];
    });

    // 技能条文字特殊处理
    for (let i = 1; i <= 4; i++) {
        const sEl = document.getElementById(`s${i}-text`);
        if (sEl && lang[`s${i}Text`]) sEl.innerText = lang[`s${i}Text`];
    }

    document.body.className = currentLang + '-mode';
    handleReveal();
}

// 4. 初始化
document.addEventListener("DOMContentLoaded", () => {
    initBGM();
    updateContent();
    
    document.getElementById('lang-toggle').onclick = () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener("scroll", handleReveal);
});