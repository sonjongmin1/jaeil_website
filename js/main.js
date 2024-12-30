$(document).ready(() => {
  //메인메뉴
  $(".mainMenu").on("mouseenter focus", () => {
    $("header> div").stop().animate({ height: "320px" });
    $("nav.submenu").stop().slideDown();
  });
  //메인메뉴 하이라이트
  $(".mainMenu").focus((e) => {
    $(".mainMenu").removeClass("act");
    $(".submenu a").removeClass("act");
    $(e.target).addClass("act");
  });
  //서브메뉴 하이라이트
  $(".submenu a").focus((e) => {
    $(".submenu a").removeClass("act");
    $(e.target).addClass("act");
  });

  //서브메뉴 마지막 아이템
  $(".submenu:last-of-type a")
    .last()
    .blur(() => {
      $(".mainMenu  ,  .submenu a").removeClass("act");
      $("header> div").stop().animate({ height: "200px" });
      $("nav.submenu").stop().slideUp();
    });

  if ($(window).innerWidth() <= 850) {
    let j = false;
    $("header button").click((e) => {
      if (j) {
        $("#menu").stop().animate({ left: "-100vw" });
        $(e.target).text("menu");
      } else {
        $("#menu").stop().animate({ left: 0 });
        $(e.target).text("close");
      }
      j = !j; //false <=> true
    });
    //서브메뉴 항목
    $(".submenu a").click(() => {
      $("#menu").stop().animate({ left: "-100vw" });
      $("header button").text("menu");
      $(".mainMenu").removeClass("act");
      $(".submenu a").removeClass("act");
      $("header> div").stop().animate({ height: "70px" });
      j = !j;
    });
  }

  //오른쪽방향으로 자동이동 슬라이드
  const x = $("#slide");
  let i = 0;
  const toRight = () => {
    x.stop().animate({ left: 0 }, 1000, () => {
      x.css("left", "-1280px");
      x.prepend(x.children().last());
      i++;
      if (i === 3) i = 0;
      $("#circle div").eq(i).addClass("red").siblings().removeClass("red");
    });
  };
  setInterval(toRight, 2800);

  //공지사항 팝업모달
  $("#notice a").click(() => {
    $("#popup").fadeIn();
  });
  //공지사항 팝업모달 닫기
  $("#popup button").click(() => {
    $("#popup").fadeOut();
  });
  //esc키
  $(document).keydown((e) => {
    if (e.key === "Escape") $("#popup").fadeOut();
  });

  if ($(window).innerWidth() <= 850) {
    let j = false;
    $("header button").click((e) => {
      if (j) {
        $("#menu").stop().animate({ left: "-100vw" });
        $(e.target).text("menu");
      } else {
        $("#menu").stop().animate({ left: 0 });
        $(e.target).text("close");
      }
      j = !j; //false <=> true
    });

    //서브메뉴 항목
    $(".submenu a").click(() => {
      $("#menu").stop().animate({ left: "-100vw" });
      $("header button").text("menu");
      $(".mainMenu").removeClass("act");
      $(".submenu a").removeClass("act");
      $("header> div").stop().animate({ height: "70px" });
      j = !j;
    });
  }
}); //........All End
