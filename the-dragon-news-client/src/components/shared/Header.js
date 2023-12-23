import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {

  const currentDate = getCurrentDate();

  return (
    <Box className="w-full my-8">
      <Container>
        <Image
          src={headingImage}
          width={400}
          height={400}
          alt="logo"
          className=" mx-auto"
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2 text-base"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center" className="text-sm text-gray-700 font-medium">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;