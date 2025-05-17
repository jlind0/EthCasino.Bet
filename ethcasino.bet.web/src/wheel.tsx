import { observer } from 'mobx-react-lite';
import './wheel.css';
const Wheel = observer(() => {
    return (
        <>
        <div class="roulette-table-container">
            <section class="roulette-table-container-first">
                <a class="link" data-target-cells="00-0" onClick={() => SplitBetVM.Open("00-0")}></a>

                <a class="link" data-target-cells="1-2" onClick={() => SplitBetVM.Open("1-2")}></a>
                <a class="link" data-target-cells="2-3" onClick={() => SplitBetVM.Open("2-3")}></a>
                <a class="link" data-target-cells="4-5" onClick={() => SplitBetVM.Open("4-5")}></a>
                <a class="link" data-target-cells="5-6" onClick={() => SplitBetVM.Open("5-6")}></a>
                <a class="link" data-target-cells="7-8" onClick={() => SplitBetVM.Open("7-8")}></a>
                <a class="link" data-target-cells="8-9" onClick={() => SplitBetVM.Open("8-9")}></a>
                <a class="link" data-target-cells="10-11" onClick={() => SplitBetVM.Open("10-11")}></a>
                <a class="link" data-target-cells="11-12" onClick={() => SplitBetVM.Open("11-12")}></a>
                <a class="link" data-target-cells="13-14" onClick={() => SplitBetVM.Open("13-14")}></a>
                <a class="link" data-target-cells="14-15" onClick={() => SplitBetVM.Open("14-15")}></a>
                <a class="link" data-target-cells="16-17" onClick={() => SplitBetVM.Open("16-17")}></a>
                <a class="link" data-target-cells="17-18" onClick={() => SplitBetVM.Open("17-18")}></a>
                <a class="link" data-target-cells="19-20" onClick={() => SplitBetVM.Open("19-20")}></a>
                <a class="link" data-target-cells="20-21" onClick={() => SplitBetVM.Open("20-21")}></a>
                <a class="link" data-target-cells="22-23" onClick={() => SplitBetVM.Open("22-23")}></a>
                <a class="link" data-target-cells="23-24" onClick={() => SplitBetVM.Open("23-24")}></a>
                <a class="link" data-target-cells="25-26" onClick={() => SplitBetVM.Open("25-26")}></a>
                <a class="link" data-target-cells="26-27" onClick={() => SplitBetVM.Open("26-27")}></a>
                <a class="link" data-target-cells="28-29" onClick={() => SplitBetVM.Open("28-29")}></a>
                <a class="link" data-target-cells="29-30" onClick={() => SplitBetVM.Open("29-30")}></a>
                <a class="link" data-target-cells="31-32" onClick={() => SplitBetVM.Open("31-32")}></a>
                <a class="link" data-target-cells="32-33" onClick={() => SplitBetVM.Open("32-33")}></a>
                <a class="link" data-target-cells="34-35" onClick={() => SplitBetVM.Open("34-35")}></a>

                <a class="link" data-target-cells="1-2-3" onClick={() => StreetBetVM.Open((byte)1)}></a>
                <a class="link" data-target-cells="4-5-6" onClick={() => StreetBetVM.Open((byte)2)}></a>
                <a class="link" data-target-cells="7-8-9" onClick={() => StreetBetVM.Open((byte)3)}></a>
                <a class="link" data-target-cells="10-11-12" onClick={() => StreetBetVM.Open((byte)4)}></a>
                <a class="link" data-target-cells="13-14-15" onClick={() => StreetBetVM.Open((byte)5)}></a>
                <a class="link" data-target-cells="16-17-18" onClick={() => StreetBetVM.Open((byte)6)}></a>
                <a class="link" data-target-cells="19-20-21" onClick={() => StreetBetVM.Open((byte)7)}></a>
                <a class="link" data-target-cells="22-23-24" onClick={() => StreetBetVM.Open((byte)8)}></a>
                <a class="link" data-target-cells="25-26-27" onClick={() => StreetBetVM.Open((byte)9)}></a>
                <a class="link" data-target-cells="28-29-30" onClick={() => StreetBetVM.Open((byte)10)}></a>
                <a class="link" data-target-cells="31-32-33" onClick={() => StreetBetVM.Open((byte)11)}></a>
                <a class="link" data-target-cells="34-35-36" onClick={() => StreetBetVM.Open((byte)12)}></a>

                <a class="link bottom" data-target-cells="1-2-3" onClick={() => StreetBetVM.Open((byte)1)}></a>
                <a class="link bottom" data-target-cells="4-5-6" onClick={() => StreetBetVM.Open((byte)2)}></a>
                <a class="link bottom" data-target-cells="7-8-9" onClick={() => StreetBetVM.Open((byte)3)}></a>
                <a class="link bottom" data-target-cells="10-11-12" onClick={() => StreetBetVM.Open((byte)4)}></a>
                <a class="link bottom" data-target-cells="13-14-15" onClick={() => StreetBetVM.Open((byte)5)}></a>
                <a class="link bottom" data-target-cells="16-17-18" onClick={() => StreetBetVM.Open((byte)6)}></a>
                <a class="link bottom" data-target-cells="19-20-21" onClick={() => StreetBetVM.Open((byte)7)}></a>
                <a class="link bottom" data-target-cells="22-23-24" onClick={() => StreetBetVM.Open((byte)8)}></a>
                <a class="link bottom" data-target-cells="25-26-27" onClick={() => StreetBetVM.Open((byte)9)}></a>
                <a class="link bottom" data-target-cells="28-29-30" onClick={() => StreetBetVM.Open((byte)10)}></a>
                <a class="link bottom" data-target-cells="31-32-33" onClick={() => StreetBetVM.Open((byte)11)}></a>
                <a class="link bottom" data-target-cells="34-35-36" onClick={() => StreetBetVM.Open((byte)12)}></a>

                <a class="link" data-target-cells="35-36" onClick={() => SplitBetVM.Open("35-36")}></a>
                <a class="link-bar" data-target-cells="00-0-1-2-3" onClick={() => TopLineVM.Open()}></a>
                <a class="link-bar bottom" data-target-cells="00-0-1-2-3" onClick={() => TopLineVM.Open()}></a>
                <a class="link" data-target-cells="00-0-1-2-3" onClick={() => TopLineVM.Open()}></a>
                <a class="link bottom" data-target-cells="00-0-1-2-3" onClick={() => TopLineVM.Open()}></a>

                <a class="link bottom" data-target-cells="1-2-3-4-5-6" onClick={() => DoubleStreetVM.Open((byte)1)}></a>
                <a class="link bottom" data-target-cells="4-5-6-7-8-9" onClick={() => DoubleStreetVM.Open((byte)2)}></a>
                <a class="link bottom" data-target-cells="7-8-9-10-11-12" onClick={() => DoubleStreetVM.Open((byte)3)}></a>
                <a class="link bottom" data-target-cells="10-11-12-13-14-15" onClick={() => DoubleStreetVM.Open((byte)4)}></a>
                <a class="link bottom" data-target-cells="13-14-15-16-17-18" onClick={() => DoubleStreetVM.Open((byte)5)}></a>
                <a class="link bottom" data-target-cells="16-17-18-19-20-21" onClick={() => DoubleStreetVM.Open((byte)6)}></a>
                <a class="link bottom" data-target-cells="19-20-21-22-23-24" onClick={() => DoubleStreetVM.Open((byte)7)}></a>
                <a class="link bottom" data-target-cells="22-23-24-25-26-27" onClick={() => DoubleStreetVM.Open((byte)8)}></a>
                <a class="link bottom" data-target-cells="25-26-27-28-29-30" onClick={() => DoubleStreetVM.Open((byte)9)}></a>
                <a class="link bottom" data-target-cells="28-29-30-31-32-33" onClick={() => DoubleStreetVM.Open((byte)10)}></a>
                <a class="link bottom" data-target-cells="31-32-33-34-35-36" onClick={() => DoubleStreetVM.Open((byte)11)}></a>

                <a class="link" data-target-cells="1-2-3-4-5-6" onClick={() => DoubleStreetVM.Open((byte)1)}></a>
                <a class="link" data-target-cells="2-3-5-6" onClick={() => CornerVM.Open("2-3-5-6")}></a>
                <a class="link" data-target-cells="5-6-8-9" onClick={() => CornerVM.Open("5-6-8-9")}></a>
                <a class="link" data-target-cells="8-9-11-12" onClick={() => CornerVM.Open("8-9-11-12")}></a>
                <a class="link" data-target-cells="11-12-14-15" onClick={() => CornerVM.Open("11-12-14-15")}></a>
                <a class="link" data-target-cells="14-15-17-18" onClick={() => CornerVM.Open("14-15-17-18")}></a>
                <a class="link" data-target-cells="17-18-20-21" onClick={() => CornerVM.Open("17-18-20-21")}></a>
                <a class="link" data-target-cells="20-21-23-24" onClick={() => CornerVM.Open("20-21-23-24")}></a>
                <a class="link" data-target-cells="23-24-26-27" onClick={() => CornerVM.Open("23-24-26-27")}></a>
                <a class="link" data-target-cells="26-27-29-30" onClick={() => CornerVM.Open("26-27-29-30")}></a>

                <a class="link" data-target-cells="29-30-32-33" onClick={() => CornerVM.Open("29-30-32-33")}></a>
                <a class="link" data-target-cells="32-33-35-36" onClick={() => CornerVM.Open("32-33-35-36")}></a>

                <a class="link" data-target-cells="1-2-4-5" onClick={() => CornerVM.Open("1-2-4-5")}></a>
                <a class="link" data-target-cells="4-5-7-8" onClick={() => CornerVM.Open("4-5-7-8")}></a>
                <a class="link" data-target-cells="7-8-10-11" onClick={() => CornerVM.Open("7-8-10-11")}></a>
                <a class="link" data-target-cells="10-11-13-14" onClick={() => CornerVM.Open("10-11-13-14")}></a>
                <a class="link" data-target-cells="13-14-16-17" onClick={() => CornerVM.Open("13-14-16-17")}></a>
                <a class="link" data-target-cells="16-17-19-20" onClick={() => CornerVM.Open("16-17-19-20")}></a>
                <a class="link" data-target-cells="19-20-22-23" onClick={() => CornerVM.Open("19-20-22-23")}></a>
                <a class="link" data-target-cells="22-23-25-26" onClick={() => CornerVM.Open("22-23-25-26")}></a>
                <a class="link" data-target-cells="25-26-28-29" onClick={() => CornerVM.Open("25-26-28-29")}></a>
                <a class="link" data-target-cells="28-29-31-32" onClick={() => CornerVM.Open("28-29-31-32")}></a>
                <a class="link" data-target-cells="31-32-34-35" onClick={() => CornerVM.Open("31-32-34-35")}></a>

                <a class="link" data-target-cells="4-5-6-7-8-9" onClick={() => DoubleStreetVM.Open((byte)2)}></a>
                <a class="link" data-target-cells="10-11-12-13-14-15" onClick={() => DoubleStreetVM.Open((byte)4)}></a>
                <a class="link" data-target-cells="13-14-15-16-17-18" onClick={() => DoubleStreetVM.Open((byte)5)}></a>
                <a class="link" data-target-cells="16-17-18-19-20-21" onClick={() => DoubleStreetVM.Open((byte)6)}></a>
                <a class="link" data-target-cells="19-20-21-22-23-24" onClick={() => DoubleStreetVM.Open((byte)7)}></a>
                <a class="link" data-target-cells="22-23-24-25-26-27" onClick={() => DoubleStreetVM.Open((byte)8)}></a>
                <a class="link" data-target-cells="25-26-27-28-29-30" onClick={() => DoubleStreetVM.Open((byte)9)}></a>
                <a class="link" data-target-cells="28-29-30-31-32-33" onClick={() => DoubleStreetVM.Open((byte)10)}></a>
                <a class="link" data-target-cells="31-32-33-34-35-36" onClick={() => DoubleStreetVM.Open((byte)11)}></a>

                <a class="link" data-target-cells="7-8-9-10-11-12" onClick={() => DoubleStreetVM.Open((byte)3)}></a>

                <a class="link" data-target-cells="3-6" onClick={() => SplitBetVM.Open("3-6")}></a>
                <a class="link" data-target-cells="6-9" onClick={() => SplitBetVM.Open("6-9")}></a>
                <a class="link" data-target-cells="9-12" onClick={() => SplitBetVM.Open("9-12")}></a>
                <a class="link" data-target-cells="12-15" onClick={() => SplitBetVM.Open("12-15")}></a>
                <a class="link" data-target-cells="15-18" onClick={() => SplitBetVM.Open("15-18")}></a>
                <a class="link" data-target-cells="18-21" onClick={() => SplitBetVM.Open("18-21")}></a>
                <a class="link" data-target-cells="21-24" onClick={() => SplitBetVM.Open("21-24")}></a>
                <a class="link" data-target-cells="24-27" onClick={() => SplitBetVM.Open("24-27")}></a>
                <a class="link" data-target-cells="27-30" onClick={() => SplitBetVM.Open("27-30")}></a>
                <a class="link" data-target-cells="30-33" onClick={() => SplitBetVM.Open("30-33")}></a>
                <a class="link" data-target-cells="33-36" onClick={() => SplitBetVM.Open("33-36")}></a>
                <a class="link" data-target-cells="2-5" onClick={() => SplitBetVM.Open("2-5")}></a>
                <a class="link" data-target-cells="5-8" onClick={() => SplitBetVM.Open("5-8")}></a>
                <a class="link" data-target-cells="8-11" onClick={() => SplitBetVM.Open("8-11")}></a>
                <a class="link" data-target-cells="11-14" onClick={() => SplitBetVM.Open("11-14")}></a>
                <a class="link" data-target-cells="14-17" onClick={() => SplitBetVM.Open("14-17")}></a>
                <a class="link" data-target-cells="17-20" onClick={() => SplitBetVM.Open("17-20")}></a>
                <a class="link" data-target-cells="20-23" onClick={() => SplitBetVM.Open("20-23")}></a>
                <a class="link" data-target-cells="23-26" onClick={() => SplitBetVM.Open("22-26")}></a>
                <a class="link" data-target-cells="26-29" onClick={() => SplitBetVM.Open("26-29")}></a>
                <a class="link" data-target-cells="29-32" onClick={() => SplitBetVM.Open("29-32")}></a>
                <a class="link" data-target-cells="32-35" onClick={() => SplitBetVM.Open("32-35")}></a>

                <a class="link" data-target-cells="1-4" onClick={() => SplitBetVM.Open("1-4")}></a>
                <a class="link" data-target-cells="4-7" onClick={() => SplitBetVM.Open("4-7")}></a>
                <a class="link" data-target-cells="7-10" onClick={() => SplitBetVM.Open("7-10")}></a>
                <a class="link" data-target-cells="10-13" onClick={() => SplitBetVM.Open("10-13")}></a>
                <a class="link" data-target-cells="13-16" onClick={() => SplitBetVM.Open("13-16")}></a>
                <a class="link" data-target-cells="16-19" onClick={() => SplitBetVM.Open("16-19")}></a>
                <a class="link" data-target-cells="19-22" onClick={() => SplitBetVM.Open("19-22")}></a>
                <a class="link" data-target-cells="22-25" onClick={() => SplitBetVM.Open("22-25")}></a>
                <a class="link" data-target-cells="25-28" onClick={() => SplitBetVM.Open("25-28")}></a>
                <a class="link" data-target-cells="28-31" onClick={() => SplitBetVM.Open("28-31")}></a>
                <a class="link" data-target-cells="31-34" onClick={() => SplitBetVM.Open("31-34")}></a>

                <a class="link-street link-street-1" data-target-cells="1-4-7-10-13-16-19-22-25-28-31-34" onClick={() => ColumnVM.Open((byte)0)}></a>
                <a class="link-street link-street-2" data-target-cells="2-5-8-11-14-17-20-23-26-29-32-35" onClick={() => ColumnVM.Open((byte)1)}></a>
                <a class="link-street link-street-3" data-target-cells="3-6-9-12-15-18-21-24-27-30-33-36" onClick={() => ColumnVM.Open((byte)2)}></a>

                <a class="link-floor link-floor-1-12" data-target-cells="1-2-3-4-5-6-7-8-9-10-11-12" onClick={() => DozenVM.Open((byte)1)} style=""></a>

                <a class="link-floor link-floor-13-24" data-target-cells="13-14-15-16-17-18-19-20-21-22-23-24" onClick={() => DozenVM.Open((byte)2)} style=""></a>

                <a class="link-floor link-floor-25-36" data-target-cells="25-26-27-28-29-30-31-32-33-34-35-36" onClick={() => DozenVM.Open((byte)3)} style=""></a>

                <a class="link-floor link-floor-1-18" data-target-cells="1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18" onClick={() => EighteenVM.Open((byte)1)} style=""></a>

                <a class="link-floor link-floor-even" data-target-cells="2-4-6-8-10-12-14-16-18-20-22-24-26-28-30-32-34" onClick={() => ParityVM.Open(NumberParity.Even)} style=""></a>

                <a class="link-floor red-rectangle" data-target-cells="1-3-5-7-9-12-14-16-18-19-21-23-25-27-30-32-34-36" onClick={() => ColorVM.Open(NumberColor.Red)} style=""></a>

                <a class="link-floor black" data-target-cells="2-4-6-8-10-11-13-15-17-20-22-24-26-28-29-31-33-35" onClick={() => ColorVM.Open(NumberColor.Black)} style=""></a>

                <a class="link-floor odd" data-target-cells="1-3-5-7-9-11-13-15-17-19-21-23-25-27-29-31-33-35" onClick={() => ParityVM.Open(NumberParity.Odd)} style=""></a>

                <a class="link-floor" data-target-cells="19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36" onClick={() => EighteenVM.Open((byte)2)} style=""></a>

                <div class="zero-item American cell" data-cell="0" onClick={() => StraightUpVM.Open("0")}>
                    <div class="spleet-bet-catcher"></div>
                    <div class="corner-bet-catcher bottom"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="basket-catcher-bottom"></div>
                    <div class=""></div>
                    <div class="value">0</div>
                </div>
                <div class="zero-item American cell" data-cell="00" onClick={() => StraightUpVM.Open("00")}>
                    <div class="corner-bet-catcher "></div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="basket-catcher-top"></div>
                    <div class=""></div>
                    <div class="value">00</div>
                </div>
                <div class="red-item cell" data-cell="1" onClick={() => StraightUpVM.Open("1")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="spleet-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">1</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="2" onClick={() => StraightUpVM.Open("2")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="spleet-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">2</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="3" onClick={() => StraightUpVM.Open("3")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">3</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="4" onClick={() => StraightUpVM.Open("4")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">4</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="red-item cell" data-cell="5" onClick={() => StraightUpVM.Open("5")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">5</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="6" onClick={() => StraightUpVM.Open("6")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">6</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="7" onClick={() => StraightUpVM.Open("7")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">7</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="8" onClick={() => StraightUpVM.Open("8")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">8</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="9" onClick={() => StraightUpVM.Open("9")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">9</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="10" onClick={() => StraightUpVM.Open("10")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">10</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="11" onClick={() => StraightUpVM.Open("11")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">11</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="12" onClick={() => StraightUpVM.Open("12")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">12</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="13" onClick={() => StraightUpVM.Open("13")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">13</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="red-item cell" data-cell="14" onClick={() => StraightUpVM.Open("14")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">14</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="15" onClick={() => StraightUpVM.Open("15")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">15</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="16" onClick={() => StraightUpVM.Open("16")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">16</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="17" onClick={() => StraightUpVM.Open("17")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">17</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="18" onClick={() => StraightUpVM.Open("18")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">18</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="19" onClick={() => StraightUpVM.Open("19")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">19</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="20" onClick={() => StraightUpVM.Open("20")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">20</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="21" onClick={() => StraightUpVM.Open("21")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">21</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="22" onClick={() => StraightUpVM.Open("22")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">22</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="red-item cell" data-cell="23" onClick={() => StraightUpVM.Open("23")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">23</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="24" onClick={() => StraightUpVM.Open("24")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">24</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="25" onClick={() => StraightUpVM.Open("25")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">25</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="26" onClick={() => StraightUpVM.Open("26")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">26</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="27" onClick={() => StraightUpVM.Open("27")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">27</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="28" onClick={() => StraightUpVM.Open("28")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">28</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="black-item cell" data-cell="29" onClick={() => StraightUpVM.Open("29")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">29</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="30" onClick={() => StraightUpVM.Open("30")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">30</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="31" onClick={() => StraightUpVM.Open("31")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">31</div>
                    <div class="split-up-bet-catcher-right"></div>
                    <div class="split-up-bet-catcher-bottom"></div>
                    <div class="six-lines-catcher"></div>
                </div>
                <div class="red-item cell" data-cell="32" onClick={() => StraightUpVM.Open("32")}>
                    <div class="corner-bet-catcher"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">32</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="black-item cell" data-cell="33" onClick={() => StraightUpVM.Open("33")}>
                    <div class="double-street-catcher-top-right"></div>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">33</div>
                    <div class="split-up-bet-catcher-right"></div>
                </div>
                <div class="red-item cell" data-cell="34" onClick={() => StraightUpVM.Open("34")}>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">34</div>
                    <div class="split-up-bet-catcher-bottom"></div>
                </div>
                <div class="black-item cell" data-cell="35" onClick={() => StraightUpVM.Open("35")}>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">35</div>
                </div>
                <div class="red-item cell" data-cell="36" onClick={() => StraightUpVM.Open("36")}>
                    <div class="split-up-bet-catcher-top"></div>
                    <div class="value">36</div>
                </div>
                <div class="column-item cell" data-cell="1st">
                    <div class="value" style="
">1st</div>
                </div>
                <div class="column-item cell" data-cell="2st">
                    <div class="value">2nd</div>
                </div>
                <div class="column-item cell" data-cell="3rd">
                    <div class="value" style="
">3rd</div>
                </div>
            </section>
            <section class="roulette-table-container-second">
                <div class="doz-item cell" data-cell="1-12">
                    <div>1-12</div>
                </div>
                <div class="doz-item cell" data-cell="13-24">
                    <div>13-24</div>
                </div>
                <div class="doz-item cell" data-cell="25-36">
                    <div>25-36</div>
                </div>
            </section>
            <div class="roulette-table-container-third">
                <div class="outside-section cell" data-cell="1-18">
                    <div>1-18</div>
                </div>
                <div class="outside-section cell" data-cell="EVEN">
                    <div>EVEN</div>
                </div>
                <div class="outside-section">
                    <div class="cell" data-cell="red">
                        <div class="rhomb-red"></div>
                    </div>
                </div>
                <div class="outside-section">
                    <div cell="cell" data-cell="black">
                        <div class="rhomb-black"></div>
                    </div>
                </div>
                <div class="outside-section cell" data-cell="ODD">
                    <div>ODD</div>
                </div>
                <div class="outside-section cell" data-cell="19-36">
                    <div>19-36</div>
                </div>
            </div>
        </div>
        </>
    );
});

export default Wheel;