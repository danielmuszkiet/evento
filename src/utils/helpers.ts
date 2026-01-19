export function capitalize(str: string): string {
  if (!str) return str;
  const [first, ...rest] = Array.from(str);
  return first.toLocaleUpperCase() + rest.join("");
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
