
$(function () {


  //======================================================================
  //  スクロールによるナビゲーションの挙動
  //======================================================================

  var time_out;
  var scroll_start;
  var scroll_now;
  var scroll_flag = false;

  window.addEventListener("scroll",function(){

    clearTimeout(time_out);

    //スクロール開始＋スクロール中の処理 ////////////////////////////////

    if(scroll_flag == false){
      //スクロールの開始座標
      scroll_start = $(window).scrollTop();
    }else{
      //スクロールの今の座標
      scroll_now = $(window).scrollTop();
      if(scroll_start <= scroll_now){
        //console.log("【下】");
        $("body").removeClass('scroll-up');
        $("body").addClass('scroll-down');
      }else{
        //console.log("【上】");
        $("body").removeClass('scroll-down');
        $("body").addClass('scroll-up');
      }
    }

    scroll_flag = true; //フラグを「スクロール中」に変更


    //スクロール終了時の処理 //////////////////////////////////////////
    time_out = setTimeout(function(){
      scroll_flag = false; //フラグをリセット
    },100);

    //console.log("【開始】"+scroll_start);
    //console.log("【現在】"+scroll_now);
    //console.log("");

  })




  //======================================================================
  //  END
  //======================================================================


});
