document.addEventListener('astro:page-load', function () {
    const page = window.location.toString().split("/").pop();
    console.log({page});
    const navLinks = document.querySelectorAll("nav ul li a");
    
    Array.from(navLinks).map((link) => link.classList.remove('active'));
    
    Array.from(navLinks).map((link) => {
        const hrefLink = link.href.split("/").pop()
        
        if (page == hrefLink) {
            link.classList.add("active");
            return false;
        }
    });
})