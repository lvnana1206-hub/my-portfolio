/**
 * Nana's Portfolio Master Dynamic Script 🍭
 * 集成：背景音乐、SJTU 双学位背景、BCAR 实习结构、全项目翻译、滚动动画
 * 状态：跨职能协同能手 (badge2) 已修正
 */

// 1. 完整的中英文翻译配置
const translations = {
    zh: {
        langBtn: "English Version",
        // Hero 区域
        heroName: "吕娜娜 Nana 🎀",
        heroTagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        
        // 标题
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",

        // 教育背景 (SJTU 双学位)
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位 (2020.09 - 2025.06)",
        eduM1: "英语专业 (English)",
        eduM2: "行政管理专业 (Admin Management)",
        eduList: "<li>✨ 复合学科背景：兼具国际化沟通视野与组织管理逻辑。</li><li>✨ 专业技能：英语专业八级 (TEM-8) 证书。</li>",

        // 技能进度条文字
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "数据分析 (Python / R / SQL)",
        s3Text: "内容策略 / SOP 流程优化",
        s4Text: "英语专业能力 (TEM-8)",
        
        // 项目 1: AI Insight
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP分析—可视化—洞察输出”闭环。</li><li><b>需求识别：</b>利用 TF-IDF 情绪识别，精准定位负面集中点。</li><li><b>交互设计：</b>基于 Streamlit 搭建交互式数据看板。</li>",
        
        // 项目 2: R + NLP (紫色项目)
        p2Title: "《紫色》跨媒介叙事与情感计算综合研究 📚",
        p2Desc: "<li><b>理论建模：</b>基于热奈特叙事学理论，对比原著小说与电影版的叙事差异。</li><li><b>量化分析：</b>利用 R 语言构建动态情感流水线，相关系数达 0.767。</li><li><b>核心价值：</b>实现感性文本的理性逻辑拆解。</li>",
        p2Btn1: "📄 阅读全文 (SJTU)",
        p2Btn2: "📊 数据实验报告",
        
        // 项目 3: 疫苗接种
        p3Title: "上海市预防接种服务公众诉求分析 💉",
        p3Desc: "<li><b>文本分类：</b>清洗 3.1w+ 条数据，分类准确率达 92%。</li><li><b>政策研究：</b>量化评估接种点布局并输出 6 项优化建议。</li>",

        // 实习经历 (BCAR 结构)
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人",
        exp1Content: "<p><b>Background:</b> 负责官媒内容，覆盖 50,000+ 师生。</p><p><b>Action:</b> 应用“信息前置”框架，主导《梗指南》等爆款专栏。</p><p><b>Result:</b> ✅ 产出多篇 5,000+ 标杆推文，阅读量翻倍。</p>",

        exp2Title: "上海真爱梦想公益基金会 🕊️",
        exp2Role: "去远方项目运营",
        exp2Content: "<p><b>Background:</b> 联动企业资源支持乡村儿童社会实践。</p><p><b>Action:</b> 对接联想、施耐德等名企，优化协作 SOP。</p><p><b>Result:</b> ✅ 实现 100% 项目交付，建立可复制合作模型。</p>",

        exp3Title: "星猿哲科技 (XYZ Robotics) 🤖",
        exp3Role: "政府事务管理",
        exp3Content: "<p><b>Background:</b> 助力独角兽企业争取官方认定资质。</p><p><b>Action:</b> 深度拆解政策得分点，建立日报沟通机制。</p><p><b>Result:</b> ✅ 100% 申报通过率，成功入选上海市创新目录。</p>",

        exp4Title: "北京中科始创科技 🧪",
        exp4Role: "内容运营",
        exp4Content: "<p><b>Background:</b> 将硬核科研动态转化为大众内容。</p><p><b>Action:</b> 建立转化漏斗，结构化数据进行降维解读。</p><p><b>Result:</b> ✅ 显著提升完读率，成功执行“大国重器”专题。</p>",
        
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Operations | User Growth | Content Strategy",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Collaborator",
        badge3: "📊 Data-Driven",
        
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Core Competencies",
        titleProjects: "🚀 Key Projects",
        titleExp: "📅 Experience",

        eduSchool: "Shanghai Jiao Tong University (SJTU)",
        eduDegree: "Bachelor's | Double Major (2020-2025)",
        eduM1: "English Language & Literature",
        eduM2: "Administrative Management",
        eduList: "<li>✨ Interdisciplinary: Global vision & organizational logic.</li><li>✨ Skills: TEM-8 Certified.</li>",

        s1Text: "NLP Insights / Prompt Engineering",
        s2Text: "Data Analytics (Python / R / SQL)",
        s3Text: "Content Strategy / SOP Optimization",
        s4Text: "English Proficiency (TEM-8)",
        
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li><b>Full Workflow:</b> NLP analysis to visualization pipeline.</li><li><b>Recognition:</b> TF-IDF based sentiment analysis.</li>",
        
        p2Title: "Narrative & Sentiment Analysis 📚",
        p2Desc: "<li><b>Modeling:</b> Deconstructed narratives comparing movie and novel.</li><li><b>Computing:</b> Built R-based sentiment pipelines (r=0.767).</li>",
        p2Btn1: "📄 Read Thesis (SJTU)",
        p2Btn2: "📊 View R-Report",
        
        p3Title: "Vaccination Service Analysis 💉",
        p3Desc: "<li><b>NLP:</b> 31k+ records with 92% accuracy.</li><li><b>Policy:</b> 6 actionable suggestions delivered.</li>",

        exp1Title: "SJTU Official Media 📝",
        exp1Role: "Head of Content Operations",
        exp1Content: "<p><b>Background:</b> Managed campus media for 50k+ audience.</p><p><b>Action:</b> Applied 'Info-Priority' frameworks.</p><p><b>Result:</b> ✅ Multiple viral hits with 5,000+ views.</p>",

        exp2Title: "Adream Charitable Foundation 🕊️",
        exp2Role: "Project Operations",
        exp2Content: "<p><b>Background:</b> Rural education social practice via CSR.</p><p><b>Action:</b> Partnered with Lenovo, Schneider; optimized SOPs.</p><p><b>Result:</b> ✅ 100% project delivery with scalable models.</p>",

        exp3Title: "XYZ Robotics (Unicorn) 🤖",
        exp3Role: "Gov Affairs Management",
        exp3Content: "<p><b>Background:</b> Applying for official certifications.</p><p><b>Action:</b> Deconstructed scoring pillars; built reporting mechanisms.</p><p><b>Result:</b> ✅ 100% success rate in official certifications.</p>",

        exp4Title: "Zhongke Shichuang Tech 🧪",
        exp4Role: "Content Operations",
        exp4Content: "<p><b>Background:</b> Tech research to public-facing content.</p><p><b>Action:</b> Built conversion funnels for tech storytelling.</p><p><b>Result:</b> ✅ Significantly improved reader completion rates.</p>",
        
        footerText: "Let's explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

// 2. 背景音乐逻辑 (融合版)
function initBGM() {
    // 自动检测路径：优先使用你代码中提到的 ./assets/bg-music.mp3，备用外部链接
    const audio = new Audio('./assets/bg-music.mp3'); 
    audio.loop = true;
    audio.volume = 0.2;

    const startAudio = () => {
        audio.play().then(() => {
            document.removeEventListener('click', startAudio);
            console.log("BGM Started!");
        }).catch(err => {
            // 如果本地文件加载失败，尝试备用地址
            audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
            audio.play();
        });
    };
    document.addEventListener('click', startAudio);
}

// 3. 滚动动画检测
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// 4. 核心内容更新函数 (全量版)
function updateContent() {
    const lang = translations[currentLang];
    
    // 包含所有需要更新的 ID，确保 badge2 在列
    const ids = [
        'lang-toggle', 'hero-name', 'hero-tagline', 'badge1', 'badge2', 'badge3',
        'title-edu', 'title-skills', 'title-projects', 'title-exp',
        'edu-school', 'edu-degree', 'edu-m1', 'edu-m2', 'edu-list',
        's1-text', 's2-text', 's3-text', 's4-text',
        'p1-title', 'p1-desc', 
        'p2-title', 'p2-desc', 'p2-btn1', 'p2-btn2',
        'p3-title', 'p3-desc', 'footer-text'
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        
        // 驼峰转换逻辑
        let key = id.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        if (id === 'lang-toggle') key = 'langBtn';
        // 针对 s1-text 这种特殊 ID 的处理
        if (id.includes('-text')) key = id.replace('-text', 'Text');
        
        const content = lang[key];
        if (content) {
            el.innerHTML = content; // 使用 innerHTML 确保 HTML 标签和表情生效
        }
    });

    // 处理 4 个实习经历
    for (let i = 1; i <= 4; i++) {
        const t = document.getElementById(`exp${i}-title`);
        const r = document.getElementById(`exp${i}-role`);
        const c = document.getElementById(`exp${i}-content`);
        if (t) t.innerText = lang[`exp${i}Title`];
        if (r) r.innerText = lang[`exp${i}Role`];
        if (c) c.innerHTML = lang[`exp${i}Content`];
    }

    document.body.className = currentLang + '-mode';
    handleReveal(); 
}

// 5. 事件监听初始化
document.addEventListener("DOMContentLoaded", () => {
    initBGM();
    updateContent();
    
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            updateContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    window.addEventListener("scroll", handleReveal);
    handleReveal();
});