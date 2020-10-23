//_______WEEK 03________//
exports.getProve03 = (req, res, next) => {
    res.render('pages/prove03/bookForm', { 
        title: 'Prove Week 03', 
        path: '/prove03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 


exports.postProve03 = (req, res, next) => {
    res.render('pages/prove03/bookDisplay', { 
        title: 'Prove Week 03', 
        path: '/prove03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};