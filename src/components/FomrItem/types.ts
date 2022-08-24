export interface IFormProps {
  type: string;
  value: string;
  readOnly: boolean;
  setValue: (value: string) => void;
  isValid?: (value: string) => boolean;
}
