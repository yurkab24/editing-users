export interface IBattonPros {
  text: string;
  disabled?: boolean;
  style?: { [key: string]: string };
  onClick?: () => void;
}
