import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {

  const { data: allCategories } = await getAllCategories();
  //   console.log(allCategories);

  return (
    <Box className="mt-5 bg-gray-100 p-5">
      <Typography variant="h6" className="text-base mb-2 font-semibold">Categories</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category.id} className="border-gray-400 text-gray-500 normal-case hover:text-white hover:border-red-600 hover:bg-red-600">
            <Link
              href={`/categories/news?category=${category.title.toLowerCase()}`}
            >
              {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;