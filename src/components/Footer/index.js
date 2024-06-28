import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  commonGridStyles, commonTypographyStyled, MuiBox, StyledIcons
} from './styledComponents';
import theme from '../styles';

const Footer = () => {

  return (
    <MuiBox
      component="footer"
      // role='footer'
      data-testid='footer'
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignSelf="center"
        marginTop="10px"
      >
        <Grid item xs={12} sm={6} md={3} sx={commonGridStyles}>
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
        <Grid item xs={12} sm={6} md={3} sx={commonGridStyles}>
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
        <Grid item xs={12} sm={6} md={3} sx={commonGridStyles}>
          <Typography variant="h6" align="left" sx={commonTypographyStyled}>
            Social Media
          </Typography>
          <Box display="flex">
            <StyledIcons>
              <InstagramIcon data-testid='instagram-icon'/>
            </StyledIcons>
            <StyledIcons>
              <TelegramIcon data-testid='telegram-icon'/>
            </StyledIcons>
            <StyledIcons>
              <YouTubeIcon data-testid='youTube-icon'/>
            </StyledIcons>
            <StyledIcons>
              <FacebookIcon data-testid='facebook-icon'/>
            </StyledIcons>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="20px">
        <Divider variant="middle"/>
        <Typography paddingTop="16px" variant="body2"
                    color={theme.palette.text.dark}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </MuiBox>
  );
};

export default Footer;
