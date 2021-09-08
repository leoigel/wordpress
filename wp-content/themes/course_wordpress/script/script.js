$ = jQuery;

$(document).ready(function () {

    console.log('11111');
    
    mascyoo();
    selectForm();
    numberWatching();
    selectCategories();
    showMore();
    sendButtomMobile();
    analytics();
    detectDevice();
});

$(document).ready(function () {

    //Query Link
    var Queryurl = location.search;

    LogoUrl1 = $('.rwapperLogo').attr('href');
    newLogoUrl1 = LogoUrl1+Queryurl;
    $('.rwapperLogo').attr('href',newLogoUrl1);

    LogoUrl2 = $('.backToHome').attr('href');
    newLogoUrl2 = LogoUrl2+'/'+Queryurl;
    $('.backToHome').attr('href',newLogoUrl2);

    LogoUrl3 = $('.polutionSafety').attr('href');
    newLogoUrl3 = LogoUrl3+'/'+Queryurl;
    $('.polutionSafety').attr('href',newLogoUrl3);

    LogoUrl4 = $('.back a').attr('href');
    newLogoUrl4 = LogoUrl4+'/'+Queryurl;
    $('.back a').attr('href',newLogoUrl4);

  // Submit

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  //Flag for checkboxes
  $(".checkbox-txt").click(function (e) {
    const name = e.target.className.split(" ")[1];
    const isChecked = $(`.checkbox.${name}`)[0].checked;
    if (!isChecked) {
      $(`.checkbox.${name}`).prop("checked", true);
    } else {
      $(`.checkbox.${name}`).prop("checked", false);
    }
  });

  $(".checkmark").click(function (e) {
    const isChecked = $(`.checkbox`)[0].checked;
    if (!isChecked) {
      $(`.checkbox`).prop("checked", true);
    } else {
      $(`.checkbox`).prop("checked", false);
    }
  });

  $(".checkbox-txt2").click(function (e) {
    const name = e.target.className.split(" ")[1];
    const isChecked = $(`.checkbox2.${name}`)[0].checked;
    if (!isChecked) {
      $(`.checkbox2.${name}`).prop("checked", true);
    } else {
      $(`.checkbox2.${name}`).prop("checked", false);
    }
  });

  $(".checkmark2").click(function (e) {
    const isChecked = $(`.checkbox2`)[0].checked;
    if (!isChecked) {
      $(`.checkbox2`).prop("checked", true);
    } else {
      $(`.checkbox2`).prop("checked", false);
    }
  });

  //Move placeholders up
  $("input").focus(function (e) {
    const name = $(e)[0].target.name;
    $(`.field-placeholder`).removeClass("input-after-active");
    $(`.field-placeholder.${name}`).addClass("active");
  });

  //Move placeholders down if empty field
  $("input").on("focusout", function (e) {
    const name = $(e)[0].target.name;
    const val = $(`input[name="${name}"]`).val();
    if (!val) {
      $(`.field-placeholder.${name}`).removeClass("active");
      $(`.field-placeholder.${name}`).addClass("input-after-active");
    }
  });

  $('select').focus(function(){
    $(`.field-placeholder`).removeClass("input-after-active");
    $(`.field-placeholder.degem`).addClass("active");
  })
  $('select').focusout(function(){
    const val = $(`input[name="degem"]`).val();
    if (!val) {
        $(`.field-placeholder.degem`).removeClass("active");
        $(`.field-placeholder.degem`).addClass("input-after-active");
      }
  })

  function regexEmail(email) {
    HebrewChars = new RegExp("^[\u0590-\u05FF]+$");
    AlphaNumericChars = new RegExp("^[a-zA-Z0-9-]+$");
    EnglishChars = new RegExp("^[a-zA-Z-]+$");
    LegalChars = new RegExp("^[a-zA-Z-\u0590-\u05FF ]+$");

    // Then use it

    if (!LegalChars.test(email)) {
      console.log("Succeess");
    } else {
      var str = $(".email").val();
      var res = str.replace("email", " ");
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Validation for phone number
  function regexPhone(phone) {
    const fixedPhone = phone.replace(/[a-zA-Z\u0590-\u05fe-]/g, "");
    $("#phone").val(fixedPhone);
    const firstRe = /[a-zA-Z\u0590-\u05fe-]/.test(
      String(phone).toLocaleLowerCase()
    );
    if (firstRe) {
      return "characters";
    }

    const secondRe = /^\+?(972|0)?0?(([23489]{1}\d{7})|([71,72,73,74,75,76,77]{2}\d{7})|[5]{1}\d{8})$/.test(
      String(phone).toLowerCase()
    );
    if (!secondRe) {
      return "numbers";
    }
    return "ok";
  }

  function isFormLegal() {
    let isLegal = true;

    if (!$(`#checkbox1`).prop("checked")) {
        $(`.error-m.checkbox1`).css("display", "block");
        $(`.success.checkbox1`).css("display", "none");
        $(`.success.checkbox1`).removeClass("ok");
      } else {
        $(`.error-m.checkbox1`).css("display", "none");
        $(`.success.checkbox1`).css("display", "block");
        $(`.success.checkbox1`).addClass("ok");
      }

    if ($(`#mutag`).val() == '') {
        $(`.error-m.mutag`).css("display", "block");
        $(`.success.mutag`).css("display", "none");
        $(`.success.mutag`).removeClass("ok");
      } else {
        $(`.error-m.mutag`).css("display", "none");
        $(`.success.mutag`).css("display", "block");
        $(`.success.mutag`).addClass("ok");
      }

    if ($(`#degem`).val() == '') {
        $(`.error-m.degem`).css("display", "block");
        $(`.success.degem`).css("display", "none");
        $(`.success.degem`).removeClass("ok");
      } else {
        $(`.error-m.degem`).css("display", "none");
        $(`.success.degem`).css("display", "block");
        $(`.success.degem`).addClass("ok");
      }
  
      if (!$(".success.fullName").hasClass("ok")) {
        $(".error-m.fullName").fadeIn();
      }
      if (!$(".success.phone").hasClass("ok")) {
        $(".error-m.phone").fadeIn();
      }
      if (!$(".success.email").hasClass("ok")) {
        $(".error-m.email").fadeIn();
      }
      if (!$(".success.checkbox1").hasClass("ok")) {
        $(".error-m.checkbox1").fadeIn();
      }
      if (!$(".success.mutag").hasClass("ok")) {
        $(".error-m.mutag").fadeIn();
      }
      if (!$(".success.degem").hasClass("ok")) {
        $(".error-m.degem").fadeIn();
      }

      if (
        !$(".success.fullName").hasClass("ok") ||
        !$(".success.phone").hasClass("ok") ||
        !$(".success.email").hasClass("ok") ||
        !$(".success.checkbox1").hasClass("ok") ||
        !$(".success.mutag").hasClass("ok") ||
        !$(".success.degem").hasClass("ok")
      ) {
        isLegal = false;
      }
  
      return isLegal;
  }

  //Validation for all fields
  $("input").on("focusout", function (e) {
    //Get the ID ans the name - Used to know the type of the validation we need
    const id = $(e)[0].target.id;
    const name = $(e)[0].target.name;
    const isRequired = $($(e)[0].target).attr("required");
    const val = $(`input[name="${name}"]`).val();
    const field = $(this).attr("name");

    switch (id) {
      case "fullName":
        if (isRequired) {
          if (!val) {
            $(`.error-m.${id}`).css("display", "block");
            $(`.success.${id}`).css("display", "none");
          } else if (!val.split(" ")[1]) {
            $(`.error-m.${id}`).css("display", "block");
            $(`.success.${id}`).css("display", "none");
          } else {
            $(`.error-m.${id}`).html("");
            $(`.success.${id}`).css("display", "block");
            $(`.success.${id}`).addClass("ok");
          }
        }
        break;

      case "email":
        if (isRequired) {
          if (!val) {
            $(`.error-m.${id}`).css("display", "block");
            $(`.success.${id}`).css("display", "none");
          } else if (!regexEmail(val)) {
            $(`.error-m.${id}`).css("display", "block");
            $(`.success.${id}`).css("display", "none");
          } else {
            $(`.error-m.${id}`).html("");
            $(`.success.${id}`).css("display", "block");
            $(`.success.${id}`).addClass("ok");
          }
        }
        break;

      case "phone":
        const re = regexPhone(val);
        $("#phone").attr("maxlength", "10");
        if (isRequired && !val) {
          $(`.error-m.${id}`).css("display", "block");
          $(`.success.${id}`).css("display", "none");
        } else if (re === "numbers") {
          $(`.error-m.${id}`).css("display", "block");
          $(`.success.${id}`).css("display", "none");
        } else if (re === "characters") {
          $(`.error-m.${id}`).css("display", "block");
          $(`.success.${id}`).css("display", "none");
        } else {
          $(`.error-m.${id}`).html("");
          $(`.success.${id}`).css("display", "block");
          $(`.success.${id}`).addClass("ok");
        }
        break;

      default:
        break;
    }
  });

  $(".send-btn").click(function (e) {
    e.preventDefault();

    $('.success').each(function (index, element) {
        if (!$(this).hasClass('ok')){
            $(this).addClass('1111');
            setTimeout(() => {
                $(this).closest('.field').find('error-m').focus();
                setTimeout(() => {
                    $(this).closest('.field').find('input').focus();
                }, 100);
            }, 500);

            return false;
        }
    });

    if (!isFormLegal()) {
      return;
    }

    
    $("fieldset").attr('aria-hidden','true');
    $('.timerTitle,#timeHolder,fieldset').hide();
    $('.wrapperDesPhone').css('margin','43vw 0 2vw');

    $(".tnx").fadeIn();
    $(".wrapperDesPhone").fadeOut();
    
    setTimeout(() => {
        $('.topThanksTxt').focus().tabs();
    }, 500);


    $( "footer" ).animate({scrollTop:0}, 500, 'swing');
    $( "body:not(.mobile) .wrapperDesPhone" ).css('margin','-10vw 0 0');


    const subject = '';
    const fullName = $('#fullName').val().split(' ');
    const firstName = fullName[0];
    const lastName = fullName[1];
    const mobile =  $('#phone').val();
    const phone =  '';
    const email =  $('#email').val();
    const companyCode =  '1';
    const leadSourceCode =  '10';
    const leadSourceSecondaryCode = '900';
    const DigitalToolCode = '12';
    const campaign = "CMP-01466-Y9P9P3";
    const mutag = $('#mutag').val();
    const model = $('#cars').val();
    const agencyCode = '78';
    const advertisingApproval = $('#checkbox2').is(':checked');
    const privacyQuestion = $('#checkbox1').is(':checked');
    const generaldesc = '';

    const utmSource = 0;
    const utmMedium = 0;
    const utmTerm = 0;
    const utmContent = 0;
    const utmCampaign = 0;

    if (getUrlParameter("utm_source")){
        const utmSource = getUrlParameter("utm_source");
    }

    if (getUrlParameter("utm_medium")){
        const utmMedium = getUrlParameter("utm_medium");
    }
    
    if (getUrlParameter("utm_term")){
        const utmTerm = getUrlParameter("utm_term");
    }

    if (getUrlParameter("utm_content")){
        const utmContent = getUrlParameter("utm_content");
    }   

    if (getUrlParameter("utm_campaign")){
        const utmCampaign = getUrlParameter("utm_campaign");
    }   


    

    const manufacturer = '';

    dataLayer.push({'Category':'טופס ליד','Action':'Lead','Label':mutag +' '+model ,'event':'auto_event'});

    var values = ({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "mobile": mobile,
        "agencyCode": agencyCode,
        "companyCode": companyCode,
        "leadSourceCode": leadSourceCode,
        "leadSourceSecondaryCode": leadSourceSecondaryCode,
        "campaign": campaign,
        "advertisingApproval": advertisingApproval,
        "privacyQuestion": privacyQuestion,
        "model": model,
        "utmSource": utmSource,
        "utmMedium": utmMedium,
        "utmTerm": utmTerm,
        "utmContent": utmContent,
        "utmCampaign": utmCampaign,
        "generaldesc": ""
      });

    $.ajax({
        url: "/lubinskidigital/wp-content/themes/lubinski-theme/send.php",
        type: "POST",
        data: values ,
        success: function (response) {
            console.log(response);
            console.log(values);
            // window.location.href = '/lubinskidigital/wp-content/themes/lubinski-theme/send.php';
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });


  });

  //End Sumbit


});
////////////////////
//// Select Form
////////////////////
function selectForm(){
    $('.mutag_item').click(function(){
        if ($(this).hasClass('active')){
            $('.mutag_item').removeClass('active');
            return;
        }
        $('.mutag_item').removeClass('active');
        $(this).addClass('active');
        var selectedMutag = '';
        $('.mutag_item').each(function (index, element) {
            if ($(this).hasClass('active')){
                if (selectedMutag.length == 0){
                    selectedMutag = $(this).data('mutag');
                }else{
                    selectedMutag = selectedMutag+','+$(this).data('mutag');
                }
            }
        });
        $('#mutag').val(selectedMutag);

        var mutagSelected = $('.mutag_item.active').data('mutag');
        $('#cars option:not(.first)').hide();

        $('#cars option').each(function (index, element) {
            if ($(this).hasClass(mutagSelected)){
                $('#cars').removeAttr('disabled');
                $(this).show();
            }else{
                $('#cars').attr('disabled');
            }
        });

        if (!$('#mutag').val() == ''){
            $('.field.degem').css("display", "flex").hide().fadeIn();
        }
    });

    $("#cars").change(function(){
        var carsVal = $(this).val();
        $('#cars').val(carsVal);
        $('#degem').val(carsVal);
      });
}

////////////////////
//// Number Watching
////////////////////
function numberWatching(){
    
    var from = $('.numberwatching').data('from'),
    to = $('.numberwatching').data('to'),
    theRandomNumber = Math.floor(Math.random() * (to-from)) + from;
    $('.numberwatching').text(theRandomNumber);

    setInterval(() => {        
        var from = $('.numberwatching').data('from'),
        to = $('.numberwatching').data('to'),
        theRandomNumber = Math.floor(Math.random() * (to-from)) + from;
        $('.numberwatching').text(theRandomNumber);
    }, 50000);
}

////////////////////
//// Select Categories
////////////////////
function selectCategories(){
    
    $('.item_mutag').click(function (e) { 

        $('.showMore').hide();

        $('.item_mutag').removeClass('active');
        $(this).addClass('active');
        $(this).attr('aria-selected','true');

        $('.takeTo').hide();
        var txt = $(this).data('txt');
        var degem = $(this).data('degem');
        $('.takeToTxt').text(txt);
        $('.takeTo').fadeIn('slow');


        //Query Link
        var Queryurl = location.search;

        $('.takeTo').attr('href', window.location.href.split('?')[0]+degem+'/'+Queryurl);


        var degem = $(this).data('degem');
        $('.carItem').hide();
        $('.carItem').each(function (index, element) {
            var namedegemcar = $(this).data('namedegemcar');
            if (namedegemcar === degem){
                $(this).fadeIn();
            }
        });
    });

    $('.item_mutag').focus(function (e) { 
        console.log('change');
        $('.showMore').hide();

        $('.item_mutag').removeClass('active');
        $(this).addClass('active');
        $(this).attr('aria-selected','true');

        $('.takeTo').hide();
        var txt = $(this).data('txt');
        var degem = $(this).data('degem');
        $('.takeToTxt').text(txt);
        $('.takeTo').fadeIn('slow');


        //Query Link
        var Queryurl = location.search;

        $('.takeTo').attr('href', window.location.href.split('?')[0]+degem+'/'+Queryurl);


        var degem = $(this).data('degem');
        $('.carItem').hide();
        $('.carItem').each(function (index, element) {
            var namedegemcar = $(this).data('namedegemcar');
            if (namedegemcar === degem){
                $(this).fadeIn();
            }
        });
    });
}
////////////////////
//// Show More
////////////////////
function showMore(){
    
    if($('.carItem:hidden').length == 0){
        $('.showMore').addClass("opacity");
    }

    if ($('body').hasClass('mobile')){

        var x = $(".carItem:hidden");
        if (x.length == 0) {
            $('.showMore').hide();
        }     

        $(".showMore").click(function (e) {
            
            var expanded = $(this).attr('aria-expanded');
            if (expanded == 'false'){
                expanded = 'true';
            }else{
                expanded = 'false';
            }
            $(this).attr('aria-expanded',expanded);

            var move = $('.showMore').offset().top + 40;

            $('.carItem').removeClass('focusThisElement');
            $('.carItem').each(function (index, element) {
                if ($(this).is(':hidden')){
                    $(this).addClass('focusThisElement');
                }
            });
            setTimeout(() => {
                
                var xfocus = $('.carItem.focusThisElement').first();
                xfocus.find('.buy_online').focus();
            }, 500);
            

            var x = $(e.currentTarget.previousElementSibling).find(".carItem:hidden");
            x.slice(0, 4).fadeIn(2000);
            $("html, body").animate({scrollTop: move},800);
            if (x.length <= 4) {
                $(e.currentTarget).addClass("opacity");
            }               
            
        });
    }else{
        $(".showMore").click(function (e) {

            var expanded = $(this).attr('aria-expanded');
            if (expanded == 'false'){
                expanded = 'true';
            }else{
                expanded = 'false';
            }
            $(this).attr('aria-expanded',expanded);

            var move = $('.showMore').offset().top + 80;

            $('.carItem').removeClass('focusThisElement');
            $('.carItem').each(function (index, element) {
                if ($(this).is(':hidden')){
                    $(this).addClass('focusThisElement');
                }
            });
            setTimeout(() => {
                
                var xfocus = $('.carItem.focusThisElement').first();
                xfocus.find('.buy_online').focus();
            }, 500);

            var x = $(e.currentTarget.previousElementSibling).find(".carItem:hidden");
            x.slice(0, 12).fadeIn();
            $("html, body").animate({scrollTop: move},800);

            if (x.length <= 12) {
                $(e.currentTarget).addClass("opacity");
            }
        });
    }


}

////////////////////
//// Send Buttom Mobile
////////////////////
function sendButtomMobile(){
    
$('.sendButton').click(function (e) { 
    $('footer').fadeIn(); 
    $('body').addClass('openForm'); 
});

$('.closeForm').click(function (e) { 
    $('footer').fadeOut(); 
    $('body').removeClass('openForm'); 
});

}

////////////////////
//// detectDevice
////////////////////
function detectDevice(){
    
var device = navigator.appVersion;
console.log(device);
if (device.indexOf('Android') > -1) {
    $('body').addClass('Android');
  } else if(device.indexOf('iPhone') > -1){
    $('body').addClass('iPhone');
  }
}

////////////////////
//// mascyoo
////////////////////
function mascyoo(){

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split("&"),
          sParameterName,
          i;
    
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split("=");
    
          if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined
              ? true
              : decodeURIComponent(sParameterName[1]);
          }
        }
      };

    const ref = getUrlParameter("ref");
    var numberMascyoo = '077-9972294';

    switch(ref) {
        case '139':
            numberMascyoo = '077-2319970';
          break;
        case '950':
            numberMascyoo = '077-9977750';
          break;
        case '160':
            numberMascyoo = '077-9972294';
          break;
        case '162':
            numberMascyoo = '077-7299483';
          break;
        case '3':
            numberMascyoo = '077-7296631';
          break;
        case '6':
            numberMascyoo = '077-7299929';
          break;
        case '10':
            numberMascyoo = '077-9974809';
          break;
        case '92':
            numberMascyoo = '077-9977721';
          break;
        case '101':
            numberMascyoo = '077-9965037';
          break;
        default:
            numberMascyoo = '077-9972294';
      }

      $('.phoneButtonWrapper a').attr('href','tel:'+numberMascyoo);
      $('.wrapperDesPhone a').attr('href','tel:'+numberMascyoo);
      $('.wrapperDesPhone a').text(numberMascyoo);

}


////////////////////
//// Analytics
////////////////////
function analytics(){

    $('.item_mutag').click(function (e) { 
        var degem = $(this).data('degem');
        dataLayer.push({'Category':'האדר מותגים','Action':'Click','Label':degem ,'event':'auto_event'});
    });

    $('.buy_online').click(function (e) { 
        var nameButton = $(this).find('.d').text();
        var title = $(this).closest('.carItem').find('.carTitle span').text();
        var des = $(this).closest('.carItem').find('.carDescription span p').text();

        dataLayer.push({'Category':'ריבוע רכבים','Action':nameButton,'Label':title+' '+des ,'event':'auto_event'});
    });

    $('.text_drive').click(function (e) { 
        var nameButton = $(this).find('.d').text();
        var title = $(this).closest('.carItem').find('.carTitle span').text();
        var des = $(this).closest('.carItem').find('.carDescription span p').text();

        dataLayer.push({'Category':'ריבוע רכבים','Action':nameButton,'Label':title+' '+des ,'event':'auto_event'});
    });

    $('.carButtonInfo').click(function (e) { 
        var nameButton = $(this).find('.d').text();
        var title = $(this).closest('.carItem').find('.carTitle span').text();
        var des = $(this).closest('.carItem').find('.carDescription span p').text();

        dataLayer.push({'Category':'ריבוע רכבים','Action':nameButton,'Label':title+' '+des ,'event':'auto_event'});
    });

    $('.articleButtonWrapper').click(function (e) { 
        var titleArticle = $(this).closest('.article').find('.articleTxt span').text();

        dataLayer.push({'Category':'כפתור כתבות','Action':'Click','Label':titleArticle ,'event':'auto_event'});
    });

    $('.phoneButtonWrapper').click(function (e) { 
        
        if ($('body').hasClass('post-mg')){
            dataLayer.push({'Category':'דברו איתנו','Action':'Call','Label':'MG' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-citroen')){
            dataLayer.push({'Category':'דברו איתנו','Action':'Call','Label':'citroen' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-opel')){
            dataLayer.push({'Category':'דברו איתנו','Action':'Call','Label':'opel' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-peugeot')){
            dataLayer.push({'Category':'דברו איתנו','Action':'Call','Label':'peugeot' ,'event':'auto_event'});
        }else{
            dataLayer.push({'Category':'דברו איתנו','Action':'Call','Label':'general' ,'event':'auto_event'});
        }  
    });

    $('.sendButton').click(function (e) { 
        
        if ($('body').hasClass('post-mg')){
            dataLayer.push({'Category':'כפתור להשארת פרטים','Action':'השארת פרטים','Label':'mg' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-citroen')){
            dataLayer.push({'Category':'כפתור להשארת פרטים','Action':'השארת פרטים','Label':'citroen' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-opel')){
            dataLayer.push({'Category':'כפתור להשארת פרטים','Action':'השארת פרטים','Label':'opel' ,'event':'auto_event'});
        }else if ($('body').hasClass('post-peugeot')){
            dataLayer.push({'Category':'כפתור להשארת פרטים','Action':'השארת פרטים','Label':'peugeot' ,'event':'auto_event'});
        }else{
            dataLayer.push({'Category':'כפתור להשארת פרטים','Action':'השארת פרטים','Label':'general' ,'event':'auto_event'});
        }  
    });


}