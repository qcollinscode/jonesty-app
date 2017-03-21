"use strict";

(function () {
    var qraynix = {
        init: function init() {
            this.DOMCache();
            this.bindEvents();
        },
        DOMCache: function DOMCache() {
            this.jumbotron = $(".jumbotron");
            this.window = $(window);
            this.body = $("body");
            this.productImg = $('.product-img');
            this.featPop = $(".feat-pop > span");
            this.background = $('[data-type="background"]');
            this.scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
        },
        bindEvents: function bindEvents() {
            var animateOverlay = this.animateOverlay;
            if (navigator.userAgent.match(/Trident\/7\./)) {
                this.body.on("mousewheel", this.preventImageBug.bind(this));
                this.body.keydown(this.preventKeyDownBug.bind(this));
            };
            for (var x = 0; x < this.productImg.length; x++) {
                this.productImg[x].addEventListener("mouseover", this.animateOverlayOn.bind(this));
                this.productImg[x].addEventListener("mouseout", this.animateOverlayOff.bind(this));
            }
            for (var x = 0; x < this.featPop.length; x++) {
                this.featPop[x].addEventListener("click", this.selectEvnt);
            }
        },
        animateOverlayOn: function animateOverlayOn(e) {
            var target = e.target;
            addClass([target], 'animate-overlay');
        },
        animateOverlayOff: function animateOverlayOff(e) {
            var target = e.target;
            removeClass([target], 'animate-overlay');
        },
        selectEvnt: function selectEvnt() {
            var featPop = $(".feat-pop > span");
            removeClass([featPop[0], featPop[1]], 'feat-pop-select');
            addClass($(this), 'feat-pop-select');
        },
        preventImageBug: function preventImageBug() {
            event.preventDefault();
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        },
        preventKeyDownBug: function preventKeyDownBug(e) {
            e.preventDefault();
            var currentScrollPosition = window.pageYOffset;
            switch (e.which) {
                case 38:
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;
                case 40:
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;
                default:
                    return;
            };
        }
    };
    qraynix.init();
})();

function removeClass(elName, className) {
    if (elName.length > 0) {
        for (var x = 0; x < elName.length; x++) {
            elName[x].classList.remove(className);
        }
    } else {
        elName.classList.remove(className);
    }
    return elName;
}

function addClass(elName, className) {
    if (elName.length > 0) {
        for (var x = 0; x < elName.length; x++) {
            elName[x].classList.add(className);
        }
    } else {
        elName.classList.add(className);
    }
    return elName;
}