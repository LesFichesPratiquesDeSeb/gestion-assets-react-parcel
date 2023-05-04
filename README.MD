# Gestion des assets avec React et Parcel

## Why ?

On a l'habitude, dans nos applications Front-End de gérer les assets (images, fonts, ...) avec un répertoire indépendant la plupart du temps nommé `public` ou `assets`. C'est une pratique courante et qui a fait ses preuves.

Toutefois, cette gestion avec un projet bundlé sous Parcel et utilisant la librairie React n'est pas aussi simple qu'il n'y parait. En effet, Parcel ne permet pas de gérer les assets de la même manière que Webpack. Il faut donc trouver une solution alternative.

## Thansk the community

J'ai trouvé une solution sur le forum de [StackOverflow](https://stackoverflow.com/questions/64713341/how-do-i-include-asset-files-with-parcel-js) qui m'a permis de résoudre mon problème. Je vous propose donc de vous expliquer comment j'ai procédé.

Et pour celà, on peut remercier la possibilité d'ajouter des plugin à notre bundler et la communauté qui à pensé à mettre en place un plugin pour gérer les assets avec Parcel.

## How it works ?

En réalité, grâce à ce petit plugin Parcel sera en mesure de copier le contenu de notre répertoire `static` dans le répertoire de build. C'est tout simple, mais il fallait y penser. 
On va donc installer et mettre en oeuvre `parcel-reporter-static-files-copy` pour gérer nos assets.

### Installation

```bash
npm i -D parcel-reporter-static-files-copy

# ou

yarn add -D parcel-reporter-static-files-copy
```

### Configuration

On va ensuite ajouter un fichier `.parcelrc` à la racine de notre projet. Ce fichier va nous permettre de configurer Parcel et d'ajouter notre plugin.

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

Enfin on va devoir créer notre répertoire `static` à la racine de notre projet et y ajouter nos assets. Attention, il faut bien nommer le répertoire `static` sinon le plugin ne fonctionnera pas.

### Utilisation

On pourra maintenant faire appel à nos assets dans notre application React sans avoir à importer le fichier dans notre composant. On pourra donc faire appel à nos assets de la manière suivante :

```jsx

// On part ici du principe que notre répertoire static contient un répertoire images et que notre logo s'y trouve.
<img src="images/logo.png" alt="Logo" />
```

Et voilà, c'est tout simple et ça fonctionne parfaitement. On peut donc gérer nos assets de la même manière qu'avec Webpack.
