export class MatrixU {
  static invertM(r: Matrix, s: Matrix) {
    const t11 = s[0];
    const t21 = s[1];
    const t31 = s[2];
    const t41 = s[3];
    const t12 = s[4];
    const t22 = s[5];
    const t32 = s[6];
    const t42 = s[7];
    const t13 = s[8];
    const t23 = s[9];
    const t33 = s[10];
    const t43 = s[11];
    const t14 = s[12];
    const t24 = s[13];
    const t34 = s[14];
    const t44 = s[15];
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
    r[0] = v0 / a;
    r[1] =
      -(
        t21 * t33 * t44 +
        t23 * t34 * t41 +
        t24 * t31 * t43 -
        t24 * t33 * t41 -
        t23 * t31 * t44 -
        t21 * t34 * t43
      ) / a;
    r[2] =
      (t21 * t32 * t44 +
        t22 * t34 * t41 +
        t24 * t31 * t42 -
        t24 * t32 * t41 -
        t22 * t31 * t44 -
        t21 * t34 * t42) /
      a;
    r[3] =
      -(
        t21 * t32 * t43 +
        t22 * t33 * t41 +
        t23 * t31 * t42 -
        t23 * t32 * t41 -
        t22 * t31 * t43 -
        t21 * t33 * t42
      ) / a;
    r[4] = -v1 / a;
    r[5] =
      (t11 * t33 * t44 +
        t13 * t34 * t41 +
        t14 * t31 * t43 -
        t14 * t33 * t41 -
        t13 * t31 * t44 -
        t11 * t34 * t43) /
      a;
    r[6] =
      -(
        t11 * t32 * t44 +
        t12 * t34 * t41 +
        t14 * t31 * t42 -
        t14 * t32 * t41 -
        t12 * t31 * t44 -
        t11 * t34 * t42
      ) / a;
    r[7] =
      (t11 * t32 * t43 +
        t12 * t33 * t41 +
        t13 * t31 * t42 -
        t13 * t32 * t41 -
        t12 * t31 * t43 -
        t11 * t33 * t42) /
      a;
    r[8] = v2 / a;
    r[9] =
      -(
        t11 * t23 * t44 +
        t13 * t24 * t41 +
        t14 * t21 * t43 -
        t14 * t23 * t41 -
        t13 * t21 * t44 -
        t11 * t24 * t43
      ) / a;
    r[10] =
      (t11 * t22 * t44 +
        t12 * t24 * t41 +
        t14 * t21 * t42 -
        t14 * t22 * t41 -
        t12 * t21 * t44 -
        t11 * t24 * t42) /
      a;
    r[11] =
      -(
        t11 * t22 * t43 +
        t12 * t23 * t41 +
        t13 * t21 * t42 -
        t13 * t22 * t41 -
        t12 * t21 * t43 -
        t11 * t23 * t42
      ) / a;
    r[12] = -v3 / a;
    r[13] =
      (t11 * t23 * t34 +
        t13 * t24 * t31 +
        t14 * t21 * t33 -
        t14 * t23 * t31 -
        t13 * t21 * t34 -
        t11 * t24 * t33) /
      a;
    r[14] =
      -(
        t11 * t22 * t34 +
        t12 * t24 * t31 +
        t14 * t21 * t32 -
        t14 * t22 * t31 -
        t12 * t21 * t34 -
        t11 * t24 * t32
      ) / a;
    r[15] =
      (t11 * t22 * t33 +
        t12 * t23 * t31 +
        t13 * t21 * t32 -
        t13 * t22 * t31 -
        t12 * t21 * t33 -
        t11 * t23 * t32) /
      a;
  }
  static multiplyMM(r: Matrix, s1: Matrix, s2: Matrix) {
    const t0 = s1[0];
    const t1 = s1[1];
    const t2 = s1[2];
    const t3 = s1[3];
    const t4 = s1[4];
    const t5 = s1[5];
    const t6 = s1[6];
    const t7 = s1[7];
    const t8 = s1[8];
    const t9 = s1[9];
    const t10 = s1[10];
    const t11 = s1[11];
    const t12 = s1[12];
    const t13 = s1[13];
    const t14 = s1[14];
    const t15 = s1[15];
    const u0 = s2[0];
    const u1 = s2[1];
    const u2 = s2[2];
    const u3 = s2[3];
    const u4 = s2[4];
    const u5 = s2[5];
    const u6 = s1[6];
    const u7 = s1[7];
    const u8 = s1[8];
    const u9 = s1[9];
    const u10 = s1[10];
    const u11 = s1[11];
    const u12 = s1[12];
    const u13 = s1[13];
    const u14 = s1[14];
    const u15 = s1[15];
    r[0] = t0 * u0 + t4 * u1 + t8 * u2 + t12 * u3;
    r[1] = t1 * u0 + t5 * u1 + t9 * u2 + t13 * u3;
    r[2] = t2 * u0 + t6 * u1 + t10 * u2 + t14 * u3;
    r[3] = t3 * u0 + t7 * u1 + t11 * u2 + t15 * u3;
    r[4] = t0 * u4 + t4 * u5 + t8 * u6 + t12 * u7;
    r[5] = t1 * u4 + t5 * u5 + t9 * u6 + t13 * u7;
    r[6] = t2 * u4 + t6 * u5 + t10 * u6 + t14 * u7;
    r[7] = t3 * u4 + t7 * u5 + t11 * u6 + t15 * u7;
    r[8] = t0 * u8 + t4 * u9 + t8 * u10 + t12 * u11;
    r[9] = t1 * u8 + t5 * u9 + t9 * u10 + t13 * u11;
    r[10] = t2 * u8 + t6 * u9 + t10 * u10 + t14 * u11;
    r[11] = t3 * u8 + t7 * u9 + t11 * u10 + t15 * u11;
    r[12] = t0 * u12 + t4 * u13 + t8 * u14 + t12 * u15;
    r[13] = t1 * u12 + t5 * u13 + t9 * u14 + t13 * u15;
    r[14] = t2 * u12 + t6 * u13 + t10 * u14 + t14 * u15;
    r[15] = t3 * u12 + t7 * u13 + t11 * u14 + t15 * u15;
  }
  static multiplyMV(r: Vec4, s1: Matrix, s2: Vec4) {
    const x = s2[0];
    const y = s2[1];
    const z = s2[2];
    const w = s2[3];
    r[0] = s1[0] * x + s1[1] * y + s1[2] * z + s1[3] * w;
    r[1] = s1[4] * x + s1[5] * y + s1[6] * z + s1[7] * w;
    r[2] = s1[8] * x + s1[9] * y + s1[10] * z + s1[11] * w;
    r[3] = s1[12] * x + s1[13] * y + s1[14] * z + s1[15] * w;
  }
  static transposeM(r: Matrix, s: Matrix) {
    r[0] = s[0];
    r[1] = s[4];
    r[2] = s[8];
    r[3] = s[12];
    r[4] = s[1];
    r[5] = s[5];
    r[6] = s[9];
    r[7] = s[13];
    r[8] = s[2];
    r[9] = s[6];
    r[10] = s[10];
    r[11] = s[14];
    r[12] = s[3];
    r[13] = s[7];
    r[14] = s[11];
    r[15] = s[15];
  }
  static setIdentityM(r: Matrix) {
    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;
  }
  static setOrthoM(
    r: Matrix,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ) {
    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (far - near);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(far + near) / (far - near);
    r[15] = 1;
  }
  static setPerspectiveM(
    r: Matrix,
    fovy: number,
    aspect: number,
    near: number,
    far: number
  ) {
    r[0] = 1 / (aspect * Math.tan(fovy / 2));
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1 / Math.tan(fovy / 2);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -(far + near) / (far - near);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = (-2 * far * near) / (far - near);
    r[15] = 0;
  }
}
