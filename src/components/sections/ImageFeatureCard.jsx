import { Box, Paper, Stack, Typography } from "@mui/material";

export function ImageFeatureCard({
    imageSrc,
    imageAlt = "",
    imageFit = "contain", // "cover" | "contain"
    title,
    description,
}) {
    return (
        <Stack spacing={2.2} sx={{ height: "100%" }}>
            {/* Image card */}
            <Paper
                elevation={0}
                sx={{
                    borderRadius: 4,
                    bgcolor: "grey.50",
                    border: "1px solid",
                    borderColor: "grey.100",
                    boxShadow: "0px 12px 26px rgba(15, 23, 42, 0.06)",
                    overflow: "hidden",
                    width: "100%",
                    // relación parecida a la captura
                    aspectRatio: "4 / 3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
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
            </Paper>

            {/* Text below */}
            <Box sx={{ px: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                    {title}
                </Typography>

                <Typography variant="body2" sx_toggle={undefined} sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
                    {description}
                </Typography>
            </Box>
        </Stack>
    );
}
