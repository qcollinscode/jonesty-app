(function() {
    const qraynix = {
        init: function() {
            this.DOMCache();
            this.bindEvents();
        },
        DOMCache: function() {
            this.subNav = document.querySelector("#ls1-menu"),
            this.subNavContainer = document.querySelector("#sublist-container"),
            this.arrow = document.querySelector('.fa-chevron-down'),
            this.storeLnk = document.querySelector('.ls7');
        },
        bindEvents: function() {
            this.storeLnk.addEventListener('click', this.changeMenu.bind(this));
        },
        changeMenu: function() {
            this.storeLnk.classList.toggle('hi7-bg');
            this.arrow.classList.toggle('ico-s');
            this.subNavContainer.classList.toggle('hi7');
            this.subNav.classList.toggle('sub-hi7');
        }
    };
    qraynix.init();
}());