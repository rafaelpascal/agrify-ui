type ANY = any;

type ThemeValue = "dark" | "light";

interface IChildren {
  children: React.ReactNode;
}

interface IClass {
  className?: string;
}

type SN = string | number;

interface IModalPropsType {
  userId: string | boolean | undefined | null;
  isOpen: boolean;
  closeModal: () => void;
}

type BadgeStatus = "positive" | "negative" | "neutral" | "perma" | "caution";
