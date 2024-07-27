import { Box, Toolbar, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "../common/AppBar";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarHeader from "../common/SidebarHeader";
import MainWrapper from "../common/MainWrapper";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

const MainLayout = () => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="fixed" open={open}>
                <Topbar open={open} handleDrawerOpen={handleDrawerOpen} />
            </AppBar>
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <MainWrapper open={open}>
                <Outlet />
            </MainWrapper>
        </Box >
    );
};

export default MainLayout;