import { makeAutoObservable, runInAction } from "mobx";
import { ethers } from "ethers"; 

export class OwnerViewModel {
    isOpen: boolean = false;
    isLoading: boolean = false;
    isloaded: boolean = false;
    currentValue: number = 0;
    transactionValue: number = 0;
    ownerAddress: string | undefined = undefined;
    isOwner: boolean = false;
    constructor(protected model: ContractModel) {
        makeAutoObservable(this);
    }
    toggleOpen() {
        let canOpen = false;
        if (!this.isOpen && this.isloaded && this.isOwner) {
            canOpen = true;
        }
        if (canOpen) {
            runInAction(() => {
                this.isOpen = !this.isOpen;
            });
        }
    }
    async load() {
        try {
            runInAction(() => {
                this.isLoading = true;
                this.isloaded = false;
                this.currentValue = 0;
                this.transactionValue = 0;
                this.ownerAddress = undefined;
                this.isOpen = false;
                this.isOwner = false;
            });
            if (this.model.wheel && this.model.signer) {
                const ownerAddress = await this.model.wheel.owner();
                const balance = parseFloat(ethers.formatEther(await this.model.wheel.currentBalance()));
                const walletAddress = await this.model.signer.getAddress();
                
                runInAction(() => {
                    this.ownerAddress = ownerAddress;
                    this.currentValue = balance;
                    this.isloaded = true;
                    this.isOwner = ownerAddress.toLowerCase() === walletAddress.toLowerCase();
                });
            }
        }
        catch (e) {
            console.error(e);
            runInAction(() => {
                this.isloaded = false;
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
            if (this.model.wheel && this.model.signer) {
                const tx = await this.model.wheel.fund({ value: ethers.parseEther(this.transactionValue.toString()) });
                await tx.wait();
                await this.load();
            }
        } catch (e) {
            alert("Error funding the contract.");
            console.error(e);
        } finally {
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
            if (this.model.wheel && this.model.signer) {
                const tx = await this.model.wheel.widthdrawFund(ethers.parseEther(this.transactionValue.toString()));
                await tx.wait();
                await this.load();
            }
        } catch (e) {
            alert("Error withdrawing from the contract.");
            console.error(e);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}