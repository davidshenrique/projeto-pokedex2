import styled from "styled-components";

export const Body = styled.div`
    text-align: center;
    background: linear-gradient(to bottom, #6ab7f5, #fff);
    min-height: 100vh;
    width: 100vw;
    min-width: fit-content;
`
export const Main = styled.div`
    display: inline-block;
    margin-top: 2%;
    padding: 15px;
    position: relative;
`
export const ProfileImage = styled.a`
img{
position: absolute;
height: 9.5%;
border-radius: 100vh;
left: 12.9%;
bottom: 85.8%;
mix-blend-mode: hard-light;
cursor: pointer;
}
`
export const PokeImage = styled.img`
    position: absolute;
    bottom: 55%;
    left: 50%;
    transform: translate(-63%, 20%);
    height: 18%;
`
export const H1 = styled.h1`
    position: absolute;
    font-weight: 600;
    color: #aaa;
    top: 54.5%;
    right: 27%;
    font-size: clamp(8px, 5vw, 25px);
`
export const PokeName = styled.span`
    color: #3a444d;
    text-transform: capitalize;
`
export const Form = styled.form`
    position: absolute;
    width: 65%;
    top: 65%;
    left: 13.5%;
`
export const Input = styled.input`
    width: 100%;
    padding: 4%;
    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    font-weight: 600;
    color: #3a444d;
    font-size: clamp(8px, 5vw, 1rem);
    box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
`
export const Buttons = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 65%;
    transform: translate(-57%, 0);
    display: flex;
    gap: 20px;
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    width: 50%;
    padding: 4%;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: clamp(16px, 10vw, 2rem);
    font-weight: 600;
    color: white;
    background-color: #00b339;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
    :active {
    box-shadow: inset -4px 4px 0 #222;
    font-size: 1.5rem;
    }
`