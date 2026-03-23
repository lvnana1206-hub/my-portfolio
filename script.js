/**
 * Nana's Portfolio Master Dynamic Script 🍭
 * 核心原则：硬核内容不减，元气动态加满！
 * 已集成：SJTU双学位教育背景、BCAR实习结构、动态技能进度条
 */

// 1. 完整的翻译配置
const translations = {
    zh: {
        langBtn: "English Version",
        // Hero 区域
        heroName: "吕娜娜 Nana 🎀",
        heroTagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同专家",
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

        // 技能名称
        s1: "NLP 洞察 / Prompt Engineering",
        s2: "数据分析 (Python / R / SQL)",
        s3: "内容策略 / SOP 流程优化",
        s4: "英语专业能力 (TEM-8)",
        
        // 项目 1: AI Insight
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP分析—可视化—洞察输出”闭环。</li><li><b>需求识别：</b>利用 TF-IDF 情绪识别，精准定位配送/客服负面集中点。</li>",
        
        // 项目 2: R + NLP
        p2Title: "跨媒介叙事分析系统 (R + NLP) 📚",
        p2Desc: "<li><b>内容结构化：</b>运用叙事学理论拆解原著与电影，利用 R 语言流水线追踪情感演变趋势。</li>",
        p2Btn1: "📄 研究论文.pdf",
        p2Btn2: "🛠️ 系统说明.pdf",
        
        // 项目 3: 疫苗接种
        p3Title: "疫苗接种服务诉求分析 💉",
        p3Desc: "清洗 3.1w+ 条热线数据，朴素贝叶斯分类准确率 92%，产出 6 项闭环建议。",

        // 实习经历 (BCAR 正确结构)
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人 | 2023.12 - 2025.07",
        exp1Content: "<p><b>Background:</b> 负责官媒内容，覆盖 50,000+ 师生。</p><p><b>Challenge:</b> 碎片化时代如何提升长文完读率。</p><p><b>Action:</b> 应用“信息前置”框架，主导《梗指南》等爆款专栏。</p><p><b>Result:</b> ✅ 产出多篇 5,000+ 标杆推文，阅读量翻倍。</p>",

        exp2Title: "上海真爱梦想公益基金会 🕊️",
        exp2Role: "去远方项目运营 | 2024.06 - 2024.09",
        exp2Content: "<p><b>Background:</b> 联动企业资源支持乡村儿童社会实践。</p><p><b>Challenge:</b> 协调 17 家企业不同的 CSR 诉求。</p><p><b>Action:</b> 对接联想、施耐德等名企，优化协作 SOP。</p><p><b>Result:</b> ✅ 实现 100% 项目交付，建立可复制合作模型。</p>",

        exp3Title: "星猿哲科技 (XYZ Robotics) 🤖",
        exp3Role: "政府事务管理 | 2023.09 - 2023.11",
        exp3Content: "<p><b>Background:</b> 助力独角兽企业争取官方认定资质。</p><p><b>Challenge:</b> 15+ 项繁琐细则，需跨部门对齐大量数据。</p><p><b>Action:</b> 深度拆解政策得分点，建立日报沟通机制。</p><p><b>Result:</b> ✅ 100% 申报通过率，成功入选上海市创新目录。</p>",

        exp4Title: "北京中科始创科技 🧪",
        exp4Role: "内容运营 | 2023.02 - 2023.05",
        exp4Content: "<p><b>Background:</b> 将硬核科研动态转化为大众内容。</p><p><b>Challenge:</b> 克服专业知识鸿沟，提升传播效果。</p><p><b>Action:</b> 建立转化漏斗，结构化数据进行降维解读。</p><p><b>Result:</b> ✅ 显著提升完读率，成功执行“大国重器”专题。</p>",
        
        // 页脚
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        // Hero
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Operations | User Growth | Content Strategy",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Coordinator",
        badge3: "📊 Data-Driven Decision Maker",
        
        // Titles
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Core Competencies",
        titleProjects: "🚀 Key Projects",
        titleExp: "📅 Experience",

        // Education
        eduSchool: "Shanghai Jiao Tong University (SJTU)",
        eduDegree: "Bachelor's Degree | Double Major (2020-2025)",
        eduM1: "English Language & Literature",
        eduM2: "Administrative Management",
        eduList: "<li>✨ Interdisciplinary: Global communication & organizational logic.</li><li>✨ Skills: TEM-8 (Test for English Majors-8) Certified.</li>",

        // Skills
        s1: "NLP Insights / Prompt Engineering",
        s2: "Data Analytics (Python / R / SQL)",
        s3: "Content Strategy / SOP Optimization",
        s4: "English Proficiency (TEM-8)",
        
        // Project 1
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li><b>Full Workflow:</b> From data input & NLP analysis to visualization.</li><li><b>Insight:</b> Sentiment analysis tracking for delivery/CS.</li>",
        
        // Project 2
        p2Title: "Transmedial Narrative System (R+NLP) 📚",
        p2Desc: "<li><b>Modeling:</b> Deconstructed narratives via R-based pipelines.</li>",
        p2Btn1: "📄 Research Paper",
        p2Btn2: "🛠️ System Guide",
        
        // Project 3
        p3Title: "Vaccination Service Analysis 💉",
        p3Desc: "Processed 31k+ records with 92% accuracy; 6 actionable suggestions delivered.",

        // Experience (BCAR)
        exp1Title: "SJTU Official Media 📝",
        exp1Role: "Head of Content | 2023.12 - 2025.07",
        exp1Content: "<p><b>Background:</b> Managed campus media for 50k+ audience.</p><p><b>Challenge:</b> Low completion rates in the fragmented info age.</p><p><b>Action:</b> Applied 'Info-Priority' frameworks; led viral columns.</p><p><b>Result:</b> ✅ 50,000+ views with multiple viral 5,000+ hits.</p>",

        exp2Title: "Adream Charitable Foundation 🕊️",
        exp2Role: "Project Operations | 2024.06 - 2024.09",
        exp2Content: "<p><b>Background:</b> Leveraging CSR resources for rural education.</p><p><b>Challenge:</b> Coordinating diverse CSR goals from 17 partners.</p><p><b>Action:</b> Partnered with Lenovo, Schneider, etc.; optimized SOPs.</p><p><b>Result:</b> ✅ 100% project delivery with a scalable model.</p>",

        exp3Title: "XYZ Robotics (Unicorn) 🤖",
        exp3Role: "Gov Affairs | 2023.09 - 2023.11",
        exp3Content: "<p><b>Background:</b> Applying for official certifications.</p><p><b>Challenge:</b> Complex criteria across 15+ items.</p><p><b>Action:</b> Deconstructed scoring pillars; built 0-error mechanisms.</p><p><b>Result:</b> ✅ 100% success rate in official certifications.</p>",

        exp4Title: "Zhongke Shichuang Tech 🧪",
        exp4Role: "Content Operations | 2023.02 - 2023.05",
        exp4Content: "<p><b>Background:</b> Tech research to public-facing content.</p><p><b>Challenge:</b> Crossing knowledge gap for tech audiences.</p><p><b>Action:</b> Built conversion funnels for data visualization.</p><p><b>Result:</b> ✅ Significantly improved reader completion rates.</p>",
        
        // Footer
        footerText: "Let's explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

/**
 * 2. 滚动检测函数
 */
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

/**
 * 3. 核心内容更新函数
 */
function updateContent() {
    const lang = translations[currentLang];
    const isEn = currentLang === 'en';

    // 基础 UI 更新
    const ids = [
        'lang-toggle', 'hero-name', 'hero-tagline', 'badge1', 'badge2', 'badge3',
        'title-edu', 'title-skills', 'title-projects', 'title-exp',
        'edu-school', 'edu-degree', 'edu-m1', 'edu-m2', 'edu-list',
        's1-text', 's2-text', 's3-text', 's4-text',
        'p1-title', 'p1-desc', 'p2-title', 'p2-desc', 'p3-title', 'p3-desc',
        'p2-btn1', 'p2-btn2', 'footer-text'
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        
        // 映射逻辑
        const key = id.replace(/-/g, '').replace('title', 'title').replace('text', '');
        // 特殊处理教育和项目逻辑
        let contentKey = id.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        if (id === 'lang-toggle') contentKey = 'langBtn';
        
        const content = lang[contentKey];
        if (content) {
            if (content.includes('<')) el.innerHTML = content;
            else el.innerText = content;
        }
    });

    // 循环更新 4 个实习经历
    for (let i = 1; i <= 4; i++) {
        const t = document.getElementById(`exp${i}-title`);
        const r = document.getElementById(`exp${i}-role`);
        const c = document.getElementById(`exp${i}-content`);
        if (t) t.innerText = lang[`exp${i}Title`];
        if (r) r.innerText = lang[`exp${i}Role`];
        if (c) c.innerHTML = lang[`exp${i}Content`];
    }

    document.body.className = isEn ? 'en-mode' : 'zh-mode';
    handleReveal();
}

/**
 * 4. 事件监听与初始化
 */
document.addEventListener("DOMContentLoaded", () => {
    updateContent();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
                currentLang = currentLang === 'zh' ? 'en' : 'zh';
                updateContent();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 150);
        });
    }
    window.addEventListener("scroll", handleReveal);
    handleReveal();
});

window.onload = handleReveal;