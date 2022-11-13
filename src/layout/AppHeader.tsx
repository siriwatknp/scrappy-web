import Container from "@mui/joy/Container";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import HomeOutlined from "@mui/icons-material/HomeOutlined";

export default function AppHeader() {
  return (
    <Sheet sx={{ px: 2, py: 1, bgcolor: "background.level3" }}>
      <Container>
        <Typography startDecorator={<HomeOutlined />}>หน้าหลัก</Typography>
      </Container>
    </Sheet>
  );
}
