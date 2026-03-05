import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FeatureCard } from "./FeatureCard";

/**
 * FeatureCardsSection
 * - Centered title/subtitle
 * - Cards centered; handles 1..N cards
 * - Optional footer text + CTA
 */
export default function FeatureCardsSection({
    title,            // ReactNode (permite <span style> para colores)
    subtitle,         // ReactNode|string
    cards = [],       // [{ icon, title, description }]
    cardVariant = "white", // "white" | "gray"
    footerText,
    ctaLabel,
    ctaHref,
    onCtaClick,
    maxWidth = "lg",
    py = { xs: 6, md: 10 },
    bgcolor = "transparent",
}) {
    // regla simple para que se vean “perfectas”
    // - 1 card: md=6 y centrada
    // - 2 cards: md=5/6 (o 6) centradas
    // - 3 cards: md=4
    // - 4 cards: md=3 o md=6 en 2x2 (mejor 2x2 para parecerse a tus pantallas)
    const count = cards.length;

    const getMdCols = () => {
        if (count === 1) return 6;      // 1 card centrada
        if (count === 2) return 5;      // 2 cards con buen aire
        if (count === 3) return 4;      // 3 en una fila
        if (count === 4) return 6;      // 2x2 (como tus capturas)
        return 4;                       // default (3 por fila)
    };

    const mdCols = getMdCols();

    return (
        <Box component="section" sx={{ bgcolor, borderRadius: '5px' }}>
            <Container maxWidth={maxWidth} sx={{ py }}>
                <Stack spacing={5} alignItems="center">
                    {/* Header */}
                    <Stack spacing={1.5} alignItems="center" sx={{ textAlign: "center", maxWidth: 860 }}>
                        {title ? (
                            // Section title: uses h2 (DM Sans 40px/700) or h3 (Inter 40px/900) depending on usage
                            <Typography variant="h2" sx={{ color: 'text.primary', lineHeight: 1.15 }}>
                                {title}
                            </Typography>
                        ) : null}

                        {subtitle ? (
                            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                                {subtitle}
                            </Typography>
                        ) : null}
                    </Stack>

                    {/* Cards grid */}
                    <Box sx={{ width: "100%" }}>
                        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                            {cards.map((c, idx) => (
                                <Grid
                                    key={idx}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={mdCols}
                                    sx={{
                                        display: "flex",
                                    }}
                                >
                                    <FeatureCard
                                        variant={cardVariant}
                                        icon={c.icon}
                                        title={c.title}
                                        description={c.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Footer + CTA */}
                    {(footerText || ctaLabel) ? (
                        <Stack spacing={2} alignItems="center" sx={{ textAlign: "center", maxWidth: 860 }}>
                            {footerText ? (
                                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                                    {footerText}
                                </Typography>
                            ) : null}

                            {ctaLabel ? (
                                // CTA: radius 40px, padding 25px 52px, DM Sans 16px/900 (Figma exact)
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={ctaHref}
                                    onClick={onCtaClick}
                                    sx={{ borderRadius: '40px', px: '52px', py: '25px' }}
                                >
                                    {ctaLabel}
                                </Button>
                            ) : null}
                        </Stack>
                    ) : null}
                </Stack>
            </Container>
        </Box>
    );
}
