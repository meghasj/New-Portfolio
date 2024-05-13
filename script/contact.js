document.addEventListener("DOMContentLoaded", function() {
    var iconSection = document.querySelector(".icon-section");
    var formSection = document.getElementById("contact");
    var closeButton = document.getElementById("back");
  
    formSection.style.display = "none";

  
    document.getElementById("sendMessageBtn").addEventListener("click", function(event) {
     
      iconSection.style.display = "none";
      formSection.style.display = "block";
      
    });
    closeButton.addEventListener("click",function(event){
      formSection.style.display = "none";
      iconSection.style.display = "block";
    });

  });