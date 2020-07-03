import React from 'react';
import styled from 'styled-components';

function Button(props: Props) {
    const { text, onClick, ...otherProps } = props;
    return (
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick && onClick(event)} {...otherProps}>
            {text}
        </button>
    );
}

export default styled(Button)`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
`;

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
