/**
 * Nana's Portfolio Master Dynamic Script 🍭
 */

const translations = {
    zh: {
        langBtn: "English Version",
        // Hero 区域
        heroName: "吕娜娜 (Nana)🎀",
        heroTagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        
        // 标题
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",

        // 教育背景
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位",
        eduM1: "英语 (English)",
        eduM2: "行政管理 (Admin Management)",
        eduList: "<li>复合学科背景：兼具国际化沟通视野与组织管理逻辑。</li><li>专业技能：英语专业八级 (TEM-8) 证书。</li>",

        // 技能 (对应 sX-text)
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "内容策略 / SOP 流程优化",
        s4Text: "英语专业能力 (TEM-8)",
        
        // 项目经历
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP 分析—可视化—洞察输出”完整流程。</li><li><b>用户需求识别：</b>基于文本分词与 TF-IDF 算法实现情绪识别。</li><li><b>AI 决策建议：</b>自动生成产品优化建议，实现闭环。</li>",
        
        p2Title: "《紫色》跨媒介叙事与情感计算综合研究 📚",
        p2Desc: "<li><b>理论建模：</b>基于热奈特叙事学理论对比叙事差异。</li><li><b>量化分析：</b>利用 R 语言量化追踪角色心路历程，相关系数达 0.767。</li><li><b>核心价值：</b>感性文本的理性逻辑拆解。</li>",
        p2Btn1: "📄 阅读全文 (SJTU)",
        p2Btn2: "📊 数据实验报告",
        
        p3Title: "上海市预防接种服务公众诉求分析 💉",
        p3Desc: "<li><b>文本分类建模：</b>清洗 3.1w+ 条数据，分类准确率达 92%。</li><li><b>政策量化研究：</b>构建回归模型输出 6 项优化建议。</li>",

        // 实习经历 (对应 expX-title/role/content)
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人",
        exp1Content: "<p>✨主理多个核心专栏，累计阅读 50,000+。通过“信息前置”排版实验，产出多篇爆款推文。</p>",

        exp2Title: "上海真爱梦想公益基金会 🕊️",
        exp2Role: "去远方项目运营",
        exp2Content: "<p>🍭组织跟踪 6 个研学项目。对接 17 家企业资源，优化活动 SOP。</p>",

        exp3Title: "星猿哲科技 (XYZ Robotics) 🤖",
        exp3Role: "政府事务管理",
        exp3Content: "<ul class='desc-list-v2'><li><b> 高价值申报：</b>100%通过率，助力企业获得资质背书。</li><li><b> 政策拆解：</b>提炼 3 类申报得分点，优化材料结构。</li><li><b> 跨部门协同：</b>建立政府沟通日报机制，推进项目。</li></ul>",

        exp4Title: "北京中科始创科技 🧪",
        exp4Role: "内容运营",
        exp4Content: "<p>🔍 将复杂科研信息结构化，产出逻辑清晰的多媒介内容。提升完读率。</p>",
        
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
        eduList: "<li>Interdisciplinary background with global vision.</li><li>Certified TEM-8.</li>",
        s1Text: "NLP / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "Strategy / SOP Optimization",
        s4Text: "English Proficiency (TEM-8)",
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li>Full pipeline from data input to insight output.</li><li>TF-IDF based sentiment analysis.</li>",
        p2Title: "Narrative & Sentiment Analysis 📚",
        p2Desc: "<li>Cross-media narrative modeling (Genette).</li><li>R-based sentiment pipeline (r=0.767).</li>",
        p2Btn1: "📄 Read Thesis",
        p2Btn2: "📊 Data Report",
        p3Title: "Vaccination Service Analysis 💉",
        p3Desc: "<li>Processed 31k+ records with 92% accuracy.</li><li>6 actionable suggestions.</li>",
        exp1Title: "SJTU Official Media 📝",
        exp1Role: "Head of Content Operations",
        exp1Content: "<p>Managed columns with 50,000+ reads and viral hits.</p>",
        exp2Title: "Adream Foundation 🕊️",
        exp2Role: "Project Operations",
        exp2Content: "<p>Optimized SOPs for 17 corporate partners.</p>",
        exp3Title: "XYZ Robotics (Unicorn) 🤖",
        exp3Role: "Gov Affairs Management",
        exp3Content: "<ul><li>100% success rate in gov certifications.</li><li>Optimized documentation via cross-dept collaboration.</li></ul>",
        exp4Title: "Zhongke Shichuang Tech 🧪",
        exp4Role: "Content Operations",
        exp4Content: "<p>Structured complex research data into high-completion content.</p>",
        footerText: "Explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

// 背景音乐 (支持本地路径和在线备份)
function initBGM() {
    const audio = new Audio('./assets/bg-music.mp3'); 
    audio.loop = true;
    audio.volume = 0.2;
    const playOnce = () => {
        audio.play().catch(() => {
            audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
            audio.play();
        });
        document.removeEventListener('click', playOnce);
    };
    document.addEventListener('click', playOnce);
}

// 滚动动画
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) el.classList.add("active");
    });
}

// 核心翻译更新逻辑
function updateContent() {
    const lang = translations[currentLang];
    
    // 1. 处理所有 ID (包括带杠的和不带杠的)
    const allIds = [
        'lang-toggle', 'hero-name', 'hero-tagline', 'badge1', 'badge2', 'badge3',
        'title-edu', 'title-skills', 'title-projects', 'title-exp',
        'edu-school', 'edu-degree', 'edu-m1', 'edu-m2', 'edu-list',
        's1-text', 's2-text', 's3-text', 's4-text',
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

        // 映射逻辑：比如 p1-title -> p1Title
        let key = id.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        if (id === 'lang-toggle') key = 'langBtn';
        
        const content = lang[key];
        if (content) {
            el.innerHTML = content;
        }
    });

    document.body.className = currentLang + '-mode';
    handleReveal();
}

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