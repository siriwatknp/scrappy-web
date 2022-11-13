import React from "react";
import Head from "next/head";
import Link from "next/link";
import AppHeader from "src/layout/AppHeader";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import PostAdd from "@mui/icons-material/PostAdd";

{
  /* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */
}

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Scrappy</title>
        <meta
          name="description"
          content="The perfect companion for your recycling factory."
        />
      </Head>
      <AppHeader />
      <Container>
        <Box
          sx={{
            p: 2,
            py: 5,
            gap: 2,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 200px))",
          }}
        >
          <Box>
            <Link passHref legacyBehavior href="/buy">
              <Button
                component="a"
                variant="outlined"
                color="neutral"
                sx={{
                  width: "100%",
                  bgcolor: "background.surface",
                  borderRadius: "50%",
                  aspectRatio: "1",
                  "--Icon-fontSize": "48px",
                }}
              >
                <PostAdd />
              </Button>
            </Link>
            <Typography
              fontSize="xl2"
              fontWeight="xl"
              sx={{ mt: 2, textAlign: "center" }}
            >
              รับซื้อ
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
