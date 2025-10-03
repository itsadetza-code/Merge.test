export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  // แปลง collection3 จาก descending → ascending
  const col3 = [...collection3].reverse();

  // รวม 3 array ที่เป็น ascending
  return mergeThree(collection1, collection2, col3);
}

// ฟังก์ชัน merge 3 array ที่เรียงแล้ว
function mergeThree(a: number[], b: number[], c: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < a.length || j < b.length || k < c.length) {
    const candidates: number[] = [];
    if (i < a.length) candidates.push(a[i]);
    if (j < b.length) candidates.push(b[j]);
    if (k < c.length) candidates.push(c[k]);

    // หาค่าที่เล็กสุด
    const min = Math.min(...candidates);
    result.push(min);

    if (i < a.length && a[i] === min) i++;
    else if (j < b.length && b[j] === min) j++;
    else if (k < c.length && c[k] === min) k++;
  }

  return result;
}
