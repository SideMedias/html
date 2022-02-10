/******************************
.sp_navi
******************************/
/* スマホメニューを開く */
$(function () {
  $('.sp_navi dt a').on('click', function () {
    $('.sp_navi_fixed_area').toggleClass('active');
    $(this).toggleClass('active');
    $('.sp_navi dd').toggleClass('active');
  });
});

/* スマホメニューのリンクをタップしたときにメニューを閉じる */
$(function () {
  $('.sp_navi dd a').on('click', function () {
    $('.sp_navi dt a').click(); // メニューを閉じる
  });
});
