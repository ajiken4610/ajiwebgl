export class VecU {
  static length4(vec: Vec4) {
    const x = vec[0];
    const y = vec[1];
    const z = vec[2];
    const w = vec[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
}
