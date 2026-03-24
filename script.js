/**
 * Nana's Portfolio Master Script 🍭
 * 核心功能：多语言切换、商务BD定位同步、技能进度条动画、滚动显现效果
 */

const translations = {
    zh: {
        langBtn: "English Version",
        // 身份与定位 (已修正为商务 BD)
        heroName: "吕娜娜 (Nana) 🎀",
        heroTagline: "AI 产品运营 | 海外商务 BD | 用户增长策略",
        
        // 标签云
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同能手", 
        badge3: "📊 数据驱动决策",
        
        // 板块标题
        titleEdu: "🎓 教育背景",
        titleSkills: "🌟 核心技能储备",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",
        titleSjtu: "🐾 校园经历",
        
        // 教育背景 (上海交通大学)
        eduSchool: "上海交通大学 (SJTU)",
        eduDegree: "本科 | 双学士学位",
        eduM1: "英语 (English)",
        eduM2: "行政管理 (Admin Management)",
        eduList: "<li>✨ 复合学科背景：兼具国际化沟通视野与组织管理逻辑。</li><li>✨ 专业技能：英语专业八级 (TEM-8) 证书。</li>",
        
        // 技能描述
        s1Text: "NLP 洞察 / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "商务洽谈 / SOP 流程优化",
        s4Text: "跨职能协同 / 资源整合",
        
        // 联系方式 (已修正)
        contactEmail: "Email: lvnana1206@163.com",
        contactPhone: "Phone: +86 153-3931-4431",
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Ops | Business Development | Growth Strategy",
        
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Adept",
        badge3: "📊 Data-Driven",
        
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Competencies",
        titleProjects: "🚀 Projects",
        titleExp: "📅 Experience",
        titleSjtu: "🐾 SJTU Life",
        
        eduSchool: "Shanghai Jiao Tong University",
        eduDegree: "Bachelor's | Double Major",
        eduM1: "English",
        eduM2: "Admin Management",
        eduList: "<li>✨ Interdisciplinary: International communication + management logic.</li><li>✨ Skills: TEM-8 Certified (Test for English Majors).</li>",
        
        s1Text: "NLP Insights / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "Business Negotiation / SOP Optimization",
        s4Text: "Cross-functional Collaboration",
        
        contactEmail: "Email: lvnana1206@163.com",
        contactPhone: "Phone: +86 153-3931-4431",
        footerText: "Explore the future of AI with Nana! 🍭"
    }
};
const translations = {
    zh: {
        titleSkills: "🌟 核心技能储备",
        skill1: "NLP 洞察 / Prompt Engineering",
        skill2: "Python (Pandas/NLTK) / R / SQL",
        skill3: "内容策略 / SOP 流程优化",
        skill4: "用户分层运营 / 跨职能协同",
        
        titleProjects: "🚀 核心项目经历",
        p1Title: "AI 用户洞察分析平台 (Nana Insight AI) 🤖",
        p1Desc: `<li><b>全流程设计：</b>构建“数据输入—NLP 分析—可视化—洞察输出”完整流程，支持本地生活及 App 评价场景。</li>
                 <li><b>用户需求识别：</b>基于文本分词与 TF-IDF 算法，提取关键词与情绪，自动定位配送、客服等负面集中点。</li>
                 <li><b>AI 决策建议：</b>基于分析结果自动生成产品优化建议，实现从数据分析到决策支持的闭环。</li>
                 <li><b>交互设计：</b>基于 Streamlit 搭建交互式看板（指标卡、词云图），显著提升业务分析效率。</li>`,
        p1Btn: "查看 在线 Demo ➔",

        titleExp: "📅 实习与社会实践",
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人",
        exp1Desc: "✨ 主理多个核心专栏，累计阅读 50,000+。通过“信息前置”排版实验，产出多篇爆款推文。",
        
        footer: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        titleSkills: "🌟 Core Skills",
        skill1: "NLP Insights / Prompt Engineering",
        skill2: "Python (Pandas/NLTK) / R / SQL",
        skill3: "Content Strategy / SOP Optimization",
        skill4: "User Operations / Cross-functional Collab",
        
        titleProjects: "🚀 Key Projects",
        p1Title: "AI User Insight Platform (Nana Insight AI) 🤖",
        p1Desc: `<li><b>End-to-end Design:</b> Built a "Data-NLP-Viz-Insight" workflow for O2O and App reviews.</li>
                 <li><b>Need Identification:</b> Extracted keywords/sentiment via TF-IDF to locate pain points in delivery/service.</li>
                 <li><b>AI Recommendation:</b> Automated product optimization suggestions, closing the loop from data to decision.</li>
                 <li><b>UI/UX Design:</b> Built interactive dashboards via Streamlit, significantly improving analytical efficiency.</li>`,
        p1Btn: "Live Demo ➔",

        titleExp: "📅 Experience",
        exp1Title: "SJTU Thought (Official Media) 📝",
        exp1Role: "Content Operations Lead",
        exp1Desc: "✨ Managed core columns with 50,000+ views. Produced viral posts through information-first layout experiments.",
        
        footer: "Explore the infinite possibilities of AI with Nana! 🍭"
    }
};

// 切换语言的函数
function updateLanguage(lang) {
    // 标题类
    document.getElementById('title-skills').innerText = translations[lang].titleSkills;
    document.getElementById('title-projects').innerText = translations[lang].titleProjects;
    document.getElementById('title-exp').innerText = translations[lang].titleExp;
    
    // 技能项 (建议给对应的 span 加 id，如 id="s1")
    if(document.getElementById('s1')) document.getElementById('s1').innerText = translations[lang].skill1;
    if(document.getElementById('s2')) document.getElementById('s2').innerText = translations[lang].skill2;
    
    // 项目1
    document.getElementById('p1-title').innerText = translations[lang].p1Title;
    document.getElementById('p1-desc').innerHTML = translations[lang].p1Desc;
    // 按钮 (建议加 id="p1-btn")
    if(document.getElementById('p1-btn')) document.getElementById('p1-btn').innerText = translations[lang].p1Btn;

    // 页脚
    document.getElementById('footer-text').innerText = translations[lang].footer;
}

let currentLang = 'zh';

/**
 * 核心功能 1：更新页面所有翻译文本
 */
function updateContent() {
    const lang = translations[currentLang];
    
    // 需要翻译的 ID 列表 (请确保 HTML 中的 ID 与此一致)
    const allIds = [
        'lang-toggle', 'hero-name', 'hero-tagline', 
        'badge1', 'badge2', 'badge3',
        'title-edu', 'title-skills', 'title-projects', 'title-exp', 'title-sjtu',
        'edu-school', 'edu-degree', 'edu-m1', 'edu-m2', 'edu-list',
        's1-text', 's2-text', 's3-text', 's4-text',
        'contact-email', 'contact-phone', 'footer-text'
    ];

    allIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        // 将 kebab-case (title-edu) 转换为 camelCase (titleEdu) 匹配 key
        let key = id === 'lang-toggle' ? 'langBtn' : 
                  id.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        
        if (lang[key]) {
            el.innerHTML = lang[key];
        }
    });

    // 切换语言后，重新触发一次进度条动画
    setTimeout(resetProgressBars, 150);
}

/**
 * 核心功能 2：技能进度条动画触发
 */
function resetProgressBars() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        // 优先从 data-width 属性读取百分比，若无则尝试读取直接定义的 style.width
        const targetWidth = fill.getAttribute('data-width') || fill.style.width;
        if (targetWidth) {
            fill.style.width = '0';
            fill.offsetHeight; // 强制浏览器重绘
            fill.style.width = targetWidth;
        }
    });
}

/**
 * 核心功能 3：滚动监听 (Reveal 动画)
 */
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const revealPoint = 100; // 距离视口底部 100px 时触发

        if (rect.top < windowHeight - revealPoint) {
            if (!el.classList.contains('active')) {
                el.classList.add("active");
                // 如果当前进入视口的区域包含进度条，触发它们
                if (el.querySelector('.progress-fill')) {
                    resetProgressBars();
                }
            }
        }
    });
}

/**
 * 初始化监听
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. 初始化页面内容
    updateContent();
    
    // 2. 绑定语言切换按钮
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.onclick = (e) => {
            e.preventDefault();
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            updateContent();
        };
    }

    // 3. 绑定滚动事件
    window.addEventListener('scroll', handleReveal);
    
    // 4. 首屏可见项检查
    handleReveal();
});