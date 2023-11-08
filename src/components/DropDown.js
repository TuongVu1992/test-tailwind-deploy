import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import MuiInput from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "'Montserrat', sans-serif"
        }
    },
    palette: {
        primary: {
            main: '#002A4E'
        }
    }
});

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5)
}));

const  DropDown = () => {
        return (
            <Container sx={{ fontFamily: "'Montserrat', sans-serif" , padding: 0}} disableGutters maxWidth={false}>
                    {/* App Content */}
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' , padding: 0}} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ marginRight: '16px' }}>
                        {/* Left Panel - Filter Panel */}
                        <Stack direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 4, sm: 1, md: 1 }} sx={{ width: { xs: '340px', sm: '300px' }}}>
                        <Accordion disableGutters={true} sx={{ backgroundColor: '#e5e5e5' }} elevation={0}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    Applies to Vessel Type
                                </AccordionSummary>
                                <AccordionDetails>
                                   <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        />
                                </AccordionDetails>
                                <AccordionDetails>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        />
                                </AccordionDetails>
                                <AccordionDetails>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        />
                                </AccordionDetails>
                                <AccordionDetails>
                                     <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        />
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Stack>
            </Container>
        );
}

export default DropDown;