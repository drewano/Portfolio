# Portfolio de Andrew Assef - Développeur en Intelligence Artificielle

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet a été conçu pour être une vitrine dynamique et interactive de mes compétences, projets et expériences en tant que développeur spécialisé en Intelligence Artificielle. Il est développé avec [Astro](https://astro.build/), [React](https://react.dev/) et [Tailwind CSS](https://tailwindcss.com/).

**[Visiter le portfolio](https://drewano.me/)** 

![Aperçu du Portfolio](https://github.com/drewano/Portfolio/blob/main/Capture%20d'%C3%A9cran%202025-06-08%20161943.png)

## ✨ Fonctionnalités Principales

Ce portfolio n'est pas une simple page statique. Il intègre plusieurs fonctionnalités pour créer une expérience utilisateur engageante et démontrer mes compétences techniques.

### 🚀 Animations et Interactivité
- **Animations Modernes :** Utilisation de composants React pour des animations fluides comme l'effet "glitch" sur les lettres et un "mur de logos" défilant.
- **Effet Machine à Écrire :** Mon titre principal "Intelligence Artificielle" s'anime avec un effet de frappe pour capter l'attention.
- **Image de Profil Interactive :** Cliquez sur ma photo de profil pour basculer vers une version en art ASCII, un petit clin d'œil à la culture geek.
- **Accordion de Compétences :** Une liste de compétences interactive et élégante qui permet de naviguer facilement entre mes domaines d'expertise.

### ❤️ Bouton "Like" en Temps Réel
- Une fonctionnalité unique pour un portfolio : un bouton "Like" persistant connecté à une base de données **Firebase Firestore**.
- Les visiteurs peuvent laisser une appréciation, et le compteur se met à jour en temps réel pour tous les utilisateurs, sans avoir besoin de recharger la page.

### ⚙️ Carrousel de Projets
- Une section "Projets" dynamique et responsive construite avec **Swiper.js**.
- Elle permet une navigation tactile et fluide à travers mes différents projets, chacun présenté avec une image, une description et un lien vers son dépôt GitHub.

### ⚛️ Composants React dans Astro
- Le projet tire parti de la puissance d'Astro pour la performance (site statique rapide) tout en utilisant React pour les composants nécessitant une interactivité complexe (bouton like, liste de compétences, etc.).

### 📱 Responsive Design
- Entièrement conçu avec Tailwind CSS pour une expérience optimale sur tous les appareils, du mobile au grand écran de bureau.
- La navigation est adaptée aux petits écrans avec une barre de navigation fixe en bas de l'écran.

### 🐳 Prêt pour le Déploiement
- Le projet est entièrement **containerisé avec Docker**, facilitant le déploiement et la reproductibilité de l'environnement.
- Un pipeline **CI/CD** est configuré avec **GitHub Actions** pour un déploiement automatisé sur **Azure Static Web Apps**.

## 🛠️ Technologies Utilisées

| Catégorie                | Technologies                                                              |
| ------------------------ | ------------------------------------------------------------------------- |
| **Frontend**             | Astro, React, TypeScript, Tailwind CSS, Swiper.js                         |
| **Backend / Services**   | Firebase (Firestore), Formspree                                           |
| **Outils et Déploiement**| Docker, Git, GitHub Actions, Azure Static Web Apps, Nginx                   |
| **Langages**             | TypeScript, JavaScript, Python, Java                                      |


## 🚀 Installation et Démarrage Local

Pour exécuter ce projet sur votre machine locale, suivez ces étapes :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/drewano/portfolio.git
    cd portfolio
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurez les variables d'environnement :**
    Créez un fichier `.env` à la racine du projet en vous basant sur le modèle ci-dessous. Vous aurez besoin de vos propres clés Firebase.
    ```env
    # Clés Firebase
    FIREBASE_API_KEY="VOTRE_API_KEY"
    PUBLIC_FIREBASE_AUTH_DOMAIN="VOTRE_AUTH_DOMAIN"
    PUBLIC_FIREBASE_PROJECT_ID="VOTRE_PROJECT_ID"
    PUBLIC_FIREBASE_STORAGE_BUCKET="VOTRE_STORAGE_BUCKET"
    PUBLIC_FIREBASE_MESSAGING_SENDER_ID="VOTRE_SENDER_ID"
    PUBLIC_FIREBASE_APP_ID="VOTRE_APP_ID"
    ```

4.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

Le site sera alors accessible à l'adresse `http://localhost:4321`.

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
