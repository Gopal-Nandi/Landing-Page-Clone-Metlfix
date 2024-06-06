const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const ans = accordian.querySelector('.ans');

    accordian.addEventListener('click', () => {
        
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            ans.style.maxHeight = null;
            
        } else {
            icon.classList.add('active')
            ans.style.maxHeight = ans.scrollHeight + 'px';
            
        }
    });
});

