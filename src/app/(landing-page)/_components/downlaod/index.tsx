"use client";
import { useThemeContext } from "@/components/context/theme-context";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ToggleColorMode } from "../toggle-color-mode";

const CHATGPT_APP_STORE_URL = "#"; // TODO: Update with actual ChatGPT App Store URL when available
const DownloadUI = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
    id="download-header"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Box sx={{ float: "right", pt: 2, pr: 2 }}>
        <ToggleColorMode mode={mode} toggleColorMode={toggleTheme} />
      </Box>
      <Container
        id="Creators"
        sx={{
          pt: { xs: 10 },
          pb: { xs: 8, sm: 12 },
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="google-forms-creator-logo"
          />
          <Typography component="h2" variant="h3" color="text.primary">
            Google Forms Creator
          </Typography>

          <Typography variant="h5" color="text.secondary">
            {`Create Google Forms with ChatGPT - Programmatically Build Forms from Natural Language`}
          </Typography>
          <Grid container my={1} spacing={5} alignItems={"center"}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                color="text.primary"
                textAlign={"left"}
                py={2}
              >
                {`Create Google Forms Effortlessly Through ChatGPT Conversations`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign={"left"}
              >
                {`Google Forms Creator is a ChatGPT app that enables you to create Google Forms
                programmatically through natural language instructions. Simply tell ChatGPT what
                form you need—whether it's a customer feedback survey, a quiz, an employee
                satisfaction form, or any other type of form—and it will create a fully functional
                Google Form for you. The app handles validation, normalization, and compilation
                into Google Forms API calls, ensuring reliable and safe form creation every time.
                Supports multiple question types, quiz mode, section headers, and all essential
                form settings.`}
              </Typography>

              <Box
                py={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                gap={2}
              >
                <Button
                  href={CHATGPT_APP_STORE_URL}
                  target="_blank"
                  color="primary"
                  variant="contained"
                  size="large"
                  sx={{
                    width: { md: "400px", xs: "100%" },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontWeight: 700,
                    color: "#fff",
                    height: "56px",
                    fontSize: "1.1rem",
                  }}
                >
                  Get Google Forms Creator in ChatGPT
                </Button>
              </Box>

              <Box textAlign={"left"}>
                <Link
                  variant="subtitle2"
                  href="https://docs.google.com/document/d/178IOKHByGsXx8LoDA-B8QwrDFM_2RObWyghcRDFS9Tw/edit?tab=t.0#heading=h.d2xveqbf1ru3"
                >
                  {`By clicking the link above, you agree to our Terms of Service.`}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography component="h2" variant="h5" color="text.primary">
                    How It Works
                  </Typography>
                  <CardMedia
                    component={"iframe"}
                    height={300}
                    src="https://www.youtube.com/embed/8byNr5WwZck"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ mt: 1, borderRadius: 1, border: 0 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadUI;
