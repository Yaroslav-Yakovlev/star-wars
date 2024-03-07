import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Logo from '../Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  commonGridStyles, commonTypographyStyled,
  StyledFooter,
  StyledGrid,
  StyledIcons,
} from './styledComponents';
import theme from '../styles';

const Footer = () => {

  return (
    <StyledFooter
      component="footer"
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignSelf="center"
        marginTop="10px"
      >
        <StyledGrid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              height: '60',
              width: '60px',
            }}
          >
            <Logo/>
          </Box>
        </StyledGrid>
        <Grid item xs={12} sm={6} lg={3} sx={commonGridStyles}>
          <Typography variant="h6" align="left" sx={commonTypographyStyled}>
            About us
          </Typography>
          <Typography variant="caption2" align="left" sx={{maxWidth: '300px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim
            ad minim veniam
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={commonGridStyles}>
          <Typography variant="h6" align="left" sx={commonTypographyStyled}>
            Contact
          </Typography>
          <Typography variant="caption2" align="left">
            contact@starwars.com
          </Typography>
          <Typography variant="caption2" align="left">
            (00) 00000-0000
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={commonGridStyles}>
          <Typography variant="h6" align="left" sx={commonTypographyStyled}>
            Social Media
          </Typography>
          <Box display="flex">
            <StyledIcons>
              <InstagramIcon/>
            </StyledIcons>
            <StyledIcons>
              <TelegramIcon/>
            </StyledIcons>
            <StyledIcons>
              <YouTubeIcon/>
            </StyledIcons>
            <StyledIcons>
              <FacebookIcon/>
            </StyledIcons>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="20px">
        <Typography paddingTop="16px" variant="body2"
                    color={theme.palette.text.dark}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
