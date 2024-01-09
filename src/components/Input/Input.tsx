import { type FC, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
    id: string;
    type: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, type, label, ...props }) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props} />
        </p>
    );
};

export default Input;