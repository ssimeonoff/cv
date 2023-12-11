import styled from "styled-components";

const ListItem = ({el, type}) => {
  return (
    <Item>
      {type !=="none" && <Container><i class="fa-regular fa-square-check"></i></Container>}
			<div>{el}</div>
    </Item>
  )
}

export default ListItem;

const Item = styled.div`
	display:flex;
  margin-bottom: 5px;
`

const Container = styled.div`
  height: 16px;
  margin-right: 8px;
`



