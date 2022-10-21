import React from "react";
import { Link as RouterLink } from "react-router-dom";
//

import { useSelector, useDispatch } from "react-redux";
import { newGame } from "../redux/questionSlice";

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "/logo2.png";

const Score = () => {
  const score = useSelector((state) => state.question.score);
  const wrongAnswers = useSelector((state) => state.question.wrongAnswers);
  const dispatch = useDispatch();

  const motivation = () => {
    switch (score) {
      case 10:
        return "פשוט מעולה! ציון מצויין זה סימן לכך שהמחשב שלך מוגן!";
        break;
      case 9:
        return "ואווו, עוד מאמץ קטן והמחשב שלך מוגן!";
        break;
      case 8:
        return "כל הכבוד!  רק האקר חכם במיוחד יצליח לנצח אותך. זה הזמן לתרגל עוד קצת כדי להיות מאסטר!";
        break;
      case 7:
        return "יפה! האקראים יצטרכו להשקיע יותר מאמץ מהממוצע על מנת להתמודד איתך! ";
        break;
      case 6:
        return "ציונך מעל הממוצע!  מומלץ לנסות שוב ולעבור על ההסברים ולהיות טוב יותר!";
        break;
      case 5:
        return "הציון שלך בדיוק על הממוצע!  זה הזמן לעבור על ההסברים לתשובות ולהפוך לטוב יותר ממוצע!";
        break;
      case 4:
        return "כדאי לתרגל שוב כדי להיות מוגן. אל דאגה, גם תומאס אדיסון נכשל מעל 10000 עד שהצליח לייצר את הנורה הראשונה.";
        break;
      case 3:
        return "הציון לא גבוה אבל כמו שאמר תומס ווטסון - מייסד חברת IBM -  `הדרך להצליח היא  להכפיל את שיעור הכישלון שלך`";
        break;
      case 2:
        return "לא נורא, גם רומא לא נבנתה ביום אחד. יאללה לנסות שוב!";
        break;
      case 1:
        return "אופס, הציון שלך נמוך. אבל, כפי שאמר הנרי פורד `כישלון הוא ההזדמנות לנסות מחדש בצורה אינטיליגנטית יותר`";
        break;
      case 0:
        return "האקרים אוכלים אותך בלי מלח!  אבל אל דאגה, רק מי שמעז להיכשל בגדול יוכל להצליח בגדול! כדאי לעבור על ההסבר לתשובות.";
        break;

      default:
        return "";
        break;
    }

    return "יופי";
  };

  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        backgroundColor="black"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
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
          <a
            href="https://www.cybreex.com/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Image
              width={["100px", "100px", "150px"]}
              src={logo}
              alt="cybreex"
            />
          </a>
        </div>
        {/* end logo */}

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          // gap={"20px"}
          margin={"auto"}
          padding={"25px"}
          border={"1px solid cyan"}
          borderRadius={"15px"}
          boxShadow={
            "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)"
          }
          //  minWidth={"70%"}
          maxWidth={"80vw"}
        >
          <Heading as="h2" size="xl" color="cyan.200" marginBottom={"25px"}>
            Game Over
          </Heading>

          <Box dir="rtl" gap={"10px"} display={"flex"} flexDirection={"row"} alignItems="center" justifyContent={"center"}>
          <Text fontSize="lg" dir="rtl"  color="yellow">{score}</Text>
          <Text fontSize="lg" dir="rtl" color={"white"} >תשובות נכונות</Text>
          </Box>
          <Box dir="rtl" gap={"10px"} display={"flex"} flexDirection={"row"} alignItems="center" justifyContent={"center"} marginBottom={"25px"}>
          <Text fontSize="lg" dir="rtl"  color="tomato">{wrongAnswers.length}</Text>
          <Text fontSize="lg" dir="rtl" color={"white"} >טעויות</Text>
          </Box>
          

          <Text dir="rtl" color={"whiteAlpha.700"} marginBottom={"40px"}>{motivation()}</Text>

          <ButtonGroup
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"25px"}
          >
            {wrongAnswers.length > 0 ? (
              <Button
                // rightIcon={<HelpOutlineIcon/>}
                as={RouterLink}
                to="/showright/0"
                colorScheme="purple"
                size="md"
                dir="rtl"
              >
                איפה טעיתי ?
              </Button>
            ) : (
              ""
            )}
            <Button
              rightIcon={<RestartAltIcon />}
              as={RouterLink}
              to="/question/0"
              colorScheme="yellow"
              size="md"
              //this is the wrong syntax : onClick={() => { dispatch(newGame); }}
              onClick={() => dispatch(newGame())}
            >
              להתחיל מחדש
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"10px"}
          flexDirection={"row-reverse"}
        >
          <Text
            dir="rtl"
            fontSize="2xl"
            color="white"
            marginBottom={"25px"}
            gap={"25px"}
          >
            שיתוף :
          </Text>

          <a
            href="https://api.whatsapp.com/send?text=%20https%3A%2F%2Fcybregame.co.il"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Button colorScheme={"whatsapp"} padding={"0"}>
              <WhatsAppIcon />
            </Button>
          </a>
          <a
            href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcybergame.co.il"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Button
              href="google.com"
              target={"_blank"}
              colorScheme={"facebook"}
              padding={"0"}
            >
              <FacebookIcon />
            </Button>
          </a>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"20px"}
          gap={"10px"}
        >
          <Text color={"#535353"}>Made with 🖤 by</Text>
          <a
            style={{ color: "#535353" }}
            href="https://github.com/syahbes"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Shlomi
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Score;
