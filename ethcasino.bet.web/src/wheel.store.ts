import { makeAutoObservable, runInAction } from 'mobx';
import { ethers } from 'ethers';
import { Wheel } from './typechain/contracts/Roulette.sol';
import { Wheel__factory } from './typechain/factories/contracts/Roulette.sol';
import { DoubleStreetBetViewModel, StreetBetViewModel, SplitBetViewModel, CornerBetViewModel, ColumnBetViewModel, DozenBetViewModel, ColorBetViewModel, EighteenBetViewModel, StraightUpBetViewModel, TopLineBetViewModel, ParityBetViewModel } from './wheel.bet.store';

const subscriptionId: string = import.meta.env.VITE_CHAINLINK_VRF_SUBSCRIPTION_ID;

export class WheelStore implements ContractModel {
    wheel: Wheel | undefined;
    provider: ethers.BrowserProvider | undefined;
    signer: ethers.JsonRpcSigner | undefined;
    isConnected: boolean = false;
    connecting: boolean = false;
    isLoading: boolean = false;
    wheelAddress: string | undefined = import.meta.env.VITE_WHEEL_CONTRACT;
    deploying: boolean = false;
    numbers: Map<string, Wheel.NumberStructOutput> = new Map<string, Wheel.NumberStructOutput>();
    streetVM: StreetBetViewModel;
    doubleStreetVM: DoubleStreetBetViewModel;
    splitVM: SplitBetViewModel;
    cornerVM: CornerBetViewModel;
    columnVM: ColumnBetViewModel;
    dozenVM: DozenBetViewModel;
    pairityVM: ParityBetViewModel;
    colorVM: ColorBetViewModel;
    eighteenVM: EighteenBetViewModel;
    straightVM: StraightUpBetViewModel;
    topLineVM: TopLineBetViewModel;
    
    constructor() {
        makeAutoObservable(this);
        this.streetVM = new StreetBetViewModel(this);
        this.doubleStreetVM = new DoubleStreetBetViewModel(this);
        this.splitVM = new SplitBetViewModel(this);
        this.cornerVM = new CornerBetViewModel(this);
        this.columnVM = new ColumnBetViewModel(this);
        this.dozenVM = new DozenBetViewModel(this);
        this.pairityVM = new ParityBetViewModel(this);
        this.colorVM = new ColorBetViewModel(this);
        this.eighteenVM = new EighteenBetViewModel(this);
        this.straightVM = new StraightUpBetViewModel(this);
        this.topLineVM = new TopLineBetViewModel(this);

    }
    async handleSetupProvider() {
        try {
            this.connecting = true;
            if (window.ethereum) {
                const prov = new ethers.BrowserProvider(window.ethereum);
                await prov.send("eth_requestAccounts", []);
                const sig = await prov.getSigner(0);
                runInAction(() => {
                    this.provider = prov;
                    this.signer = sig;
                });
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0xaa36a7' }],
                    });
                } catch (switchError) {
                    console.error("Error switching to the Sepolia network", switchError);
                }
                runInAction(() => {
                    this.isConnected = !!sig;
                });
            }
        } finally {
            runInAction(() => {
                this.connecting = false;
            });
        }
    }
    async deployContract(subscription_id: ethers.BigNumberish): Promise<string | undefined> {
        let address: string | undefined = undefined;
        if (!this.provider || !this.signer) return;
        {
            const whelFact = await new Wheel__factory(this.signer);
            const dep = await whelFact.deploy(subscription_id);
            await dep.waitForDeployment();
            const code = await dep.getDeployedCode();
            if (!code) return;
            address = await dep.getAddress();
        }
        return address;
    }
    async handleDeployContract() {
        try {
            this.deploying = true;
            const deployedAddress = await this.deployContract(subscriptionId);
            runInAction(() => {
                this.wheelAddress = deployedAddress;
            });
        } finally {
            runInAction(() => {
                this.deploying = false;
            });
        }
    }
    async handleLoadContract() {
        try {
            this.isLoading = true;
            if (!this.signer || !this.wheelAddress) return;
            const whl = Wheel__factory.connect(this.wheelAddress, this.signer);
            runInAction(() => {
                this.wheel = whl;
                this.numbers.clear();
            });
            const ns = await whl.getNumbers();
            runInAction(() => {
                ns.forEach((n) => {
                    this.numbers.set(n.name, n);
                });
            });

        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}