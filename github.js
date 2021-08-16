class Github{
    constructor()
    {
        this.clientID = '0ec7c9c3ccec31d7e849';
        this.clientSecret = 'b4bd4401cbdfb3ee08d193ff145f92befaa45084';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //Get user profile
    async getUser(user)
    {
        try{
            const getUserProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

            const getUserRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

             const profile = await getUserProfile.json();

             const repos = await getUserRepos.json();
            
             return {
                profile,
                repos
            }
        }
        catch(e)
        {
          return e;

        }
      
    }
}