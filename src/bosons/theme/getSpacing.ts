const baseSpacing = 8;
const unit = "px";

const getSpacing = (multiplier: number) => `${baseSpacing * multiplier}${unit}`;

export default getSpacing;
