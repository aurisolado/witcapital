import { Box, Paper, Stack, Typography } from "@mui/material";

export function FeatureCard({
    variant = "white", // "white" | "gray"
    icon,              // ReactNode
    title,
    description,
}) {
    const isGray = variant === "gray";

    return (
        <Paper
            elevation={0}
            sx={{
                height: "100%",
                width: "100%",
                borderRadius: '22px',          // Figma: 22px
                px: 3,
                py: 3.5,
                bgcolor: isGray ? '#f5f7fa' : 'common.white',
                boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.06)",
                border: "1px solid",
                borderColor: '#e8ecf0',
            }}
        >
            <Stack spacing={2} alignItems="center">
                {/* Icon container: 50×50px, radius 10px, #c2d565 bg (Figma exact) */}
                {icon && (
                    <Box
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '10px',
                            bgcolor: '#C2D565',
                            display: 'grid',
                            placeItems: 'center',
                            flexShrink: 0,
                            "& svg": { fontSize: 24, color: '#424e1f' },
                            overflow: 'hidden',
                        }}
                    >
                        {icon}
                    </Box>
                )}

                <Box sx={{ textAlign: 'center' }}>
                    {/* Card title: Inter 21px/600 (Figma: subtitle/h5) */}
                    <Typography variant="h5" sx={{ color: 'text.primary', mb: 1 }}>
                        {title}
                    </Typography>
                    {/* Description: Inter 16px/400 (Figma exact) */}
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {description}
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
