export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Camille R.",
    rating: 5,
    comment:
      "Un résultat absolument magnifique ! Nailsesari a une créativité incroyable et une dextérité hors pair. Mes ongles n'ont jamais été aussi beaux. Je recommande les yeux fermés !",
    service: "Nail Art",
    date: "Novembre 2024",
    initials: "CR",
  },
  {
    id: "2",
    name: "Sophie M.",
    rating: 5,
    comment:
      "J'ai demandé une pose gel avec nail art floral, le résultat est spectaculaire. L'ambiance est très agréable, on se sent vraiment chouchoutée. Je reviens tous les mois !",
    service: "Pose Gel + Nail Art",
    date: "Octobre 2024",
    initials: "SM",
  },
  {
    id: "3",
    name: "Laura D.",
    rating: 5,
    comment:
      "Première visite pour un gainage et je suis conquise ! Travail soigné, propre et durable. Nailsesari prend vraiment soin de la santé de l'ongle naturel. Merci !",
    service: "Gainage",
    date: "Octobre 2024",
    initials: "LD",
  },
  {
    id: "4",
    name: "Inès B.",
    rating: 5,
    comment:
      "J'avais des ongles très abîmés et Nailsesari a fait des miracles. Elle m'a conseillée avec bienveillance et le résultat est naturel et élégant. Super expérience !",
    service: "Manucure",
    date: "Septembre 2024",
    initials: "IB",
  },
  {
    id: "5",
    name: "Jade F.",
    rating: 5,
    comment:
      "Le nail art en chromé violet est époustouflant ! J'ai reçu des compliments toute la semaine. Réservation facile, ponctualité parfaite. Je suis une cliente fidèle.",
    service: "Nail Art Chromé",
    date: "Septembre 2024",
    initials: "JF",
  },
  {
    id: "6",
    name: "Manon V.",
    rating: 5,
    comment:
      "Nailsesari sait exactement ce qu'on veut, même quand on ne sait pas trop comment l'expliquer ! Résultat impeccable à chaque fois. Ateliers créatifs en prime !",
    service: "Remplissage",
    date: "Août 2024",
    initials: "MV",
  },
];
