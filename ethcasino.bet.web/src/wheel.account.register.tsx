import { observer } from "mobx-react-lite";
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CSpinner, CFormInput, CModalFooter } from "@coreui/react";
import { AccountViewModel } from "./wheel.account.store";

export interface RegisterAccountParameter {
    viewModel: AccountViewModel;
}
export const RegisterAccountView = observer(({ viewModel }: RegisterAccountParameter) => (
    <>
        <CButton color="primary" onClick={() => viewModel.registerViewModel.toggleOpen()}>
            Register
        </CButton>
        <CModal
            alignment="center"
            visible={viewModel.registerViewModel.isOpen}
            backdrop="static"
        >
            <CModalHeader closeButton>
                <CModalTitle>Account Registration</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {viewModel.registerViewModel.isRegistering ? (
                    <div className="text-center">
                        <CSpinner size="sm" /> Registering...
                    </div>
                ) : (
                    <div className="text-center">
                        <CFormInput type="text" label="Nick" value={viewModel.registerViewModel.nick}
                                onChange={(e) => viewModel.registerViewModel.nick = e.target.value} />
                        <CFormInput
                            type="number"
                            id="transactionValue"
                                label="Transaction Value"
                                value={viewModel.registerViewModel.initialBalance}
                                onChange={(e) => viewModel.registerViewModel.initialBalance = Number(e.target.value)} />
                    </div>
                )}
            </CModalBody>
            <CModalFooter>
                <>
                    <CButton color="secondary" onClick={() => viewModel.registerViewModel.toggleOpen()}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={() => viewModel.register()}>
                        Register
                    </CButton>
                </>

            </CModalFooter>
        </CModal>
    </>
));