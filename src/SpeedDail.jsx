import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const actions = [
  { icon: <FaTwitter size={25} />, name: "Twitter" },
  { icon: <FaLinkedin size={25} />, name: "Save" },
  { icon: <FaWhatsapp size={25} />, name: "WhatsApp" },
  { icon: <FaFacebook size={25} />, name: "FaceBook" },
];

export default function SpeedDial1() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      FabProps={{size:"small",}}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
