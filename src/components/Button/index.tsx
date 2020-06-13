import React from 'react';

export default function Button(props: Props){
    const { text, onClick, ...otherProps } = props;
    return (
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick && onClick(event)} {...otherProps}>
            { text }
        </button>
    );
}

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}