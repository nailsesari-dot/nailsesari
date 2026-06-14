# Nailsesari — Site vitrine

Site vitrine premium pour nail artist, développé avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Installation rapide

### Prérequis
- Node.js 18.17+ ou 20+
- npm ou yarn ou pnpm

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer en développement

```bash
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

### 3. Build production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

Tout le contenu modifiable est centralisé dans :

### `config/site.ts`
- Nom, tagline, description SEO
- **`bookingUrl`** : URL de votre outil de réservation (Calendly, Planity, Fresha…)
- Coordonnées : téléphone, email, adresse
- Horaires d'ouverture
- Liens réseaux sociaux

### `data/services.ts`
- Toutes les prestations (nom, description, durée, prix, icône)

### `data/testimonials.ts`
- Avis clients (nom, note, commentaire, service, date)

### `data/gallery.ts`
- Photos galerie (src, alt, catégorie, label)

---

## 📸 Ajouter des images

Placez vos images dans `public/images/gallery/` en les nommant :
```
gallery-1.jpg, gallery-2.jpg, gallery-3.jpg...
```

Puis décommentez le composant `<Image>` dans `components/Gallery.tsx`.

---

## 🔗 Connecter votre outil de réservation

Dans `config/site.ts`, remplacez :
```ts
bookingUrl: "https://calendly.com/nailsesari"
```

Par votre URL réelle (Calendly, Planity, Fresha, SimplyBook.me, Cal.com…).

Pour activer le widget iframe sur `/reservation`, décommentez le bloc `<iframe>` dans `app/reservation/page.tsx`.

---

## 📧 Activer l'envoi d'emails (formulaire de contact)

Dans `app/api/contact/route.ts`, choisissez et configurez votre service :

**Option A — Resend (recommandé)**
```bash
npm install resend
```
Ajoutez `RESEND_API_KEY=re_...` dans `.env.local`

**Option B — EmailJS, Formspree, Brevo**
Suivez la documentation du service choisi.

---

## 🌐 Déployer sur Vercel

### Méthode 1 — Interface Vercel (recommandée)

1. Poussez le projet sur GitHub / GitLab / Bitbucket
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez **"New Project"** → importez votre repo
4. Vercel détecte automatiquement Next.js
5. Ajoutez vos variables d'environnement si nécessaire
6. Cliquez **Deploy** ✓

### Méthode 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
# Suivez les instructions
vercel --prod  # pour déployer en production
```

### Variables d'environnement Vercel

Dans le dashboard Vercel → Settings → Environment Variables :
```
RESEND_API_KEY=re_votre_clé  (si vous utilisez Resend)
```

---

## 📁 Architecture du projet

```
nailsesari/
├── app/
│   ├── page.tsx                    # Page d'accueil
│   ├── layout.tsx                  # Layout global (Header, Footer, polices, SEO)
│   ├── globals.css                 # Styles globaux, texture léopard, variables CSS
│   ├── prestations/page.tsx
│   ├── galerie/page.tsx
│   ├── reservation/page.tsx
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── politique-confidentialite/page.tsx
│   └── api/contact/route.ts        # API route formulaire de contact
│
├── components/
│   ├── Header.tsx                  # Navigation + menu burger mobile
│   ├── Hero.tsx                    # Section hero
│   ├── About.tsx                   # À propos
│   ├── Services.tsx                # Prestations (cards)
│   ├── Gallery.tsx                 # Galerie avec filtres
│   ├── Testimonials.tsx            # Avis clients
│   ├── BookingSection.tsx          # Section réservation
│   ├── ContactSection.tsx          # Formulaire de contact
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionTitle.tsx
│
├── data/
│   ├── services.ts                 ← Modifier vos prestations ici
│   ├── testimonials.ts             ← Modifier vos avis ici
│   └── gallery.ts                  ← Modifier votre galerie ici
│
├── config/
│   └── site.ts                     ← Configuration principale du site
│
├── lib/
│   └── utils.ts
│
└── public/
    ├── images/gallery/             ← Vos photos de nail art ici
    └── textures/
```

---

## 🎨 Identité visuelle

| Élément | Valeur |
|---------|--------|
| Fond principal | `#0F0B12` |
| Fond secondaire | `#151018` |
| Violet profond | `#5B2B63` |
| Mauve | `#A05C8A` |
| Rose poudré | `#D9A4C7` |
| Accent rose | `#E88BC8` |
| Police titres | Cormorant Garamond (Google Fonts) |
| Police corps | Outfit (Google Fonts) |

La texture léopard violet/mauve est générée en CSS (SVG inline) — pas besoin de fichier externe.

---

## 📝 SEO & Metadata

- Title et meta description configurables dans `config/site.ts`
- Open Graph et Twitter Cards préconfigurés
- Structure H1/H2/H3 propre sur toutes les pages
- Attributs `alt` sur toutes les images
- `robots: noindex` sur mentions légales et politique de confidentialité

---

Développé avec ❤️ pour Nailsesari
