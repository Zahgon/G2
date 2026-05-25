/*
 * Synchronous version of d3-cloud
 * Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
 * Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf
 */
interface Item {
  value: number;
  text: string;
  sprite: boolean;
}

const cloudRadians = Math.PI / 180,
  cw = (1 << 11) >> 5,
  ch = 1 << 11;

function cloudText(d: Item) {
    throw new Error("STUB");
}

function cloudFont() {
    throw new Error("STUB");
}

function cloudFontNormal() {
    throw new Error("STUB");
}

function cloudFontSize(d: Item) {
    throw new Error("STUB");
}

function cloudRotate() {
    throw new Error("STUB");
}

function cloudPadding() {
    throw new Error("STUB");
}

function cloudDispatch() {
    throw new Error("STUB");
}
// Fetches a monochrome sprite bitmap for the specified text.
// Load in batches for speed.
function cloudSprite(contextAndRatio, d, data, di) {
  if (d.sprite) return;
  const c = contextAndRatio.context,
    ratio = contextAndRatio.ratio;

  c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
  let x = 0,
    y = 0,
    maxh = 0;
  const n = data.length;
  --di;
  while (++di < n) {
    d = data[di];
    c.save();
    c.font =
      d.style +
      ' ' +
      d.weight +
      ' ' +
      ~~((d.size + 1) / ratio) +
      'px ' +
      d.font;
    let w = c.measureText(d.text + 'm').width * ratio,
      h = d.size << 1;
    if (d.rotate) {
      const sr = Math.sin(d.rotate * cloudRadians),
        cr = Math.cos(d.rotate * cloudRadians),
        wcr = w * cr,
        wsr = w * sr,
        hcr = h * cr,
        hsr = h * sr;
      w =
        ((Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5) << 5;
      h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
    } else {
      w = ((w + 0x1f) >> 5) << 5;
    }
    if (h > maxh) maxh = h;
    if (x + w >= cw << 5) {
      x = 0;
      y += maxh;
      maxh = 0;
    }
    if (y + h >= ch) break;
    c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
    if (d.rotate) c.rotate(d.rotate * cloudRadians);
    c.fillText(d.text, 0, 0);
    if (d.padding) {
      c.lineWidth = 2 * d.padding;
      c.strokeText(d.text, 0, 0);
    }
    c.restore();
    d.width = w;
    d.height = h;
    d.xoff = x;
    d.yoff = y;
    d.x1 = w >> 1;
    d.y1 = h >> 1;
    d.x0 = -d.x1;
    d.y0 = -d.y1;
    d.hasText = true;
    x += w;
  }
  const pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
    sprite = [];
  while (--di >= 0) {
    d = data[di];
    if (!d.hasText) continue;
    const w = d.width,
      w32 = w >> 5;
    let h = d.y1 - d.y0;
    // Zero the buffer
    for (let i = 0; i < h * w32; i++) sprite[i] = 0;
    x = d.xoff;
    if (x == null) return;
    y = d.yoff;
    let seen = 0,
      seenRow = -1;
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        const k = w32 * j + (i >> 5),
          m = pixels[((y + j) * (cw << 5) + (x + i)) << 2]
            ? 1 << (31 - (i % 32))
            : 0;
        sprite[k] |= m;
        seen |= m;
      }
      if (seen) seenRow = j;
      else {
        d.y0++;
        h--;
        j--;
        y++;
      }
    }
    d.y1 = d.y0 + seenRow;
    d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
  }
}

// Use mask-based collision detection.
function cloudCollide(tag, board, sw) {
  sw >>= 5;
  const sprite = tag.sprite,
    w = tag.width >> 5,
    lx = tag.x - (w << 4),
    sx = lx & 0x7f,
    msx = 32 - sx,
    h = tag.y1 - tag.y0;
  let x = (tag.y + tag.y0) * sw + (lx >> 5),
    last;
  for (let j = 0; j < h; j++) {
    last = 0;
    for (let i = 0; i <= w; i++) {
      if (
        ((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0)) &
        board[x + i]
      )
        return true;
    }
    x += sw;
  }
  return false;
}

function cloudBounds(bounds, d) {
  const b0 = bounds[0],
    b1 = bounds[1];
  if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
  if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
  if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
  if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
}

function collideRects(a, b) {
  return (
    a.x + a.x1 > b[0].x &&
    a.x + a.x0 < b[1].x &&
    a.y + a.y1 > b[0].y &&
    a.y + a.y0 < b[1].y
  );
}

function archimedeanSpiral(size) {
    throw new Error("STUB");
}

function rectangularSpiral(size) {
    throw new Error("STUB");
}

// TODO reuse arrays?
function zeroArray(n) {
  const a = [];
  let i = -1;
  while (++i < n) a[i] = 0;
  return a;
}

function cloudCanvas() {
    throw new Error("STUB");
}

function functor(d) {
  return typeof d === 'function'
    ? d
    : function () {
        throw new Error("STUB");
    };
}

const spirals = {
  archimedean: archimedeanSpiral,
  rectangular: rectangularSpiral,
};

export function tagCloud() {
  let size = [256, 256],
    text = cloudText,
    font = cloudFont,
    fontSize = cloudFontSize,
    fontWeight = cloudFontNormal,
    rotate = cloudRotate,
    padding = cloudPadding,
    spiral = archimedeanSpiral,
    random = Math.random,
    event = cloudDispatch,
    words = [],
    timer = null,
    timeInterval = Infinity,
    canvas = cloudCanvas;

  const fontStyle = cloudFontNormal;
  const cloud: any = {};

  cloud.start = function () {
      throw new Error("STUB");
  };

  cloud.stop = function () {
      throw new Error("STUB");
  };

  function getContext(canvas: HTMLCanvasElement) {
    canvas.width = canvas.height = 1;
    const ratio = Math.sqrt(
      canvas.getContext('2d')!.getImageData(0, 0, 1, 1).data.length >> 2,
    );
    canvas.width = (cw << 5) / ratio;
    canvas.height = ch / ratio;

    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.fillStyle = context.strokeStyle = 'red';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    return { context, ratio };
  }

  function place(board, tag, bounds) {
    // const perimeter = [{ x: 0, y: 0 }, { x: size[0], y: size[1] }],
    const startX = tag.x,
      startY = tag.y,
      maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
      s = spiral(size),
      dt = random() < 0.5 ? 1 : -1;
    let dxdy,
      t = -dt,
      dx,
      dy;

    while ((dxdy = s((t += dt)))) {
      dx = ~~dxdy[0];
      dy = ~~dxdy[1];

      if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta) break;

      tag.x = startX + dx;
      tag.y = startY + dy;

      if (
        tag.x + tag.x0 < 0 ||
        tag.y + tag.y0 < 0 ||
        tag.x + tag.x1 > size[0] ||
        tag.y + tag.y1 > size[1]
      )
        continue;
      // TODO only check for collisions within current bounds.
      if (!bounds || !cloudCollide(tag, board, size[0])) {
        if (!bounds || collideRects(tag, bounds)) {
          const sprite = tag.sprite,
            w = tag.width >> 5,
            sw = size[0] >> 5,
            lx = tag.x - (w << 4),
            sx = lx & 0x7f,
            msx = 32 - sx,
            h = tag.y1 - tag.y0;
          let last,
            x = (tag.y + tag.y0) * sw + (lx >> 5);
          for (let j = 0; j < h; j++) {
            last = 0;
            for (let i = 0; i <= w; i++) {
              board[x + i] |=
                (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
            }
            x += sw;
          }
          delete tag.sprite;
          return true;
        }
      }
    }
    return false;
  }

  cloud.createMask = (img: HTMLImageElement) => {
      throw new Error("STUB");
  };

  cloud.timeInterval = function (_) {
      throw new Error("STUB");
  };

  cloud.words = function (_) {
      throw new Error("STUB");
  };

  cloud.size = function (_ = []) {
      throw new Error("STUB");
  };

  cloud.text = function (_) {
      throw new Error("STUB");
  };

  cloud.font = function (_) {
      throw new Error("STUB");
  };

  cloud.fontWeight = function (_) {
      throw new Error("STUB");
  };

  cloud.rotate = function (_) {
      throw new Error("STUB");
  };

  cloud.canvas = function (_) {
      throw new Error("STUB");
  };

  cloud.spiral = function (_) {
      throw new Error("STUB");
  };

  cloud.fontSize = function (_) {
      throw new Error("STUB");
  };

  cloud.padding = function (_) {
      throw new Error("STUB");
  };

  cloud.random = function (_) {
      throw new Error("STUB");
  };

  cloud.on = function (_) {
      throw new Error("STUB");
  };

  return cloud;
}
