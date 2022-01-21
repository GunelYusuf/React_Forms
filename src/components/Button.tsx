import React, {ButtonHTMLAttributes} from 'react';

export const Button:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) =>{
    return <button {...props}  className='custom-button'/>
}