$(document).ready(function () {
  var isDrawerOpen = false; 
  var isDropdownOpen = false;

 
  $('.clic1').click(function () {
    var targetId = $(this).data('drawer-target');
    var $target = $('#' + targetId);

    if (isDrawerOpen) {
      // close 
      $target.css('transform', 'translateX(-100%)');
      isDrawerOpen = false; 
    } else {
      // open 
      $target.css('transform', 'translateX(0)');
      isDrawerOpen = true;
    }
  }); 
  $('.clickClose').click(function () {
    var targetId = $(this).attr('aria-controls');
    var $target = $('#' + targetId);

    $target.css('transform', 'translateX(-100%)');

  });
   //  caro
     new Swiper('.swiper-container', {
    slidesPerView: 1, 
   
    navigation: {
        nextEl: '[data-carousel-next]', 
        prevEl: '[data-carousel-prev]'}
         
});
      // drobdown E-coomerce 


      $('.clickDropDown').click(function () {
        var targetId = $(this).attr('aria-controls');
        var $target = $('#' + targetId);
    
        if (isDropdownOpen) {
          //  open
          $target.css('display', 'none');
          isDropdownOpen = false;
        } else {
         //close
          $target.css('display', 'block');
          isDropdownOpen = true; 
        }
      });
      $('.sppeed').click(function() {
        $('#speed-dial-menu-bottom-right').toggleClass('hidden');
        // Toggle the rotation of the menu button
        $(this).find('svg').toggleClass('group-hover:rotate-45');
      });
      $(document).ready(function () {
        
        $('[data-modal-toggle="defaultModal"]').click(function () {
            $('#defaultModal').show(); 
        });

        $('[data-modal-hide="defaultModal"]').click(function () {
            $('#defaultModal').hide(); 
        });
    });
    $("#form1").validate({
     
      submitHandler: function(form) {
        form.submit();
      }

     


     });
      
});
function showTab(tabName) {
  // الأول اخفاء جميع عناصر المحتوى
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function(tabContent) {
      tabContent.style.display = "none";
  });

  // ثم إظهار العنصر المناسب بناءً على الاسم الممرر
  var selectedTab = document.getElementById("tab-" + tabName);
  selectedTab.style.display = "block";}

 
  



