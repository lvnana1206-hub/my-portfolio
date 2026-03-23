/**
 * NANA.LYU Portfolio - 完整版核心脚本
 * 集成了：最新项目叙述、实习经历、交大思享作品集、以及校园实践成果
 */

const translations = {
    en: {
        langBtn: "切换至中文",
        name: "Nana Lyu",
        tagline: "AI Product Operations | User Growth | BD",
        badge1: "💡 Creative Solver",
        badge2: "🤝 Expert Negotiator",
        badge3: "📊 Data-Driven Decision Maker",
        
        // --- Skills ---
        title_skills: "Skill Power Index",
        h_lang: "Language Proficiency",
        list_lang: "<li><b>English:</b> TEM-8, Excellent business writing & oral communication.</li><li><b>French:</b> CFT-4, Strong reading, listening, & speaking skills.</li>",
        h_tech: "Technical Skills",
        p_tech: "Python (Pandas / NLTK / TF-IDF), R (tidytext), SQL, Statsmodels, Excel.",
        h_soft: "Soft Skills",
        p_soft: "Cross-functional Coordination, B2B Resource Expansion, User Insight.",

        // --- Core Projects (合入最新叙述) ---
        title_projects: "Core Projects",
        p1_title: "AI User Insight Analysis Platform (Nana Insight AI)",
        p1_desc: "<ul><li><b>Full-process Design:</b> Built an 'Input-NLP-Viz-Insight' loop for Local Life & App review scenarios.</li><li><b>Demand ID:</b> Used TF-IDF to identify high-frequency pain points (e.g., delivery, service).</li><li><b>Decision Module:</b> Automated product optimization suggestions to close the loop from data to action.</li></ul>",
        p2_title: "Transmedial Narrative & Sentiment Analysis (R + NLP)",
        p2_desc: "<ul><li><b>Structural Modeling:</b> Standardized non-structured literary content into quantitative narrative models.</li><li><b>Sentiment Mining:</b> R-based pipeline for emotional tracking to quantify character psychological shifts.</li><li><b>Data Strategy:</b> Cross-analysis of sentiment peaks to support script cutting and viral point prediction.</li></ul>",
        p3_title: "Public Appeal Analysis for Vaccination Services",
        p3_desc: "<ul><li><b>Text Mining:</b> Built Naive Bayes models with 92% accuracy for 31,000+ hotline records.</li><li><b>Policy Research:</b> Quantified the impact of vaccination site layouts via Multiple Regression.</li></ul>",

        // --- Internship Experience ---
        title_exp: "Professional Experience",
        exp1_name: "Shanghai Adream Foundation",
        exp1_role: "Project Operations",
        exp1_desc: "<ul><li><b>User Segmentation:</b> Organized 6 themed study tours with 100% completion.</li><li><b>Resource Integration:</b> Connected 17 enterprises (Schneider, Lenovo) to boost conversion.</li><li><b>Data-Driven:</b> Built Excel dashboards to optimize SOP efficiency.</li></ul>",
        exp2_name: "XYZ Robotics",
        exp2_role: "Government Affairs",
        exp2_desc: "<ul><li><b>High-value Filing:</b> Achieved 100% approval for 'Innovation Product' certifications.</li><li><b>Policy Analysis:</b> Optimized filing structures based on technical/social impact metrics.</li></ul>",
        exp3_name: "Beijing Sino-Science",
        exp3_role: "Content Operations",
        exp3_desc: "<ul><li><b>Structural Output:</b> Converted complex research into logical, multi-media content.</li><li><b>Standardization:</b> Applied 'Information-First' templates to boost read-through rates.</li></ul>",

        // --- SJTU Life (合入最新校园实践) ---
        title_sjtu: "SJTU Life (Leadership & Impact)",
        tab_zf: "Zhufei Program",
        desc_zf: "Led 30 members across 18 cities to visit 100+ families; optimized cross-regional SOPs to ensure 100% policy reach.",
        tab_cx: "Chenxi Service Society",
        desc_cx: "Vice President. Managed 10+ projects and 1000+ volunteers; implemented layered training to boost matching rate by 40%.",

        // --- WeChat Section ---
        title_wechat: "SJTU Thoughts Content Ops (2023.12-2025.07)",
        wechat_intro: "Managing core campus columns with 5,000+ average views. Expert in structured content production.",
        wc_t1: "【SJTU Meme Guide】", wc_d1: "Capturing campus culture trends with structured output.",
        wc_t2: "【Graduation Special】", wc_d2: "Multi-media narrative building emotional connections.",
        wc_t3: "【Youth Day】", wc_d3: "Mainstream values expressed through micro-narratives.",
        wc_t4: "【SJTU Portraits】", wc_d4: "In-depth interviews building a campus figure map.",
        wc_t5: "【SJTU Career】", wc_d5: "Optimizing layout to improve information acquisition efficiency.",
        label_more: "More Columns:",
        footer: "Looking forward to building high-value products and partnerships with you."
    },
    zh: {
        langBtn: "English Version",
        name: "吕娜娜 (Nana)",
        tagline: "AI 产品运营 | 用户增长 | 商务拓展 (BD)",
        badge1: "💡 创新问题解决者",
        badge2: "🤝 资深谈判专家",
        badge3: "📊 数据驱动决策",
        
        title_skills: "技能与核心竞争力",
        h_lang: "语言能力",
        list_lang: "<li><b>英语：</b>专业八级 (TEM-8)，具备优秀的商务书面沟通能力。</li><li><b>法语：</b>通过公共法语四级，具备较强听说读写能力。</li>",
        h_tech: "专业技能",
        p_tech: "Python (Pandas / NLTK / TF-IDF)、R 语言 (自动化流水线)、SQL、统计建模、Excel。",
        h_soft: "软技能与沟通",
        p_soft: "跨职能团队协同、B端资源拓展、用户痛点洞察、SOP 流程搭建、危机处理。",

        // --- 核心项目经历 ---
        title_projects: "核心项目经历",
        p1_title: "AI 用户洞察分析平台 (Nana Insight AI)",
        p1_desc: "<ul><li><b>产品全流程设计：</b>独立开发平台，构建“数据输入—NLP分析—可视化—洞察输出”完整闭环。</li><li><b>用户需求识别：</b>基于 TF-IDF 算法提取关键词与情绪，识别配送、客服等高频负面问题。</li><li><b>决策建议模块：</b>基于分析结果自动生成优化建议，实现从数据分析到产品决策的支撑。</li></ul>",
        p2_title: "跨媒介叙事与情感分析系统 (R + NLP)",
        p2_desc: "<ul><li><b>内容结构化建模：</b>运用叙事学理论将非结构化文学内容转化为可量化的标准化内容模型。</li><li><b>情感趋势挖掘：</b>基于 R 语言流水线量化追踪角色情感演变趋势，捕捉心理状态波动。</li><li><b>数据驱动策略：</b>交叉分析情感强度，为短视频脚本切分及流量爆点预测提供客观支撑。</li></ul>",
        p3_title: "上海市预防接种服务公众诉求分析",
        p3_desc: "<ul><li><b>文本挖掘：</b>清洗 3.1w+ 数据，构建朴素贝叶斯模型实现 8 类主题自动分类，准确率 92%。</li><li><b>政策量化：</b>运用多元回归模型量化评估政策效果，输出 6 项具备实操性的优化建议。</li></ul>",

        // --- 实习经历 ---
        title_exp: "实习与社会实践",
        exp1_name: "上海真爱梦想公益基金会",
        exp1_role: "去远方项目运营",
        exp1_desc: "<ul><li><b>用户分层运营：</b>组织跟踪 6 个研学项目，项目完成度 100%。</li><li><b>资源整合：</b>对接施耐德、联想等 17 家企业资源，推动活动转化率增长。</li><li><b>数据驱动：</b>搭建 Excel 数据看板，优化活动 SOP，提升完成效率。</li></ul>",
        exp2_name: "星猿哲科技 (XYZ Robotics)",
        exp2_role: "政府事务管理",
        exp2_desc: "<ul><li><b>高价值申报：</b>主导上海市创新产品目录申报，100% 通过率入选。</li><li><b>政策分析：</b>拆解 15+ 项政策细则，提炼得分点，优化申报材料结构。</li></ul>",
        exp3_name: "北京中科始创科技发展有限公司",
        exp3_role: "内容运营",
        exp3_desc: "<ul><li><b>跨职能协同：</b>将复杂科研信息结构化梳理，协同视频组完成多媒介转化。</li><li><b>标准化生产：</b>总结并应用“信息前置”排版模板，提升用户完读率。</li></ul>",

        // --- SJTU Life ---
        title_sjtu: "SJTU Life (青春足迹)",
        tab_zf: "助飞计划",
        desc_zf: "领导 30 人团队 18 天走访 18 城，设计“培训-执行-复盘”标准化流程，确保资助政策 100% 精准触达。",
        tab_cx: "晨曦公益服务社 (副社长)",
        desc_cx: "统筹 10+ 大型项目及 1000+ 志愿者，设计全流程 SOP，推动服务匹配度提升 40%，获“十佳团队”。",

        // --- 公众号 ---
        title_wechat: "交大思享内容运营 (2023.12-2025.07)",
        wechat_intro: "主理多个校级核心专栏，平均阅读量 5,000+。擅长结构化内容生产与高传播力叙事。",
        wc_t1: "【交大梗指南】", wc_d1: "校园文化结构化输出，精准捕捉学生群体共鸣点。",
        wc_t2: "【毕业季特辑】", wc_d2: "多媒介叙事策划，建立毕业生与母校的情感连接。",
        wc_t3: "【五四青年节】", wc_d3: "宏大叙事的小切口表达，提升主流价值观传播力。",
        wc_t4: "【思享·人物】", wc_d4: "结构化访谈与深度图文，沉淀高质量校园人物图谱。",
        wc_t5: "【思享·职场】", wc_d5: "“信息前置”排版实验，优化复杂资讯的阅读完读率。",
        label_more: "更多作品专栏：",
        footer: "期待与你一起创造有价值的产品与合作。"
    }
};

let currentLang = 'zh';

function updateContent() {
    const lang = translations[currentLang];
    
    // 1. 基础信息
    document.getElementById('lang-toggle').innerText = lang.langBtn;
    document.getElementById('hero-name').innerText = lang.name;
    document.getElementById('hero-tagline').innerText = lang.tagline;
    document.getElementById('badge1').innerText = lang.badge1;
    document.getElementById('badge2').innerText = lang.badge2;
    document.getElementById('badge3').innerText = lang.badge3;
    
    // 2. 技能
    document.getElementById('title-skills').innerText = lang.title_skills;
    document.getElementById('h-lang').innerText = lang.h_lang;
    document.getElementById('list-lang').innerHTML = lang.list_lang;
    document.getElementById('h-tech').innerText = lang.h_tech;
    document.getElementById('p-tech').innerText = lang.p_tech;
    document.getElementById('h-soft').innerText = lang.h_soft;
    document.getElementById('p-soft').innerText = lang.p_soft;

    // 3. 核心项目
    document.getElementById('title-projects').innerText = lang.title_projects;
    document.getElementById('p1-title').innerText = lang.p1_title;
    document.getElementById('p1-desc').innerHTML = lang.p1_desc;
    document.getElementById('p2-title').innerText = lang.p2_title;
    document.getElementById('p2-desc').innerHTML = lang.p2_desc;
    document.getElementById('p3-title').innerText = lang.p3_title;
    document.getElementById('p3-desc').innerHTML = lang.p3_desc;

    // 4. 实习经历
    document.getElementById('title-exp').innerText = lang.title_exp;
    document.getElementById('exp1-name').innerText = lang.exp1_name;
    document.getElementById('exp1-role').innerText = lang.exp1_role;
    document.getElementById('exp1-desc').innerHTML = lang.exp1_desc;
    document.getElementById('exp2-name').innerText = lang.exp2_name;
    document.getElementById('exp2-role').innerText = lang.exp2_role;
    document.getElementById('exp2-desc').innerHTML = lang.exp2_desc;
    document.getElementById('exp3-name').innerText = lang.exp3_name;
    document.getElementById('exp3-role').innerText = lang.exp3_role;
    document.getElementById('exp3-desc').innerHTML = lang.exp3_desc;

    // 5. SJTU Life (新增)
    if(document.getElementById('title-sjtu')) document.getElementById('title-sjtu').innerText = lang.title_sjtu;
    if(document.getElementById('tab-zf')) document.getElementById('tab-zf').innerText = lang.tab_zf;
    if(document.getElementById('desc-zf')) document.getElementById('desc-zf').innerHTML = lang.desc_zf;
    if(document.getElementById('tab-cx')) document.getElementById('tab-cx').innerText = lang.tab_cx;
    if(document.getElementById('desc-cx')) document.getElementById('desc-cx').innerHTML = lang.desc_cx;

    // 6. 公众号精选
    document.getElementById('title-wechat').innerText = lang.title_wechat;
    document.getElementById('wechat-intro').innerText = lang.wechat_intro;
    document.getElementById('label-more').innerText = lang.label_more;
    for (let i = 1; i <= 5; i++) {
        if(document.getElementById(`wc-t${i}`)) document.getElementById(`wc-t${i}`).innerText = lang[`wc_t${i}`];
        if(document.getElementById(`wc-d${i}`)) document.getElementById(`wc-d${i}`).innerText = lang[`wc_d${i}`];
    }

    document.getElementById('footer-text').innerText = lang.footer;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateContent();
});

// 初始化页面
window.onload = updateContent;
