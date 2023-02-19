import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="mx-auto flex w-full items-center py-2 sm:w-[90vw] lg:w-[60vw]">
          <Link href="../" className="flex-1 text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </Link>
          <Auth />
        </nav>
      </header>
    </>
  );
}

const Auth = (props: any) => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData?.user ? (
        <div className="">
          <AccountMenu image={<i className="fa-solid fa-user fa-xl" />} />
        </div>
      ) : (
        <button
          onClick={() => void signIn()}
          className="h-8 w-20 rounded-2xl bg-secondary text-center text-white"
        >
          Log In
        </button>
      )}
    </>
  );
};

const AccountMenu = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-black">
              {props.image}
            </div>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href="">
          <MenuItem>
            <ListItemIcon>
              <i className="fa-solid fa-clipboard-user"></i>
            </ListItemIcon>
            <p>Account Info</p>
          </MenuItem>
        </Link>
        <MenuItem onClick={() => void signOut()}>
          <ListItemIcon>
            <i className="fa-solid fa-right-from-bracket"></i>
          </ListItemIcon>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    </>
  );
};
