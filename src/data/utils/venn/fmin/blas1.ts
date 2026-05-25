// need some basic operations on vectors, rather than adding a dependency,
// just define here
export function zeros(x) {
    throw new Error("STUB");
}
export function zerosM(x, y) {
    throw new Error("STUB");
}

export function dot(a, b) {
    throw new Error("STUB");
}

export function norm2(a) {
    throw new Error("STUB");
}

export function scale(ret, value, c?: any) {
  for (let i = 0; i < value.length; ++i) {
    ret[i] = value[i] * c;
  }
}

export function weightedSum(ret, w1, v1, w2, v2) {
  for (let j = 0; j < ret.length; ++j) {
    ret[j] = w1 * v1[j] + w2 * v2[j];
  }
}

export function gemv(output, A, x) {
    throw new Error("STUB");
}
