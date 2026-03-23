const translations = {
    en: {
        langBtn: "切换至中文",
        name: "Nana Lyu",
        tagline: "AI Product Operations | User Growth | Content Strategy",
        badge1: "💡 Creative Solver",
        badge2: "🤝 Cross-functional Coordinator",
        badge3: "📊 Data-Driven Decision Maker",
        
        title_skills: "Core Competencies",
        h_lang: "Language",
        list_lang: "<li><b>English:</b> TEM-8, business fluent.</li><li><b>French:</b> CFT-4, good communication skills.</li>",
        
        title_projects: "Key Projects",
        p3_title: "Public Appeal Analysis for Vaccine Services",
        p3_desc: "<li><b>Modeling:</b> Built Naive Bayes models with 92% accuracy for 31k records.</li><li><b>Closing Loop:</b> Quantitative research leading to 6 actionable suggestions.</li>",
        
        title_exp: "Work Experience",
        // ID 对应 HTML 中的文本...
        footer: "Looking forward to creating value with you."
    },
    zh: {
        langBtn: "English Version",
        name: "吕娜娜 (Nana)",
        tagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "💡 创新问题解决者",
        badge2: "🤝 跨职能协同专家",
        badge3: "📊 数据驱动决策",
        
        title_skills: "技能与核心竞争力",
        h_lang: "语言能力",
        list_lang: "<li><b>英语：</b>专业八级 (TEM-8)，精通商务环境。</li><li><b>法语：</b>公共法语四级，具备良好能力。</li>",
        
        title_projects: "核心项目经历",
        p3_title: "上海市预防接种服务公众诉求分析",
        p3_desc: "<li><b>多维建模：</b>清洗 3.1w+ 数据，朴素贝叶斯分类模型准确率达 92%。</li><li><b>闭环决策：</b>多元回归量化评估，产出 6 项实操优化建议。</li>",
        
        title_exp: "实习与社会实践",
        footer: "期待与你一起创造有价值的产品与合作。"
    }
};

let currentLang = 'zh';

function updateContent() {
    const lang = translations[currentLang];
    document.getElementById('lang-toggle').innerText = lang.langBtn;
    document.getElementById('hero-name').innerText = lang.name;
    document.getElementById('hero-tagline').innerText = lang.tagline;
    document.getElementById('badge1').innerText = lang.badge1;
    document.getElementById('badge2').innerText = lang.badge2;
    document.getElementById('badge3').innerText = lang.badge3;
    
    document.getElementById('title-skills').innerText = lang.title_skills;
    document.getElementById('h-lang').innerText = lang.h_lang;
    document.getElementById('list-lang').innerHTML = lang.list_lang;
    
    document.getElementById('title-projects').innerText = lang.title_projects;
    document.getElementById('p3-title').innerText = lang.p3_title;
    document.getElementById('p3-desc').innerHTML = lang.p3_desc;
    
    document.getElementById('title-exp').innerText = lang.title_exp;
    document.getElementById('footer-text').innerText = lang.footer;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateContent();
});

window.onload = updateContent;
