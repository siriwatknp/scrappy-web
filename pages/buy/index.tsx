import Link from "next/link";
import AppHeader from "src/layout/AppHeader";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import VideoCamOff from "@mui/icons-material/VideoCamOff";

export default function BuyPage() {
  return (
    <>
      <AppHeader />
      <Container
        component="main"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: "relative",
            borderRadius: "xs",
            bgcolor: "common.black",
            py: 5,
            px: 1,
          }}
        >
          <Typography
            textColor="danger.500"
            letterSpacing="0.1px"
            fontWeight="xl"
            startDecorator={
              <Box
                component="span"
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  bgcolor: "danger.500",
                }}
              />
            }
            sx={{ position: "absolute", left: "1rem", top: "10px" }}
          >
            REC
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: "xs",
              bgcolor: "common.black",
              height: "100%",
            }}
          >
            <VideoCamOff
              sx={{
                fontSize: "100px",
                color: "rgba(255 255 255 / 0.5)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            "--Button-minHeight": "64px",
          }}
        >
          <Link href="/buy/ticket" passHref legacyBehavior>
            <Button
              component="a"
              size="lg"
              variant="solid"
              color="success"
              sx={{ fontWeight: "xl" }}
            >
              เปิดตั๋วใหม่ (ไม่ระบุชื่อ)
            </Button>
          </Link>
          <Link href="/buy/sellers" passHref legacyBehavior>
            <Button
              component="a"
              size="lg"
              variant="solid"
              color="neutral"
              sx={{ fontWeight: "xl" }}
            >
              เปิดตั๋วใหม่ (ระบุชื่อ)
            </Button>
          </Link>
          <Button
            size="lg"
            variant="solid"
            color="warning"
            disabled
            sx={{ fontWeight: "xl" }}
          >
            ตั๋วรอจ่าย
          </Button>
          <Button
            size="lg"
            variant="soft"
            color="danger"
            disabled
            sx={{ fontWeight: "xl" }}
          >
            ตั๋วระงับชั่วคราว
          </Button>
          <Button
            size="lg"
            variant="soft"
            color="success"
            disabled
            sx={{ fontWeight: "xl" }}
          >
            ตั๋วจ่ายแล้ว
          </Button>
          <Button
            size="lg"
            variant="soft"
            color="neutral"
            disabled
            sx={{ fontWeight: "xl" }}
          >
            ราคารับซื้อ
          </Button>
        </Box>
      </Container>
    </>
  );
}
