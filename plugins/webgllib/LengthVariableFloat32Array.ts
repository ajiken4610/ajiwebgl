export class LengthVariableFloat32Array {
  public static get INITIAL_CAPA() {
    return 16;
  }
  public constructor(
    initialCapacity = LengthVariableFloat32Array.INITIAL_CAPA
  ) {
    this.array = new Float32Array(initialCapacity);
  }
  private array: Float32Array;
  private _length: number = 0;
  public get length(): number {
    return this._length;
  }
  public push(value: number): void {
    if (this.array.length <= this.length) {
      let oldArray = this.array;
      let newArray = new Float32Array(
        oldArray.length + LengthVariableFloat32Array.INITIAL_CAPA
      );
      newArray.set(oldArray);
      this.array = newArray;
    }
    this.array[this.length] = value;
    this._length++;
  }
  public toArray(): Float32Array {
    return this.array.slice(0, this.length);
  }
}
