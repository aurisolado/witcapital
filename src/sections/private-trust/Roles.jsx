import { Container, Grid, Box, Typography, Avatar, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';

const roles = [
  {
    title: 'Settlor',
    description: 'Persona que transfiere sus activos al Trust y establece las reglas de administración y distribución.',
    icon: 'S'
  },
  {
    title: 'Trustee',
    description: 'Responsable de administrar los activos según las disposiciones del Settlor.',
    icon: 'T'
  },
  {
    title: 'Beneficiarios',
    description: 'Quienes reciben los beneficios del Trust conforme a las condiciones establecidas.',
    icon: 'B'
  }
];

export default function Roles() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Roles del Private Trust"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            textWrap: 'balance'
          }}
        >
          Private Trust en Estados Unidos
        </Typography>

        <Grid container spacing={4}>
          {roles.map((role, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: alpha('#9fe870', 0.12),
                      color: 'primary.main',
                      fontSize: 32,
                      fontWeight: 'bold'
                    }}
                  >
                    {role.icon}
                  </Avatar>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {role.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      maxWidth: '32ch'
                    }}
                  >
                    {role.description}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}