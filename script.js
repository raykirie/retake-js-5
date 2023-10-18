document.addEventListener("DOMContentLoaded", function() {
    
    showPage("page1");

    
    document.getElementById("btnPage1").addEventListener("click", function() {
        const header = document.querySelector("#page1 h1");
        header.style.transition = "font-size 2s";
        header.style.fontSize = "2em";
    });

    document.getElementById("btnPage2").addEventListener("click", function() {
        const page2 = document.getElementById("page2");
        const colors = ["#ff5733", "#33ff57", "#5733ff", "#f3ff33"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        page2.style.backgroundColor = randomColor;
    });

    
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href").substring(1);
            showPage(targetPage);
        });
    });

     
    function showPage(pageId) {
        document.querySelectorAll(".page").forEach(function(page) {
            page.style.opacity = "0"; 
            page.style.display = "none";
        });

        const targetPage = document.getElementById(pageId);
        targetPage.style.display = "block";
        setTimeout(function() {
            targetPage.style.opacity = "1"; 
        }, 100);
    }
});

