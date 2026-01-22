import { Box, Paper, Stack, Typography } from "@mui/material";

export function FeatureCard({
    variant = "white", // "white" | "gray"
    icon,              // ReactNode (puede ser <img/> o un Icon de MUI)
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
                borderRadius: 1,
                px: 3,
                py: 3.5,
                bgcolor: isGray ? "grey.50" : "common.white",
                boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.06)",
                border: "1px solid",
                borderColor: isGray ? "grey.100" : "grey.100",
            }}
        >
            <Stack spacing={2} alignItems="center">
                {/* Icon container */}
                {icon && (
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 1,
                            bgcolor: "#C2D565",
                            display: "grid",
                            placeItems: "center",
                            "& svg": { fontSize: 22 },
                            overflow: "hidden",
                        }}
                    >
                        {icon}
                    </Box>
                )}

                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "text.primary" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
                        {description}
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
