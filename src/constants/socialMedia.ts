import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=100008391762893&locale=id_ID",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/muhammadagpra_/",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
