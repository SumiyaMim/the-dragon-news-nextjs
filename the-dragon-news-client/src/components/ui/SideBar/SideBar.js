import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Stack, Divider } from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
  import SidebarNewsCard from "./SideBarNewsCard";
  
  const SideBar = () => {
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={sideBarNews} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <p
                className="
                        w-[100px]
                        bg-red-600
                        px-3
                        py-1
                        text-white
                        my-5
                        rounded
                        text-sm
                        "
              >
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold text-lg">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-3 text-sm font-medium text-gray-500">
                By Anika Rim - Aug 08 2023
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
  
        <Stack my={3} columnGap={2}>
          <SidebarNewsCard />
          <SidebarNewsCard />
          <SidebarNewsCard />
          <SidebarNewsCard />
          <SidebarNewsCard />
        </Stack>
  
        <Box>
          <Image
            src={sideBottomNews}
            height={400}
            width={800}
            alt="rectangle world image"
          />
        </Box>
      </Box>
    );
  };
  
  export default SideBar;