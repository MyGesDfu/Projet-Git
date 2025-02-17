# Projet Git

Ce projet a pour objectif de fournir une plateforme pour la gestion des configurations de projet Git, avec une attention particulière à l'intégration de l'interopérabilité entre différents outils de développement et de déploiement.

## Technologies utilisées

- **React** : pour le développement de l'interface utilisateur.
- **Node.js** : pour le côté serveur et l'intégration des dépendances.
- **ESLint** : pour le linting et la qualité du code.
- **GitHub Actions** : pour les pipelines d'intégration continue.

## Installation

Pour cloner et configurer le projet localement, suivez ces étapes :

```bash
git https://github.com/MyGesDfu/Projet-Git.git
cd Projet-Git
npm install
npm start
npx husky init
```

Cela démarrera le serveur local pour tester l'application dans un environnement de développement.

## Tests

Pour exécuter les tests du projet, utilisez la commande suivante :

```bash
npm test
```

Cela exécutera les tests unitaires et d'intégration.

## Linter

Le projet utilise ESLint pour maintenir un code propre et cohérent. Pour vérifier le code avec ESLint, lancez :

```bash
npm run lint
```

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez proposer des améliorations ou ajouter des fonctionnalités, consultez le fichier `CONTRIBUTING.md` pour connaître la procédure de contribution.

## Licence

Ce projet est sous licence MIT - consultez le fichier `LICENSE` pour plus de détails.