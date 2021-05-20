import { ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

export default function EditableControls({ isEditing, handleSubmitButtonProps, handleEditButtonProps }) {
  return isEditing ? (
    <Flex justifyContent="center">
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} onClick={handleSubmitButtonProps} />
      </ButtonGroup>
    </Flex>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} onClick={handleEditButtonProps} />
    </Flex>
  )
}