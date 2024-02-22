import { Container, Grid, Link, styled, useTheme } from "@mui/material"

export const Header = () => {
  const theme = useTheme()

  return (
    <Container
      component='header'
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3),
      }}
    >
      <Container maxWidth={'xl'} disableGutters>
        <Grid container>
          <Grid item lg={1}>
            <Link
              href="/"
              variant="h6"
              color="inherit"
              underline="none"
            >Home</Link>
          </Grid>
          <Grid item lg={1}>
            <Link
              href="/about"
              variant="h6"
              color="inherit"
              underline="none"
            >About</Link>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

const HeaderContainer = styled(Container)(({ theme }) => ({



}))
