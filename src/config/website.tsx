import { AiFillHome } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import { GiCrossedSwords, GiPayMoney, GiSwordsEmblem } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { IoGameController, IoPeople } from "react-icons/io5";
import { PiPokerChipBold } from "react-icons/pi";

const NAVBAR_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: <AiFillHome />,
  },
  {
    label: "Social",
    href: "/social",
    icon: <IoPeople />,
  },
  {
    label: "Clans",
    href: "/clans",
    icon: <GiSwordsEmblem />,
  },
  {
    label: "Quests",
    href: "/quests",
    icon: <GiCrossedSwords />,
    disabled: true,
  },
  {
    label: "Giveaways",
    href: "/giveaways",
    icon: <ImGift />,
    disabled: true,
  },
  {
    label: "Games",
    href: "/games",
    icon: <IoGameController />,
    disabled: true,
  },
  {
    label: "Bets",
    href: "/bets",
    icon: <PiPokerChipBold />,
    disabled: true,
  },
  {
    label: "Stake",
    href: "/stake",
    icon: <GiPayMoney />,
    disabled: true,
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: <BsQuestionLg />,
    disabled: true,
  },
];

export { NAVBAR_LINKS };
