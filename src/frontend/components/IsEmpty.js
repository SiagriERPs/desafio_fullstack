import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Typography from "@mui/material/Typography";
import style from "./../../../styles/noConection";

export function IsEmpty() {
  return (
    <div style={style.body}>
      <div style={style.body2}>
        <EmojiEmotionsIcon style={style.icon} />
        <Typography variant="subtitle1" style={style.msg}>
          Utilize o campo de busca para iniciar a aplicação
        </Typography>
      </div>
    </div>
  );
}
