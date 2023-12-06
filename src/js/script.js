jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
});

$(function () {
    // ハンバーガーメニューのアイコンがクリックされたときのイベントハンドラー
    $(".js-hamburger").click(function () {
        // ハンバーガーメニューのアイコンの状態を切り替える
        $(this).toggleClass("is-active");
        // ナビゲーションメニューの表示・非表示を切り替える
        $(".js-sp-nav").fadeToggle();
    });
});

// スライダー
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true, // ユーザー操作後に自動再生を再開しないようにする
    },
});



// キャンペーンのslick


$(function () {
    $(".js-campaign-slick").slick({
        autoplay: false, // 自動再生を無効
        infinite: false, // 無限ループを無効
        centerMode: false, // センターモードを無効
        centerPadding: '0px', // 左に揃えるためのパディング設定
        variableWidth: true, // このオプションを有効化
        slidesToShow: 3, // 一度に表示するスライドの数
        slidesToScroll: 1, // 矢印ボタンで一度にスクロールするスライドの数
        arrows: true, // PCでの矢印ボタン操作を有効
        swipe: true, // スマートフォンでのスワイプ操作を有効
        pauseOnFocus: false, // フォーカス時の一時停止を無効
        pauseOnHover: false, // ホバー時の一時停止を無効
        responsive: [
            {
                breakpoint: 768, // 768px以下のデバイスでの設定
                settings: {
                    centerMode: false, // センターモードを無効
                    centerPadding: '0px', // 左に揃えるためのパディング設定

                    slidesToShow: 1, // スマートフォンでは一度に表示するスライドの数を1枚に設定
                    arrows: false, // スマートフォンでは矢印ボタンを非表示
                    swipe: true, // タッチデバイスでのスワイプ操作を有効
                },
            },
        ],
    });
});


// ページトップボタン
$(function () {
    const pageTop = $(".js-page-top");

    pageTop.hide();

    $(window).on("scroll", function () {
        var footHeight = $("footer").innerHeight(); // フッターの高さを取得
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var fromBottom = 20; // フッター上のスペース（20px）

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
                bottom: (footHeight + fromBottom - (scrollHeight - scrollPosition)) + "px"
            });
        } else {
            // それ以外の場合は固定位置にして、画面下から20px上に保つ
            pageTop.css({
                position: "fixed",
                bottom: fromBottom + "px"
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
    var totalAnimationTime = 7; // 例: 1秒のフェードイン + 1秒のフェードアウト + 5秒のその他のアニメーション

    // 指定された時間が経過した後にローディング要素を非表示にする
    setTimeout(function () {
        $(".js-load").fadeOut(700); // ここで.fadeOutのスピードを調整できます（ミリ秒単位）
    }, totalAnimationTime * 1000); // 秒をミリ秒に変換
});

// 画像のアニメーション
//要素の取得とスピードの設定
$(function () {
    var box = $(".colorbox"),
        speed = 700;

    // .colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        var $this = $(this); // 現在の要素を変数に格納

        // .color要素を追加
        $this.append('<div class="color"></div>');
        var color = $this.find(".color"),
            image = $this.find("img");
        var counter = 0;

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



