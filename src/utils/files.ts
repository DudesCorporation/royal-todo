export function importAll(files: __WebpackModuleApi.RequireContext) {
  return files.keys().map(k => files(k).default);
}
