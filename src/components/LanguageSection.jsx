import personal_data from "../personal_data";
import { Container, Label } from "./ExpertiseSection";
import ListItem from "./ListItem";

const LanguageSection = () => {
  return (
    <Container>
      <Label>Languages</Label>
      {personal_data.languages.list.map((el) => (
        <ListItem el={el} key={el} />
      ))}
    </Container>  
  );
};

export default LanguageSection;


