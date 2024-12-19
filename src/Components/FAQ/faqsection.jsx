import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faqsection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    memo: "",
  });
  const [errors, setErrors] = useState({});
  const [expanded, setExpanded] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Name must only contain alphabets.";
    }

    if (!form.company.trim()) {
      newErrors.company = "Company name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(form.company)) {
      newErrors.company = "Company name must only contain alphabets.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(form.phone)) {
      newErrors.phone = "Phone number must only contain numbers.";
    }

    if (form.memo.length > 500) {
      newErrors.memo = "Memo cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .send(
          "service_8uexp9n",
          "template_nlettoa",
          {
            to_name: "Recipient Name Here",
            from_name: form.name,
            from_email: form.email,
            from_company: form.company,
            from_phone: form.phone,
            from_memo: form.memo,
            message: "Custom message here",
          },
          "LcOd71GPU-kioKKkG"
        )
        .then(() => {
          toast.success("Email sent successfully!");
          setForm({ name: "", company: "", email: "", phone: "", memo: "" });
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Failed to send email. Please check your details and try again.");
        });
    }
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box mt={10} m={10} display="flex" gap={4} flexWrap="wrap">
      {/* FAQ Section */}
      <Box flex={1}>
        <Box>
          <h1 style={{ fontWeight: "600", fontSize: "30px", marginBottom: "10px" }}>
            Learn more from{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ff7043, #ff9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Oleo Script",
                display: "inline-block",
                fontSize: "32px",
              }}
            >
              our FAQ----
            </span>
          </h1>
          <p style={{ color: "grey", fontSize: "12px" }}>
            You will find yourself working in a true partnership that results in
            an incredible <br /> experience and an end product that is the best.
          </p>
        </Box>

        {/* FAQ Accordions */}
        <Accordion expanded={expanded === "panel1"} onChange={handleAccordionChange("panel1")} sx={{ bgcolor: "#e0e0e0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={{ color: "#d84315", fontWeight: 600 }}>
            How to process the function for consulting?
            {expanded === "panel1" ? (
              <ArrowCircleUpRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            ) : (
              <ArrowCircleDownRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            )}
          </AccordionSummary>
          <AccordionDetails>
            Many of our scale-registered employees are requested as main preferred builders <br /> were associations or artisans and merchants that oversaw the main production and <br /> distribution of a particular good.
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleAccordionChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            Where should I incorporate my business?
            {expanded === "panel2" ? (
              <ArrowCircleUpRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            ) : (
              <ArrowCircleDownRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            )}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleAccordionChange("panel3")} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            How much should I capitalize with at the beginning?
            {expanded === "panel3" ? (
              <ArrowCircleUpRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            ) : (
              <ArrowCircleDownRoundedIcon sx={{ ml: "auto", color: "#808080" }} />
            )}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>

        <Box display="flex" alignItems="center" gap={1} color="#e53935">
          <br />
          <br />
          <br />
          <h4 >Get More Information</h4> <ArrowForwardRoundedIcon />
        </Box>
      </Box>

      {/* Request a Quote Section */}
      <Box sx={{ bgcolor: "#212121", height: "auto", width: "9cm", p: 3, borderRadius: 2 }}>
        <Box mt={2}>
          <h1 style={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: "Start" }}>
            Request a &nbsp;
            <span
              style={{
                background: "linear-gradient(90deg, #ff7043, #ff9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Oleo Script",
                display: "inline-block",
                fontSize: "30px",
              }}
            >
              Quote ---
            </span>
          </h1>
          <p style={{ color: "white", fontSize: "16px", textAlign: "Start" }}>
            Fill all information details to consult <br /> with us to get services from us.
          </p>

          <Box component="form" display="flex" flexDirection="column" gap={2} mt={4} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              InputLabelProps={{ style: { color: "#fff", fontSize: "10px" } }}
              InputProps={{ style: { color: "#fff", height: "40px" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ff7043" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff7043" },
                },
              }}
            />

            <TextField
              fullWidth
              name="company"
              label="Company Name"
              variant="outlined"
              value={form.company}
              onChange={handleChange}
              error={!!errors.company}
              helperText={errors.company}
              InputLabelProps={{ style: { color: "#fff", fontSize: "10px" } }}
              InputProps={{ style: { color: "#fff", height: "40px" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ff7043" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff7043" },
                },
              }}
            />

            <TextField
              fullWidth
              name="email"
              label="Email ID"
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{ style: { color: "#fff", fontSize: "10px" } }}
              InputProps={{ style: { color: "#fff", height: "40px" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ff7043" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff7043" },
                },
              }}
            />

            <TextField
              fullWidth
              name="phone"
              label="Phone Number"
              variant="outlined"
              value={form.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              InputLabelProps={{ style: { color: "#fff", fontSize: "10px" } }}
              InputProps={{ style: { color: "#fff", height: "40px" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ff7043" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff7043" },
                },
              }}
            />

            <TextField
              fullWidth
              name="memo"
              label="Memo"
              variant="outlined"
              multiline
              value={form.memo}
              onChange={handleChange}
              error={!!errors.memo}
              helperText={errors.memo}
              minRows={3}
              maxRows={6}
              InputLabelProps={{ style: { color: "#fff", fontSize: "10px" } }}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ff7043" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff7043" },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #ff7043, #ff9800)",
                color: "white",
                fontWeight: "600",
                "&:hover": {
                  background: "linear-gradient(90deg, #ff9800, #ff7043)",
                },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Toast Notification */}
      <ToastContainer />
    </Box>
  );
};

export default Faqsection;
