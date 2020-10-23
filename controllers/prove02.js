//_______WEEK 02________// 
exports.getProve02 = (req, res, next) => {
    res.render('pages/prove02/bookForm', { 
        title: 'Prove Week 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 


exports.postProve02 = (req, res, next) => {
    res.render('pages/prove02/bookDisplay', { 
        title: 'Library', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.bTitle,
        input2: req.body.bAuthur,
        input3: req.body.bSynopsis
    });
};