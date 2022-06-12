export class LengthVariableFloat32Array {
  public constructor(initialCapacity = 16) {
    this.array = new Float32Array(initialCapacity);
  }
  private array: Float32Array;
  private _length: number;
  public get length(): number {
    return this._length;
  }
  public push(value: number): void {
    if (this.array.length <= this.length) {
      let oldArray = this.array;
      let newArray = new Float32Array(oldArray.length + 16);
      newArray.set(oldArray);
      this.array = newArray;
    }
    this.array[length] = value;
    this._length++;
  }
  public toArray(): Float32Array {
    return this.array.slice(0, this.length);
  }
}
