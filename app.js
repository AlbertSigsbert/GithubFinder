const github = new Github;

//instatiate UI
const ui = new UI;

const searchUser = document.getElementById('user-input');

//Add event listener
searchUser.addEventListener('keyup', e => {

    //Get input text
    const userInput = e.target.value;

     if (userInput !== '') {
         github.getUser(userInput)
         .then(data =>{
             if (data.profile.message === 'Not Found') {
                 ui.showAlert('User not Found.','alert flex items-center bg-red-500 text-white text-sm font-bold px-4 mb-3 py-3')
             }
             else{
                 //show profile
                 ui.showProfile(data.profile);

                 //Show Repos
                 ui.showRepos(data.repos);
                
                
             }
         })
     }
     else{
        ui.clearProfile();
        ui.clearRepos();
     }

    e.preventDefault();
})