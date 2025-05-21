const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada"}</p>
                                            <br>
                                            <p>👥 Seguidores ${user.followers ?? "O usuário não tem seguidores"}</p>
                                            <p>👤 Seguindo: ${user.following ?? "O usuário não segue ninguém"}</p>
                                        </div>
                                      </div>`

        if (user.repositories.length > 0) {
            let repositoriesItens = '';
            user.repositories.forEach(repo => {
                repositoriesItens += `<li>
                                        <a href="${repo.html_url}" target="_blank">
                                            <p>${repo.name ?? "Repositório sem nome"}</p>
                                            <span>🍴${repo.forks_count ?? "Sem forks"}</span>
                                            <span>⭐${repo.stargazers_count ?? "Sem estrelas"}</span>
                                            <span>👀${repo.watchers_count ?? "Sem visualização"}</span>
                                            <span>🧑‍💻${repo.language ?? "Sem linguagem"}</span>
                                        </a>
                                      </li>`
            });

            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>O usuário não tem repositórios</h2>
                                            </div>`
        };

        if (user.events.length > 0) {
            let eventsItens = '';
            user.events.forEach(element => {
                if (element.type === 'PushEvent') {
                    eventsItens += `<li>
                                        <p>
                                            <span>${element.repo.name}</span> - ${element.payload.commits[0].message ?? "Sem mensagem de commit"}
                                        </p>
                                    </li>`
                } else if (element.type === 'CreateEvent') {
                    eventsItens += `<li>
                                        <p>
                                            <span>${element.repo.name}</span> - Criado um ${element.payload.ref_type}
                                        </p>
                                    </li>`
                };
            });

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