import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector, useDispatch } from "react-redux";
import { viewClose } from "../../store/toggling";
import ReactPlayer from "react-player";
// Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { viewOpen } from "../../store/toggling";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
};

export default function VideoModal(props) {
  const watched1 = useSelector((e) => e.counter.open);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={watched1}
        onClose={() => dispatch(viewClose())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={watched1}>
          <Box sx={style}>
            <ReactPlayer
              className="react-player"
              url={props}
              width="100%"
              height="100%"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
