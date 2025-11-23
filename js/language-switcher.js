// Language Switcher for Peapod Hotels
(function() {
    'use strict';

    const LANG_KEY = 'peapod_lang';

    // Map of English pages to Chinese pages
    const pageMap = {
        'index.html': 'index-zh.html',
        'terms.html': 'terms-zh.html',
        'privacy.html': 'privacy-zh.html',
        'sms-terms.html': 'sms-terms-zh.html',
        // Reverse mapping
        'index-zh.html': 'index.html',
        'terms-zh.html': 'terms.html',
        'privacy-zh.html': 'privacy.html',
        'sms-terms-zh.html': 'sms-terms.html'
    };

    // Get current page filename
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        return page;
    }

    // Check if current page is Chinese version
    function isChinesePage() {
        return getCurrentPage().includes('-zh.');
    }

    // Get the alternate language page URL
    function getAlternatePage() {
        const currentPage = getCurrentPage();
        return pageMap[currentPage] || currentPage;
    }

    // Save language preference
    function saveLanguagePreference(lang) {
        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (e) {
            // localStorage not available
        }
    }

    // Get saved language preference
    function getLanguagePreference() {
        try {
            return localStorage.getItem(LANG_KEY);
        } catch (e) {
            return null;
        }
    }

    // Switch to the other language
    function switchLanguage() {
        const alternatePage = getAlternatePage();
        const newLang = isChinesePage() ? 'en' : 'zh';
        saveLanguagePreference(newLang);
        window.location.href = alternatePage;
    }

    // Check if we should redirect based on saved preference
    function checkLanguageRedirect() {
        const savedLang = getLanguagePreference();
        const currentIsZh = isChinesePage();

        // Only redirect if there's a saved preference that differs from current page
        if (savedLang === 'zh' && !currentIsZh) {
            const alternatePage = getAlternatePage();
            if (alternatePage !== getCurrentPage()) {
                window.location.href = alternatePage;
            }
        } else if (savedLang === 'en' && currentIsZh) {
            const alternatePage = getAlternatePage();
            if (alternatePage !== getCurrentPage()) {
                window.location.href = alternatePage;
            }
        }
    }

    // Initialize the switcher
    function init() {
        // Attach click handler to language switcher
        const switcher = document.getElementById('lang-switcher');
        if (switcher) {
            switcher.addEventListener('click', function(e) {
                e.preventDefault();
                switchLanguage();
            });
        }

        // Check for language redirect (optional - uncomment to enable auto-redirect)
        // checkLanguageRedirect();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for debugging
    window.PeapodLang = {
        switchLanguage: switchLanguage,
        getCurrentPage: getCurrentPage,
        isChinesePage: isChinesePage,
        getLanguagePreference: getLanguagePreference
    };
})();
