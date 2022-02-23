import { useEffect, useState, useRef, ChangeEvent } from "react";
import { Header } from "./../src/frontend/components/Header";
import { SearchBar } from "./../src/frontend/components/SearchBarName";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { IsEmpty } from "./../src/frontend/components/IsEmpty";
import Stack from "@mui/material/Stack";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Skeleton from "@mui/material/Skeleton";
import { NoConection } from "./../src/frontend/components/NoConection";
import { CardLoading } from "./../src/frontend/components/Loading";
import { CardItem } from "./../src/frontend/components/Cards";
import api from "./../utilites/api";

import style from "./../styles/body";

export default function Home() {
  const [isLoad, setLoading] = useState(false);
  const [isErro, setErro] = useState(false);
  const [musics, setMusics] = useState([]);
  const [text, setText] = useState("");

  const scrollRef = useRef(null);

  const scrowAdd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 90;
    }
  };

  const scrowRev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 90;
    }
  };

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const onSearch = async () => {
    setLoading(true);
    setErro(false);
    console.log("rquisição");
    try {
      const resposta = await api.get(`api/playlist?city=${text}`);
      if (resposta.status === 200) {
        console.log("Result::", resposta.data.musics);
        setMusics(resposta.data.musics);
        setLoading(false);
        setErro(false);
      } else if (resposta.status === 401) {
        alert("Cidade não localizada");
        setLoading(false);
        setErro(false);
      } else {
        setLoading(false);
        setErro(true);
      }
    } catch (error) {
      console.log("Erro:: ", error);
      setErro(true);
    }
  };

  return (
    <div>
      <Header origem="home" />
      <SearchBar
        isLoading={isLoad}
        text={text}
        changeText={handleChange}
        onSearch={onSearch}
        placeholder="Pesquisa (Ex:. São paulo)"
        frase="Informe o nome de sua cidade e retornaremos uma playlist com base na
        temperatura da sua região"
      />
      <div style={{ height: 15 }} />
      {corpo()}
    </div>
  );

  function result() {
    return (
      <Container>
        <Stack spacing={1}>
          <Typography
            style={style.text}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            Resultado(s) ({musics.length})
          </Typography>
        </Stack>
        <div style={style.navigation}>
          <div style={style.botaoLeft}>
            <IconButton size="small" onClick={scrowRev}>
              <KeyboardArrowLeftIcon style={style.icons} />
            </IconButton>
          </div>
          <div ref={scrollRef} style={style.scrow}>
            {musics.map((iten, x) => (
              <CardItem key={x} imagem={iten.image} titulo={iten.name} />
            ))}
          </div>
          <div style={style.botaoRight}>
            <IconButton size="small" onClick={scrowAdd}>
              <ChevronRightIcon style={style.icons} />
            </IconButton>
          </div>
        </div>
      </Container>
    );
  }

  function isLoading() {
    return (
      <Container style={{ marginTop: 45 }}>
        <Stack spacing={1}>
          <Skeleton style={style.loading} width={210} height={45} />
        </Stack>
        <div style={style.scrow}>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      </Container>
    );
  }

  function isNoConection() {
    <div style={{ marginTop: 105 }}>
      <NoConection />
    </div>;
  }

  function isEmpty() {
    return (
      <div style={{ marginTop: 105 }}>
        <IsEmpty />
      </div>
    );
  }

  function corpo() {
    if (isLoad) {
      return isLoading();
    } else if (isErro) {
      return isNoConection();
    } else {
      return musics.length > 0 ? result() : isEmpty();
    }
  }
}
