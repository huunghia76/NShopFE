import styled from "styled-components";

export const Input = ({className , placeholder}) =>{
    return(
        <input className={className} placeholder={placeholder}/>
     )
}
export const StyledLink = styled(Input)`
  color: purple;
  font-weight: bold;
`;