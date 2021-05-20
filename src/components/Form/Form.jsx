import { useState } from 'react';

import { ContainerStylized as Container } from './styles';

import EditableControls from '../EditableControls/EditableControls';

import {  
  Input,
  Text,
  Editable,
  EditablePreview,
  EditableInput,
  Stack,
  Button,
  useToast
} from "@chakra-ui/react"

export default function Form() {

  const toast = useToast()

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');

  function handleSubmitButton() {
    setIsEdit(false);
  }

  function handleEditButton() {
    setIsEdit(true);
  }

  const maxId = 10;
  const maxName = 200;
  const maxAddress = 500;
  
  function handleSendForm() {

    if (!name) {
      toast({
        title: `É necessário preencher o nome`,
        status: 'error',
        isClosable: true,
      })

      return
    }

    if (id.name > 200) {
      toast({
        title: `O nome somente pode ter ${maxName} caracteres`,
        status: 'info',
        isClosable: true,
      }) 
      return
    }

    if (!address) {
      toast({
        title: `É necessário preencher o endereço`,
        status: 'error',
        isClosable: true,
      })

      return
    }

    if (address.length > 500) {
      toast({
        title: `O endereço somente pode ter ${maxAddress} caracteres`,
        status: 'info',
        isClosable: true,
      }) 
      return
    }

    if (!id) {
      toast({
        title: `É necessário preencher o ID`,
        status: 'error',
        isClosable: true,
      }) 
      return
    }

    if (id.length > 10) {
      toast({
        title: `O ID somente pode ter ${maxId} caracteres`,
        status: 'error',
        isClosable: true,
      }) 
      return
    }

    toast({
      title: `Usuário cadastrado, bem-vindo ${name}`,
      status: 'success',
      isClosable: true,
    })
  }

  return (
    <>
      <Container>
        
        <form>

          <Stack align="center" spacing={10}>

            <Editable 
              textAlign="center"
              placeholder="ID"
              defaultValue={id}
              onChange={(e) => setId(e)}
              fontSize="2xl"
              isPreviewFocusable={isEdit}
              maxlength={maxId}
            >
              <EditablePreview value={id}/>
              <EditableInput />
              <EditableControls 
                isEditing={isEdit}
                handleSubmitButtonProps={handleSubmitButton}
                handleEditButtonProps={handleEditButton}
              />
            </Editable>

            <Text mb="8px">Bem-vindo: <strong>{name}</strong></Text>
            <Input
              isRequired
              maxlength={maxName}
              value={name}
              variant="flushed" 
              onChange={(e) => setName(e.target.value)}
              placeholder="Aqui vai seu nome completo"
              size="sm"
            />

            <Input 
              value={address} 
              isRequired 
              maxlength={maxAddress} 
              variant="flushed" 
              placeholder="Endereço" 
              onChange={(e) => setAddress(e.target.value)}
            />

            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="gray.500"
              onClick={handleSendForm}
            >
              Enviar
            </Button>

          </Stack>
        </form>
      </Container>
    </>
  )
}