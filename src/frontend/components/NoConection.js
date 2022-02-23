import CloudOffIcon from "@mui/icons-material/CloudOff";
import Typography from "@mui/material/Typography";
import style from "./../../../styles/noConection";

export function NoConection() {
  return (
    <div style={style.body}>
      <div style={style.body2}>
        <CloudOffIcon style={style.icon} />
        <Typography variant="subtitle1" style={style.msg}>
          Falha na conexão com o servidor
        </Typography>
      </div>
    </div>
  );
}
