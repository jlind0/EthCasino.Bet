import { observer } from "mobx-react-lite";
import { OwnerViewModel } from "./wheel.owner.store";
import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CSpinner } from "@coreui/react";

export interface OwnerViewModelParameter {
    viewModel: OwnerViewModel;
}
export const OwnerView = observer(({ viewModel }: OwnerViewModelParameter) => (
    <>
        {viewModel.isOwner && (
            <CButton color="primary" onClick={() => viewModel.toggleOpen()}>
                Owner Functions
            </CButton>
        )}
        <CModal
            alignment="center"
            visible={viewModel.isOpen}
            backdrop="static"
        >
            <CModalHeader closeButton>
                <CModalTitle>Owner</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {viewModel.isLoading ? (
                    <div className="text-center">
                        <CSpinner size="sm" /> Loading...
                    </div>
                ) : (
                    <div className="text-center">
                        <p>Owner Address: {viewModel.ownerAddress}</p>
                            <p>Current Balance: {viewModel.currentValue} ETH</p>
                            <CFormInput
                            type="number"
                            id="transactionValue"
                            label="Transaction Value"
                            value={viewModel.transactionValue}
                            onChange={(e) => viewModel.transactionValue = Number(e.target.value)}/>
                    </div>
                )}
            </CModalBody>
            <CModalFooter>
                <>
                    <CButton color="secondary" onClick={() => viewModel.toggleOpen()}>
                        Close
                    </CButton>
                    <CButton color="error" onClick={() => viewModel.withdraw()}>
                        Withdraw
                    </CButton>
                    <CButton color="primary" onClick={() => viewModel.fund()}>
                        Fund
                    </CButton>
                </>
                
            </CModalFooter>
        </CModal>
    </>
));