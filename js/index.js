$(function(){

    //when you click on the portfolio menu list
    $('.portMenu li a').click(function(e) {
        e.preventDefault();
        $('.portMenu li.current').removeClass('current');
        $(this).parent().addClass('current');

        //get the text from the menu and add to the heading
        $('#heading').text($(this).text());
        //get and filter the text from the portfolio menu
        var categories = $(this).text().toLowerCase().replace(' ', '-');
        
        if(categories === 'all-projects'){
            $('#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else{
            $('#gallery li').each(function() {
                if(!$(this).hasClass(categories)) {
                    $(this).fadeOut('slow').addClass('hidden');
                }else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });   
        }

    });



    let menuList = $('#overlay ul li a');
    //toggles the  toggle bar
   $('.myIcon').click(function() {
       $('.myIcon').toggleClass('active');
       $('.overlay').toggleClass('active');
       $("#main-content").toggleClass('bg-content');
    
    
    });
   
     // Closes the overlay menu when you click on the li item 
    menuList.click(function(e) {
       e.preventDefault();
       $('.myIcon').toggleClass("active");
       $('.overlay').toggleClass('active');
       $("#main-content").toggleClass('bg-content');
    });
    
    //smooth scroll and scroll spy functionalities.
    menuList.on( 'click', function(event) {
       var target  = $(this);
       var element = target.attr('href');

       menuList.removeClass('active');
       target.addClass('active');

       $("body, html").animate({ 
           scrollTop: $(element).offset().top - 90  
        }, 800);
       
     });
    
     
    function hgsubmit() { 
        var wordRegex, emailRegex, button;
        button = document.getElementById('formSubmit');
        wordRegex = /\S+/;
        emailRegex = /^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i;
        
        //validate the user input
        if (wordRegex.test(document.hgmailer.name.value) == false) alert ("Please provide your full name."); 
        else if (emailRegex.test(document.hgmailer.email.value) == false) alert ("A valid email address is required.");  
        else if (wordRegex.test(document.hgmailer.message.value) == false) alert ("Message Required.");
        else { 
            //change the text on the button
            button.innerHTML = '<span style="color:white; font-weight: bold;"> Please Wait...</span>';
            
            //change the background color of the button
            button.style.backgroundColor = 'red';
            
            //clear fields
            clearFields();
            
            setTimeout(function(){
                 document.hgmailer.submit();
               alert ('MESSAGE SENT'); 
            },2000);
             
          } 
                     
  };
    
    
     //clear the fields
    function clearFields() {
        
        var fields, fieldsArr;
        
        fields = document.querySelectorAll('#formFullName' + ',' + '#formEmailAddress' + ',' + '#formSubject' + ',' + '#formEnquiry');
        //convert the NodeList into an array
        fieldsArr = Array.prototype.slice.call(fields);
        fieldsArr.map(function(cur) {
           cur.value = ""; 
        });
    };
    
 //send email
document.getElementById('formSubmit').addEventListener('click', hgsubmit);
 
    
});








   