
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const icons = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: Twitter,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    Icon: Youtube,
  },
];

const SocialIcons = () => (
  <div className="flex gap-3 justify-center mt-2">
    {icons.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-primary hover:text-secondary bg-sky-50 rounded-full p-2 transition-colors hover:bg-sky-200"
      >
        <Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
);

export default SocialIcons;
