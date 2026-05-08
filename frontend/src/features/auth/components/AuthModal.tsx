"use client";

import { useAuthModal } from "../store/useAuthModal.store";
import Modal from "@/components/ui/Modal";
import LoginForm from "./LoginFrom";
import RegisterForm from "./RegisterForm";

export default function AuthModal() {
  const { isOpen, close, mode } = useAuthModal();

  return (
    <Modal open={isOpen} onClose={close}>
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </Modal>
  );
}
