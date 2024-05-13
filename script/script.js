document.addEventListener("DOMContentLoaded", function() {
    const talkButton = document.getElementById('talk-button');
    const slideInContent = document.getElementById('slide-in-content');
    const closeButton = document.getElementById('close-button');
    
    talkButton.addEventListener('click', function() {
        slideInContent.style.right = '0'; 
        document.body.classList.add('slide-in-active'); 
    });

    closeButton.addEventListener('click', function() {
        slideInContent.style.right = '-50%'; // Slide out
        document.body.classList.remove('slide-in-active'); // Enable scrolling
    });

    // Close the slide-in content when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!slideInContent.contains(event.target) && event.target !== talkButton) {
            slideInContent.style.right = '-50%'; // Slide out
            document.body.classList.remove('slide-in-active'); // Enable scrolling
        }
    });
});