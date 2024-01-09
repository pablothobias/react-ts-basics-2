import { type FC, type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
    type: 'button';
    text: string;
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
    type: 'link';
    text: string;
} & ComponentPropsWithoutRef<'a'>;

type Props = ButtonProps | LinkProps;

const Button: FC<Props> = (props) => {
    const { type, text } = props;

    if (type === 'link') return (<a {...props}>{text}</a>);

    return (<button {...props}>{text}</button>);
};

export default Button;