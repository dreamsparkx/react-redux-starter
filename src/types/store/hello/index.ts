export enum ActionType {
    increment,
    decrement,
}

export type Action = { type: ActionType.increment } | { type: ActionType.decrement };

export interface HelloState {
    counter: number;
}
