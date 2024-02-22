import { Container, Grid, styled, useTheme } from "@mui/material"

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
          <Grid item>
            Header
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

const HeaderContainer = styled(Container)(({ theme }) => ({



}))
