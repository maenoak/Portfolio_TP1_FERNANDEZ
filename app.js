const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log (entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll (".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll (".hidden2");
hidden2Elements.forEach((el) => observer.observe(el));

const hidden3Elements = document.querySelectorAll (".hidden3");
hidden3Elements.forEach((el) => observer.observe(el));

const hidden4Elements = document.querySelectorAll (".hidden4");
hidden4Elements.forEach((el) => observer.observe(el));

