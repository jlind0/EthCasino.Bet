import { ethers } from "ethers";
import { makeObservable, observable, runInAction } from "mobx";

export enum StreetBet {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    ELEVEN = 11,
    TWELVE = 12,
}
export enum ColumnBet {
    FIRST = 0,
    SECOND = 1,
    THIRD = 2,
}
export enum ParityBet {
    EVEN = 1,
    ODD = 2,
}
export enum ColorBet {
    RED = 1,
    BLACK = 2,
}
export enum DozenBet {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
}
export enum EighteenBet {
    FIRST = 1,
    SECOND = 2,
}
export enum DoubleStreetBet {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    FOURTH = 4,
    FIFTH = 5,
    SIXTH = 6,
    SEVENTH = 7,
    EIGHTH = 8,
    NINTH = 9,
    TENTH = 10,
    ELEVENTH = 11,
}
export abstract class BetViewModel<TParam> {
    isOpen: boolean = false;
    isProcessing: boolean = false;
    contract: ContractModel;
    betAmount: number = 0;
    parameter: TParam | undefined;
    constructor(contract: ContractModel) {
        this.contract = contract;
    }
    async toggleOpen(param: TParam) {
        runInAction(() => {
            this.parameter = param;
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.betAmount = 0;
            }
        });
    }
    async placeBet() {
        if (this.isProcessing) return;
        if (this.betAmount <= 0) {
            console.error("Bet amount must be greater than 0");
            return;
        }
        if (!this.contract.wheel) {
            console.error("Wheel contract is not initialized");
            return;
        }
        try {
            this.isProcessing = true;
            if (!this.parameter)
                return;
            await this.handleBet(this.parameter, ethers.parseEther(this.betAmount.toString()));
            this.toggleOpen(this.parameter);
        }
        catch (error) {
            console.error("Error placing bet", error);
        }
        finally {
            runInAction(() => {
                this.isProcessing = false;
            });
        }
    }
    protected abstract handleBet(param: TParam, bet: bigint): Promise<void>;
}
export class StreetBetViewModel extends BetViewModel<StreetBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: StreetBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeStreetBet(param, bet);
        await tx.wait();
    }
}
export class ColumnBetViewModel extends BetViewModel<ColumnBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: ColumnBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeColumnBet(param, bet);
        await tx.wait();
    }
}

export class ParityBetViewModel extends BetViewModel<ParityBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: ParityBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeParityBet(param, bet);
        await tx.wait();
    }
}

export class ColorBetViewModel extends BetViewModel<ColorBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: ColorBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeColorBet(param, bet);
        await tx.wait();
    }
}

export class DozenBetViewModel extends BetViewModel<DozenBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: DozenBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeDozenBet(param, bet);
        await tx.wait();
    }
}

export class EighteenBetViewModel extends BetViewModel<EighteenBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: EighteenBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.place18Bet(param, bet);
        await tx.wait();
    }
}

export class DoubleStreetBetViewModel extends BetViewModel<DoubleStreetBet> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: DoubleStreetBet, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeDoubleStreetBet(param, bet);
        await tx.wait();
    }
}

export class SplitBetViewModel extends BetViewModel<string> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: string, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const ns = param.split('-');
        if (ns.length != 2) return;
        const n1 = this.contract.numbers.get(ns[0]);
        const n2 = this.contract.numbers.get(ns[0]);
        if (!n1 || !n2) return;
        const tx = await this.contract.wheel.placeSplitBet(n1.id, n2.id, bet);
        await tx.wait();
    }
}
export class CornerBetViewModel extends BetViewModel<string> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: string, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const ns = param.split('-');
        if (ns.length != 4) return;
        const n1 = this.contract.numbers.get(ns[0]);
        const n2 = this.contract.numbers.get(ns[1]);
        const n3 = this.contract.numbers.get(ns[2]);
        const n4 = this.contract.numbers.get(ns[3]);
        if (!n1 || !n2 || !n3 || !n4) return;
        const tx = await this.contract.wheel.placeCornerBet(n1.id, n2.id, n3.id, n4.id, bet);
        await tx.wait();
    }
}
export class StraightUpBetViewModel extends BetViewModel<string> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(param: string, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const n = this.contract.numbers.get(param);
        if (!n) return;
        const tx = await this.contract.wheel.placeStraightUpBet(n.id, bet);
        await tx.wait();
    }
}

export class TopLineBetViewModel extends BetViewModel<void> {
    constructor(contract: ContractModel) {
        super(contract);
        makeObservable(this, {
            isOpen: observable,
            isProcessing: observable,
            betAmount: observable
        });
    }
    async handleBet(_: void, bet: bigint): Promise<void> {
        if (!this.contract.wheel) return;
        const tx = await this.contract.wheel.placeTopLineBet(bet);
        await tx.wait();
    }
 }