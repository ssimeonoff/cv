import styled from "styled-components";
import ListItem from "./ListItem";

const SectionJob = ({ job }) => {
  const { title, company, date, list, achievements } = job;

  return (
    <Wrapper>
      <Container>
        <DateContainer>
          <DateLabel>{date}</DateLabel>
        </DateContainer>
        <div>
          <Header>
            <TitleLabel>{title}</TitleLabel>
            <span> / {company} </span>
          </Header>
          <InfoLabel>Responsibities</InfoLabel>
          {list && list.map((el) => (
            <ListItem el={el} key={el} type="none"/>
          ))}
          <InfoLabel>Achievements</InfoLabel>
          {achievements && achievements.map((el) => (
            <ListItem el={el} key={el}/>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};
export default SectionJob;

const Wrapper = styled.div`
  margin: 15px 0 0 0;
  border-radius: 5px;
  text-align: justify;
`;

const Container = styled.div`
  display: flex;
`;

const DateContainer = styled.div`
  margin-right: 20px;
`;

const DateLabel = styled.div`
  width: 110px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #43261644;
  border-top: 1px solid #43261644;
`;

const Header = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #43261644;
  border-top: 1px solid #43261644;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

const InfoLabel = styled.div`
  margin-top: 10px;
  color: #43261688;
  letter-spacing: 0.5px;
`;

const TitleLabel = styled.span`
  font-weight: 600;
  text-transform: uppercase;
`;
