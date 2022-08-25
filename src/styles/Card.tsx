import styled from 'styled-components';

type CardProps = {
    url: string;
};
export const Card = styled.li<CardProps>`
    display: flex;
    width: 80%;
    padding: 1rem;
    margin-top: 3rem;
    max-width: 30rem;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    justify-content: flex-end;
    text-decoration: none;
    max-height: 20rem;
    min-height: 25rem;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: white;

    h2 {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
    }
`;

export const CardBox = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    margin-bottom: 3rem;
`;
