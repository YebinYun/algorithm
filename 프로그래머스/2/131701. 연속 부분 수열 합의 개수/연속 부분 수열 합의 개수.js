function solution(elements) {
  const n  = elements.length;
  const a  = elements.concat(elements);
  const ps = a.reduce((p, x) => (p.push(p[p.length - 1] + x), p), [0]); // prefix

  return new Set(
    Array.from({ length: n }, (_, len) => len + 1)
      .flatMap(len => Array.from({ length: n }, (_, s) => ps[s + len] - ps[s]))
  ).size;
}
