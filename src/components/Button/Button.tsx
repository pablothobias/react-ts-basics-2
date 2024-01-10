import { type FC, type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
    el: 'button';
    text: string;
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
    el: 'link';
    text: string;
} & ComponentPropsWithoutRef<'a'>;

type Props = ButtonProps | LinkProps;

const Button: FC<Props> = (props) => {
    const { el, text } = props;

    if (el === 'link') return (<a {...props}>{text}</a>);

    return (<button {...props}>{text}</button>);
};

export default Button;