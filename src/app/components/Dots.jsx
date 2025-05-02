import React from "react";

const Dots = ({ width = 5, height = 5 }) => {
    const radius = 4;
    const gap = 16;
    const svgWidth = (radius * 2 + gap) * width - gap;
    const svgHeight = (radius * 2 + gap) * height - gap;

    return (
        <svg width="100%" className="dots" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
            {Array.from({ length: width }).map((_, i) =>
                Array.from({ length: height }).map((_, j) => {
                    const x = radius + i * (radius * 2 + gap);
                    const y = radius + j * (radius * 2 + gap);

                    return <circle cx={x} cy={y} r={radius} key={`${i}-${j}`} />;
                })
            )}
        </svg>
    );
};

export default Dots;