export const getAllCategories = async () => {
    const res = await fetch(
      "https://the-dragon-news-server-two-black.vercel.app/categories"
    );
    return res.json();
};