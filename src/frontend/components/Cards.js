import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import style from "./../../../styles/cardItem";

export function CardItem(props) {
  return (
    <Card
      sx={{ maxWidth: 200, minWidth: 200, maxHeight: 600 }}
      style={style.card}
    >
      <CardMedia
        component="img"
        height="180"
        image={`${props.imagem}`}
        alt={props.titulo}
      />
      <CardContent style={style.content}>
        <Typography variant="h6" component="div" style={style.title}>
          {props.titulo?.substr(0, 37)}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </Card>
  );
}
