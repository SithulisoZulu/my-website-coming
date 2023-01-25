const observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('serve');
        }
        else{
            entry.target.classList.remove('serve');
        }
    })
});