export function toRadian(degree: number): number {
    throw new Error("STUB");
}

export function toDegree(radian: number): number {
    throw new Error("STUB");
}

// convert the angle to the range of 0 to 4*Math.PI
export function convertAngles(startAngle: number, endAngle: number) {
  startAngle = startAngle % (2 * Math.PI);
  endAngle = endAngle % (2 * Math.PI);

  if (startAngle < 0) {
    startAngle = 2 * Math.PI + startAngle;
  }
  if (endAngle < 0) {
    endAngle = 2 * Math.PI + endAngle;
  }

  if (startAngle >= endAngle) {
    endAngle = endAngle + 2 * Math.PI;
  }

  return {
    startAngle,
    endAngle,
  };
}
