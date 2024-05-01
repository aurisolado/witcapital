import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
// components
import { Box, Button } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

export default function PrivateTrust() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          pt: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Private -{' '}
                  <span
                    style={{
                      color: '#9fe870',
                    }}
                  >
                    Trust
                  </span>
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Un Trust es un contrato privado, por el cual una persona (Fundador o Settlor)
                  transfiere determinados bienes o derechos a otra persona de su confianza
                  (Fiduciario), con el fin de que los controle y administre en beneficio de terceras
                  personas (Beneficiarios).
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  El motivo para el uso de los trust es amplio y esta en constante evolución, pero
                  la flexibilidad y confidencialidad son las principales ventajas que un trust tiene
                  sobre otras formas jurídicas para mantener, preservas y transferir la riqueza. El
                  concepto del trust ha demostrado ser sumamente flexible y es ampliamente utilizado
                  en la planificación financiera entre ellas:
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/map-large@1x.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/db8bbd51ceebd3196b16e22709589d23-6Z4A5041.jpg"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Preservación de la Riqueza
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Pueden ser utilizados para preservar la continuidad de la propiedad de
                  determinados activos, como una empresa o propiedad, dentro de una familia. Por la
                  adquisición del trust legal de los derechos de propiedad de los activos, las
                  personas relevantes pueden ser capaces de seguir beneficiándose de los activos,
                  evitando la fragmentación de la propiedad entre un gran número de beneficiarios de
                  una segunda y tercera generación. El uso del trust evita, que por la muerte de un
                  beneficiario, el riesgo que la propiedad de parte de los activos quede fuera de la
                  familia, y por lo tanto permite conservar intacto los beneficios de las futuras
                  generaciones.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Planificación Sucesoria
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  El trust proporciona un vehículo eficiente para la transferencia de la titularidad
                  del patrimonio ante la muerte del settlor. La estructura del trust puede servir
                  para evitar impuestos a la herencia. Se puede utilizar también para proteger a los
                  beneficiarios más vulnerables.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/4a1b12a702389234d659070cd0d41415-business-proposal-image.png"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/ab8f83d271ba10c1574cf898cf02f07c-6Z4A4378.jpg"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Protección de Activos
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Históricamente los trusts se han establecido con la finalidad principal de
                  proteger los activos de ciertos tipos de riesgos. Pueden ser utilizados para
                  mantener los activos en un entorno estable y seguro. Individuos, familias y
                  empresas utilizan los trusts como escudo frente a posibles responsabilidades
                  futuras del settlor, como el riesgo de litigio e impuestos punitivos. Los trusts
                  también pueden proteger los activos contra la confiscación o expropiación por el
                  estado de residencia del settlor.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Protección de Acreedores
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Se usa para que el patrimonio familiar bajo el Trust quede protegido de acreedores
                  comerciales ya que están en un patrimonio independiente administrado por el
                  Fiduciario.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/swift-codes-assets/img/mathu-3e8f28e97e46b6fb1c10baf38e81028b.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/2402f9b61cdadb33156fd88b88f790e7-07_Wise_Image_1120x540.jpg"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Herederos Forzosos
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Su utilización permite planificar quienes serán los beneficiarios en caso de
                  fallecimiento sin lesionar las “legítimas” que existen en determinados países.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Trusts Comerciales
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Se puede utilizar también para los siguientes fines :
                </Typography>

                <ul>
                  <li>Para realizar inversiones conjuntas, agrupar pequeños accionistas</li>
                  <li>Para operaciones fuera del balance</li>
                  <li>Acuerdos entre acreedores, para garantizar pagos y transacciones</li>
                  <li>Esquemas de securitización de activos</li>
                  <li>Opciones sobre acciones e incentivos al personal</li>
                  <li>
                    Acuerdos de inversión de capital privado, para garantizar el correcto
                    cumplimiento de una transacción (escrow)
                  </li>
                </ul>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/a8ded497a4359562083fa3a61bba7ec3-15_Wise_Image_741x494.jpg"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 5 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/6a097c21c580d051d842dce8d2a1af58-15_Wise_Image_552x736.jpg"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Optimización Fiscal
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  En muchas jurisdicciones el Trust es una entidad exenta de impuestos y en caso de
                  un Trust irrevocable se produce una enajenación del patrimonio extinguiendo la
                  obligación tributaria.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
