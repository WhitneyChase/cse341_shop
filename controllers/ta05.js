//_______WEEK 05________//
exports.getTeam05 = (req, res, next) => {
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        activeTA05: true, // For HBS
        contentCSS: true, // For HBS
    });
  };

  exports.postCreateCookie = (req, res, next) => {

  };
  
  exports.postTeam05ChangeStyle = (req, res, next) => {
    
     req.session.style = req.body.css_style;
   //this was new after you add the user you go back to the page original page
    res.redirect('/ta05');

  }; 
  
  exports.postTeam05CounterIncrement = (req, res, next) => {
    req.session.counter += Number(req.body.constant);
    //this was new after you add the user you go back to the page original page
     res.redirect('/ta05');
   };
  
  //  exports.postTeam05CounterDecrement = (req, res, next) => {
    
  //   //this was new after you add the user you go back to the page original page
  //    res.redirect('/ta05/');
  //  };
  
   exports.postTeam05Destroy = (req, res, next) => {
    if (req.body.reset === 'true') {
      req.session.destroy(() => {
          res.redirect('/ta05'); // Redirect must be passed through the callback   
      })
  } else {
      /// We don't destroy the session otherwise...
      res.redirect('/ta05');
  }
};
  

exports.getIndex = (req, res, next) => {
  // It's a good idea to initialize session variables to some sort of default value
  if (req.session.counter === undefined) {
      req.session.counter = 0;
  }
  if (!req.session.style === undefined) {
      req.session.counter = 0;
  }
  res.render('pages/teamActivities/ta05', { 
      title: 'Team Activity 05', 
      path: '/ta05',
      style: req.session.style,
      counter: req.session.counter
  });
};