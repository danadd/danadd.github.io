const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){ //we need to assess the event object
    const id = e.target.dataset.id; //grabbing the id of the buttons (since nothing else has a data-id set)
    if(id){
        //remove active class from buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other articles, but display the one with the matching id
        articles.forEach(function(article){
            article.classList.remove('active'); //turns off active
        })
        const element = document.getElementById(id);
        element.classList.add('active'); //this turns on active
    }
});