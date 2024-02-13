jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
});



$(function () {
    $(".js-hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".js-sp-nav").fadeToggle();

        // ヘッダーの背景色を切り替える
        $(".js-header").toggleClass("header--green");

        if ($("body").css("overflow") === "hidden") {
            $("body").css({ height: "", overflow: "" });
        } else {
            $("body").css({ height: "100%", overflow: "hidden" });
        }
    });
});




// メインビジュアルのスライダー
const mvSwiper = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});

// キャンペーンのスライダー
const campaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    speed: 2000,
    slidesPerView: "auto",
    spaceBetween: 24,
    breakpoints: {
        768: {
            spaceBetween: 40,
        }
    },
    navigation: {
        nextEl: ".js-campaign-button-next",
        prevEl: ".js-campaign-button-prev",
    }
});



// ページトップボタン
$(function () {
    const pageTop = $(".js-page-top");

    pageTop.hide();

    $(window).on("scroll", function () {
        let footHeight = $("footer").innerHeight(); // フッターの高さを取得
        let scrollHeight = $(document).height();
        let scrollPosition = $(window).height() + $(window).scrollTop();
        let fromBottom = 20; // フッター上のスペース（20px）

        // スクロール量に応じてトップボタンの表示・非表示を切り替える
        if ($(this).scrollTop() > 500) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }

        // ページ下部でボタンの位置を調整
        if (scrollHeight - scrollPosition <= footHeight + fromBottom) {
            // フッター手前でボタンをフッターの上部20pxに固定
            pageTop.css({
                position: "fixed",
                bottom:
                    footHeight +
                    fromBottom -
                    (scrollHeight - scrollPosition) +
                    "px",
            });
        } else {
            // それ以外の場合は固定位置にして、画面下から20px上に保つ
            pageTop.css({
                position: "fixed",
                bottom: fromBottom + "px",
            });
        }
    });

    pageTop.click(function () {
        $("body, html").animate({ scrollTop: 0 }, 300);
        return false;
    });
});

// ローディング画面
$(function () {
    // アニメーションの総持続時間を設定（秒単位）
    let totalAnimationTime = 3; // 例: 1秒のフェードイン + 1秒のフェードアウト + 5秒のその他のアニメーション

    // 指定された時間が経過した後にローディング要素を非表示にする
    setTimeout(function () {
        $(".js-load").fadeOut(700); // ここで.fadeOutのスピードを調整できます（ミリ秒単位）
    }, totalAnimationTime * 1000); // 秒をミリ秒に変換
});

// 画像のアニメーション
//要素の取得とスピードの設定
$(function () {
    let box = $(".colorbox"),
        speed = 700;

    // .colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        let $this = $(this); // 現在の要素を変数に格納

        // .color要素を追加
        $this.append('<div class="color"></div>');
        let color = $this.find(".color"),
            image = $this.find("img");
        let counter = 0;

        image.css("opacity", "0");
        color.css("width", "0%");
        // inviewを使って背景色が画面に現れたら処理をする
        color.on("inview", function () {
            if (counter == 0) {
                $(this)
                    .delay(200)
                    .animate({ width: "100%" }, speed, function () {
                        image.css("opacity", "1");
                        $(this).css({ left: "0", right: "auto" });
                        $(this).animate({ width: "0%" }, speed);
                    });
                counter = 1;
            }
        });
    });
});

// サイドバーとfaqのアコーディオン
$(function () {
    $(".js-accordion__item:first-child .js-accordion__content").css(
        "display",
        "block"
    );
    $(".js-accordion__item:first-child .js-accordion__title").addClass(
        "is-open"
    );
    $(".js-accordion__title").on("click", function () {
        $(this).toggleClass("is-open");
        $(this).next().slideToggle(300);
    });
});

// モーダルウィンドウ
$(function () {
    const modal = $(".js-modal");
    const modalImg = $(".modal__img");
    const header = $(".header"); // ヘッダー要素のクラス名またはID

    // すべての画像にモーダル機能を適用
    $(".gallery__list-img, .gallery__list-img-large").on("click", function () {
        const imgSrc = $(this).attr("src");
        modalImg.attr("src", imgSrc);
        modal.addClass("is-open");
        $("body").css("overflow", "hidden");
        header.hide(); // ヘッダーを非表示にする
    });

    // モーダルの背景をクリックして閉じる
    $(".js-modal-close, .modal").on("click", function () {
        modal.removeClass("is-open");
        $("body").css("overflow", "");
        header.show(); // ヘッダーを表示する
    });
});

// informationタブボタン
$(function () {
    const tabButton = $(".js-tab-button"),
        tabContent = $(".js-tab-content");
    tabButton.on("click", function () {
        let index = tabButton.index(this);

        tabButton.removeClass("is-active");
        $(this).addClass("is-active");
        tabContent.removeClass("is-active");
        tabContent.eq(index).addClass("is-active");
    });
});

$(document).ready(function() {
    // 404ページかどうかを判断するロジック
    // 例えばURLを確認する場合
    if (window.location.href.includes('/page-404.html')) {
        $('body').css('background-color', '#408F95');
    }
});

