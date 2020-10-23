//_______WEEK 01________//
exports.getProve01 = (req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove Week 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.postProve01 = (req, res, next) => {
    res.render('pages/prove01/display', { 
        title: 'Prove Week 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.animal,
        input2: req.body.name
    });
};
