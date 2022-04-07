import * as React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
//import Item from '@mui/material/Item';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

import Stack from '@mui/material/Stack';

//import images
import p1 from '../../media/hobbyPictures/1.jpg';
import p2 from '../../media/hobbyPictures/2.jpg';
import p3 from '../../media/hobbyPictures/3.jpg';
import p4 from '../../media/hobbyPictures/4.jpg';
import p5 from '../../media/hobbyPictures/5.jpg';
import p6 from '../../media/hobbyPictures/6.jpg';
import p7 from '../../media/hobbyPictures/7.jpg';
import p8 from '../../media/hobbyPictures/8.jpg';
import p9 from '../../media/hobbyPictures/9.JPG';
import p10 from '../../media/hobbyPictures/10.jpg';
import p11 from '../../media/hobbyPictures/11.jpg';
import p12 from '../../media/hobbyPictures/12.jpeg';
import p13 from '../../media/hobbyPictures/13.JPG';
import p14 from '../../media/hobbyPictures/14.JPEG';
import p15 from '../../media/hobbyPictures/15.jpg';
import p16 from '../../media/hobbyPictures/16.jpg';
import p17 from '../../media/hobbyPictures/17.jpg';
import p18 from '../../media/hobbyPictures/18.jpg';
import p19 from '../../media/hobbyPictures/19.jpg';
import p20 from '../../media/hobbyPictures/20.jpg';
import p21 from '../../media/hobbyPictures/21.jpg';
import p22 from '../../media/hobbyPictures/22.jpg';
import p23 from '../../media/hobbyPictures/23.jpg';
import p24 from '../../media/hobbyPictures/24.jpg';
import p25 from '../../media/hobbyPictures/25.jpg';
import p26 from '../../media/hobbyPictures/26.jpg';
import p27 from '../../media/hobbyPictures/27.jpg';
import p28 from '../../media/hobbyPictures/28.jpg';
import p29 from '../../media/hobbyPictures/29.jpg';
import p30 from '../../media/hobbyPictures/30.jpg';
import p31 from '../../media/hobbyPictures/31.jpg';
import p32 from '../../media/hobbyPictures/32.jpg';
import p33 from '../../media/hobbyPictures/33.jpg';
import p34 from '../../media/hobbyPictures/34.jpg';
import p35 from '../../media/hobbyPictures/35.jpg';

const heights = [150, 230, 190, 170, 110, 150, 130, 180, 150, 190];

//Model styling
const style = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "900px",
  p: 4,
};

//Item of each masonry
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const itemData = [
  {
    img: p1,
    title: '1',
    height: 200,
  },
  {
    img: p2,
    title: '2',
    height: 150,
  },
  {
    img: p3,
    title: '3',
    height: 150,
  },
  {
    img: p4,
    title: '4',
    height: 150,
  },
  {
    img: p5,
    title: '5',
    height: 150,
  },
  {
    img: p6,
    title: '6',
    height: 150,
  },
  {
    img: p7,
    title: '7',
    height: 150,
  },
  {
    img: p8,
    title: '8',
    height: 150,
  },
  {
    img: p9,
    title: '9',
    height: 150,
  },
  {
    img: p10,
    title: '10',
    height: 150,
  },
  {
    img: p11,
  },
  {
    img: p12,
  },
  {
    img: p13,
  },
  {
    img: p14,
  },
  {
    img: p15,
  },
  {
    img: p16,
  },
  {
    img: p17,
  },
  {
    img: p18,
  },
  {
    img: p19,
  },
  {
    img: p20,
  },
];

// Main hobbies function
function Hobbies() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Slide direction="down" in={open} appear={true} mountOnEnter unmountOnExit timeout={{enter: 25000, exit: 1}}>
              <Masonry columns={3} spacing={2}>
                {itemData.map((item, index) => (
                  <Item key={index}>
                    <Stack key={index}>
                      <img
                        src={item.img}
                        style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width:'100%' }}
                      />
                    </Stack>
                  </Item>
                ))}
              </Masonry>
            </Slide>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Hobbies;

