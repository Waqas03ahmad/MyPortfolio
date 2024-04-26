import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector, useDispatch } from "react-redux";
import { viewClose } from "../../store/toggling";
import ReactPlayer from "react-player";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:"95%",
  height:"auto",
  bgcolor: "background.paper",
};

export default function VideoModal() {
  const watched1 = useSelector((e) => e.counter.open);
  const content = useSelector((e) => e.counter.content);
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
              url={content}
              width="100%"
              height="100%"
              playing={true}
              volume={1}
              controls={true}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
