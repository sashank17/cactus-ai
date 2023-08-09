import { AnalyticsRounded, HomeRounded, SettingsRounded, CampaignRounded, PsychologyRounded } from "@mui/icons-material"

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <HomeRounded sx={{fontSize: '20px'}}/>,
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <AnalyticsRounded sx={{fontSize: '20px'}}/>,
    },
    {
        title: 'AI Studio',
        path: '/aistudio',
        icon: <PsychologyRounded sx={{fontSize: '20px'}}/>,
    },
    {
        title: 'Campaign',
        path: '/campaign',
        icon: <CampaignRounded sx={{fontSize: '20px'}}/>,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <SettingsRounded sx={{fontSize: '20px'}}/>,
    }
]