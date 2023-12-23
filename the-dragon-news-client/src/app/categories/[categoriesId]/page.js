import { getCategoryNews } from "@/utils/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {

  // console.log(searchParams);
  const { data } = await getCategoryNews(searchParams.category);
  // console.log(data);
  
  return (
    <div className="my-5">
      <h1 className="uppercase font-bold">
        Total {searchParams.category} news:{" "}
        {data.length}
      </h1>
      <Grid
        className="pt-3"
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
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
                    <span
                      className="
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
                    </span>
                    <Typography gutterBottom variant="h6" className="font-semibold text-lg mt-2">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2 text-sm font-medium text-gray-500">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;