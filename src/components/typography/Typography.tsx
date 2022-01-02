import React, { FC } from 'react';

export enum ClassTypographyVariants {
    h1 = 'h1 ',
    h2 = 'h2 ',
    h3 = 'h3 ',
    h4 = 'h4 ',
    h5 = 'h5 ',
    h6 = 'h6 ',

    subtitle1 = 'subtitle1 ',
    subtitle2 = 'subtitle2 ',
    subtitle3 = 'subtitle3 ',
    subtitle4 = 'subtitle4 ',

    body = 'body ',

    caption1 = 'caption1 ',
    caption2 = 'caption2 ',
    caption3 = 'caption3 ',
    caption4 = 'caption4 ',

    button = 'button ',

    link = 'link '
}

export enum TagTypographyVariants {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h6 = 'h6',

    span = 'span',
    p = 'p',
    div = 'div'
}

interface TypographyProps {
    variant: ClassTypographyVariants,
    classes?: string,
    component: TagTypographyVariants
}

export const Typography: FC<TypographyProps> = ( {variant, classes, component = 'div', children}) => {

    const classList = classes ? variant + classes : variant;

    return React.createElement(component, {
        className: classList,
        children
    })
};

// export const Typography: FC<TypographyProps> = ({variant, classes, tag, children}) => {
//     return (

//         <tag>
//             {children}
//         </tag>
//         // <div className={variant + classes}>
//         //     {children}
//         // </div>
//     );
// };