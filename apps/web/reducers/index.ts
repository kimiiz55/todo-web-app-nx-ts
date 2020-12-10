import { loaderReducer, loaderInitialState, LoaderActions } from './loader';

export const initialState = {
  loader: loaderInitialState,
};

export type InitialState = typeof initialState;

export const reducer = (
  { loader }: InitialState,
  action: LoaderActions
) => ({
  loader: loaderReducer(loader, action),
});
