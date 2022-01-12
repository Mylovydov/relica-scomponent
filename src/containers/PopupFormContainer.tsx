import React, { FC } from 'react';

import { Avatar } from '../components/common/avatar/Avatar';
import { Btn, BtnVariants } from '../components/common/btn/Btn';

import { FileInput } from '../components/common/form/fileItem/FileInput';
import { FileLabel } from '../components/common/form/fileItem/FileLabel';

import { Form } from '../components/common/form/Form';
import { FormBody } from '../components/common/form/FormBody';
import { FormFooter } from '../components/common/form/FormFooter';
import { FormHeader } from '../components/common/form/FormHeader';
import { TextareaItem } from '../components/common/form/textareaInputItem/TextareaItem';
import { UploadPhoto } from '../components/common/form/uploadPhoto/UploadPhoto';
import { UploadPhotoBody } from '../components/common/form/uploadPhoto/UploadPhotoBody';
import { UploadPhotoContent } from '../components/common/form/uploadPhoto/UploadPhotoContent';
import { UploadPhotoInput } from '../components/common/form/uploadPhoto/UploadPhotoInput';
import { UploadPhotoInputIcon } from '../components/common/form/uploadPhoto/UploadPhotoInputIcon';
import { UploadPhotoList } from '../components/common/form/uploadPhoto/UploadPhotoList';
import { PopupFormWrapper } from '../components/mainPages/popup/PopupFormWrapper';
import { StyledTitleText } from '../components/typography/Typography1';
import { baseTheme } from '../styles/theme';

// StyledProps

// Styled

// ComponentProps

export const PopupFormContainer: FC = () => {
   return (
      <Form action='#'>

         <FormHeader>
            <PopupFormWrapper
               padding='0 2.5rem'
            >
               <TextareaItem
                  inputName={'PostComment'}
                  placeholder={'Say something nice…'}
               />
               </PopupFormWrapper>
         </FormHeader>

         <FormBody
            margin={'0 0 9.5rem 0'}
         >
            <PopupFormWrapper
               padding='0 2.5rem'
            >
               <UploadPhoto>
                  <UploadPhotoBody>

                     <UploadPhotoInput>
                        <FileLabel
                           height={'21rem'}
                           htmlFor={'uploadPhoto'}
                           border={`.1rem solid ${baseTheme.colors.primary}`}
                           hoverBorder={`.1rem solid ${baseTheme.colors.primary}`}
                        >
                           <FileInput
                              fileInputId={'uploadPhoto'}
                           />
                           <UploadPhotoInputIcon>
                              <Avatar
                                 imgSize={'5.7rem'}
                                 imagePath={'/assets/icons/cloud_upload.svg'}
                                 brdrRadius={'0'}
                                 imgHeigth={'auto'}
                              />
                              <StyledTitleText
                                 as={'span'}
                                 fontSize={'1.8rem'}
                                 md2FontSize={'1.8rem'}
                                 md3FontSize={'1.8rem'}
                                 md4FontSize={'1.8rem'}
                                 color={baseTheme.colors.primary}
                              >
                                 Upload photo
                              </StyledTitleText>
                           </UploadPhotoInputIcon>
                        </FileLabel>
                        
                     </UploadPhotoInput>

                     <UploadPhotoContent>
                        <UploadPhotoList />
                     </UploadPhotoContent>

                  </UploadPhotoBody>
               </UploadPhoto>
            </PopupFormWrapper>
         </FormBody>

         <FormFooter
            brdrTop={`.1rem solid ${baseTheme.colors.chatBorder}`}
            padding={'2.5rem 0'}
            center
         >
            <Btn
               children={'Post'}
               btnVariant={BtnVariants.blue}
               width={'18.5rem'}
               height={'4.6rem'}
            />
         </FormFooter>
      </Form>
   );
};