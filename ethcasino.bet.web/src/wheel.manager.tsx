import { observer } from "mobx-react-lite";
import { CButton } from "@coreui/react";
import { WheelManagerViewModel } from "./wheel.manager.store";

export interface WheelManagerParameter {
    viewModel: WheelManagerViewModel;
}
export const WheelManagerView = observer(({ viewModel }: WheelManagerParameter) => (
    <>
        <CButton color="secondary" onClick={() => viewModel.load()}>Load</CButton>
        {viewModel.isLoaded && (
            <>
                {viewModel.canOpen && (
                    <CButton color="primary" onClick={() => viewModel.openBets()}>Open Bets</CButton>   
                )}
                {viewModel.canSpin && (
                    <CButton color="primary" onClick={() => viewModel.spinWheel()}>Spin</CButton>
                )}
            </>
        )}
    </>
));