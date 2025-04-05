const fruits = document.querySelectorAll(".fruits-img");


const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        console.log(entry.target)
        if (entry.isIntersecting) {
            entry.target.src = entry.target.getAttribute("data-src")
            entry.target.classList.add('visible');
            entry.target.classList.add('fruits-animations');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.remove('fruits-animations');
        }
    })
})

fruits.forEach((fruit) => {
    observer.observe(fruit);
  });
