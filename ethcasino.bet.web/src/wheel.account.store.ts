import { ethers } from "ethers";
import { makeAutoObservable, runInAction } from "mobx";
import { RegisterAccountViewModel } from "./wheel.account.register.store";

export class AccountViewModel {
    nick: string | undefined = undefined;
    balance: number | undefined = undefined;
    transactionAmount: number = 0.05;
    isRegistered: boolean = false;
    isLoading: boolean = false;
    isLoaded: boolean = false;
    registerViewModel: RegisterAccountViewModel;
    constructor(public model: ContractModel) {
        makeAutoObservable(this);
        this.registerViewModel = new RegisterAccountViewModel(model);
    }
    async load() {
        try {
            runInAction(() => {
                this.isLoaded = false;
                this.isLoading = true;
                this.isRegistered = false;
                this.nick = undefined;
                this.balance = undefined;
            });
            if (this.model.wheel && this.model.signer) {
                const acct = await this.model.wheel.getAccount();
                runInAction(() => {
                    this.nick = acct.nick;
                    this.balance = parseFloat(ethers.formatEther(acct.value));
                    this.isRegistered = true;
                    this.isLoaded = true;
                });
            }
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.isRegistered = false;
            });
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
    async fund() {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            if (this.model.wheel && this.model.signer && this.isRegistered && this.transactionAmount > 0) {
                await this.model.wheel.fund({ value: ethers.parseEther(this.transactionAmount.toString()) });
                await this.load();
            }
        }
        catch (e) {
            console.error(e);
            alert("Unable to fund account");
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
    async withdraw() {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            if (this.model.wheel && this.model.signer && this.isRegistered && this.transactionAmount > 0) {
                await this.model.wheel.withdraw(ethers.parseEther(this.transactionAmount.toString()));
                await this.load();
            }
        }
        catch (e) {
            console.error(e);
            alert("Unable to withdraw at this time");
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
    async closeAccount() {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            if (this.model.wheel && this.model.signer && this.isRegistered) {
                await this.model.wheel.closeAccount();
                await this.load();
            }
        }
        catch (e) {
            console.error(e);
            alert("Unable to close at this time");
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
    async register() {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            await this.registerViewModel.register();
            await this.load();
        }
        catch (e) {
            console.error(e);
        }
        finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}