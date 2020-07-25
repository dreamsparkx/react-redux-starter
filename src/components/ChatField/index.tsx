import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Button from '../Button';

export const ChatDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const InputField = styled.input`
    width: 90%;
`;

const Input = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    ref: any,
) => <InputField {...props} ref={ref} />;

const InputRef = forwardRef(Input);

export function ChatComponents(props: Props) {
    const { inputFieldProps = {}, buttonProps = { text: 'Send' } } = props;
    return (
        <>
            <InputRef type={'text'} {...inputFieldProps} />
            <Button {...buttonProps} />
        </>
    );
}

export default function ChatField(props: Props) {
    const { inputFieldProps = {}, buttonProps = { text: 'Send' } } = props;
    return (
        <ChatDiv>
            <ChatComponents inputFieldProps={inputFieldProps} buttonProps={buttonProps} />
        </ChatDiv>
    );
}

interface Props {
    inputFieldProps?: any;
    buttonProps?: any;
}
