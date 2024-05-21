import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICharacter } from "@/interfaces/characters";
import { styles } from "./characterCard.styles";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({ name, image, id }: ICharacter) => {
  const navigate = useNavigate();
  const handleClickTo = () => {
    navigate(`characters/${id}`);
  };

  return (
    <Card sx={styles.characterCardWrapper}>
      <CardMedia sx={styles.cardMedia} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={handleClickTo}>
          See more...
        </Button>
      </CardActions>
    </Card>
  );
};
