import { Container, Grid, useTheme } from "@mui/material"

export const Footer = () => {
  const theme = useTheme()

  return (
    <Container
      component='footer'
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minHeight: 400,
        padding: theme.spacing(3),
      }}
    >
      <Container maxWidth={'xl'} disableGutters>
        <Grid container>
          <Grid item>
            Footer
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
