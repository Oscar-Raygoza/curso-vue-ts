export interface LoadingStateInterface {
  isLoading: boolean;
}

function state(): LoadingStateInterface {
  return {
    isLoading: false,
  };
}

export default state;
