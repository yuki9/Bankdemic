$(function () {

  /*
   * カード登録処理
   */
  // URLに紐づいたパラメータを取得
  // 'kojin'というパラメータの値を取得する
  const kojinValue = getParam("kojin");
  // 上を保存した、kojinというキーでcookieに保存
  if (kojinValue != null) {
    $.cookie("kojin", kojinValue);
  }

  const viralValue = getParam("viral");
  if (viralValue != null) {
    $.cookie("viral", viralValue);
  }


  // 正解の個人カードとバイラルカードが登録されているか判定
  if ($.cookie("kojin")) {
    $("#truth_private_container .status").html("登録済み");
  }
  if ($.cookie("viral")) {
    $("#truth_viral_container .status").html("登録済み");
  }

  let kojin_selected, viral_selected;

  // add yuki
  let sel_koNum, sel_vcNum;
  // /add yuki

  // 個人の選択したものを判定
  $(".img-flex-3 .private_card").on("click", function () {
    kojin_selected = $(".img-flex-3 .private_card").index(this);
    $(".img-flex-3 .private_card").removeClass("selected");
    $(this).addClass('selected');
    console.log(kojin_selected);
    // add yuki
    sel_koNum = $(this).attr("id");
    console.log(sel_koNum);
  });

  // バイラルの選択したものを判定
  $(".img-flex-4 .viral_card").on("click", function () {
    viral_selected = $(".img-flex-4 .viral_card").index(this);
    $(".img-flex-4 .viral_card").removeClass("selected");
    $(this).addClass('selected');
    console.log(viral_selected);
    // 以下 yuki write 色を変更する
    // $(this).ready(function () {
    //   $('.').color({
    //     bgColor: '#000',
    //     opacity: 0.9
    //   });
    // });
    //   var src = $('.img-flex-4').children('img').attr('src').replace($(this), 'viral_5'); //現在のimgからsrcを取得し、一部を書き換える
    //   var src = $(this).replace(viral_2);
    // $('.img-flex-4').children('img').attr('src', src); //書き換えたsrcをimgタグに設定する
    //$(this).attr('src', 'images/viral_none.png');
    //$('images/viral_none.png').attr('src', this)
    sel_vcNum = $(this).attr("id");
    console.log(sel_vcNum);
  });


  //id属性の場合、属性値(名前)の前に「#」(シャープ)をつけることで、CSSを指定できます。
  //class属性の場合、 属性値(名前)の前に「.」(ドット)をつけることで、CSSを指定できます。
  // 判定とリセット処理
  $(".btn").on("click", function () {
    //add yuki
    // $(function () {
    //   //   $(select_viral()).viral_selected.attr('src', 'images/viral_none.png');
    //   $(sel_vir).removeAttr('class');
    // });
    // /add yuki
    if (kojin_selected == $.cookie("kojin") && viral_selected == $.cookie("viral")) {
      // alert('Congraturations!');
      location.href = "congrats.html";
      $.removeCookie("kojin");
      $.removeCookie("viral");
    } else {
      alert('犯人ではありませんでした');
      // add yuki
      //$('#' + sel_vir).removeAttr("id");
      // $('#' + sel_vcNum).attr('src', 'images/viral_none.png');
      //選択したバイラルカードのimgタグを削除
      $('#' + sel_vcNum).remove();
      //console.log(sel_vir); //これは問題ない
    }
  });

  //QR
  function getParam(name, url) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // add yuki
  //個人カードを押した場合、バイラルカードを表示する
  $(function () {
    //「id="jQueryBox"」を非表示
    $(".img-flex-4").css("display", "none");

    // クリックされた場合
    // $(".private_card").click(function () {
    //   // 「表示、非表示を切り替える
    //   // $(this).children(".img-flex-4").toggle();
    //   $(".img-flex-4").toggle();
    // });
    $(".private_card").on("click", function () {
      $(this).nextAll('.img-flex-4:first').slideToggle();
      // $(this).nextAll('.img-flex-4:first').toggle();
      // not(this).('.img-flex-4').slideUp();
      // not('#' + sel_koNum,'.img-flex-4').slideUp();
      $('.img-flex-3 .private_card').not($(this)).next('.img-flex-4').slideUp();
      //↑クリックされた.private_card以外の.private_cardに隣接する.img-flex-4を閉じる
      // not(this).(".img-flex-4").slideUp();
    });
  });


  //yuki write
  //選択したカードを保存する
  //memo:判定処理部分で判定したカードを保存して別個の処理でカードの色を白黒に変更する処理を施す
  //memo:↑は背景色変える処理だけでいける？
  //memo:正解した場合は別のファイルに飛ばす

});