"use strict";

(function () {
    var qraynix = {
        init: function init() {
            this.DOMCache();
            this.bindEvents();
        },
        DOMCache: function DOMCache() {
            this.subNav = document.querySelector("#ls1-menu"), this.subNavContainer = document.querySelector("#sublist-container"), this.arrow = document.querySelector('.fa-chevron-down'), this.storeLnk = document.querySelector('.ls7');
        },
        bindEvents: function bindEvents() {
            this.storeLnk.addEventListener('click', this.changeMenu.bind(this));
        },
        changeMenu: function changeMenu() {
            this.storeLnk.classList.toggle('hi7-bg');
            this.arrow.classList.toggle('ico-s');
            this.subNavContainer.classList.toggle('hi7');
            this.subNav.classList.toggle('sub-hi7');
        }
    };
    qraynix.init();
})();