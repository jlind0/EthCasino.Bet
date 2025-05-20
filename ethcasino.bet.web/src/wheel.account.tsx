import { observer } from "mobx-react-lite";
import { AccountViewModel } from "./wheel.account.store";
import { CButton, CForm, CFormInput } from "@coreui/react";
import { RegisterAccountView } from "./wheel.account.register";

export interface AccountParameter {
    viewModel: AccountViewModel;
}
export const AccountView = observer(({ viewModel }: AccountParameter) => (
    <>
        {!viewModel.isRegistered && (
            <RegisterAccountView viewModel={viewModel}/>
        )}
        {viewModel.isRegistered && (
            <div>
                <p>Nick: {viewModel.nick}</p>
                <p>Balance: {viewModel.balance}</p>
                <CForm>
                    <CFormInput type="number" label="Transaction Amount"
                        value={viewModel.transactionAmount}
                        onChange={(e) => viewModel.transactionAmount = Number(e.target.value)} />
                    <CButton color="secondary" onClick={() => viewModel.withdraw()}>Withdraw</CButton>
                    <CButton color="primary" onClick={() => viewModel.fund()}>Fund</CButton>
                    <CButton color="error" onClick={() => viewModel.closeAccount()}>Close Account</CButton>
                </CForm>
            </div>
        )}
    </>
));