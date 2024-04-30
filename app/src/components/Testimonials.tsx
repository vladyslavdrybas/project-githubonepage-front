import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { avatar, whiteLogos, darkLogos } from "@/artifacts/faked";

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src={avatar[0]} />,
    name: 'Remy Sharp',
    occupation: 'Senior Engineer',
    testimonial: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    logos: [whiteLogos[0],darkLogos[0]],
  },
  {
    avatar: <Avatar alt="Travis Howard" src={avatar[1]} />,
    name: 'Travis Howard',
    occupation: 'Lead Product Designer',
    testimonial: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",

    logos: [whiteLogos[1],darkLogos[1]],
  },
  {
    avatar: <Avatar alt="Cindy Baker" src={avatar[2]} />,
    name: 'Cindy Baker',
    occupation: 'CTO',
    testimonial: 'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
    logos: [whiteLogos[2],darkLogos[2]],
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={avatar[3]} />,
    name: 'Julia Stewart',
    occupation: 'Senior Engineer',
    testimonial: "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
    logos: [whiteLogos[3],darkLogos[3]],
  },
  {
    avatar: <Avatar alt="Travis Howard" src={avatar[4]} />,
    name: 'John Smith',
    occupation: 'Product Designer',
    testimonial: "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
    logos: [whiteLogos[4],darkLogos[4]],
  },
  {
    avatar: <Avatar alt="Cindy Baker" src={avatar[5]} />,
    name: 'Daniel Wolf',
    occupation: 'CDO',
    testimonial: "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
    logos: [whiteLogos[5],darkLogos[5]],
  },
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={theme.palette.mode !== 'light' ? testimonial.logos[0] : testimonial.logos[1]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
