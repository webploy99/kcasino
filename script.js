"use strict"

// Responsive menu
function showMenu() {
    document.getElementById('menu').style.width='65%';
}
function hideMenu() {
    document.getElementById('menu').style.width = '0';
};

// Add active class to the current button (highlight it)
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

// why chose use
// categories
    const $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);

    const cateContent = $$('.cate-item'),
        postContent = $$('.post-item');

    const cateActive = $('.cate-item.active'),
        line = $('.cates .line')

    cateContent.forEach((cate, index) => {
        const posts = postContent[index]
        cate.onclick = function() {
            $('.cate-item.active').classList.remove('active')
            $('.post-item.active').classList.remove('active')
            cate.classList.add('active')
            posts.classList.add('active')
        }
    })

    // 

// ============================

   