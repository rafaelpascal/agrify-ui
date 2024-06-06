type ANY = any;

type ThemeValue = "dark" | "light";

interface IChildren {
  children: React.ReactNode;
}

interface IModalPropsType {
  userId: string | boolean | undefined | null;
  isOpen: boolean;
  closeModal: () => void;
}
