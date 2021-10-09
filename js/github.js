import { GITHUB_CLIENT_ID } from "./apikey.js";
import { GITHUB_CLIENT_SECRET } from "./apikey.js";

export default class Github{
    constructor()
    {
        this.clientID = GITHUB_CLIENT_ID;
        this.clientSecret = GITHUB_CLIENT_SECRET;
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