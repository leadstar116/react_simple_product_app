import { AlertState } from "./alert.interface";
import { SettingsState } from "./settings.interface";
import { ProductsState } from "./product.interface";

export interface initialState {
  productsReducer: ProductsState,
  alertReducer: AlertState,
  settingsReducer: SettingsState,
}