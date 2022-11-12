import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Sheet from "@mui/joy/Sheet";
import Scale from "@mui/icons-material/Scale";
import Add from "@mui/icons-material/Add";

export default function LabCalculator() {
  const [text, setText] = React.useState("");
  const appendText = (letter: string) => () => {
    setText((lastText) => `${lastText}${letter}`);
  };
  return (
    <Container>
      <Sheet
        sx={{
          borderRadius: "xs",
          boxShadow: "md",
          minWidth: "min-content",
          maxWidth: "max-content",
          my: 5,
          border: "3px solid",
          borderColor: "text.tertiary",
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
          "& > button": {
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
            borderRadius: "2px",
            bgcolor: "common.black",
            color: "common.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            py: 1,
            px: 2,
            fontSize: 32,
          }}
        >
          {text}
        </Box>
        <Button
          variant="soft"
          color="danger"
          className="clear"
          onClick={() => setText("")}
        >
          ล้าง
        </Button>
        <Button variant="outlined" className="plus" onClick={appendText("+")}>
          <Add />
        </Button>
        <Button className="tare" variant="soft">
          <Scale />
        </Button>
        <Button color="neutral" className="enter">
          ⏎
        </Button>
        <Button
          className="zero"
          variant="soft"
          color="neutral"
          onClick={appendText("0")}
        >
          0
        </Button>
        <Button
          className="dot"
          variant="soft"
          color="neutral"
          onClick={appendText(".")}
        >
          .
        </Button>
        <Button
          className="one"
          variant="soft"
          color="neutral"
          onClick={appendText("1")}
        >
          1
        </Button>
        <Button
          className="two"
          variant="soft"
          color="neutral"
          onClick={appendText("2")}
        >
          2
        </Button>
        <Button
          className="three"
          variant="soft"
          color="neutral"
          onClick={appendText("3")}
        >
          3
        </Button>
        <Button
          className="four"
          variant="soft"
          color="neutral"
          onClick={appendText("4")}
        >
          4
        </Button>
        <Button
          className="five"
          variant="soft"
          color="neutral"
          onClick={appendText("5")}
        >
          5
        </Button>
        <Button
          className="six"
          variant="soft"
          color="neutral"
          onClick={appendText("6")}
        >
          6
        </Button>
        <Button
          className="seven"
          variant="soft"
          color="neutral"
          onClick={appendText("7")}
        >
          {" "}
          7
        </Button>
        <Button
          className="eight"
          variant="soft"
          color="neutral"
          onClick={appendText("8")}
        >
          8
        </Button>
        <Button
          className="nine"
          variant="soft"
          color="neutral"
          onClick={appendText("9")}
        >
          9
        </Button>
      </Sheet>
    </Container>
  );
}
