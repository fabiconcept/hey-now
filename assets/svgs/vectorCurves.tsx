import Svg, { Path } from "react-native-svg";

function VectorCurves(props: React.ComponentProps<typeof Svg>) {
    return (
        <Svg
            width={51}
            height={103}
            viewBox="0 0 51 103"
            fill="none"
            {...props}
        >
            <Path
                d="M41 50.5C17.8 27.7 22.833 10.5 25.5 3l-6 4c-1.333 3-4.3 10.1-5.5 14.5-1.5 5.5 12.5 17.5 27 29z"
                fill="#283CC4"
            />
            <Path
                d="M13.854 6c-22.5 34 76 51.5 15 67.5s-4.138 9.207 5 21.957c1.562 2.181 1.536 4.386 1.5 6.543M41 50.5C17.8 27.7 22.833 10.5 25.5 3l-6 4c-1.333 3-4.3 10.1-5.5 14.5-1.5 5.5 12.5 17.5 27 29z"
                stroke="#283CC4"
                strokeWidth={2}
            />
        </Svg>
    )
}

export default VectorCurves
