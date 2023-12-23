export const getAllNews = async () => {
    const res = await fetch(
      "https://the-dragon-news-server-two-black.vercel.app/all-news",
      {
        next: {
          revalidate: 30,
        },
      }
    );
    return res.json();
};