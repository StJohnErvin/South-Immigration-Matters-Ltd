/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui";
import banner from "assets/images/banner.png";
import paypal from "assets/images/paypal.png";
import google from "assets/images/google.png";
import dropbox from "assets/images/dropbox.png";

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container >
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}> We provide straightforward and honest advice to anybody wanting to
              visit, study, work and live in New Zealand. </Heading>
            
            <Text as="p" sx={styles.text}>
              Let us assist you in making informed decisions on any visa
              applications you intend to pursue. This way, you save valuable
              time and avoid costly mistakes. For example, we DO NOT suggest
              courses for you to take without first identifying your goals and
              plans after you graduate. Let us align your skills, talents and
              background first before we suggest you to contact educational
              institutions offering courses that suit you and your goals.
            </Text>
            <Button variant="primary" sx={styles.button}>
              Explore Now
            </Button>
                  </Box>
          {/* <Box sx={styles.illustration}>
           
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["20px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1, 1, 1, 1, 1, 2],
    color: "textSecondary",
    mt: ["14px", "19px"],
  },
  button: {
    display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    mt: ["20px", "45px", "45px", "30px", "45px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"],
      },
    },
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"],
    },
  },
};
