export class LengthVariableFloat32Array {
  public constructor(initialCapacity = 16) {
    this.array = new Float32Array(initialCapacity);
  }
  private array: Float32Array;
  private _length: number;
  public get length(): number {
    return 0;
  }
  public push(arg: number): void {
    return;
  }
  public toArray(): Float32Array {
    return this.array.slice(0, this.length);
  }
}
