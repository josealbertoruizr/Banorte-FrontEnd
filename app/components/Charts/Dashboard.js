import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Container, Grid, Paper, Box } from "@mui/material";
import BasicTable from "../Charts/Table"; // Asegúrate de importar correctamente la tabla
import Image from 'next/image';
// Ruta de las imágenes que mencionaste
import totalCustomersImg from "../../images/total_customers.png";
import customersLastImg from "../../images/customers_last.png";
import activeCustomersImg from "../../images/active_customers.png";


const drawerWidth = 190;



const Dashboard = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: '24px', marginLeft: '90px', marginTop: '44px' }}>
            {/* Barra superior */}
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#EB0009' }}> {/* Cambia zIndex a un valor numérico fijo */}
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Mi Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Menú lateral */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["Inicio", "Reportes", "Usuarios", "Configuración"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Contenido principal */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '90px', marginTop: '40px' }}> {/* Ajusta el margen para que no se superponga */}
                <Container maxWidth="lg">
                    <Typography variant="h4" gutterBottom>
                        Bienvenido al Dashboard
                    </Typography>
                    <Grid container spacing={2}>
                        {/* Tarjetas de ejemplo */}
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: 'center', textAlign: 'center' }}>
                                <Image src={totalCustomersImg} alt="Total Customers" style={{ width: '50px', height: '50px' }} />
                                <Typography variant="h6">Total Customers</Typography>
                                <Typography variant="h4">14</Typography>
                                <Typography variant="subtitle1" color="green">↑ 16% this month</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: 'center', textAlign: 'center' }}>
                                <Image src={customersLastImg} alt="Customers Last 24h" style={{ width: '50px', height: '50px' }} />
                                <Typography variant="h6">Customers Last 24h</Typography>
                                <Typography variant="h4">8</Typography>
                                <Typography variant="subtitle1" color="red">↓ 1% this hour</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: 'center', textAlign: 'center' }}>
                                <Image src={activeCustomersImg} alt="Active Now" style={{ width: '50px', height: '50px' }} />
                                <Typography variant="h6">Active Now</Typography>
                                <Typography variant="h4">2</Typography>
                                <Typography variant="subtitle1" color="red">↓ 1% this hour</Typography>
                            </Paper>
                        </Grid>

                        {/* Aquí colocamos la tabla */}
                        <Grid item xs={12}>
                            <BasicTable />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
