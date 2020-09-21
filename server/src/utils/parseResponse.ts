export function parseResponse(data: string) {
  const dataToReturn = data.match(/\(([^)]+)\)/)[1];

  return dataToReturn;
}