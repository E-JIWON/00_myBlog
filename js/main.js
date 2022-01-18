$(document).ready(function () {
     //circle
     let circle_pointer = $('.circle');
     let follow_pointer = $('.circle-follow');
     let ankerArea = $('a');

     //마우스 서클
     function moveCircle(e) {
          TweenLite.to(circle_pointer, 0, {
               x: e.clientX,
               y: e.clientY,
          });
          TweenLite.to(follow_pointer, 0.7, {
               x: e.clientX,
               y: e.clientY
          });
     }

     //메인 이미지 클릭했을 때 실행되는 함수
     function changeCircle(circle_text) {
          if (circle_text == "EASY ONE") {
               //hidden_area를 display Block해줘야함
               $('.circle_button > span').html("Lee Jiwon").removeClass("red_pointer");
               $('.hidden_area').css({'display':'flex'});
          }else if(circle_text){
               $('.circle_button > span').html("EASY ONE").addClass("red_pointer");
          }
     }
     //메인 이미지 클릭했을 때 실행되는 함수
     function contactCircle(circle_text) {
          let spanHtml = `
                    <div class="left">PHONE : </div><div>010-5614-1497</div><br><br>
                    <div class="left">EMAIL : </div><div>meowoof01@gmail.com</div>
               `;
          if (circle_text == "CONTACT") {
               $('.circle_container_contact > button > p').html(spanHtml).css("font-size","3.8vh");
          }else if(circle_text){
               $('.circle_container_contact > button > p').html("CONTACT").css("font-size","6vh");
          }
     }

     // 이미지 마우스 호버 이벤트
     (function () {
          const containerCoords = document.querySelector('.circle_container');
          const faceButton = document.querySelector('.circle_button');
          const mouseCoords = containerCoords.getBoundingClientRect();

          // const containerCoords2 = document.querySelector('.circle_container_contact');
          // const faceButton2 = document.querySelector('.circle_button_contact');
          // const mouseCoords2 = containerCoords2.getBoundingClientRect();

          faceButton.addEventListener('mousemove', function (e) {
               const mouseX = e.pageX - containerCoords.offsetLeft;
               const mouseY = e.pageY - containerCoords.offsetTop;
               TweenMax.to(faceButton, 0.5, {
                    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 100,
                    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 100,
                    ease: Power4.easeOut
               });
          });
          faceButton.addEventListener('mouseleave', function (e) {
               TweenMax.to(faceButton, 0.1, {
                    x: 0,
                    y: 0,
                    scale: 1
               });
          });

          // faceButton2.addEventListener('mousemove', function (e) {               
          //      const mouseX_2 = e.pageX - containerCoords2.offsetLeft;
          //      const mouseY_2 = e.pageY - containerCoords2.offsetTop;

          //      TweenMax.to(faceButton2, 0.5, {
          //           x: (mouseX_2 - mouseCoords2.width / 2) / mouseCoords2.width * 100,
          //           y: (mouseY_2 - mouseCoords2.height / 2) / mouseCoords2.width * 100,
          //           ease: Power4.easeOut
          //      });
          // });
          // faceButton2.addEventListener('mouseleave', function (e) {
          //      TweenMax.to(faceButton2, 0.1, {
          //           x: 0,
          //           y: 0,
          //           scale: 1
          //      });
          // });
     })();


     function hoverFunc(e, skillsNumber) {
          TweenLite.to(circle_pointer, 0.5, {
               opacity: 1,
               scale: 5
          });
          TweenLite.to(follow_pointer, 0.5, {
               scale: 0
          });
          switch (e.target.className) {
               case 'red_pointer':
                    $('.circle').css('background-image', 'url(./img/big_pointer_red.png)');
                    // $('.green_pointer').css('font-size',"3rem");
               break;
               case 'green_pointer':
                    $('.circle').css('background-image', 'url(./img/big_pointer_green.png)');
                    // $('.green_pointer').css('font-size',"3rem");
               break;
               case 'yellow_pointer':
                    $('.circle').css('background-image', 'url(./img/big_pointer_yellow.png)');

                    break;
               case 'blue_pointer':
                    $('.circle').css('background-image', 'url(./img/big_pointer_blue.png)');
                    break;
               case 'circle_button':
                    $('.circle').css({
                         'background-image': 'url(./img/click_pointer_black2.png)',
                         'transform': 'scale(2)'
                    });
               break;
               case 'send_massage_btn':
                    $('.circle').css({
                         'background-image': 'url(./img/click_pointer_white2.png)',
                         'transform': 'scale(3)'
                    });
                    $('.send_massage_btn').css("cursor","none");
               break;
               // case 'circle_button_contact':
               //      $('.circle').css({
               //           'background-image': 'url(./img/click_pointer_black.png)',
               //           'transform': 'scale(2)'
               //      });
               // break;
          }
          //=================================================================사이드 바 호버 END
          switch (e.target.id) {
               case 'silde_main' :
                    $('.circle').css({'background-image': 'url(./img/small_pointer_green.png)'});
               break;
               case 'silde_skills' :
                    $('.circle').css({'background-image': 'url(./img/small_pointer_blue.png)'});
               break;
               case 'silde_port' :
                    $('.circle').css({'background-image': 'url(./img/small_pointer_yellow.png)'});
               break;
               case 'silde_con' :
                    $('.circle').css({'background-image': 'url(./img/small_pointer_red.png)'});
               break;
               case 'contact_phone':
                    $('.circle').css({
                         'background-image': 'url(./img/click_pointer_white2.png)',
                         'transform': 'scale(3)'
                    });
               break;
               case 'contact_email': 
                    $('.circle').css({
                         'background-image': 'url(./img/click_pointer_white2.png)',
                         'transform': 'scale(3)'
                    });
               break;
               case 'contact_kakao':
                    $('.circle').css({
                         'background-image': 'url(./img/click_pointer_white2.png)',
                         'transform': 'scale(3)'
                    });
               break;
          }
          
          //=================================================================사이드 바 호버 END


          //=================================================================스킬 호버 START
          if(skillsNumber){
               $('.skills_fixed').css({'opacity':'1','right':'5%'});
          }
          switch (skillsNumber) {
               case '1': 
                    $('body').css({'background-color':'#F06625'});
                    $('.skills_number.HTML').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills .scroll_circle').css("display","none");
                    $('.skills_info.HTML > span:first-child').css('color',"#FCDC63");
                    // $('.skills_fixed > div.HTML').css('color',"#F06625");
               break;
               case '2': 
                    $('body').css('background-color','#2C96C5');
                    $('.skills_number.CSS').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.CSS > span:first-child').css('color',"#FCDC63");
                    // $('.skills_fixed > div.CSS').css('color',"#2C96C5");
               break;
               case '3': 
                    $('body').css('background-color','#F6E012');
                    $('.skills_number.JAVASCRIPT').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.JAVASCRIPT > span:first-child').css('color',"#2959A7");
                    // $('.skills_fixed > div.JAVASCRIPT').css('color',"#F6E012");
               break;
               case '4': 
                    $('body').css('background-color','#0E63A5');
                    $('.skills_number.JQUERY').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.JQUERY > span:first-child').css('color',"#FCDC63");
                    // $('.skills_fixed > div.JQUERY').css('color',"#0E63A5");
               break;
               case '5': 
                    $('body').css('background-color','#C26191');
                    $('.skills_number.SASS').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.SASS > span:first-child').css('color',"#FCDC63");
                    // $('.skills_fixed > div.SASS').css('color',"#C26191");
               break;
               case '6': 
                    $('body').css('background-color','#90C43F');
                    $('.skills_number.NODEJS').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.NODEJS > span:first-child').css('color',"#2959A7");
                    // $('.skills_fixed > div.NODEJS').css('color',"#90C43F");
               break;
               case '7': 
                    $('body').css('background-color','#5BCBF3');
                    $('.skills_number.REACT').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.REACT > span:first-child').css('color',"#fff");
                    // $('.skills_fixed > div.REACT').css('color',"#5BCBF3");
               break;
               case '8': 
                    $('body').css('background-color','#4B568C');
                    $('.skills_number.PHP').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.PHP > span:first-child').css('color',"#E75349");
                    // $('.skills_fixed > div.PHP').css('color',"#4B568C");
               break;
               case '9': 
                    $('body').css('background-color','#F89A1C');
                    $('.skills_number.ILLUSTRATOR').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.ILLUSTRATOR > span:first-child').css('color',"#fff");
                    // $('.skills_fixed > div.Ilustrator').css('color',"#F89A1C");
               break;
               case '10': 
                    $('body').css('background-color','#53A1D8');
                    $('.skills_number.PHOTOSHOP').css("text-shadow","0.2vw 0.2vw #3333");
                    $('.skills_info.PHOTOSHOP > span:first-child').css('color',"#FCDC63");
                    // $('.skills_fixed > div.Photoshop').css('color',"#53A1D8");
               break;
          }
          if(skillsNumber == 1 || skillsNumber ==2 || skillsNumber == 4 || skillsNumber == 5 || skillsNumber ==8 ){
               $('.skills_info').css("color","#fff");
               $('.skills_number').css("color","#fff");
               $('.skills_fixed').css("background-color","rgba(255,255,255,0.8)");
          }

          if(skillsNumber % 5 ==1){
               $('.circle').css({'background-image': 'url(./img/small_pointer_black.png)'});
          }else if(skillsNumber % 5 == 2){
               $('.circle').css({'background-image': 'url(./img/small_pointer_blue.png)'});
          }else if(skillsNumber % 5 == 3){
               $('.circle').css({'background-image': 'url(./img/small_pointer_green.png)'});
          }else if(skillsNumber % 5 == 4){
               $('.circle').css({'background-image': 'url(./img/small_pointer_red.png)'});
          }else if (skillsNumber % 5 == 0){
               $('.circle').css({'background-image': 'url(./img/small_pointer_yellow.png)'});
          }
          //=================================================================스킬 호버 END
          //=================================================================포폴 호버 START
          switch($(this).children().attr('class')){
               case 'matrixC':
                    $('.matrixC_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'changeC' :
                    $('.changeC_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'animalC':
                    $('.animalC_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'lineG':
                    $('.lineG_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'starK':
                    $('.starK_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'GrapeF':
                    $('.GrapeF_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
               case 'detailP':
                    $('.detailP_info').css({
                         "margin-left":"10%",
                         "opacity": "1"
                    });
               break;
          }
     }
     //=================================================================포폴 호버 END
     
     //=================================================================포폴 btn 호버 START
     // if($(this).attr("class") == "btn_wrapper"){
     //      $('.circle').css({
     //           'background-image': 'url(./img/click_pointer_black.png)',
     //           'transform': 'scale(2)'
     //      });
     // }
     //=================================================================포폴 btn 호버 END
     
     
     function unhoverFunc(e) {
          $('.circle').css('background-image', 'url("./img/small_pointer_black.png")');
          $('body').css('background-color','#fff');
          $('.skills_number').css({'color':"#333333" ,"text-shadow":"0 0 #fff"});
          $('.skills_info').css("color","#333333");
          $('.skills_number').css("color","#333333");
          $('.skills_fixed > div').css('color',"#333333");
          $('.skills_fixed').css({'opacity':"0","right":"-10%","background-color": "rgba(51,51,51,0.8)"});
          
          $('.matrixC_info').css({"margin-left":"50%","opacity": "0"});
          $('.changeC_info').css({"margin-left":"50%","opacity": "0"});
          $('.detailP_info').css({"margin-left":"50%","opacity": "0"});
          $('.GrapeF_info').css({"margin-left":"50%","opacity": "0"});
          $('.starK_info').css({"margin-left":"50%","opacity": "0"});
          $('.lineG_info').css({"margin-left":"50%","opacity": "0"});
          $('.animalC_info').css({"margin-left":"50%","opacity": "0"});

          TweenLite.to(circle_pointer, 0.5, {
               opacity: 1,
               scale: 1
          });
          TweenLite.to(follow_pointer, 0.5, {
               scale: 1
          });
     }

     //스크롤 
     $(function () {
          $("#tall_outer_container").css("height", $("#horizontal_translate_container").width() - 1100 + "px");          
          let startMain_X = $(".main_container").offset().top;
          let startHori_X = $("#horizontal_section").offset().top + 100;
          let startPort_X = $(".portfolio_container").offset().top - 600;
          let startCon_X = $('.contact_container').offset().top - 200;
          let startInfomeSecond = $(".info_me.second").offset().top;
          let startInfomeThird = $(".info_me.third").offset().top;

          $(window).on("scroll", function (e) {
               var offsetTop = $(window).scrollTop(); //scrollTop은 현재 스크롤의 위치값을 나타낸다.
               var vh = window.innerHeight; // innerWidth, innerHeight 는 창 틀을 뺀 내용과 스크롤을 포함한 크기입니다.
               var startX = $("#horizontal_section").offset().top; //offset은 대상의 위치값을 나타낸다.
               var startXHeight = $("#horizontal_section").height(); //가로 페이지 감싸는 section의 세로값
               var pastOffset = (offsetTop - startX); //현재 스크롤 위치값에서 가로 시작 페이지 뺀 값
               var stopScroll = (startX + startXHeight) - vh + 150;
               // var stopScroll = (startX + startXHeight) - vh - 120;

               //console.log("Scroll Top : " + offsetTop);
               if (offsetTop > startX && offsetTop < stopScroll) {
                    $("#horizontal_translate_container").css("transform", "translateX(-" + pastOffset + "px)");
               }

               if(offsetTop > startMain_X || offsetTop == 0){
                    $('.side_bar').css("display","none");
                    $('.side_bar span').css('display','none');
               }

               if (offsetTop > startX && offsetTop <= startPort_X) { //스크롤 위치
                    console.log( "offsetTop " + offsetTop);
                    console.log( "startPort_X " + startPort_X);
                    $(".about_me").css("opacity",1);
                    $('.side_bar').css("display","block");

                    $(".side_bar div:nth-child(2) > img").css({"animation": "rotation 2s infinite linear"})
                    .attr("src","./img/big_pointer_blue.png").next().css("display","inline-block");

                    $(".side_bar div:nth-child(3) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css('display','none');

                    $(".side_bar div:nth-child(4) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css('display','none');
               }
               if(offsetTop > startInfomeSecond){
                    $(".info_me.second").css({"opacity":1,"left":"18%","transition":"0.8s"});
               }
               if(offsetTop > startInfomeThird){
                    $(".info_me.third").css({"opacity":1,"left":"40%","transition":"0.8s"});
               }
               if(offsetTop > startPort_X){
                    $('.side_bar').css("display","block");
                    
                    $(".side_bar div:nth-child(2) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css("display","none");
                    
                    $(".side_bar div:nth-child(3) > img").css({"animation": "rotation 2s infinite linear"})
                    .attr("src","./img/big_pointer_yellow.png").next().css("display","inline-block");

                    $(".side_bar div:nth-child(4) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css("display","none");
               }

               if(offsetTop > startCon_X){
                    $('.side_bar').css("display","block");
                    
                    $(".side_bar div:nth-child(2) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css("display","none");
                    
                    $(".side_bar div:nth-child(3) > img").css({"animation": "none"})
                    .attr("src","./img/big_pointer_black.png").next().css("display","none");

                    $(".side_bar div:nth-child(4) > img").css({"animation": "rotation 2s infinite linear"})
                    .attr("src","./img/big_pointer_red.png").next().css("display","inline-block");
               }
          });

          $('#silde_main').on("click",function(){
               $('html').animate({
                    scrollTop : 0
               },1000);
          });
          $('#silde_skills').on("click",function(){
               $('html').animate({
                    scrollTop : startHori_X
               },1000);
          });
          $('#silde_port').on("click",function(){
               $('html').animate({
                    scrollTop : startPort_X+10
               },1000);
          });
          $('#silde_con').on("click",function(){
               $('html').animate({
                    scrollTop : startCon_X+200
               },1000);
          });
     });
     
     //스킬
     function drawMySkills() {
          let mySkillArray = {
               1: { "HTML": "시멘틱 태그를 사용하여 구조적으로 작성할 수 있습니다." },
               2: { "CSS": "동적인 콘텐츠와 반응형 페이지를 만들 수 있습니다."},
               3: { "JAVASCRIPT": "함수와 클래스를 활용하여 로직을 만들 수 있습니다." },
               4: { "JQUERY": "DOM을 활용하여 동적 페이지를 구현할 수 있습니다." },
               5: { "SASS": "함수와 변수를 사용하여 더욱 간결하게 작성할 수 있습니다." },
               6: { "NODEJS": "DB와 연결하고, JSON으로 값을 받아 제어할 수 있습니다." },
               7: { "REACT": "컴포넌트들을 유기적으로 연결하여 동적으로 만들 수 있습니다." },
               8: { "PHP": "DB에서 값을 주고받고, 제어할 수 있습니다." },
               9: { "ILLUSTRATOR": "원하는 로고 작업 및 아이콘 제작할 수 있습니다." },
               10: { "PHOTOSHOP": "디자인 시안 작업, 이미지 편집, 제작할 수 있습니다." },
          }
          let mySkillsDom = '';
          let mySkillsWrap = '';
          let hoverMeDOm = `
               <div class="scroll_circle">
                    <span>Hover me</span>
                    <i class="fa fa-arrow-down"></i>
               </div>
          `
          $.each(mySkillArray, function (number, item) {
               $.each(item, function (skills, info) {
                    mySkillsDom += `
                         <div class="skills">
                              <div class="skills_info ${skills}">
                                   <span>${skills}</span>
                                   <span>${info}</span>
                              </div>
                              <div class="skills_number ${skills}">${number}</div>
                         </div>
                    `;
                    mySkillsWrap = `
                         <div class="${skills}">
                              <span>${number}</span>
                              <span>${skills}</span>
                         </div>
                    `;
               });
               $('.skills_wrap').html(mySkillsDom);
               $('.skills_fixed').append(mySkillsWrap);
          });
          $('.skills_number.HTML').parent().append(hoverMeDOm);
     }
     drawMySkills();

     //=================================================================이벤트 모음
     $("body").mousedown(function(e) {
          $(this)[0].oncontextmenu = function() {  // 우클릭시 띄워치는 contextmenu 막기
               return false;
          }
          console.log(e.which); // 1:좌클릭, 2:휠클릭, 3:우클릭
     });

     
     //이미지 클릭했을때 텍스트값을 함수에 넣어서 변경하게 함
     $('#circle_container').on("click", function () {
          changeCircle($('.circle_button > span').html());
     });
     // $('#circle_button_contact').on("click", function () {
     //      contactCircle($('#circle_button_contact >  p').html());
     // });
     
     $(window).on('mousemove', moveCircle);
     $('b').hover(hoverFunc, unhoverFunc); //b 텍스트 호버 시 
     $('.circle_button').hover(hoverFunc, unhoverFunc); //메인 원 호버 시
     $('.side_bar > img').hover(hoverFunc, unhoverFunc); //메인 원 호버 시
     $('.ml').hover(hoverFunc,unhoverFunc); // 포폴 호버 시
     $('.slide_btn').hover(hoverFunc,unhoverFunc); // 사이드 이미지 호버 시
     $('.contact_hover').hover(hoverFunc,unhoverFunc);
     $('button.send_massage_btn').hover(hoverFunc,unhoverFunc);

     $('.send_massage_btn').on("click",unhoverFunc);
     // $('.circle_button_contact').hover(hoverFunc, unhoverFunc); //컨택트 원 호버 시
     // $('.btn_wrapper').hover(hoverFunc, unhoverFunc); // views 호버 시 

     
     
     $(document).on("mouseenter", ".skills_number", function (e) {
          $(this).prev().css("display", "block");
          hoverFunc(e, $(this).html());
     });
     $(document).on("mouseleave", ".skills_number", function () {
          $(this).prev().css("display", "none");
          unhoverFunc();
     });
     
     //=================================================================이벤트 모음
});