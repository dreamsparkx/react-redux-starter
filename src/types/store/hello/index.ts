export enum ActionType {
    increment = 'increment',
    decrement = 'decrement'
}

export type Action = { type: ActionType.increment } | { type: ActionType.decrement };

export interface HelloState {
    counter: number;
}