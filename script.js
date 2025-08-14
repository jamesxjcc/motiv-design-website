document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const headerHeight = navbar.offsetHeight;

    // 語言切換功能
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'zh';

    const translations = {
        zh: {
            // 導覽列
            'about': '公司介紹',
            'services': '核心技能與收費',
            'design': '使用設計',
            'portfolio': '客戶案例',
            'contact': '聯絡方式',
            // 公司介紹區塊
            'about-title': '打造專屬您的數位產品',
            'about-text': '從概念發想到落地實現，我們提供一站式的客製化軟體解決方案。',
            // 核心技能區塊
            'services-title': '核心技能與收費方案',
            'services-item1': '全端網頁開發：使用最新技術，打造高性能網站。',
            'services-item2': '行動應用程式開發：iOS 與 Android 原生或跨平台應用。',
            'services-item3': '雲端解決方案：部署與維護可擴展的雲端服務。',
            'services-item4': '收費方案：根據專案規模與需求，提供客製化報價。',
            // 使用設計區塊
            'design-title': '使用設計',
            'design-text': '我們的設計流程以使用者為中心，確保產品不僅功能強大，更擁有直覺且美觀的介面。我們專注於 UI/UX 設計，為您的產品創造最佳使用者體驗。',
            'design-feature1-title': '使用者研究',
            'design-feature1-text': '透過訪談與資料分析，深入了解目標使用者需求。',
            'design-feature2-title': '介面設計 (UI)',
            'design-feature2-text': '設計符合品牌形象、美觀且一致的視覺介面。',
            'design-feature3-title': '使用者體驗 (UX)',
            'design-feature3-text': '優化操作流程，確保使用者能流暢地達成目標。',
            // 客戶案例區塊
            'portfolio-title': '客戶案例',
            'portfolio-case1-title': '電商平台優化',
            'portfolio-case1-text': '我們為知名零售品牌重新設計其電商平台，提升轉換率達 20%。',
            'portfolio-case2-title': '企業內部管理系統',
            'portfolio-case2-text': '為跨國製造業打造客製化 ERP 系統，大幅提升營運效率。',
            // 聯絡方式區塊
            'contact-title': '聯絡方式',
            'contact-description': '專營創意網頁設計公司，讓您輕鬆贏在起跑點，快與我們聊聊，打造出最符合需求的網站設計方案',
            'cta-button-text': '立即取得報價',
            'contact-line-title': 'LINE',
            'contact-line-id': '@motivdesign',
            'contact-phone-title': 'PHONE',
            'contact-phone-number': '02-2630-7060',
            'contact-email-title': 'E-MAIL',
            'contact-email-address': 'service@motivdesign.com',
            // Footer
            'back-to-top-text': '回到最上端',
            'copyright-text': '2025 © Motiv Design, All rights reserved, Built in-house.',
            // Form Page
            'form-title': '專案需求表單',
            'form-description': '請填寫以下表單，我們的專案經理將會盡快與您聯繫。',
            // Form Labels
            'form-name-label': '姓名 *',
            'form-email-label': 'E-mail *',
            'form-phone-label': '電話 *',
            'form-company-label': '公司名稱',
            'form-industry-label': '產業',
            'form-service-label': '需求項目',
            'form-budget-label': '期望預算',
            'form-message-label': '需求說明',
            'form-submit-btn': '送出'
        },
        en: {
            // Navigation
            'about': 'About Us',
            'services': 'Skills & Pricing',
            'design': 'Design Approach',
            'portfolio': 'Case Studies',
            'contact': 'Contact Us',
            // About section
            'about-title': 'Crafting Your Digital Products',
            'about-text': 'From concept to realization, we provide comprehensive custom software solutions.',
            // Services section
            'services-title': 'Core Skills & Pricing Plans',
            'services-item1': 'Full-stack Web Development: Using the latest technology to build high-performance websites.',
            'services-item2': 'Mobile App Development: Native and cross-platform applications for iOS and Android.',
            'services-item3': 'Cloud Solutions: Deploying and maintaining scalable cloud services.',
            'services-item4': 'Pricing Plans: Customized quotes based on project scope and requirements.',
            // Design section
            'design-title': 'Our Design Approach',
            'design-text': 'Our design process is user-centered, ensuring products are not only powerful but also intuitive and visually appealing. We focus on UI/UX design to create the best user experience.',
            'design-feature1-title': 'User Research',
            'design-feature1-text': 'In-depth analysis of user needs through interviews and data.',
            'design-feature2-title': 'Interface Design (UI)',
            'design-feature2-text': 'Creating beautiful, consistent visual interfaces that reflect your brand.',
            'design-feature3-title': 'User Experience (UX)',
            'design-feature3-text': 'Optimizing user flows to ensure a seamless and efficient experience.',
            // Portfolio section
            'portfolio-title': 'Case Studies',
            'portfolio-case1-title': 'E-commerce Platform Optimization',
            'portfolio-case1-text': 'We redesigned an e-commerce platform for a major retailer, boosting conversion rates by 20%.',
            'portfolio-case2-title': 'Internal Management System',
            'portfolio-case2-text': 'Developed a custom ERP system for a multinational manufacturer, significantly improving operational efficiency.',
            // Contact section
            'contact-title': 'Contact Us',
            'contact-description': 'As a creative web design company, we help you get a head start. Chat with us to create a website design that perfectly fits your needs.',
            'cta-button-text': 'Get a Quote Now',
            'contact-line-title': 'LINE',
            'contact-line-id': '@motivdesign',
            'contact-phone-title': 'PHONE',
            'contact-phone-number': '02-2630-7060',
            'contact-email-title': 'E-MAIL',
            'contact-email-address': 'service@motivdesign.com',
            // Footer
            'back-to-top-text': 'Back To Top',
            'copyright-text': '2025 © Motiv Design, All rights reserved, Built in-house.',
            // Form Page
            'form-title': 'Project Inquiry Form',
            'form-description': 'Please fill out the form below, and our project manager will get back to you as soon as possible.',
            // Form Labels
            'form-name-label': 'Name *',
            'form-email-label': 'E-mail *',
            'form-phone-label': 'Phone *',
            'form-company-label': 'Company Name',
            'form-industry-label': 'Industry',
            'form-service-label': 'Project Type',
            'form-budget-label': 'Expected Budget',
            'form-message-label': 'Project Description',
            'form-submit-btn': 'Submit'
        }
    };

    function updateContent(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                // 處理連結與圖示
                if (key === 'back-to-top-text') {
                    element.innerHTML = `${translations[lang][key]} <i class="fas fa-arrow-up"></i>`;
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        // 處理表單欄位的 placeholder
        const placeholders = {
            'zh': {
                'form-name-label': '您的姓名', 'form-email-label': '您的電子郵件', 'form-phone-label': '您的電話',
                'form-company-label': '公司名稱', 'form-industry-label': '您的產業', 'form-service-label': '網頁開發、App 等',
                'form-budget-label': '例如：新台幣15萬-30萬', 'form-message-label': '請詳細說明您的需求...'
            },
            'en': {
                'form-name-label': 'Your Name', 'form-email-label': 'example@email.com', 'form-phone-label': 'Your Phone Number',
                'form-company-label': 'Company Name', 'form-industry-label': 'Your Industry', 'form-service-label': 'Web Development, App, etc.',
                'form-budget-label': 'e.g., $5,000 - $10,000', 'form-message-label': 'Please describe your project needs in detail...'
            }
        };

        for (const key in placeholders[lang]) {
            const inputElement = document.querySelector(`[data-lang="${key}"]`);
            if (inputElement && inputElement.nextElementSibling) {
                inputElement.nextElementSibling.placeholder = placeholders[lang][key];
            }
        }
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        langToggleBtn.textContent = (currentLang === 'zh') ? 'EN' : '中';
        updateContent(currentLang);
    });

    // 網頁加載時，先更新一次內容
    updateContent(currentLang);

    // 捲動時改變導覽列樣式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 平滑捲動效果
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 回到最上端功能 (index.html)
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 回到最上端功能 (form.html)
    const backToTopBtnForm = document.getElementById('back-to-top-form');
    if (backToTopBtnForm) {
        backToTopBtnForm.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});