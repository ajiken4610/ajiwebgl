/**
 * Matrixは、4x4の行列を表します。
 * オフセットは定められていませんが、最低で16個の要素が必要です。
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
  float,
  ...float[]
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
   * 行列計算のテンプポインタとして利用してください。
   *
   * @static
   * @type {Matrix}
   * @memberof MatrixU
   */
  public static temp0: Matrix;
  /**
   * 行列計算のテンプポインタとして利用してください。
   *
   * @static
   * @type {Matrix}
   * @memberof MatrixU
   */
  public static temp1: Matrix;
  /**
   * 逆行列を返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s ソースとなる行列
   * @param so ソースとなる行列のオフセット
   */
  static invertM(r: Matrix, ro: number, s: Matrix, so: number);
  /**
   * 行列s1*s2を計算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s1 乗算の左辺となるソースの行列
   * @param s1o 乗算の左辺となるソースの行列のオフセット
   * @param s2 乗算の右辺となるソースの行列
   * @param s2o 乗算の右辺となるソースの行列のオフセット
   */
  static multiplyMM(
    r: Matrix,
    ro: number,
    s1: Matrix,
    s1o: number,
    s2: Matrix,
    s2o: number
  );
  /**
   * 行列とベクトルを乗算して返します。
   * @param r 結果を格納する行列
   * @param s1 乗算の左辺の行列
   * @param s1o 乗算の左辺の行列のオフセット
   * @param s2 乗算の右辺のベクトル
   */
  static multiplyMV(r: Vec4, s1: Matrix, s1o: number, s2: Vec4);
  /**
   * 行列の転置ベクトルを計算して返します。
   * @param r 結果を格納する行列
   * @param so 結果を格納する行列のオフセット
   * @param s 転置される行列
   * @param so 転置される行列のオフセット
   */
  static transposeM(r: Matrix, ro: number, s: Matrix, so: number);
  /**
   * 単位行列を返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   */
  static setIdentityM(r: Matrix, ro: number);

  /**
   * 平行投影行列を生成して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param left 左クリップ面
   * @param right 右クリップ面
   * @param bottom 下クリップ面
   * @param top 上クリップ面
   * @param near ニアクリップ面
   * @param far ファークリップ面
   */
  static setOrthoM(
    r: Matrix,
    ro: number,
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
   * @param ro 結果を格納する行列のオフセット
   * @param fovy 縦方向の視野角
   * @param aspect 画面の比率w/h
   * @param near ニアクリップ面
   * @param far ファークリップ面
   */
  static setPerspectiveM(
    r: Matrix,
    ro: number,
    fovy: float,
    aspect: float,
    near: float,
    far: float
  );
  /**
   * 平行移動行列を計算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param dx X方向に移動する量
   * @param dy Y方向に移動する量
   * @param dz Z方向に移動する量
   */
  static setTranslateM(r: Matrix, ro: number, dx: float, dy: float, dz: float);
  /**
   * 行列に平行移動行列を乗算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s 元となる行列
   * @param so 元となる行列のオフセット
   * @param dx X方向に移動する量
   * @param dy Y方向に移動する量
   * @param dz Z方向に移動する量
   */
  static translateM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    dx: float,
    dy: float,
    dz: float
  );
  /**
   * 回転行列を計算して返します。ベクトルは正規化されている必要があります。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param a 回転量
   * @param x 回転軸の方向ベクトルのX成分
   * @param y 回転軸の方向ベクトルのY成分
   * @param z 回転軸の方向ベクトルのZ成分
   */
  static setRotateM(
    r: Matrix,
    ro: number,
    a: float,
    x: float,
    y: float,
    z: float
  );
  /**
   * 行列に回転行列を乗算して返します。ベクトルは正規化されている必要があります。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s 元となる行列
   * @param so 元となる行列のオフセット
   * @param a 回転量
   * @param x 回転軸の方向ベクトルのX成分
   * @param y 回転軸の方向ベクトルのY成分
   * @param z 回転軸の方向ベクトルのZ成分
   */
  static rotateM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    a: float,
    x: float,
    y: float,
    z: float
  );
  /**
   * 回転行列を軸ごとの回転量から計算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param x X軸に対する回転量
   * @param y Y軸に対する回転量
   * @param z Z軸に対する回転量
   */
  static setRotateEulerM(r: Matrix, ro: number, x: float, y: float, z: float);
  /**
   * 行列に回転行列を軸ごとの回転量から計算して乗算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s 元となる行列
   * @param so 元となる行列のオフセット
   * @param x X軸に対する回転量
   * @param y Y軸に対する回転量
   * @param z Z軸に対する回転量
   */
  static rotateEulerM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    x: float,
    y: float,
    z: float
  );
  /**
   * スケール行列を計算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param x X軸方向の拡大率
   * @param y Y軸方向の拡大率
   * @param z Z軸方向の拡大率
   */
  static setScaleM(r: Matrix, ro: number, sx: float, sy: float, sz: float);
  /**
   * 行列にスケール行列を乗算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
   * @param s 元となる行列
   * @param so 元となる行列のオフセット
   * @param x X軸方向の拡大率
   * @param y Y軸方向の拡大率
   * @param z Z軸方向の拡大率
   */
  static scaleM(
    r: Matrix,
    ro: number,
    s: Matrix,
    so: number,
    sx: float,
    sy: float,
    sz: float
  );

  /**
   * ビュー変換行列を計算して返します。
   * @param r 結果を格納する行列
   * @param ro 結果を格納する行列のオフセット
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
    ro: number,
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

declare class VecU {
  /**
   * Vec4の長さを計算します。
   * @param s 長さを計算するベクトル
   * @return ベクトルの計算された長さ
   */
  static length4(s: Vec4): float;
  /**
   * Vec4を正規化して返します。
   * @param r 正規化するベクトル
   * @param s 正規化されたベクトルのポインタ
   */
  static normalize4(r: Vec4, s: Vec4);
  /**
   * Vec3の長さを計算します。
   * @param s 長さを計算するベクトル
   * @return ベクトルの計算された長さ
   */
  static length3(s: Vec3): float;
}

/**
 * このインターフェースは、OBJファイルに含まれる要素を返します。
 */
interface ObjFile {
  /**
   * 頂点の座標の配列。要素順にx,y,z,wが並んでいる。
   */
  v: number[];
  /**
   * 頂点のUV座標の配列。要素順にu,vが並んでいる
   */
  vt: number[];
  /**
   * 頂点の法線の配列。要素順にX,Y,Zが並んでいる。OBJファイルの法線は正規化されていない場合があるが、この配列では正規化して格納される。
   */
  vn: number[];
  /**
   * 面の配列。頂点インデックス、テクスチャインデックス、ノーマルインデックスの順に並んだ物が頂点分あるのが配列になっている。
   */
  f: number[][];
}

/**
 * このクラスはObjファイルを読み込む静的ユーティリティを提供します。
 */
declare class ObjFileUtils {
  /**
   * テキストからOBJ形式を読み込みます。
   * @param src 読み込むテキスト
   * @return 読み込まれた内容が含まれたオブジェクト
   */
  static parse(src: string): ObjFile;
}
