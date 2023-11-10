import "./Navbar.css";
import Moon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

const Navbar = ({ mode, setMode }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          boxShadow:
            mode === "light"
              ? "0px 0px 4px 0px hsl(0, 0%, 58%)"
              : "0px 0px 4px 0px black",
          padding: { xs: "0px", sm: "10px" },
          paddingLeft: { xs: "15px", sm: "40px" },
          paddingRight: { xs: "15px", sm: "40px" },
          bgcolor: mode === "light" ? "white" : "hsl(207, 26%, 17%)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alingItems: "center",
          }}
        >
          <p
            id="pageTitle"
            style={{
              color: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              fontWeight: "800",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Where in the world?
          </p>

          <IconButton
            className="MyCustomButton"
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <Moon sx={{ color: mode === "light" ? "black" : "white" }} />
            <p
              id="darkBTNPar"
              style={{
                fontWeight: "800",
                cursor: "pointer",
                color: mode === "light" ? "hsl(200, 15%, 8%)" : "white",
              }}
            >
              Dark Mode
            </p>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
