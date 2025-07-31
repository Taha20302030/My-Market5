// بيانات التطبيق
const categories = [
    { id: 'restaurants', name: 'مطاعم', icon: 'fa-utensils' },
    { id: 'grocery', name: 'بقالة', icon: 'fa-shopping-cart' },
    { id: 'pharmacies', name: 'صيدليات', icon: 'fa-prescription-bottle' },
    { id: 'coffee', name: 'قهوة وحلويات', icon: 'fa-coffee' },
    { id: 'clothing', name: 'ملابس وأزياء', icon: 'fa-tshirt' },
    { id: 'meat', name: 'لحوم-طيور-أسماك', icon: 'fa-drumstick-bite' },
    { id: 'computers', name: 'كمبيوتر وانترنت', icon: 'fa-laptop' },
    { id: 'real-estate', name: 'عقارات وأملاك', icon: 'fa-building' },
    { id: 'mobile', name: 'موبايل واكسسوارات', icon: 'fa-mobile-alt' },
    { id: 'perfumes', name: 'عطور ومستلزمات صحية', icon: 'fa-spray-can' },
    { id: 'juice', name: 'عصائر', icon: 'fa-glass-whiskey' },
    { id: 'cleaning', name: 'منظفات', icon: 'fa-pump-soap' },
    { id: 'bookstores', name: 'مكتبات', icon: 'fa-book' },
    { id: 'cars', name: 'سيارات وتوصيل', icon: 'fa-car' },
    { id: 'home', name: 'أدوات منزلية ومطبخ', icon: 'fa-home' },
    { id: 'electricity', name: 'كهرباء وسباكة ودهانات', icon: 'fa-tools' },
    { id: 'games', name: 'ألعاب', icon: 'fa-gamepad' },
    { id: 'maintenance', name: 'خدمات الصيانة', icon: 'fa-wrench' },
    { id: 'jewelry', name: 'ذهب وفضة', icon: 'fa-gem' },
    { id: 'snacks', name: 'تسالي ومقرمشات', icon: 'fa-cookie' },
    { id: 'services', name: 'الخدمات العامة', icon: 'fa-concierge-bell' },
    { id: 'beauty', name: 'الصحة والجمال', icon: 'fa-spa' },
    { id: 'factories', name: 'مصانع', icon: 'fa-industry' },
    { id: 'pets', name: 'حيوانات أليفة', icon: 'fa-paw' }
];

const stores = [
    {
        id: 1,
        name: 'مطعم اللذة الشرقية',
        category: 'restaurants',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7,
        reviews: 124
    },
    {
        id: 2,
        name: 'بقالة الندى',
        category: 'grocery',
        image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.3,
        reviews: 89
    },
    {
        id: 3,
        name: 'صيدلية الحياة',
        category: 'pharmacies',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.8,
        reviews: 210
    },
    {
        id: 4,
        name: 'مقهى الفرسان',
        category: 'coffee',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.5,
        reviews: 156
    }
];

const offers = [
    {
        id: 1,
        title: 'عرض خاص على سمك السلمون',
        store: 'بقالة الندى',
        price: '35 ريال',
        originalPrice: '50 ريال',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.2,
        reviews: 24
    },
    {
        id: 2,
        title: 'عروض الصيف على المشروبات',
        store: 'مقهى الفرسان',
        price: '15 ريال',
        originalPrice: '25 ريال',
        image: 'https://images.unsplash.com/photo-1554119921-3e1d58f8c858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.6,
        reviews: 18
    },
    {
        id: 3,
        title: 'خصم 30% على أدوات التنظيف',
        store: 'صيدلية الحياة',
        price: '42 ريال',
        originalPrice: '60 ريال',
        image: 'https://images.unsplash.com/photo-1595425970377-6ab9d7e1b0c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.0,
        reviews: 32
    }
];

const usedItems = [
    {
        id: 1,
        title: 'آيفون 11 برو ماكس',
        price: '2500 ريال',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        contact: '0543210987'
    },
    {
        id: 2,
        title: 'لابتوب ديل الجديد',
        price: '3200 ريال',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        contact: '0551234567'
    },
    {
        id: 3,
        title: 'غسالة أوتوماتيك بحالة ممتازة',
        price: '800 ريال',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        contact: '0567890123'
    }
];

// وظائف التطبيق
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الفئات
    renderCategories();
    
    // تحميل المتاجر
    renderStores();
    
    // تحميل العروض
    renderOffers();
    
    // تحميل منتجات المستعمل
    renderUsedItems();
    
    // التنقل بين الصفحات
    setupNavigation();
    
    // تبديل اللغة
    setupLanguageToggle();
    
    // تبديل نوع الحساب في التسجيل
    setupAccountTypeToggle();
    
    // إظهار/إخفاء قائمة الطعام عند تغيير نوع المتجر
    setupStoreCategoryChange();
    
    // تأثير شريط التنقل عند التمرير
    setupNavbarScrollEffect();
    
    // إضافة تأثيرات للروابط في التذييل
    setupFooterLinks();
});

function renderCategories() {
    const container = document.querySelector('.categories');
    container.innerHTML = '';
    
    categories.forEach(cat => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        categoryEl.innerHTML = `
            <i class="fas ${cat.icon}"></i>
            <div class="category-name">${cat.name}</div>
        `;
        container.appendChild(categoryEl);
    });
}

function renderStores() {
    const container = document.querySelector('.stores');
    container.innerHTML = '';
    
    stores.forEach(store => {
        const storeEl = document.createElement('div');
        storeEl.className = 'store-card';
        storeEl.innerHTML = `
            <div class="store-image" style="background-image: url('${store.image}')"></div>
            <div class="store-info">
                <div class="store-name">${store.name}</div>
                <div class="store-category">${categories.find(c => c.id === store.category).name}</div>
                <div class="rating">
                    <div class="stars">
                        ${renderStars(store.rating)}
                    </div>
                    <div class="reviews">(${store.reviews} تقييم)</div>
                </div>
                <button class="btn">زيارة المتجر</button>
            </div>
        `;
        container.appendChild(storeEl);
    });
}

function renderOffers() {
    const container = document.querySelector('.offers-grid');
    container.innerHTML = '';
    
    offers.forEach(offer => {
        const offerEl = document.createElement('div');
        offerEl.className = 'offer-card';
        offerEl.innerHTML = `
            <div class="offer-image" style="background-image: url('${offer.image}')">
                <div class="offer-badge">خصم 30%</div>
            </div>
            <div class="offer-info">
                <div class="offer-title">${offer.title}</div>
                <div class="offer-price">${offer.price} <span style="text-decoration: line-through; color: var(--gray); font-size: 0.9rem;">${offer.originalPrice}</span></div>
                <div class="offer-store">
                    <i class="fas fa-store"></i>
                    <span>${offer.store}</span>
                </div>
                <div class="rating" style="margin-top: 10px;">
                    <div class="stars">
                        ${renderStars(offer.rating)}
                    </div>
                    <div class="reviews">(${offer.reviews} تقييم)</div>
                </div>
            </div>
        `;
        container.appendChild(offerEl);
    });
}

function renderUsedItems() {
    const container = document.querySelector('.used-items-grid');
    container.innerHTML = '';
    
    usedItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'used-item-card';
        itemEl.innerHTML = `
            <div class="used-item-image" style="background-image: url('${item.image}')"></div>
            <div class="used-item-info">
                <div class="used-item-title">${item.title}</div>
                <div class="used-item-price">${item.price}</div>
                <div class="used-item-contact">
                    <i class="fas fa-phone"></i>
                    <span>${item.contact}</span>
                </div>
            </div>
        `;
        container.appendChild(itemEl);
    });
}

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function setupNavigation() {
    // شريط التنقل العلوي
    document.querySelectorAll('.nav-links a, .bottom-nav .nav-item, .footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إخفاء جميع الصفحات
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // إزالة النشط من عناصر التنقل
            document.querySelectorAll('.nav-links a, .bottom-nav .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // إظهار الصفحة المطلوبة
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
            this.classList.add('active');
            
            // تحديث شريط التنقل السفلي
            document.querySelectorAll(`.bottom-nav .nav-item[data-page="${pageId}"]`).forEach(item => {
                item.classList.add('active');
            });
        });
    });
    
    // أزرار تسجيل الدخول والتسجيل
    document.getElementById('loginBtn').addEventListener('click', function() {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('login').classList.add('active');
    });
    
    document.getElementById('signupBtn').addEventListener('click', function() {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('signup').classList.add('active');
    });
    
    // التنقل بين تسجيل الدخول والتسجيل
    document.getElementById('goToSignup').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('login').classList.remove('active');
        document.getElementById('signup').classList.add('active');
    });
    
    document.getElementById('goToLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('signup').classList.remove('active');
        document.getElementById('login').classList.add('active');
    });
}

function setupLanguageToggle() {
    const langSwitcher = document.getElementById('langSwitcher');
    langSwitcher.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        
        document.documentElement.lang = newLang;
        langSwitcher.textContent = newLang === 'ar' ? 'English' : 'العربية';
        
        // تغيير اتجاه الصفحة
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        
        // تغيير النصوص حسب اللغة
        if (newLang === 'en') {
            document.querySelector('.logo span').textContent = 'MY MARKET';
            document.querySelector('[data-page="home"]').textContent = 'Home';
            document.querySelector('[data-page="offers"]').textContent = 'Offers';
            document.querySelector('[data-page="used-market"]').textContent = 'Used Market';
            document.querySelector('[data-page="account"]').textContent = 'Account';
            document.querySelector('.logo i').style.marginLeft = '0';
            document.querySelector('.logo i').style.marginRight = '10px';
            
            // تحديث عناصر واجهة المستخدم
            document.querySelector('#home .section-title h2').textContent = 'Store Categories';
            document.querySelector('#home .section-title span').textContent = 'Browse by category';
            document.querySelector('#home .section-title:nth-child(3) h2').textContent = 'Top Stores';
            document.querySelector('#home .section-title:nth-child(3) span').textContent = 'Based on customer ratings';
            
            document.querySelector('#offers .section-title h2').textContent = 'Special Offers';
            document.querySelector('#offers .section-title span').textContent = '24-hour deals only';
            
            document.querySelector('#used-market .section-title h2').textContent = 'Used Market';
            document.querySelector('#used-market .section-title span').textContent = 'High quality used items';
            
            document.querySelector('#account .auth-container h3').textContent = 'Personal Information';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(1)').textContent = 'Personal Info';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(2)').textContent = 'Reviews';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(3)').textContent = 'My Products';
            
            document.querySelector('#login .auth-header h2').textContent = 'Login';
            document.querySelector('#login .auth-header p').textContent = 'Enter your credentials to access your account';
            
            document.querySelector('#signup .auth-header h2').textContent = 'Create Account';
            document.querySelector('#signup .auth-header p').textContent = 'Choose the account type that suits you';
            
            // تحديث النصوص في شريط التنقل السفلي
            document.querySelector('.bottom-nav [data-page="home"] span').textContent = 'Home';
            document.querySelector('.bottom-nav [data-page="offers"] span').textContent = 'Offers';
            document.querySelector('.bottom-nav [data-page="used-market"] span').textContent = 'Used';
            document.querySelector('.bottom-nav [data-page="account"] span').textContent = 'Account';
        } else {
            document.querySelector('.logo span').textContent = 'MY MARKET';
            document.querySelector('[data-page="home"]').textContent = 'الرئيسية';
            document.querySelector('[data-page="offers"]').textContent = 'العروض';
            document.querySelector('[data-page="used-market"]').textContent = 'سوق المستعمل';
            document.querySelector('[data-page="account"]').textContent = 'حسابي';
            document.querySelector('.logo i').style.marginRight = '0';
            document.querySelector('.logo i').style.marginLeft = '10px';
            
            // تحديث عناصر واجهة المستخدم
            document.querySelector('#home .section-title h2').textContent = 'أقسام المتاجر';
            document.querySelector('#home .section-title span').textContent = 'تصفح حسب التصنيف';
            document.querySelector('#home .section-title:nth-child(3) h2').textContent = 'أفضل المتاجر';
            document.querySelector('#home .section-title:nth-child(3) span').textContent = 'بناءً على تقييم العملاء';
            
            document.querySelector('#offers .section-title h2').textContent = 'العروض المميزة';
            document.querySelector('#offers .section-title span').textContent = 'عروض لمدة 24 ساعة فقط';
            
            document.querySelector('#used-market .section-title h2').textContent = 'سوق المستعمل';
            document.querySelector('#used-market .section-title span').textContent = 'اغراض مستعملة بجودة عالية';
            
            document.querySelector('#account .auth-container h3').textContent = 'المعلومات الشخصية';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(1)').textContent = 'المعلومات الشخصية';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(2)').textContent = 'التقييمات';
            document.querySelector('#account .profile-tabs .profile-tab:nth-child(3)').textContent = 'منتجاتي';
            
            document.querySelector('#login .auth-header h2').textContent = 'تسجيل الدخول';
            document.querySelector('#login .auth-header p').textContent = 'أدخل بياناتك للدخول إلى حسابك';
            
            document.querySelector('#signup .auth-header h2').textContent = 'إنشاء حساب جديد';
            document.querySelector('#signup .auth-header p').textContent = 'اختر نوع الحساب المناسب لك';
            
            // تحديث النصوص في شريط التنقل السفلي
            document.querySelector('.bottom-nav [data-page="home"] span').textContent = 'الرئيسية';
            document.querySelector('.bottom-nav [data-page="offers"] span').textContent = 'العروض';
            document.querySelector('.bottom-nav [data-page="used-market"] span').textContent = 'المستعمل';
            document.querySelector('.bottom-nav [data-page="account"] span').textContent = 'حسابي';
        }
    });
}

function setupAccountTypeToggle() {
    const customerType = document.getElementById('customerType');
    const ownerType = document.getElementById('ownerType');
    const customerFields = document.getElementById('customerFields');
    const ownerFields = document.getElementById('ownerFields');
    
    customerType.addEventListener('change', function() {
        if (this.checked) {
            customerFields.style.display = 'block';
            ownerFields.style.display = 'none';
        }
    });
    
    ownerType.addEventListener('change', function() {
        if (this.checked) {
            customerFields.style.display = 'none';
            ownerFields.style.display = 'block';
        }
    });
}

function setupStoreCategoryChange() {
    const storeCategory = document.getElementById('storeCategory');
    const menuFileContainer = document.getElementById('menuFileContainer');
    
    // إخفاء قائمة الطعام في البداية
    menuFileContainer.style.display = 'none';
    
    storeCategory.addEventListener('change', function() {
        if (this.value === 'restaurants') {
            menuFileContainer.style.display = 'block';
        } else {
            menuFileContainer.style.display = 'none';
        }
    });
}

function setupNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupFooterLinks() {
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('data-page')) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                
                // إخفاء جميع الصفحات
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                // إظهار الصفحة المطلوبة
                document.getElementById(pageId).classList.add('active');
                
                // تحديث التنقل
                document.querySelectorAll('.nav-links a, .bottom-nav .nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                document.querySelectorAll(`[data-page="${pageId}"]`).forEach(item => {
                    item.classList.add('active');
                });
            }
        });
    });
}