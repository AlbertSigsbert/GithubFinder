class UI{
    constructor() {
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }

    showProfile(user){
         this.profile.innerHTML = `
         <figure class="profile-card md:flex bg-gray-300 rounded-xl p-8 md:p-0">
         <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="${user.avatar_url}" alt="" width="384" height="512">
         <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
           <div>
            <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
              <span class="mr-2">Public Repos:</span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${user.public_repos}</span>
            </button>
            <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
              <span class="mr-2">Followers: </span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${user.followers}</span>
            </button>
            <button class="h-10 px-5 my-4 md:my-0 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
              <span class="mr-2">Following: </span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${user.following}</span>
            </button>
           </div>
           <figcaption class="font-medium">
             <div class="text-2xl text-cyan-600">
               ${user.name}
             </div>
             <div class="text-gray-500 pb-2">
             ${user.location}
             </div>
             <button class="h-8 px-4  transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600">
               <a href="${user.html_url}" target="_blank" class="text-white text-lg font-medium">View Profile</a>
            </button>
           </figcaption>
         </div>
       </figure>

       <div>
         <h1 class= "py-4 text-4xl font-bold">Latest Repos</h1>
      </div>
         `;
        
    }

    showRepos(repos)
    {
      let output = '';

      repos.forEach(repo => {
        output += `
        <div class="pt-4 md:p-4 px-8 md:flex md:justify-between md:items-center py-1 border-2 md:text-left space-y-4">
          <div>
            <a href="${repo.html_url}" target="_blank" class="text-blue-500 hover:underline hover:text-blue-700 text-2xl font-semibold">${repo.name}</a>
          </div>

          <div>
            <button class="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <span class="mr-2">Stars:</span>
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${repo.stargazers_count}</span>
           </button>
            <button class="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
              <span class="mr-2">Forks: </span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${repo.forks_count}</span>
            </button>
            <button class="h-8 px-4 my-4 md:my-0 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
              <span class="mr-2">Watchers: </span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">${repo.watchers_count}</span>
            </button>
          </div>
          
        </div>

        `;
        
      });

      this.repos.innerHTML = output;
    }

    //show Alert
    showAlert(msg, classes)
    {
      //Clear existing alert
      this.clearAlert();

      const div = document.createElement('div');

      div.classList = classes;

      div.appendChild(document.createTextNode(msg));


      const profile = document.querySelector('#profile');

      const profileCard = document.querySelector('.profile-card');

       profile.insertBefore(div, profileCard);

       setTimeout(() => {
           this.clearAlert();
       }, 2000);
    }

    clearAlert()
    {
      const currentAlert = document.querySelector('.alert');

      if (currentAlert) {
         currentAlert.remove();
      }
    }

    //clear Profile
    clearProfile()
    {
      this.profile.innerHTML = '';
    }

      //clear Repos
      clearRepos()
      {
        this.repos.innerHTML = '';
      }
}