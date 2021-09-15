import styled from "styled-components"
// style component   
export const StyleAbout = styled.div`
  min-height: 90vh;
  display :flex;
  align-items:center;
  justify-content:space-between;
  padding: 5rem 10rem; // padding to the side border
  color:white;

`

export const StyleDescription = styled.div`
  flex:1;
  padding-right:5rem;
  h2{
    font-weight: lighter;
    padding-top:1rem;
  }
`
export const StyleImg = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    border-radius: 50%;
    width:100%;
    height:80vh;
    object-fit: cover;
  }
`
export const StyleHidden = styled.div`
  overflow: hidden;
`