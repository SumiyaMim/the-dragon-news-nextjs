import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
  
  const LatestNews = async () => {

    const { data } = await getAllNews();
    // console.log(data[0]);

    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={data[0].thumbnail_url}
                width={800}
                height={500}
                alt="top news"
              />
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
                {data[0].category}
              </p>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold text-3xl mt-2">
                {data[0].title}
              </Typography>
              <Typography gutterBottom className="my-2 text-sm font-medium text-gray-500">
                By {data[0].author.name} - {data[0].author.published_date}
              </Typography>
  
              <Typography variant="body2" color="text.secondary">
                {data[0].details.length > 200
                  ? data[0].details.slice(0, 200) + "..."
                  : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  
        <Grid
          className="mt-5"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data.slice(0, 4).map((news) => (
            <Grid key={news.id} item xs={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="top news"
                    />
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
                      {news.category}
                    </p>
                    <Typography gutterBottom className="font-semibold text-lg mt-2">
                        {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2 text-sm font-medium text-gray-500">
                        By {news.author.name} - {news.author.published_date}
                    </Typography>
  
                    <Typography variant="body2" color="text.secondary">
                        {news.details.length > 100
                        ? news.details.slice(0, 100) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default LatestNews;