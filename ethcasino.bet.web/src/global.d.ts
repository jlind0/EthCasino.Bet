import { ethers } from 'ethers';
import {
    Wheel
} from './typechain';
declare global {
    interface Window {
        ethereum?: ethers.Eip1193Provider;
    }
    declare namespace NodeJS {
        interface ProcessEnv {
            VITE_CHAINLINK_VRF_SUBSCRIPTION_ID: string;
            VITE_WHEEL_CONTRACT?: string;
        }
    }
    interface ContractModel {
        wheel: Wheel | undefined;
        provider: ethers.BrowserProvider | undefined;
        signer: ethers.JsonRpcSigner | undefined;
        numbers: Map<string, Wheel.NumberStructOutput>;
    }
}
export { };