import {
  bisect,
  conjugateGradient,
  nelderMead,
  norm2,
  scale,
  zeros,
  zerosM,
} from './fmin';
import {
  circleCircleIntersection,
  circleOverlap,
  distance,
  intersectionArea,
} from './circleintersection';

/** given a list of set objects, and their corresponding overlaps.
updates the (x, y, radius) attribute on each set such that their positions
roughly correspond to the desired overlaps */
export function venn(areas, parameters?: any) {
  parameters = parameters || {};
  parameters.maxIterations = parameters.maxIterations || 500;
  const initialLayout = parameters.initialLayout || bestInitialLayout;
  const loss = parameters.lossFunction || lossFunction;

  // add in missing pairwise areas as having 0 size
  areas = addMissingAreas(areas);

  // initial layout is done greedily
  const circles = initialLayout(areas, parameters);

  // transform x/y coordinates to a vector to optimize
  const initial = [],
    setids = [];
  let setid;
  for (setid in circles) {
    // eslint-disable-next-line
    if (circles.hasOwnProperty(setid)) {
      initial.push(circles[setid].x);
      initial.push(circles[setid].y);
      setids.push(setid);
    }
  }

  // optimize initial layout from our loss function
  const solution = nelderMead(
    function (values) {
          throw new Error("STUB");
      },
    initial,
    parameters,
  );

  // transform solution vector back to x/y points
  const positions = solution.x;
  for (let i = 0; i < setids.length; ++i) {
    setid = setids[i];
    circles[setid].x = positions[2 * i];
    circles[setid].y = positions[2 * i + 1];
  }

  return circles;
}

const SMALL = 1e-10;

/** Returns the distance necessary for two circles of radius r1 + r2 to
have the overlap area 'overlap' */
export function distanceFromIntersectArea(r1, r2, overlap) {
    throw new Error("STUB");
}

/** Missing pair-wise intersection area data can cause problems:
 treating as an unknown means that sets will be laid out overlapping,
 which isn't what people expect. To reflect that we want disjoint sets
 here, set the overlap to 0 for all missing pairwise set intersections */
function addMissingAreas(areas) {
  areas = areas.slice();

  // two circle intersections that aren't defined
  const ids: number[] = [],
    pairs: any = {};
  let i, j, a, b;
  for (i = 0; i < areas.length; ++i) {
    const area = areas[i];
    if (area.sets.length == 1) {
      ids.push(area.sets[0]);
    } else if (area.sets.length == 2) {
      a = area.sets[0];
      b = area.sets[1];
      // @ts-ignore
      pairs[[a, b]] = true;
      // @ts-ignore
      pairs[[b, a]] = true;
    }
  }
  ids.sort((a, b) => {
      throw new Error("STUB");
  });

  for (i = 0; i < ids.length; ++i) {
    a = ids[i];
    for (j = i + 1; j < ids.length; ++j) {
      b = ids[j];
      // @ts-ignore
      if (!([a, b] in pairs)) {
        areas.push({ sets: [a, b], size: 0 });
      }
    }
  }
  return areas;
}

/// Returns two matrices, one of the euclidean distances between the sets
/// and the other indicating if there are subset or disjoint set relationships
export function getDistanceMatrices(areas, sets, setids) {
    throw new Error("STUB");
}

/// computes the gradient and loss simulatenously for our constrained MDS optimizer
function constrainedMDSGradient(x, fxprime, distances, constraints) {
    throw new Error("STUB");
}

/// takes the best working variant of either constrained MDS or greedy
export function bestInitialLayout(areas, params) {
    throw new Error("STUB");
}

/// use the constrained MDS variant to generate an initial layout
export function constrainedMDSLayout(areas, params) {
    throw new Error("STUB");
}

/** Lays out a Venn diagram greedily, going from most overlapped sets to
least overlapped, attempting to position each new set such that the
overlapping areas to already positioned sets are basically right */
export function greedyLayout(areas, params) {
    throw new Error("STUB");
}

/** Given a bunch of sets, and the desired overlaps between these sets - computes
the distance from the actual overlaps to the desired overlaps. Note that
this method ignores overlaps of more than 2 circles */
export function lossFunction(sets, overlaps) {
    throw new Error("STUB");
}

// orientates a bunch of circles to point in orientation
function orientateCircles(circles, orientation, orientationOrder) {
    throw new Error("STUB");
}

export function disjointCluster(circles) {
    throw new Error("STUB");
}

function getBoundingBox(circles) {
  const minMax = function (d) {
    const hi = Math.max.apply(
        null,
        circles.map(function (c) {
            throw new Error("STUB");
        }),
      ),
      lo = Math.min.apply(
        null,
        circles.map(function (c) {
            throw new Error("STUB");
        }),
      );
    return { max: hi, min: lo };
  };

  return { xRange: minMax('x'), yRange: minMax('y') };
}

export function normalizeSolution(solution, orientation, orientationOrder) {
    throw new Error("STUB");
}

/** Scales a solution from venn.venn or venn.greedyLayout such that it fits in
a rectangle of width/height - with padding around the borders. also
centers the diagram in the available space at the same time */
export function scaleSolution(solution, width, height, padding) {
  const circles = [],
    setids = [];
  for (const setid in solution) {
    // eslint-disable-next-line
    if (solution.hasOwnProperty(setid)) {
      setids.push(setid);
      circles.push(solution[setid]);
    }
  }

  width -= 2 * padding;
  height -= 2 * padding;

  const bounds = getBoundingBox(circles),
    xRange = bounds.xRange,
    yRange = bounds.yRange;

  if (xRange.max == xRange.min || yRange.max == yRange.min) {
    console.log('not scaling solution: zero size detected');
    return solution;
  }

  const xScaling = width / (xRange.max - xRange.min),
    yScaling = height / (yRange.max - yRange.min),
    scaling = Math.min(yScaling, xScaling),
    // while we're at it, center the diagram too
    xOffset = (width - (xRange.max - xRange.min) * scaling) / 2,
    yOffset = (height - (yRange.max - yRange.min) * scaling) / 2;

  const scaled = {};
  for (let i = 0; i < circles.length; ++i) {
    const circle = circles[i];
    scaled[setids[i]] = {
      radius: scaling * circle.radius,
      x: padding + xOffset + (circle.x - xRange.min) * scaling,
      y: padding + yOffset + (circle.y - yRange.min) * scaling,
    };
  }

  return scaled;
}
