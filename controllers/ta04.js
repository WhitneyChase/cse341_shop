//_______WEEK 04________// 

exports.getTeam04 = (req, res, next) => {
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
}