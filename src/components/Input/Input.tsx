import { type ComponentPropsWithRef, forwardRef } from 'react';

type InputProps = {
    id: string;
    type: string;
    label: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, type, label, ...props }, ref) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input name={id} id={id} type={type} ref={ref} {...props} />
        </p>
    );
});

export default Input;