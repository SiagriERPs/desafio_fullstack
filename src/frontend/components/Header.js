import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import style from "./../../../styles/header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

export function Header(props) {
  return (
    <AppBar style={style.headers} elevation={0}>
      <Toolbar style={style.headers}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Playlist do tempo
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {props.origem === "coords" ? (
          <Link href="/">
            <Button style={style.botao}>Buscar por nome</Button>
          </Link>
        ) : (
          <Link href="/coords">
            <Button style={style.botao}>Buscar por coordenadas</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
