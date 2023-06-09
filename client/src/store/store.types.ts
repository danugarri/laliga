export type RootState = {
  counter: CounterStateType;
  auth: AuthStateType;
};
export type CounterStateType = {
  count: number;
};

export type AuthStateType = {
  token: string;
};
