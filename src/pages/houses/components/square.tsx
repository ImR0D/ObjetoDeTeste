import './square.css';

interface SquareProps {
    children: React.ReactNode,
    isLightOn?: boolean
}

export default function Square({ children, isLightOn = false}: SquareProps) {
    return (
        <div className={isLightOn? "Square SquareActive" : "Square"}>{children}</div>
    );
}