export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
  popular?: boolean;
  bookingUrl?: string; // ← ajoute cette ligne
}

export const services: Service[] = [

  {
    id: "pose-gel",
    name: "Pose Gel",
    description:
      "Pose de gel UV pour des ongles naturels sublimés, résistants et brillants sur la durée.",
    duration: "2h00",
    price: "À partir de 45 €",
    icon: "💅",
    popular: true,
    bookingUrl: "https://calendly.com/nailsesari/30min", // ← ajoute cette ligne
  },
  {
    id: "pedicure",
    name: "Pédicure",
    description:
      "Pose de gel UV pour des ongles naturels sublimés, résistants et brillants sur la durée.",
    duration: "2h00",
    price: "À partir de 45 €",
    icon: "💅",
    popular: true,
    bookingUrl: "https://calendly.com/nailsesari/pedicure", // ← ajoute cette ligne
  },
  {
    id: "gainage",
    name: "Gainage",
    description:
      "Renforcement de l'ongle naturel par une fine couche de gel pour plus de solidité sans longueur ajoutée.",
    duration: "2h00",
    price: "À partir de 40 €",
    icon: "💎",
    bookingUrl: "https://calendly.com/nailsesari/gainage", // ← ajoute cette ligne
  },
  {
    id: "nail-art",
    name: "Nail Art",
    description:
      "Créations artistiques sur mesure : dégradés, chromé, floraux, géométriques, nail art 3D…",
    duration: "Variable",
    price: "À partir de 50 €",
    icon: "🎨",
    popular: true,
    bookingUrl: "https://calendly.com/nailsesari/nouvelle-reunion", // ← ajoute cette ligne
  },
  {
    id: "remplissage",
    name: "Remplissage",
    description:
      "Entretien de votre pose gel pour combler la repousse et raviver l'éclat de vos ongles.",
    duration: "2h00",
    price: "À partir de 45 €",
    icon: "🔄",
    bookingUrl: "https://calendly.com/nailsesari/remplissage", // ← ajoute cette ligne
  },
  {
    id: "depose",
    name: "Dépose",
    description:
      "Retrait soigneux du gel ou des extensions sans abîmer l'ongle naturel, suivi d'un soin.",
    duration: "30 min",
    price: "À partir de 15 €",
    icon: "🌿",
    bookingUrl: "https://calendly.com/nailsesari/depose", // ← ajoute cette ligne
  },
  {
    id: "retouche",
    name: "Retouche",
    description:
      "Réparation d'un ongle cassé ou retouche ponctuelle pour retrouver un résultat parfait.",
    duration: "15 min",
    price: "À partir de 10 €",
    icon: "🔧",
    bookingUrl: "https://calendly.com/nailsesari/retouche", // ← ajoute cette ligne
  },
];
