import { observer } from 'mobx-react-lite';
import './wheel.css';
import { WheelStore } from './wheel.store';
import { StreetBet, DoubleStreetBet, ColumnBet, DozenBet, ColorBet, ParityBet, EighteenBet } from './wheel.bet.store';
const wheelStore = new WheelStore();

const Wheel = observer(() => {
    const store = wheelStore;
    return (
        <>
            <div className="roulette-table-container">
                <section className="roulette-table-container-first">
                    <a className="link" data-target-cells="00-0" onClick={() => store.splitVM.toggleOpen("00-0")}></a>
                    <a className="link" data-target-cells="1-2" onClick={() => store.splitVM.toggleOpen("1-2")}></a>
                    <a className="link" data-target-cells="2-3" onClick={() => store.splitVM.toggleOpen("2-3")}></a>
                    <a className="link" data-target-cells="4-5" onClick={() => store.splitVM.toggleOpen("4-5")}></a>
                    <a className="link" data-target-cells="5-6" onClick={() => store.splitVM.toggleOpen("5-6")}></a>
                    <a className="link" data-target-cells="7-8" onClick={() => store.splitVM.toggleOpen("7-8")}></a>
                    <a className="link" data-target-cells="8-9" onClick={() => store.splitVM.toggleOpen("8-9")}></a>
                    <a className="link" data-target-cells="10-11" onClick={() => store.splitVM.toggleOpen("10-11")}></a>
                    <a className="link" data-target-cells="11-12" onClick={() => store.splitVM.toggleOpen("11-12")}></a>
                    <a className="link" data-target-cells="13-14" onClick={() => store.splitVM.toggleOpen("13-14")}></a>
                    <a className="link" data-target-cells="14-15" onClick={() => store.splitVM.toggleOpen("14-15")}></a>
                    <a className="link" data-target-cells="16-17" onClick={() => store.splitVM.toggleOpen("16-17")}></a>
                    <a className="link" data-target-cells="17-18" onClick={() => store.splitVM.toggleOpen("17-18")}></a>
                    <a className="link" data-target-cells="19-20" onClick={() => store.splitVM.toggleOpen("19-20")}></a>
                    <a className="link" data-target-cells="20-21" onClick={() => store.splitVM.toggleOpen("20-21")}></a>
                    <a className="link" data-target-cells="22-23" onClick={() => store.splitVM.toggleOpen("22-23")}></a>
                    <a className="link" data-target-cells="23-24" onClick={() => store.splitVM.toggleOpen("23-24")}></a>
                    <a className="link" data-target-cells="25-26" onClick={() => store.splitVM.toggleOpen("25-26")}></a>
                    <a className="link" data-target-cells="26-27" onClick={() => store.splitVM.toggleOpen("26-27")}></a>
                    <a className="link" data-target-cells="28-29" onClick={() => store.splitVM.toggleOpen("28-29")}></a>
                    <a className="link" data-target-cells="29-30" onClick={() => store.splitVM.toggleOpen("29-30")}></a>
                    <a className="link" data-target-cells="31-32" onClick={() => store.splitVM.toggleOpen("31-32")}></a>
                    <a className="link" data-target-cells="32-33" onClick={() => store.splitVM.toggleOpen("32-33")}></a>
                    <a className="link" data-target-cells="34-35" onClick={() => store.splitVM.toggleOpen("34-35")}></a>

                    <a className="link" data-target-cells="1-2-3" onClick={() => store.streetVM.toggleOpen(StreetBet.ONE)}></a>
                    <a className="link" data-target-cells="4-5-6" onClick={() => store.streetVM.toggleOpen(StreetBet.TWO)}></a>
                    <a className="link" data-target-cells="7-8-9" onClick={() => store.streetVM.toggleOpen(StreetBet.THREE)}></a>
                    <a className="link" data-target-cells="10-11-12" onClick={() => store.streetVM.toggleOpen(StreetBet.FOUR)}></a>
                    <a className="link" data-target-cells="13-14-15" onClick={() => store.streetVM.toggleOpen(StreetBet.FIVE)}></a>
                    <a className="link" data-target-cells="16-17-18" onClick={() => store.streetVM.toggleOpen(StreetBet.SIX)}></a>
                    <a className="link" data-target-cells="19-20-21" onClick={() => store.streetVM.toggleOpen(StreetBet.SEVEN)}></a>
                    <a className="link" data-target-cells="22-23-24" onClick={() => store.streetVM.toggleOpen(StreetBet.EIGHT)}></a>
                    <a className="link" data-target-cells="25-26-27" onClick={() => store.streetVM.toggleOpen(StreetBet.NINE)}></a>
                    <a className="link" data-target-cells="28-29-30" onClick={() => store.streetVM.toggleOpen(StreetBet.TEN)}></a>
                    <a className="link" data-target-cells="31-32-33" onClick={() => store.streetVM.toggleOpen(StreetBet.ELEVEN)}></a>
                    <a className="link" data-target-cells="34-35-36" onClick={() => store.streetVM.toggleOpen(StreetBet.TWELVE)}></a>

                    <a className="link bottom" data-target-cells="1-2-3" onClick={() => store.streetVM.toggleOpen(StreetBet.ONE)}></a>
                    <a className="link bottom" data-target-cells="4-5-6" onClick={() => store.streetVM.toggleOpen(StreetBet.TWO)}></a>
                    <a className="link bottom" data-target-cells="7-8-9" onClick={() => store.streetVM.toggleOpen(StreetBet.THREE)}></a>
                    <a className="link bottom" data-target-cells="10-11-12" onClick={() => store.streetVM.toggleOpen(StreetBet.FOUR)}></a>
                    <a className="link bottom" data-target-cells="13-14-15" onClick={() => store.streetVM.toggleOpen(StreetBet.FIVE)}></a>
                    <a className="link bottom" data-target-cells="16-17-18" onClick={() => store.streetVM.toggleOpen(StreetBet.SIX)}></a>
                    <a className="link bottom" data-target-cells="19-20-21" onClick={() => store.streetVM.toggleOpen(StreetBet.SEVEN)}></a>
                    <a className="link bottom" data-target-cells="22-23-24" onClick={() => store.streetVM.toggleOpen(StreetBet.EIGHT)}></a>
                    <a className="link bottom" data-target-cells="25-26-27" onClick={() => store.streetVM.toggleOpen(StreetBet.NINE)}></a>
                    <a className="link bottom" data-target-cells="28-29-30" onClick={() => store.streetVM.toggleOpen(StreetBet.TEN)}></a>
                    <a className="link bottom" data-target-cells="31-32-33" onClick={() => store.streetVM.toggleOpen(StreetBet.ELEVEN)}></a>
                    <a className="link bottom" data-target-cells="34-35-36" onClick={() => store.streetVM.toggleOpen(StreetBet.TWELVE)}></a>


                    <a className="link" data-target-cells="35-36" onClick={() => store.splitVM.toggleOpen("35-36")}></a>
                    <a className="link-bar" data-target-cells="00-0-1-2-3" onClick={() => store.topLineVM.toggleOpen()}></a>
                    <a className="link-bar bottom" data-target-cells="00-0-1-2-3" onClick={() => store.topLineVM.toggleOpen()}></a>
                    <a className="link" data-target-cells="00-0-1-2-3" onClick={() => store.topLineVM.toggleOpen()}></a>
                    <a className="link bottom" data-target-cells="00-0-1-2-3" onClick={() => store.topLineVM.toggleOpen()}></a>

                    <a className="link bottom" data-target-cells="1-2-3-4-5-6" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FIRST)}></a>
                    <a className="link bottom" data-target-cells="4-5-6-7-8-9" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SECOND)}></a>
                    <a className="link bottom" data-target-cells="7-8-9-10-11-12" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.THIRD)}></a>
                    <a className="link bottom" data-target-cells="10-11-12-13-14-15" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FOURTH)}></a>
                    <a className="link bottom" data-target-cells="13-14-15-16-17-18" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FIFTH)}></a>
                    <a className="link bottom" data-target-cells="16-17-18-19-20-21" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SIXTH)}></a>
                    <a className="link bottom" data-target-cells="19-20-21-22-23-24" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SEVENTH)}></a>
                    <a className="link bottom" data-target-cells="22-23-24-25-26-27" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.EIGHTH)}></a>
                    <a className="link bottom" data-target-cells="25-26-27-28-29-30" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.NINTH)}></a>
                    <a className="link bottom" data-target-cells="28-29-30-31-32-33" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.TENTH)}></a>
                    <a className="link bottom" data-target-cells="31-32-33-34-35-36" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.ELEVENTH)}></a>


                    <a className="link bottom" data-target-cells="1-2-3-4-5-6" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FIRST)}></a>
                    <a className="link" data-target-cells="2-3-5-6" onClick={() => store.cornerVM.toggleOpen("2-3-5-6")}></a>
                <a className="link" data-target-cells="5-6-8-9" onClick={() => store.cornerVM.toggleOpen("5-6-8-9")}></a>
                <a className="link" data-target-cells="8-9-11-12" onClick={() => store.cornerVM.toggleOpen("8-9-11-12")}></a>
                <a className="link" data-target-cells="11-12-14-15" onClick={() => store.cornerVM.toggleOpen("11-12-14-15")}></a>
                <a className="link" data-target-cells="14-15-17-18" onClick={() => store.cornerVM.toggleOpen("14-15-17-18")}></a>
                <a className="link" data-target-cells="17-18-20-21" onClick={() => store.cornerVM.toggleOpen("17-18-20-21")}></a>
                <a className="link" data-target-cells="20-21-23-24" onClick={() => store.cornerVM.toggleOpen("20-21-23-24")}></a>
                <a className="link" data-target-cells="23-24-26-27" onClick={() => store.cornerVM.toggleOpen("23-24-26-27")}></a>
                <a className="link" data-target-cells="26-27-29-30" onClick={() => store.cornerVM.toggleOpen("26-27-29-30")}></a>

                <a className="link" data-target-cells="29-30-32-33" onClick={() => store.cornerVM.toggleOpen("29-30-32-33")}></a>
                <a className="link" data-target-cells="32-33-35-36" onClick={() => store.cornerVM.toggleOpen("32-33-35-36")}></a>

                <a className="link" data-target-cells="1-2-4-5" onClick={() => store.cornerVM.toggleOpen("1-2-4-5")}></a>
                <a className="link" data-target-cells="4-5-7-8" onClick={() => store.cornerVM.toggleOpen("4-5-7-8")}></a>
                <a className="link" data-target-cells="7-8-10-11" onClick={() => store.cornerVM.toggleOpen("7-8-10-11")}></a>
                <a className="link" data-target-cells="10-11-13-14" onClick={() => store.cornerVM.toggleOpen("10-11-13-14")}></a>
                <a className="link" data-target-cells="13-14-16-17" onClick={() => store.cornerVM.toggleOpen("13-14-16-17")}></a>
                <a className="link" data-target-cells="16-17-19-20" onClick={() => store.cornerVM.toggleOpen("16-17-19-20")}></a>
                <a className="link" data-target-cells="19-20-22-23" onClick={() => store.cornerVM.toggleOpen("19-20-22-23")}></a>
                <a className="link" data-target-cells="22-23-25-26" onClick={() => store.cornerVM.toggleOpen("22-23-25-26")}></a>
                <a className="link" data-target-cells="25-26-28-29" onClick={() => store.cornerVM.toggleOpen("25-26-28-29")}></a>
                <a className="link" data-target-cells="28-29-31-32" onClick={() => store.cornerVM.toggleOpen("28-29-31-32")}></a>
                <a className="link" data-target-cells="31-32-34-35" onClick={() => store.cornerVM.toggleOpen("31-32-34-35")}></a>

                    <a className="link bottom" data-target-cells="4-5-6-7-8-9" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SECOND)}></a>
                    <a className="link bottom" data-target-cells="7-8-9-10-11-12" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.THIRD)}></a>
                    <a className="link bottom" data-target-cells="10-11-12-13-14-15" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FOURTH)}></a>
                    <a className="link bottom" data-target-cells="13-14-15-16-17-18" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.FIFTH)}></a>
                    <a className="link bottom" data-target-cells="16-17-18-19-20-21" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SIXTH)}></a>
                    <a className="link bottom" data-target-cells="19-20-21-22-23-24" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.SEVENTH)}></a>
                    <a className="link bottom" data-target-cells="22-23-24-25-26-27" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.EIGHTH)}></a>
                    <a className="link bottom" data-target-cells="25-26-27-28-29-30" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.NINTH)}></a>
                    <a className="link bottom" data-target-cells="28-29-30-31-32-33" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.TENTH)}></a>
                    <a className="link bottom" data-target-cells="31-32-33-34-35-36" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.ELEVENTH)}></a>

                    <a className="link bottom" data-target-cells="7-8-9-10-11-12" onClick={() => store.doubleStreetVM.toggleOpen(DoubleStreetBet.THIRD)}></a>

                <a className="link" data-target-cells="3-6" onClick={() => store.splitVM.toggleOpen("3-6")}></a>
                <a className="link" data-target-cells="6-9" onClick={() => store.splitVM.toggleOpen("6-9")}></a>
                <a className="link" data-target-cells="9-12" onClick={() => store.splitVM.toggleOpen("9-12")}></a>
                <a className="link" data-target-cells="12-15" onClick={() => store.splitVM.toggleOpen("12-15")}></a>
                <a className="link" data-target-cells="15-18" onClick={() => store.splitVM.toggleOpen("15-18")}></a>
                <a className="link" data-target-cells="18-21" onClick={() => store.splitVM.toggleOpen("18-21")}></a>
                <a className="link" data-target-cells="21-24" onClick={() => store.splitVM.toggleOpen("21-24")}></a>
                <a className="link" data-target-cells="24-27" onClick={() => store.splitVM.toggleOpen("24-27")}></a>
                <a className="link" data-target-cells="27-30" onClick={() => store.splitVM.toggleOpen("27-30")}></a>
                <a className="link" data-target-cells="30-33" onClick={() => store.splitVM.toggleOpen("30-33")}></a>
                <a className="link" data-target-cells="33-36" onClick={() => store.splitVM.toggleOpen("33-36")}></a>
                <a className="link" data-target-cells="2-5" onClick={() => store.splitVM.toggleOpen("2-5")}></a>
                <a className="link" data-target-cells="5-8" onClick={() => store.splitVM.toggleOpen("5-8")}></a>
                <a className="link" data-target-cells="8-11" onClick={() => store.splitVM.toggleOpen("8-11")}></a>
                <a className="link" data-target-cells="11-14" onClick={() => store.splitVM.toggleOpen("11-14")}></a>
                <a className="link" data-target-cells="14-17" onClick={() => store.splitVM.toggleOpen("14-17")}></a>
                <a className="link" data-target-cells="17-20" onClick={() => store.splitVM.toggleOpen("17-20")}></a>
                <a className="link" data-target-cells="20-23" onClick={() => store.splitVM.toggleOpen("20-23")}></a>
                <a className="link" data-target-cells="23-26" onClick={() => store.splitVM.toggleOpen("22-26")}></a>
                <a className="link" data-target-cells="26-29" onClick={() => store.splitVM.toggleOpen("26-29")}></a>
                <a className="link" data-target-cells="29-32" onClick={() => store.splitVM.toggleOpen("29-32")}></a>
                <a className="link" data-target-cells="32-35" onClick={() => store.splitVM.toggleOpen("32-35")}></a>

                <a className="link" data-target-cells="1-4" onClick={() => store.splitVM.toggleOpen("1-4")}></a>
                <a className="link" data-target-cells="4-7" onClick={() => store.splitVM.toggleOpen("4-7")}></a>
                <a className="link" data-target-cells="7-10" onClick={() => store.splitVM.toggleOpen("7-10")}></a>
                <a className="link" data-target-cells="10-13" onClick={() => store.splitVM.toggleOpen("10-13")}></a>
                <a className="link" data-target-cells="13-16" onClick={() => store.splitVM.toggleOpen("13-16")}></a>
                <a className="link" data-target-cells="16-19" onClick={() => store.splitVM.toggleOpen("16-19")}></a>
                <a className="link" data-target-cells="19-22" onClick={() => store.splitVM.toggleOpen("19-22")}></a>
                <a className="link" data-target-cells="22-25" onClick={() => store.splitVM.toggleOpen("22-25")}></a>
                <a className="link" data-target-cells="25-28" onClick={() => store.splitVM.toggleOpen("25-28")}></a>
                <a className="link" data-target-cells="28-31" onClick={() => store.splitVM.toggleOpen("28-31")}></a>
                <a className="link" data-target-cells="31-34" onClick={() => store.splitVM.toggleOpen("31-34")}></a>

                    <a className="link-street link-street-1" data-target-cells="1-4-7-10-13-16-19-22-25-28-31-34" onClick={() => store.columnVM.toggleOpen(ColumnBet.FIRST)}></a>
                    <a className="link-street link-street-2" data-target-cells="2-5-8-11-14-17-20-23-26-29-32-35" onClick={() => store.columnVM.toggleOpen(ColumnBet.SECOND)}></a>
                    <a className="link-street link-street-3" data-target-cells="3-6-9-12-15-18-21-24-27-30-33-36" onClick={() => store.columnVM.toggleOpen(ColumnBet.THIRD)}></a>

                    <a className="link-floor link-floor-1-12" data-target-cells="1-2-3-4-5-6-7-8-9-10-11-12" onClick={() => store.dozenVM.toggleOpen(DozenBet.FIRST)} ></a>

                    <a className="link-floor link-floor-13-24" data-target-cells="13-14-15-16-17-18-19-20-21-22-23-24" onClick={() => store.dozenVM.toggleOpen(DozenBet.SECOND)} ></a>

                    <a className="link-floor link-floor-25-36" data-target-cells="25-26-27-28-29-30-31-32-33-34-35-36" onClick={() => store.dozenVM.toggleOpen(DozenBet.THIRD)} ></a>

                    <a className="link-floor link-floor-1-18" data-target-cells="1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18" onClick={() => store.eighteenVM.toggleOpen(EighteenBet.FIRST)} ></a>

                    <a className="link-floor link-floor-even" data-target-cells="2-4-6-8-10-12-14-16-18-20-22-24-26-28-30-32-34" onClick={() => store.pairityVM.toggleOpen(ParityBet.EVEN)} ></a>

                    <a className="link-floor red-rectangle" data-target-cells="1-3-5-7-9-12-14-16-18-19-21-23-25-27-30-32-34-36" onClick={() => store.colorVM.toggleOpen(ColorBet.RED)} ></a>

                    <a className="link-floor black" data-target-cells="2-4-6-8-10-11-13-15-17-20-22-24-26-28-29-31-33-35" onClick={() => store.colorVM.toggleOpen(ColorBet.BLACK)} ></a>

                    <a className="link-floor odd" data-target-cells="1-3-5-7-9-11-13-15-17-19-21-23-25-27-29-31-33-35" onClick={() => store.pairityVM.toggleOpen(ParityBet.ODD)} ></a>

                    <a className="link-floor" data-target-cells="19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36" onClick={() => store.eighteenVM.toggleOpen(EighteenBet.SECOND)} ></a>

                    <div className="zero-item American cell" data-cell="0" onClick={() => store.straightVM.toggleOpen("0")}>
                    <div className="spleet-bet-catcher"></div>
                    <div className="corner-bet-catcher bottom"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="basket-catcher-bottom"></div>
                    <div className=""></div>
                    <div className="value">0</div>
                </div>
                <div className="zero-item American cell" data-cell="00" onClick={() => store.straightVM.toggleOpen("00")}>
                    <div className="corner-bet-catcher "></div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="basket-catcher-top"></div>
                    <div className=""></div>
                    <div className="value">00</div>
                </div>
                <div className="red-item cell" data-cell="1" onClick={() => store.straightVM.toggleOpen("1")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="spleet-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">1</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="2" onClick={() => store.straightVM.toggleOpen("2")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="spleet-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">2</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="3" onClick={() => store.straightVM.toggleOpen("3")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">3</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="4" onClick={() => store.straightVM.toggleOpen("4")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">4</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="red-item cell" data-cell="5" onClick={() => store.straightVM.toggleOpen("5")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">5</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="6" onClick={() => store.straightVM.toggleOpen("6")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">6</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="7" onClick={() => store.straightVM.toggleOpen("7")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">7</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="8" onClick={() => store.straightVM.toggleOpen("8")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">8</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="9" onClick={() => store.straightVM.toggleOpen("9")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">9</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="10" onClick={() => store.straightVM.toggleOpen("10")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">10</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="11" onClick={() => store.straightVM.toggleOpen("11")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">11</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="12" onClick={() => store.straightVM.toggleOpen("12")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">12</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="13" onClick={() => store.straightVM.toggleOpen("13")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">13</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="red-item cell" data-cell="14" onClick={() => store.straightVM.toggleOpen("14")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">14</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="15" onClick={() => store.straightVM.toggleOpen("15")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">15</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="16" onClick={() => store.straightVM.toggleOpen("16")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">16</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="17" onClick={() => store.straightVM.toggleOpen("17")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">17</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="18" onClick={() => store.straightVM.toggleOpen("18")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">18</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="19" onClick={() => store.straightVM.toggleOpen("19")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">19</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="20" onClick={() => store.straightVM.toggleOpen("20")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">20</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="21" onClick={() => store.straightVM.toggleOpen("21")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">21</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="22" onClick={() => store.straightVM.toggleOpen("22")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">22</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="red-item cell" data-cell="23" onClick={() => store.straightVM.toggleOpen("23")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">23</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="24" onClick={() => store.straightVM.toggleOpen("24")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">24</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="25" onClick={() => store.straightVM.toggleOpen("25")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">25</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="26" onClick={() => store.straightVM.toggleOpen("26")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">26</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="27" onClick={() => store.straightVM.toggleOpen("27")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">27</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="28" onClick={() => store.straightVM.toggleOpen("28")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">28</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="black-item cell" data-cell="29" onClick={() => store.straightVM.toggleOpen("29")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">29</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="30" onClick={() => store.straightVM.toggleOpen("30")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">30</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="31" onClick={() => store.straightVM.toggleOpen("31")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">31</div>
                    <div className="split-up-bet-catcher-right"></div>
                    <div className="split-up-bet-catcher-bottom"></div>
                    <div className="six-lines-catcher"></div>
                </div>
                <div className="red-item cell" data-cell="32" onClick={() => store.straightVM.toggleOpen("32")}>
                    <div className="corner-bet-catcher"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">32</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="black-item cell" data-cell="33" onClick={() => store.straightVM.toggleOpen("33")}>
                    <div className="double-street-catcher-top-right"></div>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">33</div>
                    <div className="split-up-bet-catcher-right"></div>
                </div>
                <div className="red-item cell" data-cell="34" onClick={() => store.straightVM.toggleOpen("34")}>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">34</div>
                    <div className="split-up-bet-catcher-bottom"></div>
                </div>
                <div className="black-item cell" data-cell="35" onClick={() => store.straightVM.toggleOpen("35")}>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">35</div>
                </div>
                <div className="red-item cell" data-cell="36" onClick={() => store.straightVM.toggleOpen("36")}>
                    <div className="split-up-bet-catcher-top"></div>
                    <div className="value">36</div>
                    </div>
                    <div className="column-item cell" data-cell="1st" onClick={() => store.columnVM.toggleOpen(ColumnBet.FIRST)}>
                    <div className="value" >1st</div>
                    </div>
                    <div className="column-item cell" data-cell="2nd" onClick={() => store.columnVM.toggleOpen(ColumnBet.SECOND)}>
                    <div className="value">2nd</div>
                    </div>
                    <div className="column-item cell" data-cell="3rd" onClick={() => store.columnVM.toggleOpen(ColumnBet.THIRD)}>
                    <div className="value" >3rd</div>
                </div>
            </section>
                <section className="roulette-table-container-second">
                    <div className="doz-item cell" data-cell="1-12" onClick={() => store.dozenVM.toggleOpen(DozenBet.FIRST)}>
                    <div>1-12</div>
                    </div>
                    <div className="doz-item cell" data-cell="13-24" onClick={() => store.dozenVM.toggleOpen(DozenBet.SECOND)}>
                    <div>13-24</div>
                    </div>
                    <div className="doz-item cell" data-cell="25-36" onClick={() => store.dozenVM.toggleOpen(DozenBet.THIRD)}>
                    <div>25-36</div>
                </div>
            </section>
                <div className="roulette-table-container-third">
                    <div className="outside-section cell" data-cell="1-18" onClick={() => store.eighteenVM.toggleOpen(EighteenBet.FIRST)}>
                    <div>1-18</div>
                    </div>
                    <div className="outside-section cell" data-cell="EVEN" onClick={() => store.pairityVM.toggleOpen(ParityBet.EVEN)}>
                    <div>EVEN</div>
                </div>
                    <div className="outside-section">
                        <div className="cell" data-cell="red" onClick={() => store.colorVM.toggleOpen(ColorBet.RED)}>
                        <div className="rhomb-red"></div>
                    </div>
                </div>
                    <div className="outside-section">
                        <div data-cell="black" onClick={() => store.colorVM.toggleOpen(ColorBet.BLACK)}>
                        <div className="rhomb-black"></div>
                    </div>
                </div>
                    <div className="outside-section cell" data-cell="ODD">
                        <div onClick={() => store.pairityVM.toggleOpen(ParityBet.ODD)}>ODD</div>
                    </div>
                    <div className="outside-section cell" data-cell="19-36" onClick={() => store.eighteenVM.toggleOpen(EighteenBet.SECOND)}>
                    <div>19-36</div>
                </div>
            </div>
        </div>
        </>
    );
});

export default Wheel;