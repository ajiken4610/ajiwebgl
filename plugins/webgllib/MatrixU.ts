export class MatrixU {
  public static temp0: Matrix = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  public static temp1: Matrix = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  static invertM(r: Matrix, ro: number, s: Matrix, so: number) {
    const t11 = s[0 + so];
    const t21 = s[1 + so];
    const t31 = s[2 + so];
    const t41 = s[3 + so];
    const t12 = s[4 + so];
    const t22 = s[5 + so];
    const t32 = s[6 + so];
    const t42 = s[7 + so];
    const t13 = s[8 + so];
    const t23 = s[9 + so];
    const t33 = s[10 + so];
    const t43 = s[11 + so];
    const t14 = s[12 + so];
    const t24 = s[13 + so];
    const t34 = s[14 + so];
    const t44 = s[15 + so];
    const v0 =
      t22 * t33 * t44 +
      t23 * t34 * t42 +
      t24 * t32 * t43 -
      t24 * t33 * t42 -
      t23 * t32 * t44 -
      t22 * t34 * t43;
    const v1 =
      t12 * t33 * t44 +
      t13 * t34 * t42 +
      t14 * t32 * t43 -
      t14 * t33 * t42 -
      t13 * t32 * t44 -
      t12 * t34 * t43;
    const v2 =
      t12 * t23 * t44 +
      t13 * t24 * t42 +
      t14 * t22 * t43 -
      t14 * t23 * t42 -
      t13 * t22 * t44 -
      t12 * t24 * t43;
    const v3 =
      t12 * t23 * t34 +
      t13 * t24 * t32 +
      t14 * t22 * t33 -
      t14 * t23 * t32 -
      t13 * t22 * t34 -
      t12 * t24 * t33;
    const a = t11 * v0 - t21 * v1 + t31 * v2 - t41 * v3;
    r[0 + ro] = v0 / a;
    r[1 + ro] =
      -(
        t21 * t33 * t44 +
        t23 * t34 * t41 +
        t24 * t31 * t43 -
        t24 * t33 * t41 -
        t23 * t31 * t44 -
        t21 * t34 * t43
      ) / a;
    r[2 + ro] =
      (t21 * t32 * t44 +
        t22 * t34 * t41 +
        t24 * t31 * t42 -
        t24 * t32 * t41 -
        t22 * t31 * t44 -
        t21 * t34 * t42) /
      a;
    r[3 + ro] =
      -(
        t21 * t32 * t43 +
        t22 * t33 * t41 +
        t23 * t31 * t42 -
        t23 * t32 * t41 -
        t22 * t31 * t43 -
        t21 * t33 * t42
      ) / a;
    r[4 + ro] = -v1 / a;
    r[5 + ro] =
      (t11 * t33 * t44 +
        t13 * t34 * t41 +
        t14 * t31 * t43 -
        t14 * t33 * t41 -
        t13 * t31 * t44 -
        t11 * t34 * t43) /
      a;
    r[6 + ro] =
      -(
        t11 * t32 * t44 +
        t12 * t34 * t41 +
        t14 * t31 * t42 -
        t14 * t32 * t41 -
        t12 * t31 * t44 -
        t11 * t34 * t42
      ) / a;
    r[7 + ro] =
      (t11 * t32 * t43 +
        t12 * t33 * t41 +
        t13 * t31 * t42 -
        t13 * t32 * t41 -
        t12 * t31 * t43 -
        t11 * t33 * t42) /
      a;
    r[8 + ro] = v2 / a;
    r[9 + ro] =
      -(
        t11 * t23 * t44 +
        t13 * t24 * t41 +
        t14 * t21 * t43 -
        t14 * t23 * t41 -
        t13 * t21 * t44 -
        t11 * t24 * t43
      ) / a;
    r[10 + ro] =
      (t11 * t22 * t44 +
        t12 * t24 * t41 +
        t14 * t21 * t42 -
        t14 * t22 * t41 -
        t12 * t21 * t44 -
        t11 * t24 * t42) /
      a;
    r[11 + ro] =
      -(
        t11 * t22 * t43 +
        t12 * t23 * t41 +
        t13 * t21 * t42 -
        t13 * t22 * t41 -
        t12 * t21 * t43 -
        t11 * t23 * t42
      ) / a;
    r[12 + ro] = -v3 / a;
    r[13 + ro] =
      (t11 * t23 * t34 +
        t13 * t24 * t31 +
        t14 * t21 * t33 -
        t14 * t23 * t31 -
        t13 * t21 * t34 -
        t11 * t24 * t33) /
      a;
    r[14 + ro] =
      -(
        t11 * t22 * t34 +
        t12 * t24 * t31 +
        t14 * t21 * t32 -
        t14 * t22 * t31 -
        t12 * t21 * t34 -
        t11 * t24 * t32
      ) / a;
    r[15 + ro] =
      (t11 * t22 * t33 +
        t12 * t23 * t31 +
        t13 * t21 * t32 -
        t13 * t22 * t31 -
        t12 * t21 * t33 -
        t11 * t23 * t32) /
      a;
  }
  static multiplyMM(
    r: Matrix,
    ro: number,
    s1: Matrix,
    s1o: number,
    s2: Matrix,
    s2o: number
  ) {
    const t0 = s1[0 + s1o];
    const t1 = s1[1 + s1o];
    const t2 = s1[2 + s1o];
    const t3 = s1[3 + s1o];
    const t4 = s1[4 + s1o];
    const t5 = s1[5 + s1o];
    const t6 = s1[6 + s1o];
    const t7 = s1[7 + s1o];
    const t8 = s1[8 + s1o];
    const t9 = s1[9 + s1o];
    const t10 = s1[10 + s1o];
    const t11 = s1[11 + s1o];
    const t12 = s1[12 + s1o];
    const t13 = s1[13 + s1o];
    const t14 = s1[14 + s1o];
    const t15 = s1[15 + s1o];
    const u0 = s2[0 + s2o];
    const u1 = s2[1 + s2o];
    const u2 = s2[2 + s2o];
    const u3 = s2[3 + s2o];
    const u4 = s2[4 + s2o];
    const u5 = s2[5 + s2o];
    const u6 = s1[6 + s2o];
    const u7 = s1[7 + s2o];
    const u8 = s1[8 + s2o];
    const u9 = s1[9 + s2o];
    const u10 = s1[10 + s2o];
    const u11 = s1[11 + s2o];
    const u12 = s1[12 + s2o];
    const u13 = s1[13 + s2o];
    const u14 = s1[14 + s2o];
    const u15 = s1[15 + s2o];
    r[0 + ro] = t0 * u0 + t4 * u1 + t8 * u2 + t12 * u3;
    r[1 + ro] = t1 * u0 + t5 * u1 + t9 * u2 + t13 * u3;
    r[2 + ro] = t2 * u0 + t6 * u1 + t10 * u2 + t14 * u3;
    r[3 + ro] = t3 * u0 + t7 * u1 + t11 * u2 + t15 * u3;
    r[4 + ro] = t0 * u4 + t4 * u5 + t8 * u6 + t12 * u7;
    r[5 + ro] = t1 * u4 + t5 * u5 + t9 * u6 + t13 * u7;
    r[6 + ro] = t2 * u4 + t6 * u5 + t10 * u6 + t14 * u7;
    r[7 + ro] = t3 * u4 + t7 * u5 + t11 * u6 + t15 * u7;
    r[8 + ro] = t0 * u8 + t4 * u9 + t8 * u10 + t12 * u11;
    r[9 + ro] = t1 * u8 + t5 * u9 + t9 * u10 + t13 * u11;
    r[10 + ro] = t2 * u8 + t6 * u9 + t10 * u10 + t14 * u11;
    r[11 + ro] = t3 * u8 + t7 * u9 + t11 * u10 + t15 * u11;
    r[12 + ro] = t0 * u12 + t4 * u13 + t8 * u14 + t12 * u15;
    r[13 + ro] = t1 * u12 + t5 * u13 + t9 * u14 + t13 * u15;
    r[14 + ro] = t2 * u12 + t6 * u13 + t10 * u14 + t14 * u15;
    r[15 + ro] = t3 * u12 + t7 * u13 + t11 * u14 + t15 * u15;
  }
  static multiplyMV(r: Vec4, s1: Matrix, s1o: number, s2: Vec4) {
    const x = s2[0];
    const y = s2[1];
    const z = s2[2];
    const w = s2[3];
    r[0] =
      s1[0 + s1o] * x + s1[1 + s1o] * y + s1[2 + s1o] * z + s1[3 + s1o] * w;
    r[1] =
      s1[4 + s1o] * x + s1[5 + s1o] * y + s1[6 + s1o] * z + s1[7 + s1o] * w;
    r[2] =
      s1[8 + s1o] * x + s1[9 + s1o] * y + s1[10 + s1o] * z + s1[11 + s1o] * w;
    r[3] =
      s1[12 + s1o] * x + s1[13 + s1o] * y + s1[14 + s1o] * z + s1[15 + s1o] * w;
  }
  static transposeM(r: Matrix, ro: number, s: Matrix, so: number) {
    r[0 + ro] = s[0 + so];
    r[1 + ro] = s[4 + so];
    r[2 + ro] = s[8 + so];
    r[3 + ro] = s[12 + so];
    r[4 + ro] = s[1 + so];
    r[5 + ro] = s[5 + so];
    r[6 + ro] = s[9 + so];
    r[7 + ro] = s[13 + so];
    r[8 + ro] = s[2 + so];
    r[9 + ro] = s[6 + so];
    r[10 + ro] = s[10 + so];
    r[11 + ro] = s[14 + so];
    r[12 + ro] = s[3 + so];
    r[13 + ro] = s[7 + so];
    r[14 + ro] = s[11 + so];
    r[15 + ro] = s[15 + so];
  }
  static setIdentityM(r: Matrix, ro: number) {
    r[0 + ro] = 1;
    r[1 + ro] = 0;
    r[2 + ro] = 0;
    r[3 + ro] = 0;
    r[4 + ro] = 0;
    r[5 + ro] = 1;
    r[6 + ro] = 0;
    r[7 + ro] = 0;
    r[8 + ro] = 0;
    r[9 + ro] = 0;
    r[10 + ro] = 1;
    r[11 + ro] = 0;
    r[12 + ro] = 0;
    r[13 + ro] = 0;
    r[14 + ro] = 0;
    r[15 + ro] = 1;
  }
  static setOrthoM(
    r: Matrix,
    ro: number,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ) {
    r[0 + ro] = 2 / (right - left);
    r[1 + ro] = 0;
    r[2 + ro] = 0;
    r[3 + ro] = 0;
    r[4 + ro] = 0;
    r[5 + ro] = 2 / (top - bottom);
    r[6 + ro] = 0;
    r[7 + ro] = 0;
    r[8 + ro] = 0;
    r[9 + ro] = 0;
    r[10 + ro] = -2 / (far - near);
    r[11 + ro] = 0;
    r[12 + ro] = -(right + left) / (right - left);
    r[13 + ro] = -(top + bottom) / (top - bottom);
    r[14 + ro] = -(far + near) / (far - near);
    r[15 + ro] = 1;
  }
  static setPerspectiveM(
    r: Matrix,
    ro: number,
    fovy: number,
    aspect: number,
    near: number,
    far: number
  ) {
    r[0 + ro] = 1 / (aspect * Math.tan(fovy / 2));
    r[1 + ro] = 0;
    r[2 + ro] = 0;
    r[3 + ro] = 0;
    r[4 + ro] = 0;
    r[5 + ro] = 1 / Math.tan(fovy / 2);
    r[6 + ro] = 0;
    r[7 + ro] = 0;
    r[8 + ro] = 0;
    r[9 + ro] = 0;
    r[10 + ro] = -(far + near) / (far - near);
    r[11 + ro] = -1;
    r[12 + ro] = 0;
    r[13 + ro] = 0;
    r[14 + ro] = (-2 * far * near) / (far - near);
    r[15 + ro] = 0;
  }
  static setTranslateM(
    r: Matrix,
    ro: number,
    dx: number,
    dy: number,
    dz: number
  ) {
    r[0 + ro] = 1;
    r[1 + ro] = 0;
    r[2 + ro] = 0;
    r[3 + ro] = 0;
    r[4 + ro] = 0;
    r[5 + ro] = 1;
    r[6 + ro] = 0;
    r[7 + ro] = 0;
    r[8 + ro] = 0;
    r[9 + ro] = 0;
    r[10 + ro] = 1;
    r[11 + ro] = 0;
    r[12 + ro] = dx;
    r[13 + ro] = dy;
    r[14 + ro] = dz;
    r[15 + ro] = 1;
  }
  static translateM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    dx: number,
    dy: number,
    dz: number
  ) {
    this.setTranslateM(this.temp0, 0, dx, dy, dz);
    this.multiplyMM(r, ro, this.temp0, 0, s, so);
  }
  static setRotateM(
    r: Matrix,
    ro: number,
    a: number,
    x: number,
    y: number,
    z: number
  ) {
    const sin = Math.sin((a * Math.PI) / 180);
    const cos = Math.cos((a * Math.PI) / 180);
    const icos = 1 - cos;
    r[0 + ro] = x * x * icos + cos;
    r[1 + ro] = x * y * icos + z * sin;
    r[2 + ro] = z * x * icos - y * sin;
    r[3 + ro] = 0;
    r[4 + ro] = x * y * icos - z * sin;
    r[5 + ro] = y * y * icos + cos;
    r[6 + ro] = y * z * icos + x * sin;
    r[7 + ro] = y * z * icos + x * sin;
    r[8 + ro] = 0;
    r[9 + ro] = z * x * icos + y * sin;
    r[10 + ro] = y * z * icos - x * sin;
    r[11 + ro] = z * z * icos + cos;
    r[12 + ro] = 0;
    r[13 + ro] = 0;
    r[14 + ro] = 0;
    r[15 + ro] = 1;
  }
  static rotateM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    a: number,
    x: number,
    y: number,
    z: number
  ) {
    this.setRotateM(this.temp0, 0, a, x, y, z);
    this.multiplyMM(r, ro, this.temp0, 0, s, so);
  }
  static setRotateEulerM(
    r: Matrix,
    ro: number,
    x: number,
    y: number,
    z: number
  ) {}
  static rotateEulerM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    x: number,
    y: number,
    z: number
  ) {}
  static setScaleM(r: Matrix, ro: number, sx: number, sy: number, sz: number) {
    r[0 + ro] = sx;
    r[1 + ro] = 0;
    r[2 + ro] = 0;
    r[3 + ro] = 0;
    r[4 + ro] = 0;
    r[5 + ro] = sy;
    r[6 + ro] = 0;
    r[7 + ro] = 0;
    r[8 + ro] = 0;
    r[9 + ro] = 0;
    r[10 + ro] = sz;
    r[11 + ro] = 0;
    r[12 + ro] = 0;
    r[13 + ro] = 0;
    r[14 + ro] = 0;
    r[15 + ro] = 1;
  }
  static scaleM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    sx: number,
    sy: number,
    sz: number
  ) {
    this.setScaleM(this.temp0, 0, sx, sy, sz);
    this.multiplyMM(r, ro, this.temp0, 0, s, so);
  }
  static setLookAtM(
    r: Matrix,
    ro: number,
    eyeX: number,
    eyeY: number,
    eyeZ: number,
    centerX: number,
    centerY: number,
    centerZ: number,
    upX: number,
    upY: number,
    upZ: number
  ) {
    // TODO: implementation
  }
}
