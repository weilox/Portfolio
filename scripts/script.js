window.onload = function() {
    const content = document.getElementById("content")

    setTimeout(function() {
        setTimeout(() => {
            document.getElementById("loadingtext").style.opacity = '0';
        }, 50);

        setTimeout(function() {
            document.getElementById("loading").style.display = 'none';
            content.style.display = "flex"
            setTimeout(() => {
                content.style.opacity = '1';
            }, 100);
        }, 300);

    }, 1000);

    function toggleBorder() {
        const element = document.getElementById("animation")
        const isRed = element.style.borderRight === '2px solid red';
    
        if (isRed) {
          element.style.borderRight = '2px solid transparent';
        } else {
          element.style.borderRight = '2px solid red';
        }
      }
    
      toggleBorder();
      setInterval(toggleBorder, 500);
};

document.getElementById('image').addEventListener('click', function() {
    window.open('https://www.github.com/weilox', '_blank');
});

const texts = ['Developer', 'Security Analyst'];
let currentIndex = 0;
let currentText = texts[currentIndex];
let charIndex = 0;
let isDeleting = false;
const text = document.getElementById("span");

function type() {
    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            text.textContent = currentText.slice(0, charIndex);
        } else {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            currentText = texts[currentIndex];
            setTimeout(type, 0);
            return;
        }
    } else {
        if (charIndex < currentText.length) {
            charIndex++;
            text.textContent = currentText.slice(0, charIndex);
        } else {
            isDeleting = true;
            setTimeout(type, 2200);
            return;
        }
    }

    setTimeout(type, isDeleting ? 30 : 70); 
}
type();