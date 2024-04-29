import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ToggleColorMode from "@/components/ToggleColorMode";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {THeaderProps} from "@/types/pages";
import AuthNormalMenuItem from "@/components/menu/AuthNormalMenuItem";
import Link from "@mui/material/Link";

const logoStyle = {
  width: 'auto',
  height: '55px',
  cursor: 'pointer',
};

const LandingPageMenu: React.FunctionComponent<THeaderProps> = ({ mode, toggleColorMode }: THeaderProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          px: 0,
        }}
      >
        <Link
          href="/"
          sx={{
            mr: 1,
          }}
        >
          <img
            src={
              '/icon.png'
            }
            style={logoStyle}
            alt="logo header"
          />
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <MenuItem
            onClick={() => scrollToSection('features')}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">
              Features
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('testimonials')}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">
              Testimonials
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('highlights')}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">
              Highlights
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('pricing')}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">
              Pricing
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('faq')}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">
              FAQ
            </Typography>
          </MenuItem>
        </Box>

      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        <AuthNormalMenuItem />
      </Box>

      <Box sx={{ display: { sm: '', md: 'none' } }}>
        <Button
          variant="text"
          color="primary"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ minWidth: '30px', p: '4px' }}
        >
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              minWidth: '60dvw',
              p: 2,
              backgroundColor: 'background.paper',
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'end',
                justifyContent: 'end',
                flexGrow: 1,
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <MenuItem onClick={() => scrollToSection('features')}>
              Features
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('highlights')}>
              Highlights
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('pricing')}>
              Pricing
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('faq')}>
              FAQ
            </MenuItem>
            <Divider />
            <AuthNormalMenuItem />
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default LandingPageMenu;
