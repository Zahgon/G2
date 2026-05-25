import { omit } from '@antv/util';
import type { Vector2, ShapeComponent as SC } from '../../runtime';

export type RoundOptions = Record<string, any>;

// Get point1 point2 radius.
const getR = (point1, point2) => {
  return (
    Math.sqrt(
      Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2),
    ) / 2
  );
};

// 计算两点之间的角度
const getAngle = (start, end, center) => {
  const startAngle = Math.atan2(start[1] - center[1], start[0] - center[0]);
  const endAngle = Math.atan2(end[1] - center[1], end[0] - center[0]);
  let angle = endAngle - startAngle;
  // 确保角度在 0-2π 之间
  if (angle < 0) angle += Math.PI * 2;
  return angle;
};

// Gauge round.
export const Round: SC<RoundOptions> = (options, context) => {
    throw new Error("STUB");
};
