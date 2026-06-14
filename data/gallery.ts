export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "nail-art" | "gel" | "manucure" | "gainage";
  label: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/images/gallery/img_bru_1.jpg",
    alt: "Nail art floral violet et rose sur fond nude",
    category: "nail-art",
    label: "Floral violet",
  },
  {
    id: "2",
    src: "/images/gallery/img_bru_2.jpg",
    alt: "Pose gel rose poudré avec accent chromé",
    category: "gel",
    label: "Gel chromé rosé",
  },
  {
    id: "3",
    src: "/images/gallery/img_bru_3.jpg",
    alt: "Nail art géométrique mauve et or",
    category: "nail-art",
    label: "Géométrique mauve",
  },
  {
    id: "4",
    src: "/images/gallery/img_bru_4.jpg",
    alt: "Manucure french nude élégante",
    category: "manucure",
    label: "French nude",
  },
  {
    id: "5",
    src: "/images/gallery/img_bru_5.jpg",
    alt: "Pose gel prune avec nail art floral 3D",
    category: "gel",
    label: "Prune 3D floral",
  },
  {
    id: "6",
    src: "/images/gallery/img_bru_6.jpg",
    alt: "Nail art marbre violet et argent",
    category: "nail-art",
    label: "Marbre violet",
  },
  {
    id: "7",
    src: "/images/gallery/img_bru_7.jpg",
    alt: "Gainage naturel avec shimmer rose",
    category: "gainage",
    label: "Gainage shimmer",
  },
  {
    id: "8",
    src: "/images/gallery/img_bru_8.jpg",
    alt: "Nail art abstrait rose et mauve",
    category: "nail-art",
    label: "Abstrait rosé",
  },
  {
    id: "9",
    src: "/images/gallery/img_bru_9.jpg",
    alt: "Pose gel lilas avec détails dorés",
    category: "gel",
    label: "Lilas et or",
  },
  {
    id: "9",
    src: "/images/gallery/bru_img_1.jpg",
    alt: "Pose gel lilas avec détails dorés",
    category: "gel",
    label: "Lilas et or",
  },
  {
    id: "9",
    src: "/images/gallery/bru_img_2.jpg",
    alt: "Pose gel lilas avec détails dorés",
    category: "gel",
    label: "Lilas et or",
  },
  {
    id: "9",
    src: "/images/gallery/bru_img_3.jpg",
    alt: "Pose gel lilas avec détails dorés",
    category: "gel",
    label: "Lilas et or",
  },
];

export const galleryCategories = [
  { id: "all", label: "Tous" },
  { id: "nail-art", label: "Nail Art" },
  { id: "gel", label: "Pose Gel" },
  { id: "manucure", label: "Manucure" },
  { id: "gainage", label: "Gainage" },
];