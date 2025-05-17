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
import { observer } from "mobx-react-lite";
import {
    ColorBet,
    ColorBetToString,
    ColumnBet,
    ColumnBetToString,
    DoubleStreetBet,
    DoubleStreetBetToString,
    DozenBet,
    DozenBetToString,
    EighteenBet,
    EighteenBetToString,
    ParityBet,
    ParityBetToString,
    StreetBet,
    StreetBetToString
} from "./wheel.bet.store";
import { BetViewModelParameter } from "./wheel.views.common";

interface BetModalProps<T> {
    title: string;
    label: string;
    parameter: BetViewModelParameter<T> | undefined;
    valueToString?: Record<unknown, string>;
}

const PlaceBetModal = observer(<T,>({ title, label, parameter, valueToString }: BetModalProps<T>) => {
    if (!parameter) return null;
    const displayValue =
        parameter.parameter !== undefined && valueToString
            ? valueToString[parameter.parameter as unknown] ?? "Unknown"
            : parameter.parameter ?? label;

    return (
        <CModal
            visible={parameter.isOpen}
            onClose={() => (parameter.isOpen = false)}
            aria-labelledby="lblAddMember"
        >
            <CModalHeader>
                <CModalTitle id="lblAddMember">{title}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm>
                    <p>{label}: {displayValue}</p>
                    <CFormInput
                        type="number"
                        id="betAmount"
                        label="Bet Amount"
                        value={parameter.betAmount}
                        onChange={(e) => (parameter.betAmount = Number(e.target.value))}
                    />
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => (parameter.isOpen = false)}>
                    Close
                </CButton>
                <CButton color="primary" onClick={() => parameter.placeBet()}>
                    Place Bet
                </CButton>
            </CModalFooter>
        </CModal>
    );
});

export const PlaceStreetBetView = observer(({ parameter }: BetViewModelParameter<StreetBet>) => (
    <PlaceBetModal title="Place Street Bet" label="Street" parameter={parameter} valueToString={StreetBetToString} />
));

export const PlaceColumnBetView = observer(({ parameter }: BetViewModelParameter<ColumnBet>) => (
    <PlaceBetModal title="Place Column Bet" label="Column" parameter={parameter} valueToString={ColumnBetToString} />
));

export const PlaceParityBetView = observer(({ parameter }: BetViewModelParameter<ParityBet>) => (
    <PlaceBetModal title="Place Parity Bet" label="Parity" parameter={parameter} valueToString={ParityBetToString} />
));

export const PlaceColorBetView = observer(({ parameter }: BetViewModelParameter<ColorBet>) => (
    <PlaceBetModal title="Place Color Bet" label="Color" parameter={parameter} valueToString={ColorBetToString} />
));

export const PlaceDozenBetView = observer(({ parameter }: BetViewModelParameter<DozenBet>) => (
    <PlaceBetModal title="Place Dozen Bet" label="Dozen" parameter={parameter} valueToString={DozenBetToString} />
));

export const PlaceEighteenBetView = observer(({ parameter }: BetViewModelParameter<EighteenBet>) => (
    <PlaceBetModal title="Place Eighteen Bet" label="Eighteen" parameter={parameter} valueToString={EighteenBetToString} />
));

export const PlaceDoubleStreetBetView = observer(({ parameter }: BetViewModelParameter<DoubleStreetBet>) => (
    <PlaceBetModal title="Place Double Street Bet" label="Double Street" parameter={parameter} valueToString={DoubleStreetBetToString} />
));

export const PlaceSplitBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <PlaceBetModal title="Place Split Bet" label="Split" parameter={parameter} />
));

export const PlaceCornerBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <PlaceBetModal title="Place Corner Bet" label="Corner" parameter={parameter} />
));

export const PlaceStraightUpBetView = observer(({ parameter }: BetViewModelParameter<string>) => (
    <PlaceBetModal title="Place Straight Up Bet" label="Number" parameter={parameter} />
));

export const PlaceTopLineBetView = observer(({ parameter }: BetViewModelParameter<void>) => (
    <PlaceBetModal title="Place Top Line Bet" label="Top Line" parameter={parameter} />
));
