class Github{
    constructor()
    {
        this.clientID = '0ec7c9c3ccec31d7e849';
        this.clientSecret = 'b4bd4401cbdfb3ee08d193ff145f92befaa45084';
    }

    //Get user profile
    async getUser(user)
    {
        const getUserProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

       const profile= await getUserProfile.json();

       return {
           profile
       }
    }
}