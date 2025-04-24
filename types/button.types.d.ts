import { PressableProps } from "react-native";

export interface ButtonProps {
    title: string;
    action: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    textClassname?: string;
}

export interface AnimatedPressableProps extends PressableProps {
    children: React.ReactNode,
    className?: string,
    activeOpacity?: number,
    containerClassName?: string
}