const throwError = (message: string) => () => { throw new Error(message); };

async function config() {
  return {
    server: await import('@/config/server');
  };
}

export default config();
