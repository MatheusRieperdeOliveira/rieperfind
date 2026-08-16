# rieperfind

eae, eu sou o Matheus Rieper.

criei o **rieperfind** porque eu canso de ficar abrindo aba de perfil no GitHub só pra ver um número de follower e uma bio. queria algo meu: uma tela que parecesse um terminal, digitasse o nick, e o perfil aparecesse na hora.

então fiz isso. um console. você manda o username, ele puxa da API e monta um whois. se curtir o dump, exporta como imagem e pronto.

**Veja a aplicação aqui** [scan.rieper.tech](https://scan.rieper.tech)

```
scan@rieperfind:~$ seu-usuario
```

<p align="center">
  <img src="./docs/demo.gif" alt="rieperfind em ação" width="900" />
</p>

tem tema claro e escuro (`theme --light` / `theme --dark`), borda neon, fonte de terminal. é o visual que eu gosto de usar.

## como rodar

se tiver Docker, é só isso:

```bash
docker compose up -d --build
```

depois abre http://localhost:8080

se preferir no node:

```bash
npm install
npm run dev
```

## o que eu coloquei

prompt pra buscar, log do scan, dump do user (nome, login, repos, followers, essas paradas) e um `export --image` embaixo. o resto é React, Vite e um container nginx.

feito por mim, [Matheus Rieper](https://github.com/MatheusRieperdeOliveira).
