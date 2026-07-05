// ============================================================
// منيو غزال كافيه - بيانات + عرض + تقسيم كاتيجورى
// ملاحظة مهمة: الصور دلوقتي أيقونات ملونة مرسومة بالكود (SVG) مش صور من الإنترنت
// السبب: كنت بحط روابط صور من موقع خارجي وطلعت غلط/متلخبطة، فبقيت الأيقونات
// دي مضمونة 100% تشتغل لأنها مش محتاجة إنترنت خالص.
// لو حابب صور حقيقية بعدين، ابعتلي صور المنتجات وهربطها بدل الأيقونات.
// ============================================================

// ==========================================
// 0. تعريف الأقسام (Categories)
// ==========================================
const categories = [
    { id: "hot",       label: "مشروبات ساخنة",         icon: "☕", color: "#8B4513" },
    { id: "coffee",    label: "قهوة باردة",            icon: "🧊", color: "#4B2E2B" },
    { id: "cold",      label: "عصائر طبيعية",          icon: "🍹", color: "#E67E22" },
    { id: "milkshake", label: "ميلك شيك",              icon: "🥤", color: "#D291BC" },
    { id: "soft",      label: "صودا ومشروبات طاقة",    icon: "🥂", color: "#1ABC9C" },
    { id: "sakaa",     label: "مشروبات ساقعة",         icon: "🧃", color: "#2E86C1" },
    { id: "sweets",    label: "حلويات",                icon: "🍨", color: "#F1C40F" }
];
const ALL_TAB = { id: "all", label: "الكل", icon: "🍽️", color: "#6b4226" };

// ==========================================
// 1. بيانات المنيو (مفيهاش روابط صور خارجية خالص دلوقتي)
// ==========================================
const cafeMenu = [
    // ---- مشروبات ساخنة ----
    { title: "شاي", price: "10 ج.م", desc: "شاي أحمر كشري أو فتلة مظبوط بالنعناع أو ليمون حسب مزاجك.", icon: "🍵", category: "hot" },
    { title: "قهوة", price: "20 ج.م", desc: "بن فاتح أو غامق ريحة أو مظبوط محوج توليفة مميزة.", icon: "☕", category: "hot" },
    { title: "كركديه", price: "15 ج.م", desc: "أوراق الكركديه الأسواني الساخن المهدئ.", icon: "🌺", category: "hot" },
    { title: "يانسون", price: "10 ج.م", desc: "مشروب أعشاب اليانسون الدافئ والصحي.", icon: "🌿", category: "hot" },
    { title: "نعناع", price: "10 ج.م", desc: "أوراق النعناع الفريش الساخنة المهدئة للأعصاب.", icon: "🍃", category: "hot" },
    { title: "جنزبيل عسل", price: "25 ج.م", desc: "مزيج الجنزبيل الحار مع العسل الطبيعي والليمون للظبط العالي.", icon: "🍯", category: "hot" },
    { title: "شاي كرك", price: "25 ج.م", desc: "الشاي العدني الأصلي المطبوخ بالحليب والهيل والقرنفل.", icon: "🫖", category: "hot" },
    { title: "شاي حليب", price: "25 ج.م", desc: "شاي أحمر مضبوط وممزوج بالحليب الساخن الكثيف.", icon: "🥛", category: "hot" },
    { title: "كاشيو ساخن", price: "30 ج.م", desc: "مشروب بودرة الكاشيو الساخنة والمميزة بطعمها الغني.", icon: "🍫", category: "hot" },
    { title: "نسكافيه", price: "25 ج.م", desc: "نسكافيه كلاسيك بلاك أو مع فوم الحليب الغني.", icon: "☕", category: "hot" },
    { title: "اسبريسو", price: "20 ج.م", desc: "شوت اسبريسو مركز من بن فاخر لأصحاب المزاج العالي.", icon: "☕", category: "hot" },
    { title: "فلات وايت", price: "35 ج.م", desc: "توازن رائع بين دبل شوت اسبريسو وحليب مخفوق ناعم جداً.", icon: "🥛", category: "hot" },
    { title: "كراميل ميكاتو", price: "45 ج.م", desc: "طبقات الحليب والاسبريسو مغطاة بصوص الكراميل اللذيذ.", icon: "🍮", category: "hot" },
    { title: "الوف حليب", price: "30 ج.م", desc: "مشروب الوف الساخن والمميز الممزوج بالحليب الطازج.", icon: "🥛", category: "hot" },
    { title: "الوف ساده", price: "25 ج.م", desc: "مشروب الوف الساخن التقليدي السادة والنقي.", icon: "☕", category: "hot" },
    { title: "قرفة وحليب", price: "25 ج.م", desc: "قرفة ساخنة ممتازة ممزوجة بالحليب البلدي المفيد.", icon: "🥛", category: "hot" },
    { title: "حلبة حليب", price: "25 ج.م", desc: "الحلبة البلدي الساخنة والمطبوخة بالحليب الغني.", icon: "🥛", category: "hot" },

    // ---- قهوة باردة ----
    { title: "ايس كوفي", price: "35 ج.م", desc: "قهوة مثلجة باردة سريعة ومنعشة لتجديد الطاقة.", icon: "🧊", category: "coffee" },
    { title: "ايس لاتيه", price: "45 ج.م", desc: "إسبريسو مع حليب بارد مثلج مع فوم خفيف ناعم.", icon: "🧊", category: "coffee" },
    { title: "ايس موكا", price: "45 ج.م", desc: "مزيج الشوكولاتة والاسبريسو المميز مع الحليب البارد والثلج.", icon: "🍫", category: "coffee" },
    { title: "ايس كاشيو", price: "45 ج.م", desc: "طعم الكاشيو البارد المثلج المنعش لعشاق التجديد والمزاج.", icon: "🍫", category: "coffee" },
    { title: "ايس كراميل", price: "45 ج.م", desc: "اسبريسو وحليب مثلج مع نكهة وصوص الكراميل الحلو المميز.", icon: "🍮", category: "coffee" },

    // ---- عصائر طبيعية فريش ----
    { title: "عصير مانجا", price: "30 ج.م", desc: "عصير مانجو طبيعي فريش تقيل وبارد يروي العطش.", icon: "🥭", category: "cold" },
    { title: "عصير فراولة", price: "30 ج.م", desc: "عصير فراولة فريش مثلج ومنعش مجهز يومياً.", icon: "🍓", category: "cold" },
    { title: "جوافة حليب", price: "30 ج.م", desc: "جوافة طبيعية مخفوقة بالحليب البارد الغني الفريش.", icon: "🥛", category: "cold" },
    { title: "بلح حليب", price: "35 ج.م", desc: "عصير التمر الطبيعي المميز الغني بالطاقة ممزوج باللبن البارد.", icon: "🌴", category: "cold" },
    { title: "موز حليب", price: "30 ج.م", desc: "موز طازج مخفوق فوراً مع الحليب البارد والثلج.", icon: "🍌", category: "cold" },
    { title: "عصير بطيخ", price: "20 ج.م", desc: "قطع البطيخ الفريش المثلجة المخفوقة لانتعاش الصيف الفوري.", icon: "🍉", category: "cold" },
    { title: "عصير كانتلوب", price: "20 ج.م", desc: "كانتلوف فريش مثلج ومنعش يروي عطش يومك الحار.", icon: "🍈", category: "cold" },
    { title: "ليمون فريش", price: "20 ج.م", desc: "عصير ليمون فريش مثلج سادة أو بالنعناع للروقان والنقاء.", icon: "🍋", category: "cold" },
    { title: "ليمون نعناع", price: "25 ج.م", desc: "الميكس المنعش الشهير ليمون فريش مع أوراق النعناع والثلج المجروش.", icon: "🍋", category: "cold" },
    { title: "عناب ساقع", price: "20 ج.م", desc: "كركديه ساقع مثلج ومظبوط جداً على طريقة زمان الأصلية.", icon: "🌺", category: "cold" },

    // ---- ميلك شيك ----
    { title: "ميلك شيك فانيليا", price: "35 ج.م", desc: "ميلك شيك غني ودسم بنكهة الفانيليا الكلاسيكية الساحرة.", icon: "🍨", category: "milkshake" },
    { title: "ميلك شيك شوكولاتة", price: "35 ج.م", desc: "ميلك شيك غني بصوص الشوكولاتة الداكنة الكثيفة والآيس كريم.", icon: "🍫", category: "milkshake" },
    { title: "ميلك شيك أوريو", price: "40 ج.م", desc: "ميلك شيك مثلج وكريمي مع قطع بسكويت الأوريو المقرمش الفاخر.", icon: "🍪", category: "milkshake" },
    { title: "ميلك شيك تويكس", price: "40 ج.م", desc: "ميلك شيك بنكهة شوكولاتة تويكس والكراميل الرائع والبسكويت المفروم.", icon: "🍫", category: "milkshake" },
    { title: "ميلك شيك مانجا", price: "40 ج.م", desc: "ميلك شيك كريمي رائع بنكهة المانجو الطبيعية والآيس كريم الغني.", icon: "🥭", category: "milkshake" },
    { title: "ميلك شيك فراولة", price: "40 ج.م", desc: "ميلك شيك غني بقطع الفراولة الحمراء اللذيذة والآيس كريم البارد.", icon: "🍓", category: "milkshake" },
    { title: "ميلك شيك اسبريسو", price: "40 ج.م", desc: "ميكس الباور والمزاج.. آيس كريم فانيليا مع شوت اسبريسو مركز.", icon: "☕", category: "milkshake" },
    { title: "ميلك شيك كراميل", price: "35 ج.م", desc: "ميلك شيك بارد مع خطوط صوص الكراميل الكثيفة اللذيذة.", icon: "🍮", category: "milkshake" },

    // ---- صودا ومشروبات طاقة ----
    { title: "موهيتو كلاسيك", price: "30 ج.م", desc: "صودا مثلجة فريش مع شرائح الليمون والنعناع والثلج المجروش.", icon: "🍹", category: "soft" },
    { title: "موهيتو توت", price: "35 ج.م", desc: "موهيتو صودا منعش بنكهة التوت الأزرق (البلوبيري) اللذيذة والمنعشة.", icon: "🫐", category: "soft" },
    { title: "موهيتو فريز", price: "35 ج.م", desc: "موهيتو منعش وحلو بنكهة الفريز (الفراولة المركز) والثلج الغزير.", icon: "🍓", category: "soft" },
    { title: "ريد بول اسبريسو", price: "80 ج.م", desc: "مشروب ريد بول مع دبل شوت اسبريسو فريش، طاقة وتنبيه بلا حدود.", icon: "⚡", category: "soft" },
    { title: "تويست اسبريسو", price: "40 ج.م", desc: "مشروب تويست الغازي المنعش مضاف إليه شوت اسبريسو مركز لعشاق التجديد.", icon: "⚡", category: "soft" },

    // ---- مشروبات ساقعة ----
    { title: "مياه صغيرة", price: "10 ج.م", desc: "زجاجة مياه معدنية طبيعية باردة ومثلجة حجم صغير نقي.", icon: "💧", category: "sakaa" },
    { title: "مياه كبيرة", price: "15 ج.م", desc: "زجاجة مياه معدنية طبيعية باردة ومثلجة حجم كبير نقي.", icon: "💧", category: "sakaa" },
    { title: "كانز", price: "25 ج.م", desc: "مشروبات غازية كانز بجميع أنواعها ونكهاتها المفضلة حسب اختيارك.", icon: "🥤", category: "sakaa" },
    { title: "بريل", price: "30 ج.م", desc: "مشروب شعير بريل الأصلي المثلج البارد القوي لأصحاب المزاج الصارم.", icon: "🍺", category: "sakaa" },
    { title: "فيروز", price: "25 ج.م", desc: "مشروب شعير فيروز المنعش والخفيف بنكهات الخوخ أو الأناناس.", icon: "🍺", category: "sakaa" },
    { title: "تروبيكانا", price: "25 ج.م", desc: "عصير تروبيكانا مغلف ومنعش ومليء بالقطع الفريش اللذيذة.", icon: "🧃", category: "sakaa" },

    // ---- حلويات ----
    { title: "سلطة فواكه", price: "40 ج.م", desc: "طبق مشكل فاخر وغني من قطع الفواكه الموسمية الطازجة الفريش.", icon: "🍓", category: "sweets" },
    { title: "سلطة فواكه بالآيس كريم", price: "55 ج.م", desc: "قطع الفواكه الفريش مغطاة ببولات آيس كريم غنية مع صوص ومكسرات.", icon: "🍨", category: "sweets" },
    { title: "آيس كريم 1 بوله", price: "15 ج.م", desc: "بولة آيس كريم غنية بنكهة الشوكولاتة، الفانيليا، أو الفراولة حسب رغبتك.", icon: "🍦", category: "sweets" },
    { title: "آيس كريم 3 بوله", price: "35 ج.م", desc: "ثلاث بولات آيس كريم مشكلة وكبيرة من نكهاتك المفضلة اللذيذة والمبردة.", icon: "🍦", category: "sweets" }
];

// ==========================================
// أدوات مساعدة لبناء الكارت (بأيقونة بدل صورة)
// ==========================================
function getCategoryInfo(categoryId) {
    return categories.find(c => c.id === categoryId) || { color: "#999", icon: "🍽️" };
}

function buildIconBox(item) {
    const cat = getCategoryInfo(item.category);
    return `<div class="menu-card-icon" style="background:${cat.color}22;">
        <span>${item.icon || cat.icon}</span>
    </div>`;
}

function buildCard(item) {
    return `
        <div class="menu-card">
            ${buildIconBox(item)}
            <div class="menu-card-body">
                <div class="menu-card-title">
                    <h3>${item.title}</h3>
                    <span class="menu-price">${item.price}</span>
                </div>
                <p>${item.desc}</p>
            </div>
        </div>
    `;
}

// ==========================================
// تبويبات الأقسام
// ==========================================
function renderCategoryTabs(activeCategory) {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;

    const allTabs = [ALL_TAB, ...categories];
    tabsContainer.innerHTML = allTabs.map(cat => `
        <button
            type="button"
            class="category-tab ${cat.id === activeCategory ? 'active' : ''}"
            onclick="filterMenu('${cat.id}')"
            data-category="${cat.id}">
            <span class="category-tab-icon">${cat.icon}</span>
            <span class="category-tab-label">${cat.label}</span>
        </button>
    `).join('');
}

// ==========================================
// فلترة المنيو حسب القسم
// ==========================================
function filterMenu(categoryName) {
    renderCategoryTabs(categoryName);

    if (categoryName === 'all') {
        displayMenu();
        return;
    }

    const container = document.getElementById('menuContainer');
    if (!container) return;

    const filteredItems = cafeMenu.filter(item => item.category === categoryName);
    container.innerHTML = `<div class="menu-grid">${filteredItems.map(buildCard).join('')}</div>`;
}

// ==========================================
// عرض المنيو كامل مقسم لأقسام مع عنوان لكل قسم
// ==========================================
function displayMenu() {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;

    const sectionsHtml = categories
        .map(cat => {
            const items = cafeMenu.filter(item => item.category === cat.id);
            if (items.length === 0) return '';
            return `
                <div class="menu-category-section" id="section-${cat.id}">
                    <h3 class="menu-category-title">
                        <span>${cat.icon}</span> ${cat.label}
                    </h3>
                    <div class="menu-grid">
                        ${items.map(buildCard).join('')}
                    </div>
                </div>
            `;
        })
        .join('');

    menuContainer.innerHTML = sectionsHtml;
}

// ==========================================
// حقن الـ CSS الخاص بالكاتيجورى والكروت تلقائيًا
// (عشان يشتغل حتى لو مش ضايف حاجة في style.css بنفسك)
// ==========================================
function injectMenuStyles() {
    if (document.getElementById('menu-dynamic-styles')) return;
    const style = document.createElement('style');
    style.id = 'menu-dynamic-styles';
    style.textContent = `
        .category-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 10px 0 40px;
        }
        .category-tab {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border-radius: 30px;
            border: 2px solid rgba(0,0,0,0.1);
            background: #fff;
            cursor: pointer;
            font-family: inherit;
            font-size: 15px;
            transition: all .25s ease;
        }
        .category-tab:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .category-tab.active {
            background: #2c1810;
            color: #fff;
            border-color: #2c1810;
        }
        .menu-category-section {
            margin-bottom: 45px;
        }
        .menu-category-title {
            font-size: 24px;
            margin-bottom: 18px;
            padding-bottom: 10px;
            border-bottom: 3px solid #e0a030;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        /* !important هنا مقصودة عشان تكسر أي تعارض جاي من style.css (زي column-count أو float) */
        #menuContainer {
            columns: auto !important;
            column-count: initial !important;
            display: block !important;
        }
        .menu-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)) !important;
            gap: 20px !important;
            columns: auto !important;
            column-count: initial !important;
            width: 100% !important;
        }
        .menu-card {
            background: #fff !important;
            border-radius: 16px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08) !important;
            transition: transform .3s ease, box-shadow .3s ease !important;
            float: none !important;
            width: auto !important;
            break-inside: avoid !important;
            display: flex !important;
            flex-direction: column !important;
            cursor: pointer;
        }
        .menu-card:hover {
            transform: translateY(-8px) scale(1.03) !important;
            box-shadow: 0 14px 30px rgba(0,0,0,0.18) !important;
        }
        .menu-card-icon {
            width: 100% !important;
            height: 150px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 60px !important;
            transition: transform .3s ease !important;
        }
        .menu-card:hover .menu-card-icon {
            transform: scale(1.15) rotate(-4deg) !important;
        }
        .menu-card-body {
            padding: 15px !important;
        }
        .menu-card-title {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            margin-bottom: 8px !important;
            gap: 8px !important;
        }
        .menu-card-title h3 {
            margin: 0 !important;
            font-size: 18px !important;
        }
        .menu-price {
            color: #e0a030 !important;
            font-weight: 700 !important;
            white-space: nowrap !important;
        }
        .menu-card-body p {
            margin: 0 !important;
            font-size: 14px !important;
            color: #666 !important;
            line-height: 1.6 !important;
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// حقن تأثيرات حركة عامة لباقي أقسام الصفحة (الأزرار، العروض، المعرض، آراء العملاء...)
// عشان الموقع كله يبقى فيه حياة وحركة مش ستاتيك
// ==========================================
function injectGlobalAnimations() {
    if (document.getElementById('global-dynamic-styles')) return;
    const style = document.createElement('style');
    style.id = 'global-dynamic-styles';
    style.textContent = `
        /* الأزرار */
        .btn {
            transition: transform .25s ease, box-shadow .25s ease, filter .25s ease !important;
        }
        .btn:hover {
            transform: translateY(-4px) scale(1.05) !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
            filter: brightness(1.1) !important;
        }
        .btn:active {
            transform: translateY(-1px) scale(0.98) !important;
        }

        /* كروت العروض */
        .offer-card {
            transition: transform .3s ease, box-shadow .3s ease !important;
        }
        .offer-card:hover {
            transform: translateY(-10px) scale(1.02) !important;
            box-shadow: 0 18px 35px rgba(0,0,0,0.3) !important;
        }
        .offer-badge {
            transition: transform .3s ease !important;
        }
        .offer-card:hover .offer-badge {
            transform: scale(1.1) rotate(-3deg) !important;
        }

        /* صورة قسم "من نحن" */
        .about-image {
            overflow: hidden !important;
            border-radius: 16px !important;
        }
        .about-image img {
            transition: transform .5s ease !important;
            display: block !important;
        }
        .about-image:hover img {
            transform: scale(1.1) !important;
        }

        /* عناصر المميزات */
        .feature {
            transition: transform .25s ease, color .25s ease, padding .25s ease !important;
        }
        .feature:hover {
            transform: translateX(-8px) !important;
            color: #e0a030 !important;
        }
        .feature i {
            transition: transform .3s ease !important;
        }
        .feature:hover i {
            transform: scale(1.3) !important;
        }

        /* المعرض */
        .gallery-item {
            overflow: hidden !important;
            border-radius: 12px !important;
            position: relative !important;
        }
        .gallery-item img {
            transition: transform .5s ease, filter .5s ease !important;
            display: block !important;
        }
        .gallery-item:hover img {
            transform: scale(1.15) !important;
            filter: brightness(0.85) !important;
        }

        /* آراء العملاء */
        .testimonial-card {
            transition: transform .3s ease, box-shadow .3s ease !important;
        }
        .testimonial-card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 15px 30px rgba(0,0,0,0.25) !important;
        }
        .testimonial-card .stars i {
            transition: transform .2s ease !important;
        }
        .testimonial-card:hover .stars i {
            transform: scale(1.15) !important;
        }

        /* الإحصائيات */
        .stat-item {
            transition: transform .3s ease !important;
        }
        .stat-item:hover {
            transform: translateY(-6px) !important;
        }
        .stat-item i {
            transition: transform .35s ease !important;
        }
        .stat-item:hover i {
            transform: scale(1.25) rotate(-6deg) !important;
        }

        /* زرار الرجوع لأعلى */
        #scrollToTop {
            transition: transform .25s ease, box-shadow .25s ease !important;
        }
        #scrollToTop:hover {
            transform: translateY(-4px) scale(1.1) !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;
        }

        /* روابط الناف بار */
        .nav-links a {
            transition: color .2s ease, transform .2s ease !important;
            display: inline-block !important;
        }
        .nav-links a:hover {
            transform: translateY(-2px) !important;
        }

        /* أيقونات السوشيال ميديا في الفوتر */
        .social-icons a {
            transition: transform .25s ease, background .25s ease !important;
        }
        .social-icons a:hover {
            transform: translateY(-4px) scale(1.15) !important;
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// إصلاحات خاصة بشاشات الموبايل (لأن style.css عنده Breakpoint واحد بس على 768px)
// ==========================================
function injectMobileFixes() {
    if (document.getElementById('mobile-dynamic-styles')) return;
    const style = document.createElement('style');
    style.id = 'mobile-dynamic-styles';
    style.textContent = `
        /* عنوان الهيرو ونصه بيبقوا مرنين مع حجم الشاشة بدل ما يكسروا التصميم */
        .hero-content h1 {
            font-size: clamp(26px, 8vw, 56px) !important;
        }
        .hero-content p {
            font-size: clamp(14px, 3.8vw, 20px) !important;
        }
        .section-header h2 {
            font-size: clamp(22px, 6vw, 36px) !important;
        }

        /* تابس الكاتيجورى: على الموبايل بتبقى صف واحد قابل للسحب أفقيًا بدل ما تتكسر */
        @media (max-width: 600px) {
            .category-tabs {
                flex-wrap: nowrap !important;
                justify-content: flex-start !important;
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch !important;
                padding: 4px 4px 14px !important;
                margin: 10px 0 25px !important;
                scrollbar-width: thin !important;
            }
            .category-tab {
                flex: 0 0 auto !important;
                padding: 8px 14px !important;
                font-size: 13px !important;
                white-space: nowrap !important;
            }
            .menu-card-icon {
                height: 110px !important;
                font-size: 46px !important;
            }
            .menu-category-title {
                font-size: 20px !important;
            }
            .container {
                padding: 40px 0 !important;
            }
            .hero-buttons {
                display: flex !important;
                flex-direction: column !important;
                align-items: stretch !important;
                gap: 12px !important;
                padding: 0 20px !important;
            }
            .hero-buttons .btn {
                width: 100% !important;
                text-align: center !important;
            }
            .btn-secondary {
                margin-right: 0 !important;
            }
            .stats-grid {
                gap: 15px !important;
            }
            .stat-item i {
                font-size: 30px !important;
            }
            .stat-item .counter {
                font-size: 26px !important;
            }
            .offer-card {
                padding: 25px 20px !important;
            }
            .nav-logo {
                font-size: 18px !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// 2. تفعيل الحركات والمؤثرات عند تحريك الصفحة (Scroll Effects)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    if (scrollToTopBtn) {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

// 3. تشغيل زر Scroll to Top عند الضغط عليه
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 4. تفعيل قائمة الموبايل الهامبرجر (Responsive Menu)
const navToggle = document.getElementById('navToggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.toggle('active');
    });
}

// 5. العدادات والإحصائيات التصاعدية التلقائية
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCounter();
    });
}

// 6. التعامل مع الفورم وحجز الصالات الفوري
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`يا هلا يا ${name}! تم استلام طلب حجزك بنجاح. هنتواصل معاك فوراً لتأكيد الحجز وتجهيز مكانك 🎮☕`);
        bookingForm.reset();
    });
}

// تشغيل الدوال عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    injectMenuStyles();
    injectGlobalAnimations();
    injectMobileFixes();
    renderCategoryTabs('all');
    displayMenu();
    startCounters();
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }
});