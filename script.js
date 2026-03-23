/**
 * Nana's Portfolio - Dynamic Content Script
 * 保持元气活泼的同时，确保硬核内容准确无误 🍬
 */

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
        titleSkills: "🌟 技能与核心竞争力",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",
        
        // 项目 1: AI Insight
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP分析—可视化—洞察输出”闭环。</li><li><b>需求识别：</b>利用 TF-IDF 提取关键词与情绪，定位负面集中点。</li>",
        
        // 项目 2: R + NLP (双文件下载)
        p2Title: "跨媒介叙事分析系统 (R + NLP) 📚",
        p2Desc: "<li><b>内容结构化：</b>运用叙事学理论拆解原著与电影，利用 R 语言流水线追踪情感演变趋势。</li>",
        p2Btn1: "📄 研究论文.pdf",
        p2Btn2: "🛠️ 系统说明.pdf",
        
        // 项目 3: 疫苗接种
        p3Title: "疫苗接种服务诉求分析 💉",
        p3Desc: "清洗 3.1w+ 条热线数据，朴素贝叶斯分类准确率 92%，产出 6 项闭环建议。",
        
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
        titleSkills: "🌟 Core Competencies",
        titleProjects: "🚀 Key Projects",
        titleExp: "📅 Experience",
        
        // Project 1
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li><b>Full Workflow:</b> From data input & NLP analysis to visualization.</li><li><b>Insight:</b> Used TF-IDF for keyword extraction & sentiment tracking.</li>",
        
        // Project 2
        p2Title: "Transmedial Narrative System (R+NLP) 📚",
        p2Desc: "<li><b>Modeling:</b> Deconstructed narratives via R-based pipelines to track emotional shifts.</li>",
        p2Btn1: "📄 Research Paper.pdf",
        p2Btn2: "🛠️ System Guide.pdf",
        
        // Project 3
        p3Title: "Vaccination Service Analysis 💉",
        p3Desc: "Processed 31k+ records with 92% classification accuracy; 6 actionable suggestions delivered.",
        
        // Footer
        footerText: "Let's explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

/**
 * 核心更新函数
 */
function updateContent() {
    const lang = translations[currentLang];
    const isEn = currentLang === 'en';

    // 切换按钮文字
    document.getElementById('lang-toggle').innerText = lang.langBtn;
    
    // 更新 Hero 区域
    document.getElementById('hero-name').innerText = lang.heroName;
    document.getElementById('hero-tagline').innerText = lang.heroTagline;
    document.getElementById('badge1').innerText = lang.badge1;
    document.getElementById('badge2').innerText = lang.badge2;
    document.getElementById('badge3').innerText = lang.badge3;

    // 更新各版块标题
    document.getElementById('title-skills').innerText = lang.titleSkills;
    document.getElementById('title-projects').innerText = lang.titleProjects;
    document.getElementById('title-exp').innerText = lang.titleExp;

    // 更新项目 1
    document.getElementById('p1-title').innerText = lang.p1Title;
    document.getElementById('p1-desc').innerHTML = lang.p1Desc;

    // 更新项目 2 及双文件按钮
    document.getElementById('p2-title').innerText = lang.p2Title;
    document.getElementById('p2-desc').innerHTML = lang.p2Desc;
    const fileLinks = document.querySelectorAll('.btn-file');
    if (fileLinks.length >= 2) {
        fileLinks[0].innerText = lang.p2Btn1;
        fileLinks[1].innerText = lang.p2Btn2;
    }

    // 更新项目 3
    document.getElementById('p3-title').innerText = lang.p3Title;
    document.getElementById('p3-desc').innerText = lang.p3Desc;

    // 页脚内容
    document.querySelector('.footer p:first-child').innerText = lang.footerText;

    // 为全页面切换语言样式（可选：切换字体等）
    document.body.className = isEn ? 'en-mode' : 'zh-mode';
}

/**
 * 语言切换监听
 */
document.getElementById('lang-toggle').addEventListener('click', function() {
    // 增加一个可爱的点击反馈：稍微晃动一下按钮
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateContent();
        // 自动平滑滚动到顶部，让面试官看到变化
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
});

// 初始化
window.onload = updateContent;
