import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import ScratchCardComponent from "../LandingPage/ScratchCard";

export default function DynamicModal({ isOpen, onOpen, onOpenChange }) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="overflow-hidden" onOpen={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">coupon</ModalHeader>
              {/* <ModalBody> */}
              <ScratchCardComponent />
              {/* </ModalBody> */}
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
