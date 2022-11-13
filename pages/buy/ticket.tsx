import React from "react";
import AppHeader from "src/layout/AppHeader";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Edit from "@mui/icons-material/Edit";

export default function TicketPage() {
  return (
    <>
      <AppHeader />
      <Box
        component="main"
        sx={{
          px: 2,
          py: 3,
          display: "grid",
          gridTemplateColumns: "200px 1fr 450px",
          gridTemplateRows: "1fr",
          gap: 4,
          maxHeight: "calc(100vh - var(--header-height))",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, pr: 1 }}>
          {["โลหะ", "เศษเหล็ก", "กระดาษ", "พลาสติก", "แก้ว", "อื่นๆ"].map(
            (category, index) => (
              <Button
                key={index}
                size="xl"
                variant={index === 0 ? "solid" : "outlined"}
                color="neutral"
                sx={
                  index === 0
                    ? {
                        "&:hover": {
                          "&::before": {
                            borderLeftColor: "neutral.solidHoverBg",
                          },
                        },
                        "&:active": {
                          "&::before": {
                            borderLeftColor: "neutral.solidActiveBg",
                          },
                        },
                        "&::before": {
                          transition: "inherit",
                          content: '""',
                          display: "block",
                          position: "absolute",
                          height: "100%",
                          right: 0,
                          transform: "translateX(calc(100% - 5px))",
                          borderRadius: "4px",
                          border: "32px solid",
                          borderColor: "neutral.solidBg",
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                        },
                      }
                    : { bgcolor: "background.surface" }
                }
              >
                {category}
              </Button>
            )
          )}
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gridAutoRows: "100px",
            gap: 0.5,
            height: "100%",
            overflow: "auto",
            pr: 2,
            mr: -2,
          }}
        >
          {(
            [
              { color: "danger", label: "ทองแดงใหญ่ปอก" },
              { color: "primary", label: "อลูมิเนียมล้อแม็ค" },
              { color: "success", label: "อลูมิเนียมฝาแกะ" },

              { color: "danger", label: "ทองแดงใหญ่ช๊อต" },
              { color: "primary", label: "อลูมิเนียมสายไฟ" },
              { color: "success", label: "อลูมิเนียมฝาไม่แกะ" },

              { color: "danger", label: "ทองแดงเส้นใหญ่" },
              { color: "primary", label: "อลูมิเนียมหนา" },
              { color: "neutral", label: "อลูมิเนียมตูดกระทะ" },

              { color: "danger", label: "ทองแดงชุบขาว" },
              { color: "primary", label: "อลูมิเนียมบาง" },
              { color: "primary", label: "อลูมิเนียมฉาก" },

              { color: "danger", label: "ทองแดงเข็มชุบ/เข็มเผา" },
              { color: "primary", label: "อลูมิเนียมกระป๋อง" },
              { color: "danger", label: "อลูมิเนียมหม้อน้ำไส้ทองแดง" },

              { color: "danger", label: "รังผึ้งทองแดงล้วน" },
              { color: "primary", label: "อลูมิเนียมหม้อน้ำ" },
              {
                color: "danger",
                label: "อลูมิเนียมหม้อน้ำไส้ทองแดง-ติดเหล็ก",
              },

              { color: "warning", label: "ทองเหลืองเนื้อแดง" },
              { color: "primary", label: "อลูมิเนียมกระทะผัด" },
              { color: "neutral", label: "อลูมิเนียมจั๊บ" },

              { color: "warning", label: "ทองเหลืองหนา" },
              { color: "danger", label: "หม้อน้ำใส้มีเนียม" },
              { color: "warning", label: "ตะกั่วแข็ง" },

              { color: "warning", label: "ทองเหลืองบาง" },
              { color: "neutral", label: "อลูมิเนียมมุ้งลวด" },
              { color: "neutral", label: "ตะกั่วอ่อน" },

              { color: "warning", label: "หม้อน้ำทองเหลือง" },
              { color: "neutral", label: "อลูมิเนียมมู่ลี่" },
              { color: "success", label: "สแตนเลส" },
            ] as const
          ).map((item) => (
            <Button
              key={item.label}
              size="xl"
              variant="soft"
              color={item.color}
              sx={{
                px: 1,
                border: "1px solid",
                borderColor: `${item.color}.outlinedBorder`,
              }}
            >
              {item.label || "unknown"}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 100px 100px",
            gap: 1,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Sheet
            sx={{
              minHeight: 0,
              gridColumn: "1 / -1",
              borderRadius: "xs",
              display: "flex",
              flexDirection: "column",
              p: 2,
              boxShadow: "sm",
            }}
          >
            <Box sx={{ minHeight: 0, overflowY: "auto" }}>
              {[...Array(10)].map((_, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <Divider />}
                  <Box sx={{ py: 1 }}>
                    <Typography
                      fontSize="xl"
                      startDecorator={<Typography>{index + 1}</Typography>}
                      endDecorator={<Edit />}
                    >
                      <b>ทองแดงใหญ่ปอก</b>
                    </Typography>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
            <Divider sx={{ mt: "auto", mb: 1 }} />
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "max-content max-content",
                ml: "auto",
              }}
            >
              <Typography fontSize="xl">น้ำหนักรวม</Typography>
              <Typography fontSize="xl" sx={{ justifySelf: "flex-end" }}>
                <b>51.8</b> กก.
              </Typography>
              <Typography fontSize="xl">จำนวนเงิน</Typography>
              <Typography fontSize="xl" sx={{ justifySelf: "flex-end" }}>
                <b>9,286</b> บาท
              </Typography>
            </Box>
          </Sheet>
          <Button
            size="xl"
            variant="outlined"
            color="neutral"
            sx={{ bgcolor: "background.surface" }}
          >
            ปิดตั๋ว
          </Button>
          <Button size="xl" variant="solid" color="success">
            จ่าย
          </Button>
          <Button size="xl" variant="solid" color="warning">
            ระงับชั่วคราว
          </Button>
          <Button size="xl" variant="solid" color="danger">
            ยกเลิก
          </Button>
        </Box>
      </Box>
    </>
  );
}
