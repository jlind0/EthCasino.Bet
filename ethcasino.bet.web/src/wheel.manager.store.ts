import { makeAutoObservable, runInAction } from "mobx";
import { fromUnixTimestamp } from './wheel.common.store'
export class WheelManagerViewModel {
    isLoading: boolean = false;
    isLoaded: boolean = false;
    canSpin: boolean = false;
    canOpen: boolean = false;
    isSpinning: boolean = false;
    isOpenForWithdrawl: boolean = false;
    constructor(public model: ContractModel) {
        makeAutoObservable(this);
    }
    async load() {
        try {
            runInAction(() => {
                this.isLoaded = false;
                this.isLoading = true;
                this.canOpen = false;
                this.canSpin = false;
                this.isSpinning = false;
                this.isOpenForWithdrawl = false;
            });
            if (this.model.wheel && this.model.signer) {
                const isOpenForWithdrawl = await this.model.wheel.isOpenForWithdrawl();
                const timeBetweenBets = await this.model.wheel.timeBetweenBets();
                runInAction(() => {
                    this.isOpenForWithdrawl = isOpenForWithdrawl;
                });
                try {
                    const spin = await this.model.wheel.getCurrentSpin();
                    const spinStartTime = fromUnixTimestamp(spin.startTime + timeBetweenBets);
                    const isSpinning = spin.spunTime > 0;
                    runInAction(() => {
                        this.isSpinning = isSpinning;
                    });
                    if (!isSpinning && spinStartTime) {
                        runInAction(() => {
                            this.canSpin = spinStartTime <= new Date() && !spin.hasSpun
                        });
                    }
                    if (spin.hasSpun) {
                        runInAction(() => {
                            this.canOpen = true;
                        });
                    }
                }
                catch {
                    runInAction(() => {
                        this.canOpen = true;
                    })
                }
                runInAction(() => {
                    this.isLoaded = true;
                });
            }
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.isLoaded = false;
            });
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }
    async openBets() {
        try {
            runInAction(() => {
                this.isLoaded = false;
                this.isLoading = true;
            });
            if (this.model.wheel && this.model.signer) {
                await this.model.wheel.openBets();
                await this.load();
            }
            runInAction(() => {
                this.isLoaded = true;
            });
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.isLoaded = false;
            });
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }
    async spinWheel() {
        try{
            runInAction(() => {
                this.isLoaded = false;
                this.isLoading = true;
            });
            if (this.model.wheel && this.model.signer) {
                await this.model.wheel.spinTheWheel();
                await this.load();
            }
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.isLoaded = false;
            });
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }
}