fetch("../html/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html
    })

fetch("../html/nav.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("nav").innerHTML = html
    })

fetch("../html/footer.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html
    })

function homePage() {
    if (location == "index.html") {
        location.href = "#";
    } else {
        location.href = "../index.html"
    }
}

function contentPage() {
    if (location == "html/content.html") {
        location.href = "#";
    } else {
        location.href = "../html/content.html"
    }
}

function blogPage() {
    if (location == "html/blog.html") {
        location.href = "#";
    } else {
        location.href = "../html/blog.html"
    }
}

function dataPage() {
    if (location == "html/data.html") {
        location.href = "#";
    } else {
        location.href = "../html/data.html"
    }
}

function formPage() {
    if (location == "html/form.html") {
        location.href = "#";
    } else {
        location.href = "../html/form.html"
    }
}

function navopen() {
    document.getElementById("nav").style.display = "block";
}

function menuClose() {
    document.getElementById("nav").style.display = "none";
}