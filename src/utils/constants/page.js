import { Instagram, Linkedin, X } from "lucide-react";

export const CONTACT_FORM_FIELDS = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    label: "Subject",
    type: "text",
    placeholder: "How can we help?",
  },
];

export const SOCIAL_LINKS = [
  { icon: X, href: "https://www.instagram.com/anurag.span?igsh=N2pvdmgxYng3Mmtx" },
  { icon: Instagram, href: "https://www.instagram.com/anurag.span?igsh=N2pvdmgxYng3Mmtx" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anurag-gupta-b0584230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];


export const navs = [
  { label: "Home", link: "/", id: 1 },
  { label: "Orders", link: "", id: 3 },
  { label: "Contact Us", link: "/contact-us", id: 4 },
  { label: "Grocery", link: "/grocery", id: 2 },
  { label: "Cart", link: "/cart", id: 5 }
]