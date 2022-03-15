import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SensorsIcon from '@mui/icons-material/Sensors';
import PersonIcon from '@mui/icons-material/Person';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const CustomMenu = ({ icon, label, color = "#BABFC8" }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            {icon}
            <Typography variant="body1" sx={{ fontWeight: 'bold' }} color={color}>{label}</Typography>
        </Box>
    )
}

const SessionOne = () => {
    return (
        <Box component="div" >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Box component="img"
                    sx={{
                        maxHeight: { xs: 100 },
                        maxWidth: { xs: 100 },
                    }}
                    alt="The house from the offer."
                    src={logo}
                />
                <Typography variant="body1">Movie bTd</Typography>
            </Box>
            <Box sx={{ mx: '20%' }}>
                <Typography variant="body1" color="#DCDFEB">MENU</Typography>
                <br />
                <CustomMenu label="Home" icon={<HomeIcon sx={{ color: 'red' }} />} color="black" />
                <br />
                <CustomMenu label="Community" icon={<AccountBalanceIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <CustomMenu label="Discovery" icon={<AccessTimeIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <CustomMenu label="Coming soon" icon={<SensorsIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <br />
            </Box>

            <Box sx={{ mx: '20%' }}>
                <Typography variant="body1" color="#DCDFEB">SOCIAL</Typography>
                <br />
                <CustomMenu label="Friends" icon={<PersonIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <CustomMenu label="Parties" icon={<InsertEmoticonIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <CustomMenu label="Media" icon={<PublicIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <br />
            </Box>

            <Box sx={{ mx: '20%' }}>
                <Typography variant="body1" color="#DCDFEB">GENERAL</Typography>
                <br />
                <CustomMenu label="Settings" icon={<SettingsIcon sx={{ color: '#BABFC8' }} />} />
                <br />
                <CustomMenu label="Log Out" icon={<ExitToAppIcon sx={{ color: '#BABFC8' }} />} />
            </Box>
        </Box>
    )
}

export default SessionOne