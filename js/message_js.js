$(function(){
     class Captcha {
          constructor(captchaArea, captchaCan){ 
              //첫번째 매개변수 - 문서의 아이디(DOM ID) //두번째 매개변수 - 캠버스 아이디
              this.captchaArea = captchaArea;
              this.captchaCan = captchaCan;
          }
          displayCaptcha(disabledID){ // 1 - Disabled ID
              $('.'+disabledID).attr("disabled","disabled");
              $('#'+this.captchaArea).html(
                   '<canvas id="'+this.captchaCan+'" class="captchaArea" ></canvas>'
              );
              $('#'+this.captchaArea).parent().append(
                    '<div class="capChk" id="capChk">'
                    +'<input type="text" id="valCapt" placeholder="파란색 글자를 입력해주세요." class="valCapt" tabindex="300" maxlength="4" autocomplete="off">'
                    +'<button id="checkCapt"> CHECK! </button>'
                    +'</div>'
              )

              let canvas = document.getElementById(this.captchaCan);
              let ctx = canvas.getContext("2d");
              let cRandom = Math.floor( Math.random() * ( 9999 - 1000 + 1 ) ) + 1000;
              ctx.font = "5vw Comic Sans MS";
              ctx.fillStyle = "#FCDC63";
              ctx.textAlign = "center";
              ctx.lineHeight = "3vw";
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillText(cRandom, canvas.width/2, canvas.height/1.5);

              let ctx2 = canvas.getContext("2d"); 
              let cRandom2 = Math.floor( Math.random() * ( 9999 - 1000 + 1 ) ) + 1000;
              ctx2.font = "2.5vw Comic Sans MS";
              ctx2.fillStyle = "#e7534979";
              ctx2.textAlign = "center";
              ctx2.lineHeight = "3.5vw";
          //     ctx2.clearRect(0, 0, canvas.width, canvas.height);
              ctx2.fillText(cRandom2, canvas.width/2, canvas.height/1.5);

              let messageHTML = `
<form method="post" action='./php/send_message.php'>
<div>
<span>보내는 사람</span>
<input type="text" name="send_message_who" placeholder="이지원">
</div>
<div>
<span>보내는 번호</span>
<input type="text" name="send_message_number" placeholder="01056141498" oninput="this.value = this.value.replace(/[^0-9]/g,'');">
</div>
<div class="last_div">
<span>보낼 메세지<br> <strong><b class="byte_text">0</b>bytes / 1200bytes</strong> </span>
<textarea name="send_massage_detail" id="send_massage_detail" autocomplete="off" placeholder="반갑습니다. 이지원입니다." ></textarea>
</div>
<button type="submit" class="un_visible"></button>
</form>
              `;
              $('#checkCapt').on("click",function(e){
                  let valCapt = $('#valCapt').val();
                  if(cRandom == valCapt) {
                         $('.message_popup').html(messageHTML);
                         $('.'+disabledID).removeAttr("disabled"); 
                         $('.'+disabledID).html("전송"); 
                         $('.'+disabledID).attr("id","send_massage_one"); 
                         e.preventDefault();
                         $('#valCapt').val("");
                         $('#valCapt, #checkCapt').attr("disabled","disabled");
                         return false; // or e.preventdefault();
                  }else{
                       alert("캡차를 다시 확인해주세요.")

                    }
              });
          }
      }

      
     function fn_checkByte(obj){
          const maxByte = 1200; //최대 80바이트
          const text_val = obj; //입력한 문자
          const text_len = obj.length; //입력한 문자수
          let totalByte=0;
          let str = $('#send_massage_detail').val();
          let rlen = 0;
          let str2 = "";

          //초과 CODE BY JIWON

          for(let i=0; i<text_len; i++){
               const each_char = text_val.charAt(i);
               const uni_char = escape(each_char) //유니코드 형식으로 변환

               if(uni_char.length>4){
                    // 한글 : 2Byte
                    totalByte += 2;
               }else{
                    // 영문,숫자,특수문자 : 1Byte
                    totalByte += 1;
               }
               if(totalByte <= maxByte){
                    rlen = i+1;  //return할 문자열 갯수
                }

          }
          if(totalByte>maxByte){
               alert("메세지는 최대 " + maxByte + "byte를 초과할 수 없습니다.");
               // console.log(str);
               str2 = str.substr(0,rlen);
               // console.log(str2);
               $('#send_massage_detail').val(str2);
               obj.focus();
          }else{
          }
          $('.byte_text').html(totalByte);
     }

 
     $(document).on( "keyup" , "textarea", function() {
          fn_checkByte($("#send_massage_detail").val());
     }); 

      
      $('.send_massage_btn').on("click",function(){
          if($(this).attr('id') == 'send_massage_one'){
               $('.un_visible').trigger('click');
               return false;
          }else{
               $('.message_popup').css({
                    'left':'19%'
          });
               $('.send_massage_title').css("opacity","0");
               const sendMessage = new Captcha("capArae", "capCanvas");
               sendMessage.displayCaptcha("send_massage_btn");  
          }
     });
});