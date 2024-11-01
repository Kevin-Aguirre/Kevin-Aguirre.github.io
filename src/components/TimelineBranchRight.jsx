export default function TimelineBranchRight() {
    return (
        <svg width="500" height="400">
            {/* Background Grid */}
            <rect width="100%" height="100%" fill="rgb(30 27 75)" />
            
            {/* Curved Line */}
            <path
                d="M 250 0 A 250 250  0 0 0 500 200"                // d="M 100 0 Q 100 100, 0 100"
                stroke="white"
                strokeWidth="5"
                fill="none"
            />            
            <path
                d="M 250 0 250 500"                // d="M 100 0 Q 100 100, 0 100"
                stroke="white"
                strokeWidth="5"
                fill="none"
            />
        </svg>
    )
}