import React from "react";
import { observer } from "mobx-react-lite";
import {
    CButton,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
    CForm,
    CFormInput,
    CModalFooter
} from "@coreui/react";
import { BetViewModelParameter } from "./wheel.views.common";

interface PlaceBetModalProps {
    isOpen: boolean;
    onClose: () => void;
    betAmount: number;
    onAmountChange: (amount: number) => void;
    placeBet: () => void;
    title: string;
    renderParameter: () => React.ReactNode;
}

function PlaceBetModal({
    isOpen,
    onClose,
    betAmount,
    onAmountChange,
    placeBet,
    title,
    renderParameter
}: PlaceBetModalProps) {
    return (
        <CModal visible={isOpen} onClose={onClose} aria-labelledby="lblPlaceBet">
            <CModalHeader>
                <CModalTitle id="lblPlaceBet">{title}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm>
                    {renderParameter()}
                    <CFormInput
                        type="number"
                        id="betAmount"
                        label="Bet Amount"
                        value={betAmount}
                        onChange={(e) => onAmountChange(Number(e.target.value))}
                    />
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={onClose}>
                    Close
                </CButton>
                <CButton color="primary" onClick={placeBet}>
                    Place Bet
                </CButton>
            </CModalFooter>
        </CModal>
    );
}

function createPlaceBetView<T>(
    title: string,
    renderParameter: (param: T) => string
) {
    return observer(({ parameter }: BetViewModelParameter<T>) => {
        if (!parameter) return null;
        return (
            <PlaceBetModal
                isOpen={parameter.isOpen}
                onClose={() => (parameter.isOpen = false)}
                betAmount={parameter.betAmount}
                onAmountChange={(amount) => (parameter.betAmount = amount)}
                placeBet={() => parameter.placeBet()}
                title={title}
                renderParameter={() => (
                    <p>
                        {parameter.parameter !== undefined && renderParameter(parameter.parameter)}
                    </p>
                )}
            />
        );
    });
}

// Usage examples
import {
    StreetBet,
    StreetBetToString,
    ColumnBet,
    ColumnBetToString,
    ParityBet,
    ParityBetToString,
    ColorBet,
    ColorBetToString,
    DozenBet,
    DozenBetToString,
    EighteenBet,
    EighteenBetToString,
    DoubleStreetBet,
    DoubleStreetBetToString
} from "./wheel.bet.store";

export const PlaceStreetBetView = createPlaceBetView<StreetBet>(
    "Place Street Bet",
    (param) => StreetBetToString[param]
);

export const PlaceColumnBetView = createPlaceBetView<ColumnBet>(
    "Place Column Bet",
    (param) => ColumnBetToString[param]
);

export const PlaceParityBetView = createPlaceBetView<ParityBet>(
    "Place Parity Bet",
    (param) => ParityBetToString[param]
);

export const PlaceColorBetView = createPlaceBetView<ColorBet>(
    "Place Color Bet",
    (param) => ColorBetToString[param]
);

export const PlaceDozenBetView = createPlaceBetView<DozenBet>(
    "Place Dozen Bet",
    (param) => DozenBetToString[param]
);

export const PlaceEighteenBetView = createPlaceBetView<EighteenBet>(
    "Place Eighteen Bet",
    (param) => EighteenBetToString[param]
);

export const PlaceDoubleStreetBetView = createPlaceBetView<DoubleStreetBet>(
    "Place Double Street Bet",
    (param) => DoubleStreetBetToString[param]
);

// For bets where parameter is just a string or void:
export const PlaceSplitBetView = createPlaceBetView<string>(
    "Place Split Bet",
    (param) => param
);

export const PlaceCornerBetView = createPlaceBetView<string>(
    "Place Corner Bet",
    (param) => param
);

export const PlaceStraightUpBetView = createPlaceBetView<string>(
    "Place Straight Up Bet",
    (param) => param
);

export const PlaceTopLineBetView = createPlaceBetView<void>(
    "Place Top Line Bet",
    () => "Top Line"
);
