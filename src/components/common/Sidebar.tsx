import { Avatar, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar, useTheme } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import { deepOrange } from "@mui/material/colors";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import SidebarHeader from "./SidebarHeader";
import colorConfigs from "../../configs/colorConfigs";

type Props = {
    open: boolean;
    handleDrawerClose: () => void;
}

const Sidebar = ({ open, handleDrawerClose }: Props) => {
    const theme = useTheme();
    
    return (
        <Drawer
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: 'border-box',
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <SidebarHeader>
                <IconButton onClick={handleDrawerClose} style={{color: "#FFFFFF"}}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </SidebarHeader>
            <List disablePadding>
                <Toolbar sx={{ marginBottom: "20px" }}>
                    <Stack
                        sx={{ width: "150%" }}
                        direction="row"
                        justifyContent="center"
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>JM</Avatar>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse item={route} key={index} />
                        ) : (
                            <SidebarItem item={route} />
                        )
                    ) : null
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;