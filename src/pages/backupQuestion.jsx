import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhishingIcon from "@mui/icons-material/Phishing";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import logo from "/logo1.png";
//Link as RouterLink

import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../redux/questionSlice";

const Question = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gotoNextPage = useNavigate();

  const question = useSelector((state) => state.question.value);

  const nextScreen = () => {
    if (parseInt(id) + 1 >= question.length) {
      //game over"
      gotoNextPage("/score");
    } else {
      gotoNextPage(`/question/${parseInt(id) + 1}`);
    }
  };

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      height={"100vh"}
      minWidth={"100vw"}
      padding={0}
      margin={0}
    >
      {/* logo */}
      <div
        style={{
          display: "flex",
          padding: "0",
          margin: "0",
          // width: "100%",
          borderRadius: "15px",
          justifyContent: "right",
          position: "absolute",
          right: "3px",
          top: "5px",
          // backgroundColor:"#d69e2e"
        }}
      >
        <a href="https://www.cybreex.com/" target={"_blank"} rel={"noreferrer"}>
          <Image width={["100px", "100px", "150px"]} src={logo} alt="cybreex" />
        </a>
      </div>
      {/* end of logo */}

      <Box width={"100%"} align={"center"}>
        <Text dir="rtl" fontSize="lg">
          שאלה {parseInt(id) + 1} / {question.length}
        </Text>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          align={"center"}
          maxHeight={"82vh"}
          src={question[id].q}
          alt={question[id].alt}
          border={"1px solid black"}
        />
      </Box>

      <ButtonGroup
        spacing={4}
        direction="row"
        display="flex"
        justifyContent="space-evenly"
      >
        <Button
          rightIcon={<VerifiedUserIcon />}
          colorScheme="pink"
          padding={5}
          onClick={() => {
            dispatch(handleClick({ id, isFake: "legit" }));
            nextScreen();
          }}
        >
          אמיתי
        </Button>
        <Button
          rightIcon={<PhishingIcon />}
          colorScheme="cyan"
          padding={5}
          onClick={() => {
            dispatch(handleClick({ id, isFake: "fake" }));
            nextScreen();
          }}
        >
          דיוג
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Question;
