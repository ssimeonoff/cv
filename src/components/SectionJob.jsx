import styled from "styled-components";

const SectionJob = ({ job }) => {
  const { title, company, date, info } = job;

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
          <InfoLabel>{info}</InfoLabel>
        </div>
      </Container>
    </Wrapper>
  );
};
export default SectionJob;

const Wrapper = styled.div`
  margin: 20px 0 0 0;
  border-radius: 5px;
  text-align: justify;
  overflow: hidden;
  transform: 0.2s;
`;

const Container = styled.div`
  display: flex;
`;

const DateContainer = styled.div`
  margin-right: 20px;
`;

const DateLabel = styled.div`
  width: 120px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #43261644;
  border-top: 1px solid #43261644;
`;

const Header = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #43261644;
  border-top: 1px solid #43261644;
`;

const InfoLabel = styled.div`
  margin-top: 10px;
`;

const TitleLabel = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  color: #000;
`;
