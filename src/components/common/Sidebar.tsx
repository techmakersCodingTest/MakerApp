import React, { useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
  useTheme,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import { deepOrange } from "@mui/material/colors";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import SidebarHeader from "./SidebarHeader";
import colorConfigs from "../../configs/colorConfigs";

type Props = {
  open: boolean;
  handleDrawerClose: () => void;
};

const Sidebar = ({ open, handleDrawerClose }: Props) => {
  const theme = useTheme();
  const [adminMode, setAdminMode] = useState(false);

  const handleAdminModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminMode(event.target.checked);
  };

  const filteredRoutes = adminMode
    ? appRoutes
    : appRoutes.filter(
        (route) => !route.state.startsWith("admin")
      );

  return (
    <Drawer
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <SidebarHeader>
        <IconButton onClick={handleDrawerClose} style={{ color: "#FFFFFF" }}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </SidebarHeader>
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "150%" }} direction="row" justifyContent="center">
            <img
              src="https://cdn.discordapp.com/attachments/290586914837364737/1267110102742077440/profile.png?ex=66a797be&is=66a6463e&hm=76736e4bb179368ffeabef4ef204db34fa9baaded95b23e681c307e845127ac9&"
              alt="logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </Stack>
        </Toolbar>
        {filteredRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} />
            )
          ) : null
        )}
        <ListItemButton>
          <FormControlLabel
            control={
              <Checkbox
                checked={adminMode}
                onChange={handleAdminModeChange}
                name="adminMode"
                color="primary"
              />
            }
            label="Admin Mode"
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
