import Image from "next/image";
import Link from "next/link";
import AppHeader from "src/layout/AppHeader";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";

export default function Sellers() {
  return (
    <>
      <AppHeader />
      <Container sx={{ my: 3 }}>
        <Box sx={{ display: "flex" }}>
          <Input
            startDecorator={<Search />}
            size="lg"
            placeholder="พิมพ์เพื่อค้นหา"
            sx={{ mr: "auto", flexBasis: 400 }}
          />
          <Link href="/buy/ticket" passHref legacyBehavior>
            <Button
              component="a"
              size="lg"
              variant="solid"
              color="success"
              startDecorator={<Add />}
            >
              ลูกค้าใหม่
            </Button>
          </Link>
        </Box>
        <Box
          component="main"
          sx={{
            my: 2,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
            gap: 2,
          }}
        >
          {[...Array(40)].map((_, index) => (
            <Card variant="outlined" size="sm" row key={index} sx={{ gap: 1 }}>
              <AspectRatio ratio="1" sx={{ width: 100 }}>
                <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" />
              </AspectRatio>
              <CardContent>
                <Typography fontWeight="xl">#101296</Typography>
                <Typography>นายสมชาย</Typography>
                <Typography>
                  รถกระบะ (<b>ตต-1234</b>)
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
