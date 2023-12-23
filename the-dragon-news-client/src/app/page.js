import LatestNews from "@/components/ui/LatestNews"
import SideBar from "@/components/ui/SideBar/SideBar"
import { Grid } from "@mui/material"

const HomePage = () => {
  return (
    <>
     <Grid container spacing={3}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
