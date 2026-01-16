import { Box, Fade, Paper } from "@mui/material";
import PillTabs from "./PillTabs";

export default function TabSection({
    variant = "white", // "white" | "gray"
    tabs,
    value,
    onChange,
    childrenById,

    // NEW
    wrapContent = true,
    contentVariant = "panel", // "panel" | "none"
    contentSx,
    containerSx,
    fadeMs = 250,
}) {
    const isGray = variant === "gray";

    const content = childrenById?.[value] ?? null;

    const panelSx =
        contentVariant === "panel"
            ? {
                borderRadius: { xs: 2, md: 2 },

                bgcolor: "common.white",
                border: "1px solid",
                borderColor: "grey.100",
                boxShadow: "0px 18px 45px rgba(15, 23, 42, 0.08)",
                ...contentSx,
            }
            : { ...contentSx };

    return (
        <Paper
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 0,
                pt: 5,
                pb: 5,
                bgcolor: isGray ? "grey.50" : "common.white",
                boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.06)",
                border: "1px solid",
                borderColor: isGray ? "grey.100" : "grey.100",
            }}
        >
            <Box sx={containerSx}>
                <PillTabs tabs={tabs} value={value} onChange={onChange} />

                <Box sx={{ mt: { xs: 3, md: 5 } }}>
                    <Fade in key={value} timeout={fadeMs}>
                        <Box>
                            {wrapContent && contentVariant === "panel" ? (
                                <Paper elevation={0} sx={panelSx}>
                                    {content}
                                </Paper>
                            ) : (
                                <Box sx={panelSx}>{content}</Box>
                            )}
                        </Box>
                    </Fade>
                </Box>
            </Box>
        </Paper>
    );
}
