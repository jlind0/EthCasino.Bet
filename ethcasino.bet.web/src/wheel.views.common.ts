import { BetViewModel } from "./wheel.bet.store";
import { WheelStore } from "./wheel.store";

export interface WheelStoreParameter {
    store: WheelStore;
}

export interface BetViewModelParameter<TParam> {
    parameter: BetViewModel<TParam>;
}