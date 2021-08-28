import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from 'src/environments/environment';

export interface State {
}

export const ACTION_REDUCERS_MAP: ActionReducerMap<State> = {};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
