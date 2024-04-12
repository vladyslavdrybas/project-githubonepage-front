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
import Basket from "@/components/store/Basket";
import Link from "@mui/material/Link";

const logoStyle = {
  width: 'auto',
  height: '89px',
  cursor: 'pointer',
};

const StoreMenu: React.FunctionComponent<THeaderProps> = ({ mode, toggleColorMode }: THeaderProps) => {
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
          ml: '-18px',
          px: 0,
        }}
      >
        <img
          src={
            '/icon.png'
          }
          style={logoStyle}
          alt="logo header"
        />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <MenuItem
            sx={{ py: '6px', px: '12px' }}
          >
            <Link
              href="/store/products/sales"
              variant="body2"
              color="text.primary"
            >
              Sales
            </Link>
          </MenuItem>
          <MenuItem
            sx={{ py: '6px', px: '12px' }}
          >
            <Link
              href="/store/products"
              variant="body2"
              color="text.primary"
            >
              Products
            </Link>
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
        <Basket />

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
                flexDirection: 'column',
                alignItems: 'end',
                flexGrow: 1,
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Basket />
            </Box>
            <MenuItem onClick={() => scrollToSection('highlights')}>
              Sales
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('pricing')}>
              Products
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('faq')}>
              Orders
            </MenuItem>
            <Divider />
            <AuthNormalMenuItem />
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default StoreMenu;
