# DeliTest

Ce test technique consistait a avoir une WebApp avec 2 boutons qui affiche chacun un popup différent.
Le popup représente une fiche restaurant avec des information global sur le restorant comme sont nom et ça localisation.
Une API PHP fait le lien entre la base de donner `Users` et les scripts JAvaScript (Ajax).

Dans le dossier `server` vous pourez trouver :

Une mini api servant au SignIn/LogIn de la WebApp.
Cette api a pour role de faire le lien entre le script Ajax/JavaScript du client et la base de donné MySQL.

Dans le dossier `client` vous pourez trouver :

- Les fichier CSS de la WebApp,
- Les fichier JS servant a la gestion des boutons, l'affichage et la fermeture des popups, la gestions des requêtes Ajax.
- Les images utiliser dans la WebApp,
- Et les pages HTML de l'acceuil et SignIn/LogIn.

Pour tester le code je vous invite a lancer la page `index.html`.
Etant donner que l'utilisation d'un server est requise pour l'api je vous conseilles un server Apache avec MySQL.
L'utilisation de MySQL a été choisi principalement par mon niveau de maitrise de cette BDD.

Dans le dossier `tables` vous pourrez trouver:

- Une image du schéma des tables sql,
- Un script d'automitisation qui va créer une base de donné MySQL ainsi que les tables utiliser par l'api (ce script créer aussi l'utilisateur nécessaire a l'api).
