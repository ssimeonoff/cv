import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const Modal = ({ content }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handeClick, true )
  }, []); 

  const ref = useRef(null);

  const handeClick = (e) => {
    if (ref.current.contains(e.target)) {
      setShowContent(prevState => !prevState);
    } else {
      setShowContent(false);
    }
  }

  return (
    <Container ref= {ref}>
      <Wrapper
      >
        <i class="fa-solid fa-circle-info"></i>
        <Popup $show={showContent}>
        <Arrow />
        {content}
      </Popup>
      </Wrapper>
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
  right: 15px;
  font-size: 18px;
  color: #432616ee;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  transform: ${(props) => (props.$show ? "scale(1)" : "scale(0)")};
  z-index: 99;
  left: -16px;
  top: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px 0px #432616;
  text-align: left;
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 15px;
  line-height: 1.4em;
  min-width: 300px;
`;

const Arrow = styled.div`
  position: absolute;
  background-color: #fff;
  width: 10px;
  height: 10px;
  left: 20px;
  top: -5px;
  transform: rotate(45deg);
`;