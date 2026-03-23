# -*- coding: utf-8 -*-
"""
Created on Mon Mar 23 15:32:35 2026

@author: lnn12
"""

const langData = {
    en: {
        name: "Nana Lyu (吕娜娜)",
        title: "AI Product Operations | User Growth | Business Development",
        desc: '"I turn user insights into growth, and partnerships into scalable results."',
        about_t: "About Me",
        about_p: "SJTU Graduate with a dual background in English and Public Administration. Expert in leveraging AI & Data (Python/NLP) to drive user growth and business excellence. Proven track record in B2B partnership expansion and cross-cultural communication.",
        p_t: "Key Projects",
        p1_t: "B2B Partnership (BD)",
        p1_d: "Successfully onboarded 17 Fortune 500 companies (Lenovo, Schneider, etc.). Designed onsite study models and achieved 100% project delivery.",
        p2_t: "Multi-Stakeholder Ops",
        p2_d: "Managed 1,000+ users and 5,000+ service hours. Coordinated between enterprises, schools, and users with high efficiency.",
        footer: '"Let’s build scalable and meaningful products together."',
        btn_lang: "中文"
    },
    zh: {
        name: "吕娜娜 (Nana)",
        title: "AI 产品运营 | 用户增长 | 商务拓展 (BD)",
        desc: "“将用户洞察转化为增长，将商务合作转化为可规模化的成果。”",
        about_t: "个人定位",
        about_p: "上海交通大学硕士，具备英语与行政管理双重背景。擅长利用 AI 与数据分析（Python/NLP）驱动用户增长与业务优化，在 B 端资源拓展与跨文化沟通方面拥有丰富实战经验。",
        p_t: "核心成果",
        p1_t: "B 端资源拓展 (BD)",
        p1_d: "成功对接 17 家世界 500 强企业（联想、施耐德等）。设计企业研学模式，推动项目 100% 落地执行。",
        p2_t: "多方协同项目运营",
        p2_d: "管理 1,000+ 用户及 5,000+ 小时服务输出。高效协调企业、学校与用户三方需求。",
        footer: "“期待与你一起创造有价值的产品与合作。”",
        btn_lang: "English"
    }
};

let currentLang = 'en';

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    const data = langData[currentLang];

    document.getElementById('hero-name').innerText = data.name;
    document.getElementById('hero-title').innerText = data.title;
    document.getElementById('hero-desc').innerText = data.desc;
    document.getElementById('about-title').innerText = data.about_t;
    document.getElementById('about-text').innerText = data.about_p;
    document.getElementById('project-title').innerText = data.p_t;
    document.getElementById('p1-title').innerText = data.p1_t;
    document.getElementById('p1-desc').innerText = data.p1_d;
    document.getElementById('p2-title').innerText = data.p2_t;
    document.getElementById('p2-desc').innerText = data.p2_d;
    document.getElementById('footer-cta').innerText = data.footer;
    document.getElementById('lang-btn').innerText = data.btn_lang;
});