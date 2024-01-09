import { type ReactNode, type ElementType, type FC, type ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// Option 1 (FC component):

// const Container: <C extends ElementType>({as, children}: ContainerProps<C>) => JSX.Element = ({ as, children }) => {
//     const Component = as;

//     return <Component>{children}</Component>;
// }

// Option 2 (function):

function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {
    const Component = as || 'div';

    return <Component {...props}>{children}</Component>;
}

export default Container;