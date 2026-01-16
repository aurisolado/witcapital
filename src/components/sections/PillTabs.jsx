import { Box, Button, Stack } from "@mui/material";

export default function PillTabs({
    tabs = [],                // [{ id: "cards", label: "TIPOS DE TARJETAS" }, ...]
    value,                    // id activo
    onChange,                 // (id) => void
    ariaLabel = "Sección de pestañas",
    size = "medium",          // "small" | "medium"
    fullWidthOnMobile = false // si quieres pills full width en xs
}) {
    const padY = size === "small" ? 0.9 : 1.1;
    const padX = size === "small" ? 2.6 : 3.4;

    return (
        <Box
            role="tablist"
            aria-label={ariaLabel}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Stack
                direction="row"
                spacing={{ xs: 1.5, md: 3 }}
                sx={{
                    px: 2,
                    py: 2,
                    width: "100%",
                    justifyContent: "center",
                    // Responsive: en móvil, scroll horizontal (como “chips”)
                    overflowX: { xs: "auto", md: "visible" },
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {tabs.map((t) => {
                    const active = t.id === value;

                    return (
                        <Button
                            key={t.id}
                            role="tab"
                            aria-selected={active}
                            onClick={() => onChange?.(t.id)}
                            disableElevation
                            sx={{
                                whiteSpace: "nowrap",
                                flex: fullWidthOnMobile ? { xs: 1, sm: "unset" } : "unset",
                                borderRadius: 999,
                                px: padX,
                                py: padY,
                                textTransform: "uppercase",
                                letterSpacing: 0.6,
                                fontWeight: 800,
                                fontSize: { xs: 11, sm: 12, md: 12 },
                                transition: "all 200ms ease",
                                bgcolor: active ? "primary.main" : "common.white",
                                color: active ? "common.white" : "text.primary",
                                border: "1px solid",
                                borderColor: active ? "primary.main" : "grey.200",
                                boxShadow: active ? "0px 10px 22px rgba(15, 23, 42, 0.10)" : "none",
                                "&:hover": {
                                    bgcolor: active ? "primary.dark" : "grey.50",
                                    borderColor: active ? "primary.dark" : "grey.300",
                                },
                            }}
                        >
                            {t.label}
                        </Button>
                    );
                })}
            </Stack>
        </Box>
    );
}
