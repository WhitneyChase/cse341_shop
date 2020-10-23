   

//_______WEEK 02________//

//a constant array for the user to see
const userArray = ['Jack', 'Jose', 'Gin', 'Brandy', 'Jim'];
console.log("INSIDE THE CONTROLLER");
exports.postTeam02AddUser = (req, res, next) => {
 
  console.log("INSIDE ADD USER");
    //grabs the info from the get body
    const newUser = req.body.newUser;
    
    for (let i = 0; i < userArray.length; i++){
        if (newUser == userArray[i]){
            res.send('<h1>User Already Added<h1>')
        }else{
            userArray.push(newUser);
        }
    }
   
    //this was new after you add the user you go back to the page original page
    res.redirect('/ta02');
};


exports.postTeam02RemoveUser = (req, res, next) => {
    const rmvUser = req.body.rmvUser;

    // Splice method removes from a const array
    const index = userArray.indexOf(rmvUser);
    if (index !== -1 ) {
        userArray.splice(index, 1);
    }

    if (index !== rmvUser){
        res.send('<h1>User must be added before they can be removed<h1>')
    }

   //this was new after you add the user you go back to the page original page
    res.redirect('/ta02');
}; 


exports.getTeam02 = (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        users: userArray,
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 








