# DevOps TP1

This work is the first of my DevOps adventure.

tuto lancement :

```
cd .\DevOps\TP1\
npx tsc
node .\build\index.js
```

Concrètement, comment ca marche ?

En résumé, ce serveur HTTP écoute les requêtes entrantes, vérifie si la méthode est GET et si l'URL est "/ping". Si tel est le cas, il renvoie les en-têtes de la requête au format JSON. Pour toutes les autres requêtes, il renvoie une réponse 404. Le port d'écoute est configurable via la variable d'environnement PING_LISTEN_PORT. 