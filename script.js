const translations = {
    en: {
        langBtn: "切换至中文",
        name: "Nana Lyu",
        tagline: "AI Product Operations | User Growth | BD",
        badge1: "💡 Creative Solver", badge2: "🤝 Expert Negotiator", badge3: "📊 Data-Driven",
        title_skills: "Skill Power Index",
        h_lang: "Languages",
        list_lang: "<li><b>English:</b> TEM-8, business fluent.</li><li><b>French:</b> CFT-4 Level.</li>",
        h_tech: "Technical Skills",
        p_tech: "Python (Pandas, NLTK), R (ggplot2), SQL, Data Modeling.",
        h_soft: "Soft Skills",
        p_soft: "Cross-functional collaboration, B2B negotiation, User Insight.",
        title_projects: "Core Projects",
        p1_title: "Nana Insight AI Platform",
        p1_desc: "A rigorous NLP engine that mines 31,000+ user reviews to guide product growth.",
        p2_title: "Transmedial Sentiment System",
        p2_desc: "Modeling 'Awakening' stages through R-based sentiment tracking for content strategy.",
        footer: "Looking forward to building great products with you."
    },
    zh: {
        langBtn: "English Version",
        name: "吕娜娜 (Nana)",
        tagline: "AI 产品运营 | 用户增长 | 商务拓展 (BD)",
        badge1: "💡 创新问题解决者", badge2: "🤝 资深谈判专家", badge3: "📊 数据驱动决策",
        title_skills: "技能与核心竞争力",
        h_lang: "语言能力",
        list_lang: "<li><b>英语：</b>专业八级 (TEM-8)，精通商务表达。</li><li><b>法语：</b>公共法语四级。</li>",
        h_tech: "专业技能",
        p_tech: "Python (Pandas / NLTK)、R 语言、统计建模、SQL、Excel。 ",
        h_soft: "软技能与沟通",
        p_soft: "跨职能团队协同、B端资源拓展、用户痛点洞察、谈判。 ",
        title_projects: "核心项目经历",
        p1_title: "AI 用户洞察分析平台",
        p1_desc: "严谨的 NLP 挖掘工具，将 3.1w+ 评论转化为产品决策逻辑。",
        p2_title: "跨媒介叙事与情感分析系统",
        p2_desc: "将文学叙事结构化建模，为内容创作提供分钟级情感量化支持。",
        footer: "期待与你一起创造有价值的产品。"
    }
};

let currentLang = 'zh';

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    const lang = translations[currentLang];
    
    // 更新所有文字内容
    document.getElementById('lang-toggle').innerText = lang.langBtn;
    document.getElementById('hero-name').innerText = lang.name;
    document.getElementById('hero-tagline').innerText = lang.tagline;
    document.getElementById('badge1').innerText = lang.badge1;
    document.getElementById('badge2').innerText = lang.badge2;
    document.getElementById('badge3').innerText = lang.badge3;
    document.getElementById('title-skills').innerText = lang.title_skills;
    document.getElementById('h-lang').innerText = lang.h_lang;
    document.getElementById('list-lang').innerHTML = lang.list_lang;
    document.getElementById('h-tech').innerText = lang.h_tech;
    document.getElementById('p-tech').innerText = lang.p_tech;
    document.getElementById('h-soft').innerText = lang.h_soft;
    document.getElementById('p_soft').innerText = lang.p_soft;
    document.getElementById('title_projects').innerText = lang.title_projects;
    document.getElementById('p1-title').innerText = lang.p1_title;
    document.getElementById('p1-desc').innerText = lang.p1_desc;
    document.getElementById('p2-title').innerText = lang.p2_title;
    document.getElementById('p2-desc').innerText = lang.p2_desc;
    document.getElementById('footer-text').innerText = lang.footer;
});
