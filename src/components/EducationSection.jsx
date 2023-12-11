import personal_data from "../personal_data";
import Modal from "./Modal";
import { Container, Label } from "./ExpertiseSection";

const EducationSection = () => {
  return (
    <Container>
      <Modal content={personal_data.education.extra} />
      <Label>Education</Label>
      <div>{personal_data.education.title}</div>
      <div>{personal_data.education.uni}</div>
      <div>{personal_data.education.date}</div>
    </Container>
  );
};

export default EducationSection;

