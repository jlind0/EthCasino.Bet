import { ethers } from "ethers";
import { makeAutoObservable, runInAction } from "mobx";

export class RegisterAccountViewModel {
    isOpen: boolean = false;
    nick: string = "";
    initialBalance: number = 0.05;
    registrationSuccessful: boolean = false;
    isRegistering: boolean = false;
    constructor(public model: ContractModel) {
        makeAutoObservable(this);
    }
    async register() {
        try {
            runInAction(() => {
                this.isRegistering = true;
            });
            if (this.model.wheel && this.model.signer && this.nick !== "") {
                await this.model.wheel.openAccount(this.nick, { value: ethers.parseEther(this.initialBalance.toString()) });
                runInAction(() => {
                    this.registrationSuccessful = true;
                });
            }
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.registrationSuccessful = false;
            });
        }
        finally {
            runInAction(() => {
                this.isRegistering = false;
            });
        }
    }
    toggleOpen() {
        runInAction(() => {
            this.isOpen = !this.isOpen;
        });
        
    }
}