export interface Promotion {
  title: string;
  icon: string;
  desc: string;
  link: string;
}

export const featuredPromotions: Promotion[] = [
  {
    title: "Experiences",
    icon: "🎬",
    desc: "IMAX, 4DX & VIP Cinemas",
    link: "/experience"
  },
  {
    title: "Membership",
    icon: "👑",
    desc: "Loyalty Programs & Perks",
    link: "/membership"
  },
  {
    title: "Offers & Gifts",
    icon: "🎁",
    desc: "Special Deals & Gift Cards",
    link: "/gifts"
  },
  {
    title: "Family",
    icon: "👨‍👩‍👧‍👦",
    desc: "Family Packages & Kids Shows",
    link: "/family"
  }
];