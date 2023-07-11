import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default ({
  style,
  secondary = false,
  Form,
  title = "Buy Ticket",
  canOpen = () => true,
  eventId,
  loading = false,
}: {
  canOpen?: () => boolean;
  Form: any;
  title?: string;
  secondary?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
  eventId: string;
}) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        isLoading={loading}
        onClick={() => {
          if (canOpen()) onOpen();
        }}
        style={{ ...style }}
        type="submit"
        variant="solid"
        colorScheme={secondary ? "gray" : "blue"}
      >
        Buy now
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <OverlayOne />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form close={onClose} open={onOpen} eventId={eventId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
