(function () {
    $("#play_video_btn").click(function() {
        var bool = $(".home_video").prop("muted");
        $(".home_video").prop("muted",!bool);
    });
    var swiper = new Swiper('.home_slider_for_case_item', {
        slidesPerView: 1,

        loop: true,
        pagination: {
            el: '.slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
        breakpoints: {

            420: {
                pagination: false
            }

        }
    });

    var sliderBuyItem = new Swiper('.home_slider_buy_item', {
        slidesPerView: 1,
        loop: false,

        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
    });
    if (window.innerWidth > 767) {
        var immg = document.querySelectorAll('.xzoom')
        elImg = Array.prototype.slice.call(immg)


        elImg.forEach(function (el, ind) {
            // console.log(ind, el)
            $(el).xzoom(
                {
                    position: 'lens',
                    // lensShape: 'circle',
                    sourceClass: 'xzoom-hidden'
                });
        })
    }


    var homeSliderReview = new Swiper('.home_slider_review', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev'
        },
        breakpoints: {

            768: {
                slidesPerView: 1
            },

        }
    });

})();


/*
!function (e) {
    "use strict";
    var t = {SMALL: 479, MED: 767, LARGE: 1023, XLARGE: 1199}, o = {BREAK_1: 904, BREAK_2: 1129, BREAK_3: 1299}, s = {
        $heroCarouselEl: $(".js--carousel--hero"),
        $soundToggle: $(".js--carousel--heroSoundToggle"),
        $featuresCarouselEl: $(".js--carousel--features"),
        featuresCarouselItemSelector: ".js--carousel--featuresItem",
        $blockCarouselEl: $(".js--carousel--block"),
        blockCarouselItem: ".js--carousel--blockItem",
        $inlineCarouselEl: $(".js--inlineCarousel"),
        $inlineCarouselNoDotsEl: $(".js--inlineCarousel--noDots"),
        HeroVideoCover: function () {
            var e = $(".js--carousel--heroVideo");
            $(window).resize(function () {
                var t = e.parent().width() / 1280, o = e.parent().height() / 720, s = t > o ? t : o;
                e.width(1280 * s), e.height(720 * s)
            }), $(window).trigger("resize")
        },
        HeroCarousel: function () {
            function e(e) {
                var o = t.$heroCarouselEl.flickity("getParentCell", e.target);
                t.$heroCarouselEl.flickity("cellSizeChange", o && o.element)
            }

            var t = this, o = {
                pageDots: $(".hero", t.$heroCarouselEl).length > 1,
                prevNextButtons: $(".hero", t.$heroCarouselEl).length > 1,
                dragThreshold: 10
            };
            if (t.$heroCarouselEl.length) {
                var s = $("video", t.$heroCarouselEl).length > 0;
                t.$heroCarouselEl.flickity(o), t.$heroCarouselEl.find("video").each(function (t, o) {
                    o.play(), $(o).on("loadeddata", e)
                }), s && function () {
                    var e = void 0, o = void 0;
                    t.HeroVideoCover(), t.$soundToggle.on("click", function (s) {
                        s.preventDefault(), e = $(this).parent().siblings(".heroCarousel__itemVideoContainer").find("video"), o = $(this).parent(".js--carousel--heroCaption"), t.HeroVideoToggle(e, o)
                    }), $(document).keyup(function (s) {
                        27 !== s.keyCode || e.prop("muted") || t.HeroVideoMute(e, o)
                    })
                }()
            }
        },
        HeroVideoUnmute: function (e, t) {
            e.prop({muted: !1}).attr({controls: !0}), t.fadeOut()
        },
        HeroVideoMute: function (e, t) {
            e.prop({muted: !0}).attr({controls: !1}), t.fadeIn()
        },
        HeroVideoToggle: function (e, t) {
            var o = this;
            e.prop("muted") ? o.HeroVideoUnmute(e, t) : o.HeroVideoMute(e, t)
        },
        FeaturesCarousel: function () {
            var e = this, t = {
                adaptiveHeight: !0,
                selector: e.featuresCarouselItemSelector,
                lazyLoad: 1,
                pageDots: !1,
                prevNextButtons: !0,
                dragThreshold: 10
            };
            if (e.$featuresCarouselEl.length) {
                var o = $(".js--carousel--featuresContainer"), s = $(".js--carousel--featuresDots"),
                    n = $(".js--carousel--featuresDots .featuresCarousel__dotsItem");
                e.$featuresCarouselEl.flickity(t);
                var i = e.$featuresCarouselEl.data("flickity");
                e.$featuresCarouselEl.on("select.flickity", function () {
                    var e = n.eq(i.selectedIndex);
                    n.removeClass("is-selected"), e.addClass("is-selected")
                }), s.on("click", ".featuresCarousel__dotsItem", function () {
                    var t = $(this).index();
                    e.$featuresCarouselEl.flickity("select", t)
                }), o.on("mouseover", function () {
                    e.$featuresCarouselEl.flickity("pausePlayer")
                }).on("mouseleave", function () {
                    e.$featuresCarouselEl.flickity("unpausePlayer")
                })
            }
        },
        BlockCarousel: function () {
            var e = this, t = {imagesLoaded: !0, pageDots: !1, prevNextButtons: !0, dragThreshold: 10, wrapAround: !0};
            e.$blockCarouselEl.length && e.$blockCarouselEl.flickity(t)
        },
        inlineCarouselOptions: {imagesLoaded: !0, pageDots: !0, prevNextButtons: !0, dragThreshold: 10},
        InlineCarousel: function () {
            var e = this;
            e.$inlineCarouselEl.length && e.$inlineCarouselEl.flickity(e.inlineCarouselOptions)
        },
        inlineCarouselOptionsNoDots: {
            setGallerySize: !1,
            lazyLoad: 1,
            pageDots: !1,
            prevNextButtons: !0,
            dragThreshold: 10
        },
        InlineCarouselNoDots: function () {
            var e = this;
            e.$inlineCarouselNoDotsEl.length && e.$inlineCarouselNoDotsEl.flickity(e.inlineCarouselOptionsNoDots)
        },
        Init: function () {
            var e = this;
            s.$heroCarouselEl.length && e.HeroCarousel(), s.$featuresCarouselEl.length && e.FeaturesCarousel(), s.$blockCarouselEl.length && e.BlockCarousel(), s.$inlineCarouselEl.length && e.InlineCarousel(), s.$inlineCarouselNoDotsEl.length && e.InlineCarouselNoDots()
        }
    };
    s.Init(), {
        GetVersion: function () {
            var e = -1;
            if ("Microsoft Internet Explorer" == navigator.appName) {
                t = navigator.userAgent;
                null != (o = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})")).exec(t) && (e = parseFloat(RegExp.$1))
            } else if ("Netscape" == navigator.appName) {
                var t = navigator.userAgent, o = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                null != o.exec(t) && (e = parseFloat(RegExp.$1))
            }
            return e > -1 && $("html").addClass("is-IE"), e
        }, Init: function () {
            this.GetVersion(), this.isIos = null !== /iPad|iPhone|iPod/.exec(navigator.userAgent), this.isAndroid = null !== /Android \d+\.\d+/.exec(navigator.userAgent), this.isIos || this.isAndroid ? $("html").addClass("zm-no-hover") : $("html").addClass("zm-hover")
        }
    }.Init();
    var n = {
        $toggle: $(".js--expand--toggle"),
        $close: $(".js--expand--close"),
        openClass: "is-open",
        Open: function (e) {
            e.stop().slideDown("400").addClass(n.openClass)
        },
        Close: function (e, t) {
            e.stop().slideUp("400").removeClass(n.openClass), $('a[href^="' + t + '"].js--expand--toggle').removeClass(n.openClass)
        },
        Toggle: function (e, t) {
            e.hasClass(n.openClass) ? n.Close(e, t) : n.Open(e)
        },
        ClickHandler: function () {
            this.$toggle.on("click", function (e) {
                e.preventDefault(), $(this).blur(), $(this).toggleClass(n.openClass);
                var t = $(this).attr("href"), o = $(t);
                n.Toggle(o, t)
            }), this.$close.on("click", function (e) {
                e.preventDefault();
                var t = "#" + $(this).parent().attr("id"), o = $(t);
                n.Close(o, t)
            })
        },
        Init: function () {
            this.ClickHandler()
        }
    };
    n.$toggle.length && n.Init();
    var i = {
        $body: $("body"),
        $el: $(".js--fullGallery"),
        $trigger: $(".js--fullGallery--open"),
        $popover: $(".js--fullGallery--popover"),
        $close: $(".js--fullGallery--close"),
        overflow: "overflow-hidden",
        isOpen: "is-open",
        created: !1,
        options: {
            controlNavigation: "thumbnails",
            thumbs: {
                autoCenter: !0,
                drag: !0,
                orientation: $(window).width() > t.MED ? "vertical" : "horizontal",
                paddingBottom: 6,
                appendSpan: !0
            },
            fullscreen: {enabled: !0, nativeFS: !0},
            arrowsNav: !0,
            autoScaleSlider: !0,
            autoScaleSliderWidth: $(window).width() > t.MED ? 7 : $(window).width() > $(window).height() ? 9 : 6,
            autoScaleSliderHeight: $(window).width() > t.MED ? 4 : 5,
            controlsInside: !1,
            globalCaption: !0,
            loop: !0,
            keyboardNavEnabled: !0,
            transitionType: "fade"
        },
        DetermineScaleWidth: function () {
            return $(window).width() > t.MED ? 7 : $(window).width() > $(window).height() ? 9 : 6
        },
        DetermineScaleHeight: function () {
            return $(window).width() > t.MED ? 4 : 5
        },
        ResizesDetermineSettings: function () {
            var e = this, o = e.$el.data("royalSlider");
            $(window).width() > t.MED ? o.setThumbsOrientation("vertical") : o.setThumbsOrientation("horizontal"), o.st.autoScaleSliderWidth = e.DetermineScaleWidth(), o.st.autoScaleSliderHeight = e.DetermineScaleHeight(), o.updateSliderSize(!0)
        },
        OpenPopover: function () {
            var e = this;
            e.$body.addClass(e.overflow), e.$popover.addClass(e.isOpen), e.created ? e.ResizeGallery() : e.CreateGallery()
        },
        ClosePopover: function () {
            var e = this, t = e.$el.data("royalSlider");
            t.isFullscreen && t.exitFullscreen(), t.stopVideo(), e.$body.removeClass(e.overflow), e.$popover.removeClass(e.isOpen)
        },
        CreateGallery: function () {
            var e = this;
            e.$el.royalSlider(e.options), e.created = !0;
            var t = e.$el.data("royalSlider");
            e.$close.appendTo(".js--fullGallery"), t.ev.on("rsBeforeAnimStart", function (e) {
                t.stopVideo()
            }).on("rsAfterSlideChange", function () {
                t.playVideo()
            })
        },
        ResizeGallery: function () {
            var e = this, t = e.$el.data("royalSlider");
            e.ResizesDetermineSettings(), t.updateSliderSize(!0)
        },
        EventHandlers: function () {
            var e = this;
            e.$trigger.on("click", function (t) {
                t.preventDefault(), e.OpenPopover()
            }), e.$popover.on("click", function (t) {
                if (t.target !== this) return !1;
                e.ClosePopover()
            }), e.$close.on("click", function (t) {
                t.preventDefault(), e.ClosePopover()
            }), $(document).keyup(function (t) {
                27 === t.keyCode && e.$popover.hasClass(e.isOpen) && e.ClosePopover()
            }), $(window).on("resize", function (t) {
                e.created && e.ResizesDetermineSettings()
            })
        },
        Init: function () {
            this.EventHandlers()
        }
    };
    i.$el.length && i.Init();
    var a = {
        $incentivesEl: $(".js--incentives"),
        $states: $(".js--incentives--states"),
        $state: $(".js--incentives--state"),
        $stateClose: $(".js--incentives--stateClose"),
        $stateInfo: $(".js--incentives--stateInfo"),
        $toggleCityIncentives: $(".js--incentives--cityToggle"),
        $cityIncentives: $(".js--incentives--cityIncentives"),
        openClass: "is-open",
        selectedClass: "is-selected",
        hiddenClass: "is-hidden",
        stateSelectedClass: "state-selected",
        SelectState: function (e) {
            var t = this;
            t.$state.not(e).addClass(t.hiddenClass), e.blur().addClass(t.selectedClass);
            var o = e.attr("href");
            $(o).addClass(t.openClass), t.$stateClose.addClass(t.openClass).addClass("current"), t.$states.addClass(t.stateSelectedClass)
        },
        UnselectState: function () {
            var e = this;
            e.$state.removeClass(e.hiddenClass).removeClass(e.selectedClass).blur(), e.$stateInfo.removeClass(e.openClass), e.$stateClose.removeClass(e.openClass).removeClass("current"), e.$toggleCityIncentives.each(function () {
                $(this).hasClass(e.openClass) && a.HideCityIncentives($(this))
            }), e.$states.removeClass(e.stateSelectedClass)
        },
        ShowCityIncentives: function (e) {
            var t = this;
            e.addClass(t.openClass), e.siblings(".js--incentives--cityIncentives").addClass(t.openClass)
        },
        HideCityIncentives: function (e) {
            var t = this;
            e.removeClass(t.openClass), e.siblings(".js--incentives--cityIncentives").removeClass(t.openClass)
        },
        ToggleCityIncentives: function (e) {
            var t = this;
            e.hasClass(t.openClass) ? a.HideCityIncentives(e) : a.ShowCityIncentives(e)
        },
        ClickHandlers: function () {
            if (!this.$incentivesEl.length) return !1;
            var e = this;
            this.$state.on("click", function (t) {
                t.preventDefault(), $(this).hasClass(e.selectedClass) ? a.UnselectState() : a.SelectState($(this))
            }), this.$stateClose.on("click", function (e) {
                e.preventDefault(), a.UnselectState()
            }), this.$toggleCityIncentives.on("click", function (e) {
                e.preventDefault(), a.ToggleCityIncentives($(this))
            })
        },
        Init: function () {
            this.ClickHandlers()
        }
    };
    a.$incentivesEl.length && a.Init(), {
        bLazyOptions: {
            offset: 800,
            selector: ".bLazy",
            successClass: "bLoaded",
            loadInvisible: !1,
            breakpoints: [{width: 479, src: "data-src-small"}, {width: 767, src: "data-src-medium"}, {
                width: 1023,
                src: "data-src-large"
            }],
            success: function (e) {
            },
            error: function (e, t) {
            }
        }, bLazy: function () {
            var e = this;
            new Blazy(e.bLazyOptions)
        }, init: function () {
            "undefined" != typeof Blazy && this.bLazy()
        }
    }.init();
    var l = {
        $toggleGroup: $(".js--modelSwitcher"),
        $toggle: $(".js--modelSwitcher--toggle"),
        $section: $(".js--modelSwitcher--section"),
        openClass: "is-open",
        $currentOpen: null,
        Open: function (e) {
            var t = this;
            e.parents(".js--modelSwitcher").find(".js--modelSwitcher--section").removeClass(t.openClass), e.addClass(t.openClass), $(".js--inlineCarousel").flickity("resize")
        },
        ClickHandler: function () {
            var e = this;
            this.$toggle.on("click", function (t) {
                t.preventDefault(), $(this).parents(".js--modelSwitcher").find(".js--modelSwitcher--toggle").removeClass(e.openClass), $(this).toggleClass(e.openClass);
                var o = $(this).attr("href"), s = $(o);
                e.Open(s)
            })
        },
        Init: function () {
            this.ClickHandler()
        }
    };
    l.$toggleGroup.length && l.Init();
    var r = {
        $body: $("body"),
        $wrapper: $(".js--wrapper"),
        $mainNav: $(".js--nav"),
        $navLinks: $(".js--nav--links"),
        $hamburger: $(".js--nav--hamburger"),
        mobileNavOpenClass: "show-mobileNav",
        mobileNavIsOpen: !1,
        pageHidden: !1,
        MobileNavOpen: function () {
            r.ModelsHide(), c.Activate(), this.$wrapper.addClass(r.mobileNavOpenClass), this.$mainNav.addClass(r.mobileNavOpenClass), this.mobileNavIsOpen = !0
        },
        MobileNavClose: function () {
            c.Deactivate(), this.$wrapper.removeClass(r.mobileNavOpenClass), this.$mainNav.removeClass(r.mobileNavOpenClass), this.mobileNavIsOpen = !1, this.DropdownHide(r.$hasDropdown)
        },
        MobileNavToggle: function () {
            this.mobileNavIsOpen ? r.MobileNavClose() : r.MobileNavOpen()
        },
        Hamburger: function () {
            this.$hamburger.on("click", function (e) {
                e.preventDefault(), $(this).hasClass(r.modelHamburgerCloseConvertClass) || r.MobileNavToggle()
            })
        },
        NavCloseOnResize: function () {
            $(window).on("throttledresize", function (e) {
                r.MobileNavClose()
            })
        },
        $hasDropdown: $(".js--nav--hasDropdown"),
        dropdownTopLevelLinkEl: ".js--nav--hasDropdown .nav__link",
        dropdownOpenClass: "show-dropdown",
        __ifMobile: $(window).width() <= o.BREAK_1,
        UpdateIfMobile: function () {
            var e = this;
            $(window).on("throttledresize", function (t) {
                e.__ifMobile = $(window).width() <= o.BREAK_1
            })
        },
        DropdownReveal: function (e) {
            e.addClass(r.dropdownOpenClass)
        },
        DropdownHide: function (e) {
            e.removeClass(r.dropdownOpenClass)
        },
        DropdownToggle: function (e) {
            e.hasClass(r.dropdownOpenClass) ? r.DropdownHide(e) : r.DropdownReveal(e)
        },
        DropdownEvents: function () {
            Modernizr.touchevents || this.$hasDropdown.hover(function (e) {
                r.__ifMobile || r.DropdownReveal($(this))
            }, function () {
                r.__ifMobile || r.DropdownHide($(this))
            }), $(document).on("click", r.dropdownTopLevelLinkEl, function (e) {
                if (r.__ifMobile) {
                    e.preventDefault();
                    var t = $(this).parent();
                    t.hasClass(r.dropdownOpenClass) || r.$hasDropdown.removeClass(r.dropdownOpenClass), r.DropdownToggle(t)
                }
            })
        },
        $models: $(".js--nav--models"),
        $modelsTrigger: $(".js--nav--modelsTrigger"),
        $modelsTriggerLink: $(".js--nav--modelsTriggerLink"),
        modelsOpenClass: "show-models",
        modelHamburgerCloseConvertClass: "is-closeTrigger",
        ModelsReveal: function () {
            this.$models.addClass(r.modelsOpenClass), r.MobileNavClose(), c.Activate(), this.$wrapper.addClass(r.modelsOpenClass), this.$mainNav.addClass(r.modelsOpenClass).find(".nav__container").css("background-color", "transparent")
        },
        ModelsHide: function () {
            c.Deactivate(), this.$wrapper.removeClass(r.modelsOpenClass), this.$models.removeClass(r.modelsOpenClass), this.$mainNav.removeClass(r.modelsOpenClass).find(".nav__container").attr("style", ""), this.$hamburger.removeClass(r.modelHamburgerCloseConvertClass)
        },
        ModelsToggle: function () {
            this.$models.hasClass(r.modelsOpenClass) ? r.ModelsHide() : r.ModelsReveal()
        },
        ModelsEvents: function () {
            this.$modelsTrigger.on("click", function (e) {
                e.preventDefault(), r.ModelsToggle()
            }), this.$modelsTriggerLink.on("click", function (e) {
                e.preventDefault(), r.ModelsToggle(), r.$mainNav.css("transform", "translateY(0)"), r.$body.addClass("scrolling-up")
            }), this.$hamburger.on("click", function (e) {
                e.preventDefault(), $(this).hasClass(r.modelHamburgerCloseConvertClass) && r.ModelsHide()
            }), $(document).keyup(function (e) {
                27 === e.keyCode && r.$models.hasClass(r.modelsOpenClass) && r.ModelsHide()
            }), $(".nav__modelsContainer").click(function (e) {
                e.target == this && (e.preventDefault(), r.ModelsHide())
            })
        },
        CloseAllFast: function () {
            r.$models.addClass("nav--notransition"), r.ModelsHide(), r.$models.removeClass("nav--notransition"), r.MobileNavClose(), $(r.dropdownOpenClass).each(function () {
                r.DropdownHide($(this))
            })
        },
        headroomOptions: {
            tolerance: {up: 20, down: 0}, onUnpin: function () {
                r.$mainNav.css("transform", "translateY(-100%)"), r.$body.removeClass("scrolling-up")
            }, onPin: function () {
                r.$mainNav.css("transform", "translateY(0)"), r.$body.addClass("scrolling-up")
            }, onTop: function () {
                r.$mainNav.css("transform", "translateY(0)")
            }
        },
        ScrollFixNav: function () {
            this.$mainNav.headroom(r.headroomOptions)
        },
        BFCacheFix: function () {
            $(window).bind("pageshow", function (e) {
                r.pageHidden && (r.CloseAllFast(), r.pageHidden = !1)
            }), $(window).bind("pagehide", function (e) {
                r.pageHidden = !0
            })
        },
        Init: function () {
            this.Hamburger(), this.UpdateIfMobile(), this.DropdownEvents(), this.ModelsEvents(), this.ScrollFixNav(), this.BFCacheFix()
        }
    };
    r.Init();
    var d = {
        batteryKey: "",
        $orderEl: $(".js--order"),
        $additionalModuleEl: $("#attrib-options-additional-module"),
        format: function (e, t) {
            var o = {isCurrency: !1, insertCommas: !1, decimals: 0};
            if ($.extend(o, t), !e) return "0";
            var s = d.getCountryId(), n = OrderModuleInfo.currency[s].currencyInfo,
                i = (e = +e).toFixed(o.decimals).split("."), a = i[0], l = i.length > 1 ? n.decimal_point + i[1] : "";
            if (o.insertCommas) for (var r = /(\d+)(\d{3})/; r.test(a);) a = a.replace(r, "$1" + n.thousands_point + "$2");
            var c = a + l;
            return o.isCurrency && (c = n.symbol_left + c + n.symbol_right), c
        },
        getBatteryOptionId: function () {
            return OrderModuleInfo.options.battery.id
        },
        setBatteryKey: function (e) {
            this.batteryKey = e
        },
        getBatteryKey: function () {
            return this.batteryKey
        },
        getCountryId: function () {
            var e = "";
            return $("input[name=zmCountryId]").length ? e = $("input[name=zmCountryId]").val() : $("select[name=zmCountryId]").length && (e = $("select[name=zmCountryId]").val()), e
        },
        getCountry: function () {
            var e = d.getCountryId();
            return OrderModuleInfo.countryMap[e]
        },
        getModel: function () {
            return $("input[type=radio][name=order-model]:checked").val()
        },
        updateModelImage: function (e) {
            var t = "1.0";
            $("#order-image .order-image").attr("id") == "order-image-" + e && (t = "0.0"), $("#order-image .swap-image").animate({opacity: t}, 700)
        },
        setMainPrice: function (e) {
            $("#order-price").html(e)
        },
        updateMainPrice: function () {
            var e = this.getModel(), t = this.getCountry(), o = 0;
            $.each(OrderModuleInfo.options, function (s, n) {
                $.each(n.values, function (n, i) {
                    if (void 0 !== i[e]) {
                        var a = i[e].price_list;
                        if ("battery" == s) $('input[type=radio][name="id[' + d.getBatteryOptionId() + ']"][value=' + i[e].value_id + "]").is(":checked") && (o += +a[t].price); else {
                            var l = $("#attrib-" + s + "-" + n);
                            $(".formField__checkboxInput", l).is(":checked") && (o += +a[t].price)
                        }
                    }
                })
            }), d.setMainPrice(d.format(o, {isCurrency: !0, insertCommas: !0}))
        },
        updateOptionValue: function (e, t, o, s) {
            var n = $("#attrib-" + e + "-" + t);
            o == !n.hasClass("formField__checkboxDisabled") && (n.toggleClass("formField__checkboxDisabled", o), $(".formField__checkboxInput", n).prop("disabled", o), o && $(".formField__checkboxInput", n).prop("checked", !1)), $("#attrib-" + e + "-" + t + " .formField__checkboxSubtext").html(s)
        },
        updateStateIncentives: function (e, t) {
            if (void 0 !== OrderModuleInfo.deductions["tax-incentives"] && void 0 !== OrderModuleInfo.deductions["tax-incentives"].states) {
                var o = this.getBatteryKey();
                $.each(OrderModuleInfo.deductions["tax-incentives"].states, function (t, s) {
                    var n = "";
                    void 0 !== s["zero-" + e + "-" + OrderModuleInfo.year] && (n = s["zero-" + e + "-" + OrderModuleInfo.year]), void 0 !== s["zero-" + e + "-" + OrderModuleInfo.year + "-" + o] && (n += s["zero-" + e + "-" + OrderModuleInfo.year + "-" + o]), n = 0 == n ? s.info["no-incentive-text"] : d.format(n, {
                        isCurrency: !0,
                        insertCommas: !0
                    }), $("#state-" + t).html() != n && $("#state-" + t).html(n)
                })
            }
        },
        updateBattery: function () {
            var e = this.getModel(), t = this.getCountry(),
                o = $('input[type=radio][name="id[' + this.getBatteryOptionId() + ']"]:checked').val(), s = "";
            $.each(OrderModuleInfo.options, function (n, i) {
                "battery" == n && $.each(i.values, function (n, i) {
                    if (void 0 !== i[e] && (void 0 === o && (o = i[e].value_id), i[e].value_id === o)) {
                        $('input[type=radio][name="id[' + d.getBatteryOptionId() + ']"][value=' + o + "]").prop("checked", !0);
                        var a = $("#attrib-battery-" + n);
                        a.length && (s = $("label", a).attr("id"), d.setBatteryKey(s));
                        var l = i[e].price_list;
                        d.updateMainPrice(), d.updateStateIncentives(e, l[t].price)
                    }
                })
            }), this.toggleAdditionalModuleOption()
        },
        updateModel: function () {
            var e = this.getModel();
            $("input[type=hidden][name=products_id]").val(OrderModuleInfo.modelMap[e]);
            var t = this.getCountry();
            this.updateModelImage(e), $.each(OrderModuleInfo.options, function (o, s) {
                $.each(s.values, function (s, n) {
                    var i = void 0 === n[e], a = "";
                    i || (a = n[e].price_list[t].formattedPrice), d.updateOptionValue(o, s, i, a)
                })
            }), this.updateBattery()
        },
        toggleCheckboxValues: function (e, t) {
            var o = $(e), s = $(t), n = $("input", o).is(":checked");
            n && ($("input", s).prop("checked", !1), $(o).toggleClass("formField__checkboxToggledOff", !1)), $("input", s).prop("disabled", n), s.toggleClass("formField__checkboxToggledOff", n)
        },
        toggleAdditionalModuleOption: function () {
            if (this.$additionalModuleEl.length) {
                var e = this.$additionalModuleEl, t = "zf3.6-modular" == this.getBatteryKey();
                $("input", e).is(":checked") && ($("input", e).prop("checked", t), d.updateMainPrice()), $("input", e).prop("disabled", !t), e.toggleClass("formField__checkboxToggledOff", !t)
            }
        },
        init: function () {
            if ("undefined" != typeof OrderModuleInfo) {
                $("#attrib-options-power-tank").on("change", function () {
                    d.toggleCheckboxValues("#attrib-options-power-tank", "#attrib-options-charge-tank")
                }), $("#attrib-options-charge-tank").on("change", function () {
                    d.toggleCheckboxValues("#attrib-options-charge-tank", "#attrib-options-power-tank")
                }), this.toggleCheckboxValues("#attrib-options-power-tank", "#attrib-options-charge-tank"), this.toggleCheckboxValues("#attrib-options-charge-tank", "#attrib-options-power-tank"), $("input.formField__checkboxInput[type=checkbox]", this.$orderEl).on("change", function () {
                    d.updateMainPrice()
                }), $("input[type=radio][name=order-model]").on("change", function () {
                    d.updateModel()
                });
                var e = this.getBatteryOptionId();
                $('input[type=radio][name="id[' + e + ']"]').on("change", function () {
                    d.updateBattery()
                }), this.updateBattery(), $("select[name=zmCountryId]").on("change", function () {
                    d.updateModel()
                }), this.updateModel()
            }
        }
    };
    d.init();
    var c = {
        $els: $("html, body, .js--wrapper"),
        active: !1,
        iosfix: /iPhone|iPad|iPod/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent),
        Activate: function () {
            this.iosfix ? (this.saveTop = $("body").scrollTop(), this.$els.addClass("prevent-body-scroll prevent-body-scroll-ios-safari")) : this.$els.addClass("prevent-body-scroll")
        },
        Deactivate: function () {
            this.iosfix ? (this.$els.removeClass("prevent-body-scroll prevent-body-scroll-ios-safari"), $("body").scrollTop(this.saveTop)) : this.$els.removeClass("prevent-body-scroll")
        },
        Toggle: function () {
            var e = this;
            e.active ? e.Deactivate() : e.Activate()
        }
    }, u = {
        $triggerEl: $(".js--selectCountry--trigger"),
        $listEl: $(".js--selectCountry--list"),
        openClass: "is-open",
        isOpen: !1,
        Open: function () {
            this.$listEl.addClass(u.openClass), this.isOpen = !0
        },
        Close: function () {
            this.$listEl.removeClass(u.openClass), this.isOpen = !1
        },
        Toggle: function () {
            this.isOpen ? u.Close() : u.Open()
        },
        ClickHandler: function () {
            this.$triggerEl.on("click", function (e) {
                e.preventDefault(), u.Toggle()
            })
        },
        Init: function () {
            this.ClickHandler()
        }
    };
    u.$triggerEl.length && u.Init();
    var p = {
        ShowFull: function (e) {
            e.removeClass("specsGroup--is-highlight").addClass("specsGroup--is-full")
        }, ShowHighlight: function (e) {
            e.removeClass("specsGroup--is-full").addClass("specsGroup--is-highlight")
        }, ClickHandler: function () {
            $(".js--specsGroup").each(function () {
                var e = this;
                $(".js--specsGroup__btn--full", this).on("click", function (t) {
                    p.ShowFull($(e)), t.preventDefault(), t.stopPropagation()
                }), $(".js--specsGroup__btn--highlight", this).on("click", function (t) {
                    p.ShowHighlight($(e)), t.preventDefault(), t.stopPropagation()
                })
            })
        }, Init: function () {
            this.ClickHandler()
        }
    };
    p.Init(), {
        $subNav: $(".js--subNav"), $links: $(".js--subNav--links"), $link: $(".js--subNav--links a"),
        $select: $(".js--subNav--linksSelect"), $mobileSelectActiveText: $(".js--subNav--linksSelectText"),
        $sections: $(".js--subNav--section"), subnavHeight: $(".js--subNav").outerHeight(),
        mainNavHeight: $(".js--nav").outerHeight(), activeClass: "is-active", currentScrollTop: $(window).scrollTop(),
        Click: function () {
            var e = this;
            this.$link.on("click", function (t) {
                t.preventDefault(), $(this).blur();
                var o = $(this).attr("href");
                e.$links.removeClass("is-open"), e.ScrollToSection(o)
            }), e.$select.on("click", function (t) {
                t.preventDefault(), e.$links.toggleClass("is-open")
            })
        }, ScrollToSection: function (e) {
            var t = this, o = $(e).offset().top, s = t.subnavHeight - 1, n = t.currentScrollTop;
            t.$subNav.hasClass("headroom--top") && (s = 2 * t.subnavHeight - 1), n > o && $("body").addClass("subNavScrollUp"), $("html, body").animate({scrollTop: o - s}, 750).promise().then(function () {
                n > o && $("html, body").animate({scrollTop: t.currentScrollTop + 1}, 1).promise().then(function () {
                    $("body").removeClass("subNavScrollUp")
                })
            })
        }, Scroll: function () {
            var e = this;
            $(window).on("scroll", function () {
                e.currentScrollTop = $(this).scrollTop(), e.$sections.each(function () {
                    var t = $(this).offset().top - e.subnavHeight, o = t + $(this).outerHeight();
                    if (e.currentScrollTop >= t && e.currentScrollTop <= o) {
                        e.$link.removeClass(e.activeClass);
                        var s = e.$subNav.find('a[href="#' + $(this).attr("id") + '"]');
                        s.addClass(e.activeClass), e.$mobileSelectActiveText.text(s.text())
                    }
                })
            })
        }, Sticky: function () {
            var e = this, t = {tolerance: {up: 0, down: 0}, offset: e.$subNav.offset().top - e.$subNav.height() - 1};
            this.$subNav.headroom(t)
        }, Init: function () {
            this.$subNav.length && (this.Click(), this.Scroll(), this.Sticky())
        }
    }.Init();
    var h = {
        $el: $(".js--tooltip"),
        options: {animation: "shift", arrow: !0, arrowSize: "small", interactive: !0, position: "right", theme: "zero"},
        Init: function () {
            tippy(".js--tooltip", h.options)
        }
    };
    h.$el.length && h.Init()
}();*/
