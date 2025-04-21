import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function GradientBg(props: React.ComponentProps<typeof Svg>) {
    return (
        <Svg
            width={440}
            height={956}
            viewBox="0 0 440 956"
            fill="none"
            {...props}
        >
            <Path fill="url(#paint0_linear_3_337)" d="M-70 0H559V1225H-70z" />
            <Defs>
                <LinearGradient
                    id="paint0_linear_3_337"
                    x1={244.5}
                    y1={0}
                    x2={244.5}
                    y2={1225}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3148EB" />
                    <Stop offset={1} stopColor="#1C2985" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default GradientBg
