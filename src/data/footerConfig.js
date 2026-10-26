
const footerConfig = {
  brand: {
    name: "MySite",
    description:
      "Discover helpful resources, useful services, and a better online experience.",
    logo: "/logo.png",
  },

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/", label: "IG" },
    { name: "LinkedIn", url: "https://www.linkedin.com/", label: "in" },
    { name: "Facebook", url: "https://www.facebook.com/", label: "f" },
    { name: "X", url: "https://x.com/", label: "X" },
    { name: "YouTube", url: "https://www.youtube.com/", label: "▶" },
  ],

  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "#home" },
        { label: "About Us", url: "#about" },
        { label: "Our Services", url: "#services" },
        { label: "Blog", url: "#blog" },
        { label: "Contact", url: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", url: "#help" },
        { label: "FAQs", url: "#faqs" },
        { label: "Documentation", url: "#docs" },
        { label: "Guides", url: "#guides" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Shipping", url: "#shipping" },
        { label: "Returns", url: "#returns" },
        { label: "Privacy Policy", url: "#privacy" },
        { label: "Terms & Conditions", url: "#terms" },
      ],
    },
  ],

  contact: {
    address: "Bhopal, Madhya Pradesh, India",
    email: "hello@mysite.example",
    phone: "+911234567890",
    phoneDisplay: "+91 12345 67890",
  },

  newsletter: {
    title: "Stay Connected",
    description: "Subscribe to receive our latest updates.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },

  trustBadges: [
    "Secure Payments",
    "Free Shipping",
    "Easy Returns",
  ],

  paymentMethods: ["UPI", "Visa", "Mastercard", "RuPay"],

  legalLinks: [
    { label: "Privacy Policy", url: "#privacy" },
    { label: "Terms & Conditions", url: "#terms" },
    { label: "Cookie Policy", url: "#cookies" },
  ],

  copyright: "All rights reserved.",
};

export default footerConfig;
