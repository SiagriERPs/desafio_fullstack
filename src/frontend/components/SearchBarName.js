import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./../../../styles/searchBar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBar(props) {
  return (
    <div style={style.container}>
      <div style={style.container2}>
        <Typography
          style={style.sub_title}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {props.frase}
        </Typography>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={props.placeholder}
            value={props.text}
            onChange={props.changeText}
            inputProps={{ "aria-label": "" }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                props.onSearch;
              }
            }}
          />
          <IconButton
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={props.onSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
