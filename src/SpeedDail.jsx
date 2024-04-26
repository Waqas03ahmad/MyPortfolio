import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const actions = [
  {
    icon: <FaTwitter size={25} />,
    name: "Twitter",
    link: "https://wa.me/03439826613",
  },
  {
    icon: <FaLinkedin size={25} />,
    name: "LinkedIn",
    link: "https://wa.me/03439826613",
  },
  {
    icon: <FaWhatsapp size={25} />,
    name: "WhatsApp",
    link: "https://wa.me/03439826613",
  },
  {
    icon: <FaFacebook size={25} />,
    name: "FaceBook",
    link: "https://www.facebook.com/TechSoftcompany",
  },
];

export default function SpeedDial1() {
  const handle = (link) => {
    window.open(link, "_blank");
  };
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "fixed", bottom: 16, right: { xs: 3, sm: 1 } }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      FabProps={{ size: "small" }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handle(action.link)}
        />
      ))}
    </SpeedDial>
  );
}
