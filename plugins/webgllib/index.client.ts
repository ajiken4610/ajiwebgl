import { MatrixU } from "./MatrixU";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("helloworld");
  let a: Matrix = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 59];
  let b: Matrix = [
    61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 117, 127, 131,
  ];
  let r: Matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  MatrixU.multiplyMM(r, a, b);
  console.log(r);
  let c: Matrix = [1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1];
  MatrixU.invertM(r, a);
  console.log(r);
  let d: Matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 3, 5, 1];
  MatrixU.invertM(r, d);
  console.log(r);
});
