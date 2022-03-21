/**
 * Matrixは、4x4の行列を表します。
 */
declare type Matrix = [
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float,
  float
];

/**
 * Vec2は2次元ベクトルを表します。
 */
declare type Vec2 = [float, float];
/**
 * Vec3は、3次元ベクトルを表します。
 */
declare type Vec3 = [float, float, float];
/**
 * Vec4は、4次元ベクトルを表します。
 */
declare type Vec4 = [float, float, float, float];

/**
 * クラスMatrixUは、Matrixに関するユーティリティを提供します。
 * このクラスは、スレッドセーフではありません。GLThreadから利用することを推奨します。
 */
declare class MatrixU {
  /**
   * 逆行列を返します。
   * @param r 結果を格納する行列
   * @param s ソースとなる行列
   */
  static invertM(r: Matrix, s: Matrix);
  /**
   * 行列s1*s2を計算して返します。
   * @param r 結果を格納する行列
   * @param s1 乗算の左辺となるソースの行列
   * @param s2 乗算の右辺となるソースの行列
   */
  static multiplyMM(r: Matrix, s1: Matrix, s2: Matrix);
  /**
   * 行列とベクトルを乗算して返します。
   * @param r 結果を格納する行列
   * @param s1 乗算の左辺の行列
   * @param s2 乗算の右辺のベクトル
   */
  static multiplyMV(r: Vec4, s1: Matrix, s2: Vec4);
  /**
   * 行列の転置ベクトルを計算して返します。
   * @param r 結果を格納する行列
   * @param s 転置される行列
   */
  static transposeM(r: Matrix, s: Matrix);
  /**
   * 単位行列を返します。
   * @param r 結果を格納する行列
   */
  static setIdentityM(r: Matrix);

  /**
   * 平行投影行列を生成して返します。
   * @param r 結果を格納する行列
   * @param left 左クリップ面
   * @param right 右クリップ面
   * @param bottom 下クリップ面
   * @param top 上クリップ面
   * @param near ニアクリップ面
   * @param far ファークリップ面
   */
  static setOrthoM(
    r: Matrix,
    left: float,
    right: float,
    bottom: float,
    top: float,
    near: float,
    far: float
  );
  /**
   * 透視投影行列を生成して返します
   * @param r 結果を格納する行列
   * @param fovy 縦方向の視野角
   * @param aspect 画面の比率w/h
   * @param near ニアクリップ面
   * @param far ファークリップ面
   */
  static setPerspectiveM(
    r: Matrix,
    fovy: float,
    aspect: float,
    near: float,
    far: float
  );
  /**
   * 平行移動行列を計算して返します。
   * @param r 結果を格納する行列
   * @param dx X方向に移動する量
   * @param dy Y方向に移動する量
   * @param dz Z方向に移動する量
   */
  static setTranslateM(r: Matrix, dx: float, dy: float, dz: float);
  /**
   * 行列に平行移動行列を乗算して返します。
   * @param r 結果を格納する行列
   * @param s 元となる行列
   * @param dx X方向に移動する量
   * @param dy Y方向に移動する量
   * @param dz Z方向に移動する量
   */
  static translateM(r: Matrix, s: Matrix, dx: float, dy: float, dz: float);
  /**
   * 回転行列を計算して返します。ベクトルは正規化されている必要があります。
   * @param r 結果を格納する行列
   * @param a 回転量
   * @param x 回転軸の方向ベクトルのX成分
   * @param y 回転軸の方向ベクトルのY成分
   * @param z 回転軸の方向ベクトルのZ成分
   */
  static setRotateM(r: Matrix, a: float, x: float, y: float, z: float);
  /**
   * 行列に回転行列を乗算して返します。ベクトルは正規化されている必要があります。
   * @param r 結果を格納する行列
   * @param s 元となる行列
   * @param a 回転量
   * @param x 回転軸の方向ベクトルのX成分
   * @param y 回転軸の方向ベクトルのY成分
   * @param z 回転軸の方向ベクトルのZ成分
   */
  static rotateM(r: Matrix, s: Matrix, a: float, x: float, y: float, z: float);
  /**
   * 回転行列を軸ごとの回転量から計算して返します。
   * @param r 結果を格納する行列
   * @param x X軸に対する回転量
   * @param y Y軸に対する回転量
   * @param z Z軸に対する回転量
   */
  static setRotateEulerM(r: Matrix, x: float, y: float, z: float);
  /**
   * 行列に回転行列を軸ごとの回転量から計算して乗算して返します。
   * @param r 結果を格納する行列
   * @param s 元となる行列
   * @param x X軸に対する回転量
   * @param y Y軸に対する回転量
   * @param z Z軸に対する回転量
   */
  static rotateEulerM(r: Matrix, s: Matrix, x: float, y: float, z: float);
  /**
   * スケール行列を計算して返します。
   * @param r 結果を格納する行列
   * @param x X軸方向の拡大率
   * @param y Y軸方向の拡大率
   * @param z Z軸方向の拡大率
   */
  static setScaleM(r: Matrix, sx: float, sy: float, sz: float);
  /**
   * 行列にスケール行列を乗算して返します。
   * @param r 結果を格納する行列
   * @param s 元となる行列
   * @param x X軸方向の拡大率
   * @param y Y軸方向の拡大率
   * @param z Z軸方向の拡大率
   */
  static scaleM(r: Matrix, s: Matrix, sx: float, sy: float, sz: float);

  /**
   * ビュー変換行列を計算して返します。
   * @param r 結果を格納する行列
   * @param eyeX 視点の位置のX座標
   * @param eyeY 視点の位置のY座標
   * @param eyeZ 視点の位置のZ座標
   * @param centerX 視点の方向のX座標
   * @param centerY 視点の方向のY座標
   * @param centerZ 視点の方向のZ座標
   * @param upX 視点の上方向のベクトルのX座標
   * @param upY 視点の上方向のベクトルのY座標
   * @param upZ 視点の上方向のベクトルのZ座標
   */
  static setLookAtM(
    r: Matrix,
    eyeX: float,
    eyeY: float,
    eyeZ: float,
    centerX: float,
    centerY: float,
    centerZ: float,
    upX: float,
    upY: float,
    upZ: float
  );
}
