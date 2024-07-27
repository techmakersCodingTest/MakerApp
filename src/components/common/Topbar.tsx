import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuthenticator } from '@aws-amplify/ui-react';

type Props = {
    open: boolean;
    handleDrawerOpen: () => void;
}

const Topbar = ({ open, handleDrawerOpen }: Props) => {
    const { signOut } = useAuthenticator();

    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" paddingRight="20px">
                Liberta Track
            </Typography>
            <IconButton
                onClick={() => signOut()}
                sx={{ fontSize: '2rem' }} 
            >
                <ExitToAppIcon sx={{ fontSize: '2rem' }} />  
            </IconButton>
        </Toolbar>
    )
}

export default Topbar;