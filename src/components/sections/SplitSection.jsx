import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

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
    titleVariant = "h1",
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
            <Container maxWidth={maxWidth} sx={{ py }} component={MotionViewport}>
                <Grid container spacing={gap} alignItems="center">
                    {/* TEXT */}
                    <Grid item xs={12} md={6} sx={{ order: textOrder }}>
                        <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                            {overline ? (
                                <m.div variants={varFade().inDown}>
                                    <Typography variant="overline" sx={{ letterSpacing: 1 }}>
                                        {overline}
                                    </Typography>
                                </m.div>
                            ) : null}

                            {title ? (
                                <m.div variants={varFade().inDown}>
                                    <Typography variant={titleVariant}>
                                        {title}
                                    </Typography>
                                </m.div>
                            ) : null}

                            {subtitle ? (
                                <m.div variants={varFade().inDown}>
                                    <Typography variant="h6" sx={{ color: "text.secondary" }}>
                                        {subtitle}
                                    </Typography>
                                </m.div>
                            ) : null}

                            {description ? (
                                <m.div variants={varFade().inDown}>
                                    <Box sx={{ color: "text.secondary" }}>
                                        {typeof description === "string" ? (
                                            <Typography variant="body1">{description}</Typography>
                                        ) : (
                                            description
                                        )}
                                    </Box>
                                </m.div>
                            ) : null}

                            {ctaLabel ? (
                                <Box sx={{ pt: 1 }}>
                                    {/* CTA button: radius 40px, padding 25px 52px, DM Sans 16px/900 (Figma exact) */}
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href={ctaHref}
                                        onClick={onCtaClick}
                                        sx={{
                                            borderRadius: '40px',
                                            px: '52px',
                                            py: '25px',
                                            height: 'auto',
                                            fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
                                            fontWeight: 900,
                                            fontSize: '16px',
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
                            <m.div variants={varFade().inDown}>
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
                            </m.div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
