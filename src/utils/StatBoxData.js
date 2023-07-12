import { AddBusinessRounded, PersonAddRounded, PointOfSaleRounded, ReceiptRounded } from "@mui/icons-material";


export const StatBoxData = [
    {
        title: '$ 1243',
        subtitle: 'Total Sales Today',
        progress: '0.75',
        percentIncrease: '+14%',
        icon: <PointOfSaleRounded sx={{color: '#9CFCD8', fontSize: '24px'}}/>
    },
    {
        title: '43',
        subtitle: 'Total Running Transactions',
        progress: '0.42',
        percentIncrease: '+60%',
        icon: <ReceiptRounded sx={{color: '#9CFCD8', fontSize: '24px'}}/>
    },
    {
        title: '99',
        subtitle: 'Profiles Added',
        progress: '0.50',
        percentIncrease: '+18%',
        icon: <PersonAddRounded sx={{color: '#9CFCD8', fontSize: '24px'}}/>
    },
    {
        title: '54',
        subtitle: 'Total Retailers',
        progress: '0.89',
        percentIncrease: '+14%',
        icon: <AddBusinessRounded sx={{color: '#9CFCD8', fontSize: '24px'}}/>
    },

]