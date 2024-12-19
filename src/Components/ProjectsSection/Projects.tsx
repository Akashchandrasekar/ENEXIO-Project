import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const images = {
  one: [
    "https://tse4.mm.bing.net/th?id=OIP.trZH4TDD6iG4cEiH85tENwHaD4&pid=Api&P=0&h=180",
    "https://img.freepik.com/free-photo/man-is-working-metal-factory-he-is-welding-piece-rail-using-special-tools_613910-17144.jpg?ga=GA1.1.1848629293.1665650303&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/architects-hold-building-plan-check-work_1150-24372.jpg?t=st=1734508801~exp=1734512401~hmac=1ab242a6b98e9630bc59e5beb432c0022934a0be5fae17b268ecb048bdaaea15&w=900",
    "https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194832.jpg?t=st=1734508859~exp=1734512459~hmac=705f2667376e3cb1bc1042b6a56a484ba4b15be98df87e20d4efb51bea54caee&w=900",
    "https://img.freepik.com/free-photo/workers-checking-quality-metal-parts-manufactured-factory_342744-138.jpg?t=st=1734508928~exp=1734512528~hmac=e6f280c8a821e6cb59059dc98b1324bb27a2ae642856f61f2f64510fd279b24c&w=900",
    "https://tse3.mm.bing.net/th?id=OIP.Hfe_PyfEqq3kHJG4k07-OgHaE8&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.zoYWOAXMtrzo4ncq9Su_aAHaE8&pid=Api&P=0&h=180",
    "https://i.ytimg.com/vi/kNXMJBQ6oL4/hqdefault.jpg",
  ],
  two: [
    "https://gla.ac.in/blog/wp-content/uploads/2023/09/web-blog-7-Awesome-Things-You-Can-Learn-from-Studying-Agriculture.jpg",
  ],
  three: [
    "https://img.freepik.com/free-photo/workers-checking-quality-metal-parts-manufactured-factory_342744-138.jpg?t=st=1734508928~exp=1734512528~hmac=e6f280c8a821e6cb59059dc98b1324bb27a2ae642856f61f2f64510fd279b24c&w=900",
  ],
  four: [
    "https://img.freepik.com/free-photo/architects-hold-building-plan-check-work_1150-24372.jpg?t=st=1734508801~exp=1734512401~hmac=1ab242a6b98e9630bc59e5beb432c0022934a0be5fae17b268ecb048bdaaea15&w=900",
    "https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194832.jpg?t=st=1734508859~exp=1734512459~hmac=705f2667376e3cb1bc1042b6a56a484ba4b15be98df87e20d4efb51bea54caee&w=900",
  ],
  five: [
    "https://img.freepik.com/free-photo/man-is-working-metal-factory-he-is-welding-piece-rail-using-special-tools_613910-17144.jpg?ga=GA1.1.1848629293.1665650303&semt=ais_hybrid",
    "https://i.ytimg.com/vi/kNXMJBQ6oL4/hqdefault.jpg",
  ],
  six: [
    "https://tse2.mm.bing.net/th?id=OIP.zoYWOAXMtrzo4ncq9Su_aAHaE8&pid=Api&P=0&h=180",
  ],
};

export default function Projects() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "600",
          fontSize: { xs: "20px", sm: "24px" }, // Adjust font size for small screens
          mb: 2,
        }}
      >
        Projects for &nbsp;
        <span
          style={{
            background: "linear-gradient(90deg, #ff7043, #ff9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Oleo Script",
            display: "inline-block",
            fontSize: "28px",
          }}
        >
          Inspirations _____
        </span>
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "11px", sm: "13px" }, // Adjust font size for small screens
          color: "grey",
          mb: 2,
        }}
      >
        You will find yourself working in a true partenership that results in an
        incredible <br /> experience, and an end product that is the product.
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "600px",
          marginBottom: "4rem",
          fontSize: { xs: "12px", sm: "14px" }, // Adjust tab font size for small screens
        }}
      >
        <Tab value="one" label="All cases" sx={{ textTransform: "none" }} />
        <Tab value="two" label="Agriculture" sx={{ textTransform: "none" }} />
        <Tab value="three" label="Chemical" sx={{ textTransform: "none" }} />
        <Tab value="four" label="Construction" sx={{ textTransform: "none" }} />
        <Tab value="five" label="Industrial" sx={{ textTransform: "none" }} />
        <Tab value="six" label="Oil & Gas" sx={{ textTransform: "none" }} />
      </Tabs>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 column for small screens
            sm: images[value].length === 1 ? "1fr" : images[value].length === 2 ? "repeat(2, 1fr)" : "repeat(3, 1fr)", // Adjust for different screen sizes
            md: images[value].length === 1 ? "1fr" : images[value].length === 2 ? "repeat(2, 1fr)" : "repeat(3, 1fr)", // Adjust for larger screens
          },
          gap: "16px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {images[value].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={value}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
