import { HomeRounded, SettingsRounded } from "@mui/icons-material";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <HomeRounded sx={{fontSize: '20px'}}/>,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <SettingsRounded sx={{fontSize: '20px'}}/>,
    }
]