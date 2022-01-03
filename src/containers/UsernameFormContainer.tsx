import React, { FC } from 'react';
import styled from 'styled-components';

import { Form } from '../components/common/form/Form';
import { FormFooter } from '../components/common/form/FormFooter';
import { FormHeader } from '../components/common/form/FormHeader';
import { Btn, BtnVariants } from '../components/common/btn/Btn';
import { FileItem } from '../components/common/form/fileItem/FileItem'
import { InputItem } from '../components/common/form/inputItem/InputItem';


// StyledProps
interface StyledUsernamePageProps {
    pTop?: string
 }
 
 // Styled
 const StyledUsernamePage = styled.div`

 `
 
 // ComponentProps
interface UsernameFormContainerProps {
action: string
}

export const UsernameFormContainer: FC<UsernameFormContainerProps> = ({action}) => {
    return (
        <Form action={action}>
            <FormHeader>
                <FileItem
                    fileInputId={'upload'}
                    fileInputFor={'upload'}
                    fileImg={'/assets/flower.svg'}
                    fileImgAlt={'file inpit icon'}
                    fileInnerTitle={'Profile photo'}
                    fileInnerSubtitle={'Upload your profile photo here'}
                />

                <InputItem
                    inputName={'Username'}
                    inputPlaceholder={'Username'}
                    inputLabel={'Username'}
                />
            </FormHeader>

            <FormFooter>
                <Btn children={'Create username'} btnVariant={BtnVariants.blue}/>
            </FormFooter>
        </Form>
    );
};