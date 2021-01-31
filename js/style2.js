// apparaitre l'éllemenrt en fading 1920


const ratio = .1;

const option = {
    root : null,
    rootMargin: '0px',
    threshold: ratio
};

const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visibletop')
            observer.unobserve(entry.target)
        }
            
    });
};

const observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.revealtop').forEach(function (r) {
    observer.observe(r)
});



const handleIntersectdeux = function(entries, observerdeux) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visiblebot')
            observerdeux.unobserve(entry.target)
        }
            
    });
};

const observerdeux = new IntersectionObserver(handleIntersectdeux, option)
document.querySelectorAll('.revealbot').forEach(function (b) {
    observerdeux.observe(b)
});





// apparaitre en fading en mobile



const ratiomobile = .1;

const optionmobile = {
    root : null,
    rootMargin: '0px',
    threshold: ratiomobile
};

const handleIntersectrec2 = function(entries, observerrec2) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratiomobile) {
            entry.target.classList.add('revealrec2-visible')
            observerrec2.unobserve(entry.target)
        }
            
    });
};

const observerrec2 = new IntersectionObserver(handleIntersectrec2, option)
document.querySelectorAll('.revealrec2').forEach(function (rd) {
    observerrec2.observe(rd)
});

const handleIntersectrec3 = function(entries, observerrec3) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratiomobile) {
            entry.target.classList.add('revealrec3-visible')
            observerrec3.unobserve(entry.target)
        }
            
    });
};

const observerrec3 = new IntersectionObserver(handleIntersectrec3, option)
document.querySelectorAll('.revealrec3').forEach(function (rt) {
    observerrec3.observe(rt)
});