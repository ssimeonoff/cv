import styled from "styled-components";
import { useState, useEffect } from "react";
import info from "./resources/info.png";

const Modal = ({ content }) => {
  const [showContent, setShowContent] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onTimeout = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const timer = hovered && setTimeout(onTimeout, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [hovered]);

  return (
    <Container>
      <Wrapper
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setShowContent(false);
        }}
      >
        <Icon src={info} alt="phone"></Icon>
      </Wrapper>
      <Popup $show={showContent}>
        <Arrow />
        {content}
      </Popup>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
@media (max-width: 800px) {
  display: none;
}
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 17px;
`;

const Popup = styled.div`
  position: absolute;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  z-index: 99;
  right: 28px;
  top: 5px;
  background-image: url("https://t3.ftcdn.net/jpg/04/43/56/98/240_F_443569863_tf8s6rMNm5I8aaejx7m28KO7hxhhQH1q.jpg");
  filter: drop-shadow(0 0px 5px #432616);
  text-align: left;
  transition: 0.3s;
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 14px;
`;

const Arrow = styled.div`
  position: absolute;
  background-image: url("https://t3.ftcdn.net/jpg/04/43/56/98/240_F_443569863_tf8s6rMNm5I8aaejx7m28KO7hxhhQH1q.jpg");
  width: 10px;
  height: 10px;
  right: -5px;
  top: -5;
  transform: rotate(45deg);
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.9;
`;
