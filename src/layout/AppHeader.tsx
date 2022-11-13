import Link from "next/link";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import { useRouter } from "next/router";

export default function AppHeader() {
  const router = useRouter();
  const fragments = [
    "/",
    ...router.pathname.split("/").filter((fragment) => !!fragment),
  ];
  return (
    <Sheet sx={{ bgcolor: "background.level2" }}>
      <Container
        sx={{
          height: "var(--header-height)",
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Breadcrumbs sx={{ p: 0, "--Breadcrumbs-gap": "1rem" }}>
          {fragments.map((url, index) => {
            const pathnameMapping: Record<string, string> = {
              buy: "รับซื้อ",
              ticket: "เปิดตั๋วใหม่",
              sellers: "รายชื่อลูกค้า",
            };
            if (fragments.length === 1 || index === fragments.length - 1) {
              if (url === "/") {
                return (
                  <Typography key={url} startDecorator={<HomeOutlined />}>
                    หน้าหลัก
                  </Typography>
                );
              }
              return <Typography key={url}>{pathnameMapping[url]}</Typography>;
            }
            if (url === "/") {
              return (
                <Link key={url} href="/" passHref legacyBehavior>
                  <Button
                    size="lg"
                    component="a"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<HomeOutlined />}
                    sx={{
                      borderRadius: "2rem",
                      bgcolor: "background.surface",
                    }}
                  >
                    หน้าหลัก
                  </Button>
                </Link>
              );
            }
            return (
              <Link
                key={url}
                href={`/${fragments.slice(1, index + 1).join("/")}`}
                passHref
                legacyBehavior
              >
                <Button
                  size="lg"
                  component="a"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    borderRadius: "2rem",
                    bgcolor: "background.surface",
                  }}
                >
                  {pathnameMapping[url]}
                </Button>
              </Link>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Sheet>
  );
}
