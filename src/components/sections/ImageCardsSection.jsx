import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ImageFeatureCard } from "./ImageFeatureCard";

export default function ImageCardsSection({
    title,       // ReactNode
    subtitle,    // ReactNode|string
    cards = [],  // [{ imageSrc, imageAlt, title, description }]
    maxWidth = "lg",
    py = { xs: 6, md: 10 },
    bgcolor = "transparent",
}) {
    return (
        <Box component="section" sx={{ bgcolor }}>
            <Container maxWidth={maxWidth} sx={{ py }}>
                <Stack spacing={5} alignItems="center">
                    {/* Header */}
                    <Stack spacing={1.5} alignItems="center" sx={{ textAlign: "center", maxWidth: 860 }}>
                        {title ? (
                            <Typography variant="h2" sx={{ lineHeight: 1.15 }}>
                                {title}
                            </Typography>
                        ) : null}

                        {subtitle ? (
                            <Typography variant="body1" sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
                                {subtitle}
                            </Typography>
                        ) : null}
                    </Stack>

                    {/* Cards */}
                    <Box sx={{ width: "100%" }}>
                        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
                            {cards.map((c, idx) => (
                                <Grid key={idx} item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <ImageFeatureCard
                                        imageSrc={c.imageSrc}
                                        imageAlt={c.imageAlt}
                                        imageFit={c.imageFit ?? "contain"}
                                        title={c.title}
                                        description={c.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
