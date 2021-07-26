const github = new Github;
const searchUser = document.getElementById('user-input');

//Add event listener
searchUser.addEventListener('keyup', e => {

    //Get input text
    const userInput = e.target.value;

     if (userInput !== '') {
         github.getUser(userInput)
         .then(data =>{
             if (data.profile.message === 'Not Found') {
                 //Show alert
             }
             else{
                 //show profile
             }
         })
     }
     else{
         //Clear field
     }

    e.preventDefault();
})