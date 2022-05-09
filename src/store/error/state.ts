export interface ErrorStateInterface {
  error: Object | null;
}

function state(): ErrorStateInterface {
  return {
    error: null
  };
}

export default state;
