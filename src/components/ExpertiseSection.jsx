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
  text-align: left;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #fff6;
  @media (max-width: 800px) {
    background-color: transparent;
  }
`;

export const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #43261688;
  letter-spacing: 0.5px;
`;

