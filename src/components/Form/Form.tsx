import { type FormEvent, ComponentPropsWithRef, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandleType = {
    clear: () => void;
};

const Form = forwardRef<FormHandleType, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
        clear: () => {
            formRef.current?.reset();
        },
    }));

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef} {...otherProps}>
            {children}
        </form>
    );
});

export default Form;