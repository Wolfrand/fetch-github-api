const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada"}</p>
                                            <br>
                                            <p>👥 Seguidores: ${user.followers}</p>
                                            <p>👤 Seguindo: ${user.following}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                    <a href="${repo.html_url}" target="_blank">
                                        ${repo.name}<br>
                                        <span>🍴${repo.forks_count}</span>
                                        <span>⭐${repo.stargazers_count}</span>
                                        <span>👀${repo.watchers_count}</span>
                                        <span>🧑‍💻${repo.language}</span>
                                    </a>
                                </li>`
            console.log(repo)
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>O usuário não tem repositórios</h2>
                                            </div>`
        };

        let eventsItens = ''
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItens += `<li><p><span>${event.repo.name}</span> - ${event.payload.commits[0].message ?? "Sem mensagem de commit"}</p></li>`
            } else if (event.type === 'CreateEvent') {
                eventsItens += `<li><p><span>${event.repo.name}</span> - Sem mensagem de commit</p></li>`
            };
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>O usuário não tem eventos</h2>
                                            </div>`
        };

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
};

export { screen };