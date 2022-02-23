import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

import style from "./../../../styles/sketeton2";

export function CardLoading() {
  return (
    <Card sx={{ maxWidth: 200, minWidth: 200 }} style={style.card}>
      <CardActionArea
        style={{ ...style.card, marginTop: -80, marginBottom: -60 }}
      >
        <Skeleton style={style.body} height={350} />
        <Skeleton width={100} height={25} style={{ marginTop: -20 }} />
        <Skeleton
          style={{ ...style.body, marginBottom: 8 }}
          width={150}
          height={25}
        />
      </CardActionArea>
    </Card>
  );
}
