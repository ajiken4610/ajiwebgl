export class VecU {
  static length4(s: Vec4) {
    const x = s[0];
    const y = s[1];
    const z = s[2];
    const w = s[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  static normalize4(r: Vec4, s: Vec4) {
    const l = this.length4(s);
    r[0] = s[0] / l;
    r[1] = s[1] / l;
    r[2] = s[2] / l;
    r[3] = s[3] / l;
  }
}
