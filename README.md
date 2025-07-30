# ESIHUB - Everything in one place

[![CI/CD](https://github.com/your-username/esihub/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/your-username/esihub/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2+-black.svg)](https://nextjs.org/)

La plateforme étudiante officielle de l'École des Sciences de l'Information (ESI) - Maroc.

## 🚀 Fonctionnalités

- **DOCESI** - Accès aux cours et documents pédagogiques
- **NOTESI** - Consultation des notes en temps réel
- **REPORTESI** - Collection de rapports de stage et PFE
- **LOGOESI** - Générateur de logo ESI haute qualité
- **Interface moderne** - Design responsive et accessible
- **Authentification sécurisée** - Intégration Microsoft Azure AD
- **Performance optimisée** - Score Lighthouse > 90
- **PWA Ready** - Installation sur mobile et desktop

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI
- **Authentication**: NextAuth.js, Microsoft Azure AD
- **Database**: PostgreSQL (recommandé)
- **Monitoring**: Sentry, Google Analytics
- **Deployment**: Docker, Vercel, Azure
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions

## 📋 Prérequis

- Node.js 20+
- npm ou yarn
- PostgreSQL (pour la production)
- Compte Microsoft Azure AD (pour l'authentification)

## 🏃‍♂️ Démarrage rapide

### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/your-username/esihub.git
cd esihub

# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local avec vos valeurs

# Lancer en mode développement
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### Avec Docker

```bash
# Construire l'image
npm run docker:build

# Lancer le conteneur
npm run docker:run
```

## ⚙️ Configuration

### Variables d'environnement

Copiez `.env.local` et configurez les variables suivantes :

```env
# Application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=ESIHUB
NEXT_PUBLIC_APP_VERSION=1.0.0

# Base de données
DATABASE_URL=postgresql://username:password@localhost:5432/esihub

# Authentification
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
AZURE_AD_CLIENT_ID=your-azure-client-id
AZURE_AD_CLIENT_SECRET=your-azure-client-secret
AZURE_AD_TENANT_ID=your-azure-tenant-id

# Monitoring (optionnel)
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
SENTRY_DSN=your-sentry-dsn
```

### Configuration Azure AD

1. Créer une application dans Azure Portal
2. Configurer les URLs de redirection :
   - `http://localhost:3000/api/auth/callback/azure-ad` (dev)
   - `https://your-domain.com/api/auth/callback/azure-ad` (prod)
3. Récupérer les identifiants et les ajouter aux variables d'environnement

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests avec couverture
npm run test:coverage

# Tests en mode watch
npm run test:watch

# Linting
npm run lint

# Vérification des types
npm run type-check
```

## 📦 Déploiement

### Déploiement automatique (recommandé)

Le projet utilise GitHub Actions pour le déploiement automatique :

1. **Push sur `develop`** → Déploiement sur l'environnement de staging
2. **Push sur `main`** → Déploiement sur l'environnement de production

### Déploiement manuel

```bash
# Construction pour la production
npm run build

# Démarrage en production
npm start

# Ou utiliser le script de déploiement
./scripts/deploy.sh
```

### Déploiement avec Docker

```bash
# Construction de l'image
docker build -t esihub .

# Lancement du conteneur
docker run -p 3000:3000 --env-file .env.production esihub
```

### Déploiement sur Vercel

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

## 🔍 Monitoring et Performance

### Lighthouse CI

Les tests de performance sont automatiquement exécutés sur chaque déploiement :

- **Performance** : Score > 80
- **Accessibilité** : Score > 90  
- **Bonnes pratiques** : Score > 90
- **SEO** : Score > 90

### Monitoring d'erreurs

- **Sentry** : Suivi des erreurs en temps réel
- **Health Check** : Endpoint `/api/health` pour le monitoring
- **Analytics** : Google Analytics (optionnel)

## 🤝 Contribution

### Workflow de développement

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/amazing-feature`)
3. **Commit** les changements (`git commit -m 'Add amazing feature'`)
4. **Push** sur la branche (`git push origin feature/amazing-feature`)
5. **Ouvrir** une Pull Request

### Standards de code

- **ESLint** : Configuration Next.js avec TypeScript
- **Prettier** : Formatage automatique du code
- **Husky** : Git hooks pour la qualité du code
- **Conventional Commits** : Format standardisé des messages de commit

### Tests requis

- Tous les nouveaux composants doivent avoir des tests
- Couverture de code minimum : 70%
- Tests d'accessibilité obligatoires

## 📄 API

### Endpoints principaux

- `GET /api/health` - Health check de l'application
- `GET /api/auth/*` - Endpoints d'authentification NextAuth
- `GET /api/courses` - Récupération des cours
- `GET /api/grades` - Récupération des notes

### Documentation API

La documentation complète de l'API est disponible sur `/api/docs` (en développement).

## 🔐 Sécurité

- **Headers de sécurité** : CSP, HSTS, X-Frame-Options
- **Authentification** : Microsoft Azure AD + NextAuth.js
- **Validation** : Validation des données côté client et serveur
- **Rate limiting** : Protection contre les attaques DDoS
- **HTTPS obligatoire** en production

## 📊 Performance

### Optimisations implémentées

- **Code splitting** automatique avec Next.js
- **Image optimization** avec Next.js Image
- **Bundle analysis** avec `npm run analyze`
- **Compression** gzip/brotli
- **Caching** intelligent des ressources statiques
- **Lazy loading** des composants

### Métriques cibles

- **First Contentful Paint** : < 1.8s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

## 🌍 Internationalisation

Support prévu pour :
- **Français** (par défaut)
- **Arabe** (à venir)
- **Anglais** (à venir)

## 📱 PWA (Progressive Web App)

L'application peut être installée comme une app native sur :
- **Android** (Chrome, Edge, Samsung Internet)
- **iOS** (Safari 14+)
- **Desktop** (Chrome, Edge, Firefox)

## 🆘 Support

### Canaux de support

- **Issues GitHub** : [github.com/your-username/esihub/issues](https://github.com/your-username/esihub/issues)
- **Email** : support@esihub.com
- **Discord** : [Serveur Discord ESI](https://discord.gg/esi)

### FAQ

**Q: Comment récupérer mon mot de passe ?**
A: L'authentification se fait via Microsoft Azure AD de l'ESI. Contactez le service informatique de l'école.

**Q: Mes notes ne s'affichent pas**
A: Vérifiez votre connexion et assurez-vous d'être connecté avec votre compte ESI.

**Q: Comment signaler un bug ?**
A: Créez une issue sur GitHub ou contactez-nous par email.

## 📚 Ressources

- **Documentation Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Documentation Tailwind** : [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Documentation TypeScript** : [typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **ESI Site officiel** : [esi.ac.ma](https://esi.ac.ma)

## 👥 Équipe

- **[Khalid KASSI](https://www.linkedin.com/in/Khalid9ASSI)** - Créateur & Lead Developer
- **[Achraf SANI](mailto:achraf.sani@esi.ac.ma)** - Mainteneur
- **[Hamza BOUALI](https://www.linkedin.com/in/hamza-bouali/)** - Mainteneur

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎯 Roadmap

### Version 1.1 (Q2 2025)
- [ ] Application mobile native (React Native)
- [ ] Mode hors ligne
- [ ] Notifications push
- [ ] Chat étudiant

### Version 1.2 (Q3 2025)
- [ ] Intégration calendrier académique
- [ ] Système de réservation (salles, matériel)
- [ ] Forums de discussion par matière
- [ ] Suivi des absences automatique

### Version 2.0 (Q4 2025)
- [ ] Intelligence artificielle pour recommandations
- [ ] Tableau de bord analytique pour professeurs
- [ ] API publique pour développeurs
- [ ] Marketplace d'extensions

---

<div align="center">
  <p><strong>Made with ❤️ by the ESIHUB team</strong></p>
  <p>© 2025 ESIHUB - École des Sciences de l'Information</p>
</div>
