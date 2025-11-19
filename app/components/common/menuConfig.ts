import {
  Truck,
  Plane,
  Train,
  BarChart,
  Briefcase,
  Lightbulb,
  Users,
  Code2,
  IdCardLanyard,
  FileText,
  Bot,
} from "lucide-react";

import { MenuConfig } from "@/app/lib/types";

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
      title: "Careers",
      href: "/careers",
    },
  ],
  megaMenus: {
    services: {
      columns: [
        {
          title: "APIs",
          links: [
            {
              id: "1",
              title: "Document Processing",
              description: "Fast and Reliable SDK for business",
              href: "/services/ocean-freight",
              icon: Code2,
            },
            {
              id: "2",
              title: "Government Documents Processing",
              description: "Small-volume ocean shipments + inland options",
              href: "/services/lcl",
              icon: FileText,
            },
            {
              id: "10",
              title: "ML Translation",
              description: "Finetuned for Government Documents",
              href: "/services/lcl",
              icon: Bot,
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
          title: "Security",
          links: [
            {
              id: "1",
              title: "Passkey for Workspace",
              description: "Fast and reliable air freight services",
              href: "/services/air-freight",
              icon: IdCardLanyard,
            },
          ],
        },
      ],
      banner: [
        {
          id: "3",
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
              id: "4",
              title: "Retail & E-commerce",
              description: "Solutions for the fast-paced retail industry",
              href: "/solutions/retail",
              icon: Briefcase,
            },
            {
              id: "5",
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
              id: "6",
              title: "Supply Chain Optimization",
              description: "Improve efficiency and reduce costs",
              href: "/solutions/supply-chain-optimization",
              icon: Lightbulb,
            },
            {
              id: "7",
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
          id: "8",
          title: "Explore Our Services",
          description:
            "Find the perfect logistics service for your business needs.",
          imageSrc: "/images/webremake.svg",
          href: "/services",
        },
      ],
    },
  },
};
