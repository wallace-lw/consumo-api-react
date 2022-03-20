import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 250px;
        border-radius: 1rem;
        margin-bottom: 1.5rem;
    }

    span {
        font-weight: 600;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;       
    }

    a:hover {
        transform: scale(1.1);
    }
`