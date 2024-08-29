export interface ModalTemplateProps {
  className?: string;
  text: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}
