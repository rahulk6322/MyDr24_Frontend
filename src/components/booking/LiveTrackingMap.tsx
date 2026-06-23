import React from 'react'

interface LiveTrackingMapProps {
    progress: number // 0-100
    accent?: string // hex color for the moving marker/route
    markerEmoji?: string // e.g. 🚑 or 🛵
}

// A lightweight animated "map" built with SVG — no external map dependency.
// The marker travels along a quadratic curve from provider to destination.
const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
    progress,
    accent = '#0065B2',
    markerEmoji = '🛵',
}) => {
    const t = Math.min(Math.max(progress, 0), 100) / 100

    // Quadratic Bézier from P0 -> P2 with control P1.
    const p0 = { x: 40, y: 210 }
    const p1 = { x: 200, y: 40 }
    const p2 = { x: 360, y: 150 }
    const bez = (a: number, b: number, c: number) =>
        (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c
    const mx = bez(p0.x, p1.x, p2.x)
    const my = bez(p0.y, p1.y, p2.y)

    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-100">
            <svg viewBox="0 0 400 250" className="h-full w-full">
                {/* Map background */}
                <rect width="400" height="250" fill="#eef3f7" />
                {/* Faux roads / blocks */}
                {[...Array(6)].map((_, i) => (
                    <line
                        key={`v${i}`}
                        x1={i * 70}
                        y1="0"
                        x2={i * 70}
                        y2="250"
                        stroke="#dfe7ee"
                        strokeWidth="6"
                    />
                ))}
                {[...Array(4)].map((_, i) => (
                    <line
                        key={`h${i}`}
                        x1="0"
                        y1={i * 70}
                        x2="400"
                        y2={i * 70}
                        stroke="#dfe7ee"
                        strokeWidth="6"
                    />
                ))}
                {[...Array(10)].map((_, i) => (
                    <rect
                        key={`b${i}`}
                        x={(i * 53) % 360 + 8}
                        y={(i * 71) % 190 + 8}
                        width="34"
                        height="26"
                        rx="3"
                        fill="#e3ebf2"
                    />
                ))}

                {/* Route */}
                <path
                    d={`M ${p0.x} ${p0.y} Q ${p1.x} ${p1.y} ${p2.x} ${p2.y}`}
                    fill="none"
                    stroke={accent}
                    strokeWidth="4"
                    strokeDasharray="2 8"
                    strokeLinecap="round"
                    opacity="0.5"
                />

                {/* Destination (home) */}
                <circle cx={p2.x} cy={p2.y} r="9" fill="#01B806" />
                <text x={p2.x} y={p2.y + 4} textAnchor="middle" fontSize="11">
                    🏠
                </text>

                {/* Provider start */}
                <circle cx={p0.x} cy={p0.y} r="7" fill={accent} opacity="0.4" />

                {/* Moving marker */}
                <g>
                    <circle cx={mx} cy={my} r="16" fill={accent} opacity="0.18">
                        <animate
                            attributeName="r"
                            values="14;20;14"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx={mx} cy={my} r="13" fill="#fff" stroke={accent} strokeWidth="2" />
                    <text x={mx} y={my + 5} textAnchor="middle" fontSize="14">
                        {markerEmoji}
                    </text>
                </g>
            </svg>

            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-black-100 shadow">
                Live location • updating
            </span>
        </div>
    )
}

export default LiveTrackingMap
