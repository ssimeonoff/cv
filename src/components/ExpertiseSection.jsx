import styled from "styled-components";
import personal_data from "../personal_data";
import ListItem from "./ListItem";

const EducationSection = () => {
  return (
    <Container>
      <Label>Expertise</Label>
      {personal_data.expertise.list.map((el) => (
        <ListItem el={el} key={el} />
      ))}
    </Container>
  );
};

export default EducationSection;

export const Container = styled.div`
  position: relative;
  @media (max-width: 800px) {
    text-align: left;
    margin-bottom: 15px;
  }
`;

export const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #43261688;
  letter-spacing: 0.5px;
`;

