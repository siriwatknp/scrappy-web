import React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Scale from "@mui/icons-material/Scale";
import Add from "@mui/icons-material/Add";

export default function LabCalculator() {
  const [text, setText] = React.useState("");
  const appendText = (letter: string) => () => {
    setText((lastText) => `${lastText}${letter}`);
  };
  return (
    <Container>
      <Paper
        elevation={8}
        sx={{
          minWidth: "min-content",
          maxWidth: "max-content",
          my: 5,
          border: "3px solid",
          borderColor: "grey.700",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(64px, 100px))",
          gridTemplateRows: "repeat(6, 64px)",
          gridAutoFlow: "row",
          gridTemplateAreas:
            '"display display display display"\n    "seven eight nine clear"\n    "four five six plus"\n    "one two three plus"\n    "zero dot enter enter"\n    "tare tare tare tare"',
          gap: 0.5,
          p: 0.5,
          "& .display": { gridArea: "display" },
          "& .clear": { gridArea: "clear" },
          "& .plus": { gridArea: "plus" },
          "& .tare": { gridArea: "tare" },
          "& .enter": { gridArea: "enter" },
          "& .zero": { gridArea: "zero" },
          "& .dot": { gridArea: "dot" },
          "& .one": { gridArea: "one" },
          "& .two": { gridArea: "two" },
          "& .three": { gridArea: "three" },
          "& .four": { gridArea: "four" },
          "& .five": { gridArea: "five" },
          "& .six": { gridArea: "six" },
          "& .seven": { gridArea: "seven" },
          "& .eight": { gridArea: "eight" },
          "& .nine": { gridArea: "nine" },
          "& > *": {
            borderRadius: "2px",
            border: "1px solid",
            borderColor: "divider",
            fontSize: "24px",
          },
        }}
      >
        <Box
          className="display"
          sx={{
            bgcolor: "common.black",
            color: "common.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            py: 1,
            px: 2,
          }}
        >
          {text}
        </Box>
        <ButtonBase className="clear">ล้าง</ButtonBase>
        <ButtonBase className="plus" onClick={appendText("+")}>
          <Add />
        </ButtonBase>
        <ButtonBase className="tare">
          <Scale />
        </ButtonBase>
        <ButtonBase className="enter">⏎</ButtonBase>
        <ButtonBase className="zero" onClick={appendText("0")}>
          0
        </ButtonBase>
        <ButtonBase className="dot" onClick={appendText(".")}>
          .
        </ButtonBase>
        <ButtonBase className="one" onClick={appendText("1")}>
          1
        </ButtonBase>
        <ButtonBase className="two" onClick={appendText("2")}>
          2
        </ButtonBase>
        <ButtonBase className="three" onClick={appendText("3")}>
          3
        </ButtonBase>
        <ButtonBase className="four" onClick={appendText("4")}>
          4
        </ButtonBase>
        <ButtonBase className="five" onClick={appendText("5")}>
          5
        </ButtonBase>
        <ButtonBase className="six" onClick={appendText("6")}>
          6
        </ButtonBase>
        <ButtonBase className="seven" onClick={appendText("7")}>
          {" "}
          7
        </ButtonBase>
        <ButtonBase className="eight" onClick={appendText("8")}>
          8
        </ButtonBase>
        <ButtonBase className="nine" onClick={appendText("9")}>
          9
        </ButtonBase>
      </Paper>
    </Container>
  );
}
