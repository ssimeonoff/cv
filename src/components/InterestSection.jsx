import personal_data from "../personal_data";
import Modal from "./Modal";
import { Container, Label } from "./ExpertiseSection";
import ListItem from "./ListItem";

const InterestSection = () => {
  return (
    <Container>
      <Label>Interests</Label>
      {personal_data.interests.list.map((el) => (
        <ListItem el={el} key={el} />
      ))}
  </Container>
  );
};

export default InterestSection;

