import {
  Ship,
  Truck,
  Plane,
  Train,
  BarChart,
  Briefcase,
  Lightbulb,
  Users,
} from "lucide-react";

import { MenuConfig } from "./types";

export const menuConfig: MenuConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
      megaMenu: "services",
    },
    {
      title: "Solutions",
      href: "/solutions",
      megaMenu: "solutions",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  megaMenus: {
    services: {
      columns: [
        {
          title: "APIs",
          links: [
            {
              id: "bulk-document-processing",
              title: "Bulk Document Processing",
              description: "Full container ocean shipments + inland options",
              href: "/services/ocean-freight",
              icon: Ship,
            },
            {
              id: "government-documents-processing",
              title: "Government Documents Processing",
              description: "Small-volume ocean shipments + inland options",
              href: "/services/lcl",
              icon: Truck,
            },
          ],
        },
        {
          title: "Web Developement",
          links: [
            {
              id: "website-development",
              title: "เว็บไซต์ขายของ",
              description: "Reliable and flexible trucking services",
              href: "/services/trucking",
              icon: Truck,
            },
            {
              id: "backend-server-development-1",
              title: "Backend Server Development",
              description: "Cost-effective and sustainable rail transport",
              href: "/services/rail",
              icon: Train,
            },
            {
              id: "backend-server-development-2",
              title: "Backend Server Development",
              description: "Cost-effective and sustainable rail transport",
              href: "/services/rail",
              icon: Train,
            },
          ],
        },
        {
          title: "Consultant",
          links: [
            {
              id: "1",
              title: "Business-driven Software",
              description: "Fast and reliable air freight services",
              href: "/services/air-freight",
              icon: Plane,
            },
            {
              id: "2",
              title: "User Experience",
              description: "Fast and reliable air freight services",
              href: "/services/air-freight",
              icon: Plane,
            },
          ],
        },
      ],
      banner: [
        {
          id: "1",
          title: "Explore Our Solutions",
          description:
            "Find the perfect logistics solution for your business needs.",
          imageSrc: "/images/blog-1.svg",
          href: "/solutions",
        },
      ],
    },
    solutions: {
      columns: [
        {
          title: "By Industry",
          links: [
            {
              id: "retail-e-commerce",
              title: "Retail & E-commerce",
              description: "Solutions for the fast-paced retail industry",
              href: "/solutions/retail",
              icon: Briefcase,
            },
            {
              id: "automotive",
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
              id: "supply-chain-optimization",
              title: "Supply Chain Optimization",
              description: "Improve efficiency and reduce costs",
              href: "/solutions/supply-chain-optimization",
              icon: Lightbulb,
            },
            {
              id: "data-analytics",
              title: "Data & Analytics",
              description: "Gain insights and make data-driven decisions",
              href: "/solutions/data-analytics",
              icon: BarChart,
            },
          ],
        },
      ],
      banner: [
        {
          id: "2",
          title: "Explore Our Services",
          description:
            "Find the perfect logistics service for your business needs.",
          imageSrc: "/images/img_7557.webp",
          href: "/services",
        },
      ],
    },
  },
};
