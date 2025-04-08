const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    }
};

export { user };