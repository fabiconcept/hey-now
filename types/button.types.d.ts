export interface ButtonProps {
    title: string;
    action: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    textClassname?: string;
}