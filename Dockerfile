# syntax=docker/dockerfile:1

# Étape de build
FROM node:21-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de projet
COPY package*.json ./
COPY . .

# Installer les dépendances et construire le projet
RUN npm ci
RUN npm run build

# Étape de production avec Nginx
FROM nginx:alpine

# Copier la configuration Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
