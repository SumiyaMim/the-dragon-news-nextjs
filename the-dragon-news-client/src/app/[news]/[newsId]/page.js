import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {

  const { data: news } = await getSingleNews(params.newsId);
  // console.log(data);

  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="news"
            />
            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2" className="font-semibold mb-3 text-4xl">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Typography className="text-gray-600 text-sm">By {news.author.name}</Typography>
              <Typography className="text-gray-600 text-sm">Publish: {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "16px 0px",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>

            <Typography variant="h6" className="text-lg font-bold">
              ``Many desktop publishing packages and web page editors now use as
              their default model text!
            </Typography>
            <Typography variant="h6" className="text-sm text-gray-600 mt-3">-- John Abraham</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;