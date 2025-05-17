import { CButton, CModal, CModalBody, CModalHeader, CModalTitle, CForm, CFormInput, CModalFooter } from "@coreui/react";
import { ColorBet, ColorBetToString, ColumnBet, ColumnBetToString, DoubleStreetBet, DoubleStreetBetToString, DozenBet, DozenBetToString, EighteenBet, EighteenBetToString, ParityBet, ParityBetToString, StreetBet, StreetBetToString } from "./wheel.bet.store";
import { BetViewModelParameter } from "./wheel.views.common";
import { observer } from "mobx-react-lite";

export const PlaceStreetBetView = observer(({ parameter }: BetViewModelParameter<StreetBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Street Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>{parameter && parameter.parameter !== undefined && StreetBetToString[parameter.parameter]}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceColumnBetView = observer(({ parameter }: BetViewModelParameter<ColumnBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Column Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Column: {parameter && parameter.parameter !== undefined && (ColumnBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceParityBetView = observer(({ parameter }: BetViewModelParameter<ParityBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Parity Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Parity: {parameter && parameter.parameter !== undefined && (ParityBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceColorBetView = observer(({ parameter }: BetViewModelParameter<ColorBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Color Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Color: {parameter && parameter.parameter !== undefined && (ColorBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceDozenBetView = observer(({ parameter }: BetViewModelParameter<DozenBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Dozen Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Dozen: {parameter && parameter.parameter !== undefined && (DozenBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceEighteenBetView = observer(({ parameter }: BetViewModelParameter<EighteenBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Eighteen Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Eighteen: {parameter && parameter.parameter !== undefined && (EighteenBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceDoubleStreetBetView = observer(({ parameter }: BetViewModelParameter<DoubleStreetBet>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Double Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Double Street: {parameter && parameter.parameter !== undefined && (DoubleStreetBetToString[parameter.parameter])}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceSplitBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Split Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Split: {parameter && parameter.parameter !== undefined && (parameter.parameter)}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceCornerBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Corner Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Corner: {parameter && parameter.parameter !== undefined && (parameter.parameter)}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceStraightUpBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Straight Up Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Number: {parameter && parameter.parameter !== undefined && (parameter.parameter)}</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));
export const PlaceTopLineBetView = observer(({ parameter }: BetViewModelParameter<void>) => (
    <>
        {parameter && (
            <>
                <CModal
                    visible={parameter.isOpen}
                    onClose={() => parameter && (parameter.isOpen = false)}
                    aria-labelledby="lblAddMember"
                >
                    <CModalHeader>
                        <CModalTitle id="lblAddMember">Place Top Line Bet</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <p>Top Line</p>
                            <CFormInput type="number" id="betAmount"
                                label="Bet Amount" value={parameter.betAmount}
                                onChange={(e) => parameter && (parameter.betAmount = Number(e.target.value))} />
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => parameter && (parameter.isOpen = false)}>
                            Close
                        </CButton>
                        <CButton
                            color="primary"
                            onClick={() => parameter && parameter.placeBet()}
                        >
                            Place Bet
                        </CButton>
                    </CModalFooter>
                </CModal>
            </>
        )}
    </>
));