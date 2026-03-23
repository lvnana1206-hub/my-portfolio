/**
 * Nana's Portfolio Master Dynamic Script 🍭
 * 集成：多级背景音乐控制、智能语言切换、全量内容动态映射、进度条重载
 */

const translations = {
    zh: {
        langBtn: "English Version",
        heroName: "吕娜娜 (Nana) 🎀",
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
        p1Title: "AI 用户洞察分析平台 (Nana Insight AI) 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP 分析—可视化—洞察输出”完整流程。</li><li><b>用户需求识别：</b>自动定位负面集中点，实现闭环。</li>",
        p2Title: "跨媒介叙事与情感计算综合研究 (R + NLP) 📚",
        p2Desc: "<li><b>理论建模：</b>基于热奈特叙事学理论。</li><li><b>量化趋势：</b>利用 R 语言量化追踪角色心路历程。</li>",
        p2Btn1: "📄 阅读全文 (SJTU)",
        p2Btn2: "📊 情感建模报告",
        p3Title: "上海市预防接种服务公众诉求分析 💉",
        p3Desc: "<li><b>文本分类建模：</b>清洗 3.1w+ 条数据，准确率达 92%。</li>",
        exp1Title: "交大思享 (校级官方媒体) 📝",
        exp1Role: "内容运营负责人",
        exp1Content: "<p>✨主理多个核心专栏，累计阅读 50,000+。通过“信息前置”排版产出多篇爆款。</p>",
        exp2Title: "上海真爱梦想公益基金会 🕊️",
        exp2Role: "去远方项目运营",
        exp2Content: "<p>🍭对接 17 家企业资源，优化活动 SOP，提升转化效率。</p>",
        exp3Title: "星猿哲科技 (XYZ Robotics) 🤖",
        exp3Role: "政府事务管理",
        exp3Content: "<p>✅ 100%通过率，主导“创新产品目录”申报，助力企业获得资质背书。</p>",
        exp4Title: "北京中科始创科技 🧪",
        exp4Role: "内容运营",
        exp4Content: "<p>🔍 将复杂科研信息结构化，应用“信息前置”模板提升完读率。</p>",
        contactEmail: "lvnana1206@163.com",
        contactPhone: "联系电话: +86 153-3931-4431",
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Operations | Growth | Content Strategy",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Adept",
        badge3: "📊 Data-Driven",
        titleEdu: "🎓 Education",
        titleSkills: "🌟 Competencies",
        titleProjects: "🚀 Projects",
        titleExp: "📅 Experience",
        eduSchool: "Shanghai Jiao Tong University",
        eduDegree: "Bachelor's | Double Major",
        eduM1: "English",
        eduM2: "Admin Management",
        eduList: "<li>✨ Interdisciplinary background with global vision.</li><li>✨ TEM-8 Certified (English Major Band 8).</li>",
        s1Text: "NLP / Prompt Engineering",
        s2Text: "Python / R / SQL",
        s3Text: "Strategy / SOP Optimization",
        s4Text: "Professional English (TEM-8)",
        p1Title: "AI User Insight Platform (Nana Insight AI) 🤖",
        p1Desc: "<li>Full pipeline from data input to insight output.</li><li>Automated bottleneck identification and PM reporting.</li>",
        p2Title: "Narrative & Sentiment Analysis (R + NLP) 📚",
        p2Desc: "<li>Cross-media narrative modeling based on Genette's theory.</li><li>Quantifying character growth using R sentiment pipelines.</li>",
        p2Btn1: "📄 Read Thesis",
        p2Btn2: "📊 Data Report",
        p3Title: "Vaccination Analysis (Public Health) 💉",
        p3Desc: "<li>Processed 31k+ records with 92% classification accuracy.</li>",
        exp1Title: "SJTU Official Media (Think Sharing) 📝",
        exp1Role: "Head of Content Operations",
        exp1Content: "<p>Managed core columns with 50,000+ reads via optimized layouts.</p>",
        exp2Title: "Adream Foundation 🕊️",
        exp2Role: "Project Operations",
        exp2Content: "<p>Optimized SOPs for 17+ corporate partners to enhance efficiency.</p>",
        exp3Title: "XYZ Robotics (Unicorn AI) 🤖",
        exp3Role: "Gov Affairs Management",
        exp3Content: "<p>✅ 100% success rate in city-level innovation certifications.</p>",
        exp4Title: "Zhongke Shichuang Tech 🧪",
        exp4Role: "Content Operations",
        exp4Content: "<p>Structured complex research data into multi-media content.</p>",
        contactEmail: "lvnana1206@163.com",
        contactPhone: "Phone: +86 153-3931-4431",
        footerText: "Explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';
let audio;

// 1. 初始化背景音乐逻辑
function initBGM() {
    audio = new Audio('./assets/bg-music.mp3'); 
    audio.loop = true;
    audio.volume = 0.2;

    const musicBtn = document.getElementById('music-toggle');

    // 处理浏览器自动播放策略
    const startAudioOnFirstClick = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                if (musicBtn) musicBtn.innerText = "🎵 On";
                document.removeEventListener('click', startAudioOnFirstClick);
            }).catch(error => {
                console.log("Audio play blocked by browser. Awaiting interaction.");
            });
        }
    };
    document.addEventListener('click', startAudioOnFirstClick);

    // 绑定切换按钮
    if (musicBtn) {
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            if (audio.paused) {
                audio.play();
                musicBtn.innerText = "🎵 On";
                musicBtn.style.background = "#FFB6C1"; // 激活色
            } else {
                audio.pause();
                musicBtn.innerText = "🔇 Off";
                musicBtn.style.background = "#FFF0F3"; // 默认色
            }
        });
    }
}

/// 2. 滚动动画逻辑（优化版：增加首屏强制显示逻辑）
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 50; // 适当调低阈值，让显示更灵敏

        // 如果元素已经进入视口，或者已经在视口上方（比如切语言时）
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

// 3. 进度条重置（优化版：强制重绘触发动画）
function resetProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        // 使用 dataset 存储原始百分比，防止逻辑冲突
        const originalWidth = fill.getAttribute('data-percentage') || fill.style.width;
        if (!fill.getAttribute('data-percentage')) fill.setAttribute('data-percentage', originalWidth);
        
        fill.style.transition = 'none'; // 暂时关闭过渡
        fill.style.width = '0';
        
        // 强制浏览器重绘 (Reflow)
        fill.offsetHeight; 
        
        fill.style.transition = 'width 1.2s ease-in-out'; // 恢复过渡
        fill.style.width = originalWidth;
    });
}

// 4. 内容翻译更新核心引擎（增强版）
function updateContent() {
    const lang = translations[currentLang];
    
    // 1. 批量更新 ID 内容
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
        'contact-email', 'contact-phone', 
        'footer-text'
    ];

    allIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        let key = id.split('-').map((word, i) => 
            i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        
        if (id === 'lang-toggle') key = 'langBtn';
        
        // 只有当翻译词库里有这个 key 时才更新，防止把现有内容擦除
        if (lang[key]) {
            el.innerHTML = lang[key];
        }
    });

    // 2. 技能条特殊处理：使用更稳定的选择器
    for (let i = 1; i <= 4; i++) {
        // 尝试通过 ID 寻找，如果没有 ID，再用层级选择器
        const sEl = document.getElementById(`s${i}-text`); 
        if (sEl && lang[`s${i}Text`]) {
            sEl.innerText = lang[`s${i}Text`];
        }
    }

    // 3. 状态切换
    document.documentElement.lang = currentLang;
    document.body.className = currentLang + '-mode';
    
    // 4. 关键：等待 DOM 渲染完成后再触发动画计算
    // requestAnimationFrame 会在浏览器下一次重绘前执行
    requestAnimationFrame(() => {
        resetProgressBars();
        // 稍微延迟一下 handleReveal，确保高度已完全撑开
        setTimeout(handleReveal, 50); 
    });
}

// 5. 初始化挂载
document.addEventListener("DOMContentLoaded", () => {
    initBGM();
    updateContent(); // 初始加载
    
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.onclick = () => {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            updateContent();
            // 切换语言后平滑回顶，给用户全新的感觉
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // 监听滚动
    window.addEventListener("scroll", handleReveal);
    
    // 初始触发一次检查，防止首屏元素不显示
    setTimeout(handleReveal, 500);
});

