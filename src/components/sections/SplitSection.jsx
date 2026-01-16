import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

/**
 * SplitSection
 * - Desktop: two columns 50/50, image can be left/right
 * - Mobile: text always on top, image always below
 */
export default function SplitSection({
    // layout
    imagePosition = "right", // "left" | "right" (desktop only)
    reverseOnDesktop = false, // optional extra control if you want
    maxWidth = "lg",
    py = { xs: 6, md: 10 },
    gap = { xs: 4, md: 6 },

    // content
    overline,
    title,
    subtitle,
    description, // ReactNode
    ctaLabel,
    ctaHref,
    onCtaClick,

    // image
    imageSrc,
    imageAlt = "",
    imageFit = "contain", // "cover" | "contain"
    imageBg = "transparent",
    imageRadius = 3,

    // styling
    bgcolor = "transparent",
}) {
    const wantsImageLeft = reverseOnDesktop ? imagePosition !== "left" : imagePosition === "left";

    // Mobile orders: text=1, image=2 always
    // Desktop orders: depends on imagePosition
    const textOrder = { xs: 1, md: wantsImageLeft ? 2 : 1 };
    const imageOrder = { xs: 2, md: wantsImageLeft ? 1 : 2 };

    return (
        <Box component="section" sx={{ bgcolor }}>
            <Container maxWidth={maxWidth} sx={{ py }}>
                <Grid container spacing={gap} alignItems="center">
                    {/* TEXT */}
                    <Grid item xs={12} md={6} sx={{ order: textOrder }}>
                        <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                            {overline ? (
                                <Typography variant="overline" sx={{ letterSpacing: 1 }}>
                                    {overline}
                                </Typography>
                            ) : null}

                            {title ? (
                                <Typography variant="h1">
                                    {title}
                                </Typography>
                            ) : null}

                            {subtitle ? (
                                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                                    {subtitle}
                                </Typography>
                            ) : null}

                            {description ? (
                                <Box sx={{ color: "text.secondary" }}>
                                    {typeof description === "string" ? (
                                        <Typography variant="body1">{description}</Typography>
                                    ) : (
                                        description
                                    )}
                                </Box>
                            ) : null}

                            {ctaLabel ? (
                                <Box sx={{ pt: 1 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href={ctaHref}
                                        onClick={onCtaClick}
                                        sx={{
                                            borderRadius: 999,
                                            px: 4,
                                            py: 1.3,
                                        }}
                                    >
                                        {ctaLabel}
                                    </Button>
                                </Box>
                            ) : null}
                        </Stack>
                    </Grid>

                    {/* IMAGE */}
                    <Grid item xs={12} md={6} sx={{ order: imageOrder }}>
                        <Box
                            sx={{
                                width: "100%",
                                // Le damos una “altura mínima” responsiva para que se vea consistente
                                minHeight: { xs: 240, sm: 320, md: 420 },
                                borderRadius: imageRadius,
                                bgcolor: imageBg,
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={imageSrc}
                                alt={imageAlt}
                                loading="lazy"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: imageFit,
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
