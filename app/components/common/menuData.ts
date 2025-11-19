
import { Ship, Truck, Plane, Train, BarChart, Briefcase, Lightbulb, Users } from "lucide-react";

export const menuData = {
  services: [
    {
      title: "Ocean Transport",
      links: [
        {
          title: "Full Container Load (FCL)",
          description: "Full container ocean shipments + inland options",
          href: "/services/ocean-freight",
          icon: Ship,
        },
        {
          title: "Less than Container Load (LCL)",
          description: "Small-volume ocean shipments + inland options",
          href: "/services/lcl",
          icon: Truck,
        },
      ],
    },
    {
      title: "Land Transport",
      links: [
        {
          title: "Trucking",
          description: "Reliable and flexible trucking services",
          href: "/services/trucking",
          icon: Truck,
        },
        {
          title: "Rail",
          description: "Cost-effective and sustainable rail transport",
          href: "/services/rail",
          icon: Train,
        },
      ],
    },
    {
      title: "Air Freight",
      links: [
        {
          title: "Standard Air Freight",
          description: "Fast and reliable air freight services",
          href: "/services/air-freight",
          icon: Plane,
        },
      ],
    },
  ],
  solutions: [
    {
      title: "By Industry",
      links: [
        {
          title: "Retail & E-commerce",
          description: "Solutions for the fast-paced retail industry",
          href: "/solutions/retail",
          icon: Briefcase,
        },
        {
          title: "Automotive",
          description: "Streamlined logistics for the automotive sector",
          href: "/solutions/automotive",
          icon: Users,
        },
      ],
    },
    {
      title: "By Business Need",
      links: [
        {
          title: "Supply Chain Optimization",
          description: "Improve efficiency and reduce costs",
          href: "/solutions/supply-chain-optimization",
          icon: Lightbulb,
        },
        {
          title: "Data & Analytics",
          description: "Gain insights and make data-driven decisions",
          href: "/solutions/data-analytics",
          icon: BarChart,
        },
      ],
    },
  ],
};
