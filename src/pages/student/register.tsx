import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

function Register() {
    const icon = (
        <Paper sx={{ m: 1 }} elevation={4}>
            <Box component="svg" sx={{ width: 100, height: 100 }}>
                <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
                />
            </Box>
        </Paper>
    );

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
      };

    return (
        <Box sx={{ display: 'flex' }}>
            <Grow in={checked}>{icon}</Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
            >
                {icon}
            </Grow>
        </Box>
    )
}

export default Register();