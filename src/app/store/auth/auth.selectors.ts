import {  createFeatureSelector } from "@ngrx/store";
import { State, authFeatureKey } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<State>(authFeatureKey)
