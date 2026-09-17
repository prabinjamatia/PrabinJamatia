// --- PEEKING CAT ANIMATION ---
const meowBtn = document.querySelector('.text-box .button');
const catHead = document.getElementById('peek-cat');

// Checks if the buttons exist on the page before running (prevents errors on other pages)
if (meowBtn && catHead) {
    meowBtn.addEventListener('click', function(e) {
        catHead.classList.add('show');
        
        // Wait 2 seconds, then slide it back up
        setTimeout(function() {
            catHead.classList.remove('show');
        }, 2000);
    });
}

// --- SECURITY FEATURES ---
// 1. Prevents all image dragging
document.addEventListener('dragstart', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault();
    }
});

// 2. Disables right-click menu everywhere on the page
document.addEventListener('contextmenu', event => event.preventDefault());

// 3. Disables F12, Ctrl+U, Ctrl+S, and Inspect Element shortcuts
document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12
       (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || // Ctrl+Shift+I/J
       (e.ctrlKey && (e.keyCode == 85 || e.keyCode == 83))) { // Ctrl+U or Ctrl+S
        return false;
    }
};

// --- EMAIL SPAM PROTECTION ---
const emailLink = document.getElementById('email-link');

if (emailLink) {
    // Triggers when clicked with a mouse
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:' + 'prabinjamatia30' + '@' + 'gmail.com';
    });

    // Triggers when someone uses the 'Tab' and 'Enter' keys
    emailLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            window.location.href = 'mailto:' + 'prabinjamatia30' + '@' + 'gmail.com';
        }
    });
}
// --- INSTAGRAM PROTECTION ---
const igLink = document.getElementById('ig-link');

if (igLink) {
    igLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://' + 'instagram.com/' + 'silly.binn', '_blank');
    });

    igLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            window.open('https://' + 'instagram.com/' + 'silly.binn', '_blank');
        }
    });
}

// --- LINKEDIN PROTECTION ---
const liLink = document.getElementById('li-link');

if (liLink) {
    liLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://' + 'linkedin.com/in/' + 'prabinjmt', '_blank');
    });

    liLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            window.open('https://' + 'linkedin.com/in/' + 'prabinjmt', '_blank');
        }
    });
}

// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Triggers the slide-in animation when scrolling into view
            entry.target.classList.add('show-element');
        } else {
            // Resets the elements back to hidden when you scroll away
            entry.target.classList.remove('show-element');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));