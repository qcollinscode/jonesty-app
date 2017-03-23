(function() {
    const qraynix = {
        init: function() {
            this.DOMCache();
            this.bindEvents();
            this.attachImgClass();
            this.navFixedTop();
        },
        DOMCache: function() {
            this.jumbotron = $(".jumbotron");
            this.window = $(window);
            this.body = $("body");
            this.productImg = $('.product-img');
            this.featPop = $(".feat-pop > span");
            this.ringPicContainer = $(".pic-container");
            this.ringImage2 = $('.row:nth-child(2) > .pic-container');
            this.ringImage3 = $('.row:nth-child(3) > .pic-container');
            this.background = $('[data-type="background"]');
            this.navBarButton = $('.navbar-header > button');
            this.bottomNav = $('.bottomNav');
            this.scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
        },
        bindEvents: function() {
            if(navigator.userAgent.match(/Trident\/7\./)) {
                this.body.on("mousewheel", this.preventImageBug.bind(this));
                this.body.keydown(this.preventKeyDownBug.bind(this));
            };
            for(var x = 0; x < this.featPop.length; x++) {
                this.featPop[x].addEventListener("click", this.selectEvnt);
            }
            this.productImg.mouseenter(this.animateGalleryImgOverlayOn.bind(this)).mouseleave(this.animateGalleryImgOverlayOff.bind(this));
            this.ringPicContainer.mouseenter(this.animateRingsImgOverlayOn.bind(this)).mouseleave(this.animateRingsImgOverlayOff.bind(this));
            this.navBarButton.on('click', this.animateNavButton.bind(this));

        },
        navFixedTop: function() {
            const bottomNav = this.bottomNav;
            $(document).ready(function() {
                $(window).scroll(function() {
                    console.log($(window).scrollTop());
                    if($(window).scrollTop() > 52) {
                        bottomNav.addClass('navbar-fixed-top');
                    }
                    if($(window).scrollTop() < 53) {
                        bottomNav.removeClass('navbar-fixed-top');
                    }
                });
            });
        },
        animateNavButton: function() {
            const navBarButton = this.navBarButton;
            if(navBarButton.hasClass('animate-nav-button')) {
                removeClass(navBarButton, 'animate-nav-button');
            } else {
                addClass(navBarButton, 'animate-nav-button');
            }
        },
        attachImgClass: function () {
            this.ringImage2.addClass("pic2");
            this.ringImage3.addClass("pic3");
        },
        animateGalleryImgOverlayOn: function(e) {
            const productImg = this.productImg;
            removeClass(productImg, 'animate-overlay');
            addClass([e.target], 'animate-overlay');
        },
        animateGalleryImgOverlayOff: function(e) {
            removeClass([e.target], 'animate-overlay');
        },
        animateRingsImgOverlayOn: function(e) {
            const img = this.ringPicContainer;
            removeClass(img, 'overlayPicContainer');
            addClass(e.target, 'overlayPicContainer');
        },
        animateRingsImgOverlayOff: function(e) {
            removeClass(e.target, 'overlayPicContainer');
        },
        selectEvnt: function() {
            const featPop = $(".feat-pop > span");
            removeClass([featPop[0], featPop[1]], 'feat-pop-select');
            addClass($(this), 'feat-pop-select');
        },
        preventImageBug: function() {
            event.preventDefault();
            const wheelDelta = event.wheelDelta;
            const currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        },
        preventKeyDownBug: function(e) {
            e.preventDefault();
            const currentScrollPosition = window.pageYOffset;
            switch (e.which) {
                case 38:
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;
                case 40:
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;
                default: return;
            };
        }
    };
    qraynix.init();
}());

function removeClass(elName, className) {
  if (elName.length > 0) {
    for(var x = 0; x < elName.length; x++) {
      elName[x].classList.remove(className);
    }
  } else {
      elName.classList.remove(className);
  }
  return elName;
}

function addClass(elName, className) {
  if (elName.length > 0) {
    for(var x = 0; x < elName.length; x++) {
      elName[x].classList.add(className);
    }
  } else {
      elName.classList.add(className);
  }
  return elName;
}