# TP2

Ce projet est un exemple de configuration d'un conteneur Docker pour une application Node.js simple. Il inclut un serveur HTTP minimal qui répond à une requête GET à l'URL "/ping" en renvoyant les en-têtes de la requête au format JSON.

## I- Comment fonctionne le projet

### 1. **Dockerfile** : 

Le fichier Dockerfile contient les instructions pour la création de l'image Docker. Il utilise l'image de base Node.js et copie le code source de l'application dans le conteneur. Il expose le port 3000 pour le serveur.

### 2. **Application Node.js** : 

L'application Node.js est très simple et écoute les requêtes HTTP sur le port 3000. Lorsqu'elle reçoit une requête GET à "/ping", elle renvoie les en-têtes de la requête au format JSON.

## II- Comment lancer le projet

Pour exécuter ce projet, suivez les étapes suivantes :

### 1. Assurez-vous d'avoir Docker installé sur votre système.

Si ce n'est pas le cas je vous invite à consulter la documentation

### 2. Clonez ce référentiel sur votre machine :

```
https://github.com/Arthurdul/DevOps/tree/main/TP2
```

### 3. Accédez au répertoire du projet :

```
cd .\TP2\
```


### 4. Construisez l'image Docker en utilisant la commande suivante :

```
docker build --build-arg BUILDKIT_INLINE_CACHE=1 -t tp2_image .
```

### 5. Exécutez le conteneur Docker en utilisant la commande suivante :

```
docker run tp2_image
```


### 6. Votre application Node.js est maintenant accessible à l'adresse `http://localhost:8080`. 

Vous pouvez accéder à l'URL `/ping` pour obtenir une réponse JSON contenant les en-têtes de la requête.

### 7. Pour arrêter le conteneur, utilisez `Ctrl+C`.

C'est tout ! Vous avez maintenant votre application Node.js en cours d'exécution dans un conteneur Docker.

## III- Les vulnérabilités

[Voir les vulnérabilités du site](https://github.com/Arthurdul/DevOps/blob/main/TP2/vuln.txt)