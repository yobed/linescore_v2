function formatVector(vec: number[] | string) {
  let arr: number[];
  if (Array.isArray(vec)) {
    arr = vec;
  } else if (typeof vec === "string") {
    arr = vec
      .split(/[\s,]+/)
      .map(Number)
      .filter((n) => !isNaN(n));
  } else {
    return "";
  }
  return arr.filter((n) => n !== -1).join(" ");
}

export { formatVector }