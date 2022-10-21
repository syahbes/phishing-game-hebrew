import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { setRaw, newGame } from "../redux/questionSlice";
import logo from "/logo1.png";

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Home = () => {
  const [game, setGame] = useState(true);
  const dispatch = useDispatch();
  // const [qData, setQData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch("/mappingSrc.js")
        .then((response) => response.json())
        .then((response) => {
          // setQData(response);
          dispatch(setRaw(response));
          setGame(false);
          dispatch(newGame());
        })
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

  return (
    <Box
      bgColor={"yellow.100"}
      padding={10}
      margin={"auto"}
      borderRadius={30}
      boxShadow={"5px 10px"}
      border={"2px solid black"}
    >
            <div
        style={{
          display: "flex",
          padding: "0",
          margin: "0",
          // width: "100%",
          borderRadius:"15px",

          justifyContent: "right",
          position: "absolute",
          right: "3px",
          top: "5px",
          
          // backgroundColor:"#d69e2e"
        }}
      >
        <a href="https://www.cybreex.com/" target={"_blank"} rel={"noreferrer"}>
        <Image width={["100px","100px","150px"]} src={logo} alt="cybreex" 
        
        />
        </a>
      </div>
     
      <Stack spacing={10}>
        <Heading dir="rtl">ניסיונות דיוג (פישיניג)</Heading>
        <Text dir="rtl" fontSize="3xl">האם תצליחו לזהות את כל הזיופים?</Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"left"}
          width={"100%"}
        >
          <Button
            disabled={game}
            as={RouterLink}
            to="/question/0"
            colorScheme="purple"
            size="lg"
            // onClick={() => dispatch(newGame())}
            rightIcon={<PlayCircleFilledIcon/>}
            
          >
            התחלה
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
