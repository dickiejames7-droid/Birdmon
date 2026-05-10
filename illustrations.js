function getBirdSVG(id, artBg) {
  const bg = artBg || "#c8e8a8";
  const svgs = {

    // 1 Robin
    1: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="55" ry="7" fill="#00000018"/>
      <rect x="50" y="118" width="100" height="11" rx="5" fill="#6b4226"/>
      <ellipse cx="68" cy="115" rx="9" ry="5" fill="#3a8030" transform="rotate(-18,68,115)"/>
      <ellipse cx="135" cy="114" rx="9" ry="5" fill="#3a8030" transform="rotate(14,135,114)"/>
      <ellipse cx="100" cy="110" rx="18" ry="9" fill="#4a3018" transform="rotate(10,100,110)"/>
      <ellipse cx="100" cy="96" rx="27" ry="26" fill="#5a3e24"/>
      <ellipse cx="85" cy="100" rx="13" ry="10" fill="#7a5530" transform="rotate(-8,85,100)"/>
      <ellipse cx="115" cy="100" rx="13" ry="10" fill="#7a5530" transform="rotate(8,115,100)"/>
      <ellipse cx="100" cy="93" rx="19" ry="17" fill="#e84830"/>
      <ellipse cx="95" cy="86" rx="8" ry="7" fill="#f07060" opacity="0.35"/>
      <circle cx="100" cy="66" r="23" fill="#5a3e24"/>
      <ellipse cx="100" cy="70" rx="15" ry="12" fill="#e84830"/>
      <circle cx="91" cy="61" r="6" fill="white"/><circle cx="91" cy="61" r="3.5" fill="#1a1010"/><circle cx="89.5" cy="59.5" r="1.4" fill="white"/>
      <circle cx="109" cy="61" r="6" fill="white"/><circle cx="109" cy="61" r="3.5" fill="#1a1010"/><circle cx="107.5" cy="59.5" r="1.4" fill="white"/>
      <polygon points="100,71 110,75 100,79" fill="#d4a030"/>
      <line x1="100" y1="71" x2="100" y2="79" stroke="#b08020" stroke-width="1"/>
      <line x1="93" y1="120" x2="87" y2="132" stroke="#6b4226" stroke-width="1.8"/>
      <line x1="107" y1="120" x2="113" y2="132" stroke="#6b4226" stroke-width="1.8"/>
      <line x1="87" y1="132" x2="79" y2="134" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="87" y1="132" x2="88" y2="137" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="113" y1="132" x2="121" y2="134" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="113" y1="132" x2="112" y2="137" stroke="#6b4226" stroke-width="1.5"/>
      <circle cx="152" cy="48" r="10" fill="#f0d000" opacity="0.85"/>
      <ellipse cx="149" cy="45" rx="3.5" ry="2.5" fill="#fff" opacity="0.5"/>
    </svg>`,

    // 2 Blue Tit
    2: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="50" ry="6" fill="#00000018"/>
      <rect x="55" y="118" width="90" height="10" rx="5" fill="#6b4226"/>
      <ellipse cx="72" cy="115" rx="8" ry="4" fill="#3a8030" transform="rotate(-15,72,115)"/>
      <ellipse cx="130" cy="114" rx="8" ry="4" fill="#3a8030" transform="rotate(12,130,114)"/>
      <ellipse cx="100" cy="107" rx="16" ry="8" fill="#2255aa" transform="rotate(8,100,107)"/>
      <ellipse cx="100" cy="95" rx="26" ry="25" fill="#2288cc"/>
      <ellipse cx="86" cy="98" rx="13" ry="10" fill="#1a6699" transform="rotate(-6,86,98)"/>
      <ellipse cx="114" cy="98" rx="13" ry="10" fill="#1a6699" transform="rotate(6,114,98)"/>
      <ellipse cx="100" cy="93" rx="18" ry="15" fill="#ffee44"/>
      <ellipse cx="96" cy="87" rx="7" ry="6" fill="#fff080" opacity="0.4"/>
      <circle cx="100" cy="65" r="22" fill="#2266bb"/>
      <circle cx="100" cy="63" r="18" fill="white"/>
      <ellipse cx="100" cy="58" rx="16" ry="8" fill="#2266bb"/>
      <circle cx="91" cy="63" r="5.5" fill="white"/><circle cx="91" cy="63" r="3.5" fill="#1a1a2a"/><circle cx="89.5" cy="61.5" r="1.3" fill="white"/>
      <circle cx="109" cy="63" r="5.5" fill="white"/><circle cx="109" cy="63" r="3.5" fill="#1a1a2a"/><circle cx="107.5" cy="61.5" r="1.3" fill="white"/>
      <ellipse cx="100" cy="60" rx="12" ry="4" fill="#111166"/>
      <polygon points="100,70 109,73 100,76" fill="#334444"/>
      <line x1="93" y1="119" x2="87" y2="131" stroke="#6b4226" stroke-width="1.8"/>
      <line x1="107" y1="119" x2="113" y2="131" stroke="#6b4226" stroke-width="1.8"/>
      <line x1="87" y1="131" x2="79" y2="133" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="87" y1="131" x2="88" y2="136" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="113" y1="131" x2="121" y2="133" stroke="#6b4226" stroke-width="1.5"/>
      <line x1="113" y1="131" x2="112" y2="136" stroke="#6b4226" stroke-width="1.5"/>
    </svg>`,

    // 3 House Sparrow
    3: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="52" y="120" width="96" height="11" rx="5" fill="#8b6344"/>
      <ellipse cx="100" cy="110" rx="17" ry="9" fill="#a07040" transform="rotate(6,100,110)"/>
      <ellipse cx="100" cy="96" rx="28" ry="27" fill="#c8902a"/>
      <ellipse cx="85" cy="100" rx="14" ry="11" fill="#a06820" transform="rotate(-7,85,100)"/>
      <ellipse cx="115" cy="100" rx="14" ry="11" fill="#a06820" transform="rotate(7,115,100)"/>
      <ellipse cx="100" cy="95" rx="20" ry="17" fill="#f0d890"/>
      <ellipse cx="96" cy="89" rx="8" ry="6" fill="#fff8c8" opacity="0.4"/>
      <circle cx="100" cy="66" r="24" fill="#886633"/>
      <ellipse cx="88" cy="62" rx="10" ry="8" fill="#ccaa66"/>
      <ellipse cx="112" cy="62" rx="10" ry="8" fill="#ccaa66"/>
      <ellipse cx="100" cy="60" rx="8" ry="6" fill="#443322"/>
      <circle cx="91" cy="63" r="6" fill="white"/><circle cx="91" cy="63" r="4" fill="#1a1010"/><circle cx="89.5" cy="61.5" r="1.4" fill="white"/>
      <circle cx="109" cy="63" r="6" fill="white"/><circle cx="109" cy="63" r="4" fill="#1a1010"/><circle cx="107.5" cy="61.5" r="1.4" fill="white"/>
      <polygon points="100,70 111,74 100,78" fill="#665533"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#8b6344" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#8b6344" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#8b6344" stroke-width="1.5"/>
    </svg>`,

    // 4 Blackbird
    4: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="50" y="122" width="100" height="11" rx="5" fill="#333"/>
      <ellipse cx="100" cy="113" rx="20" ry="10" fill="#222" transform="rotate(15,100,113)"/>
      <ellipse cx="100" cy="97" rx="30" ry="28" fill="#222"/>
      <ellipse cx="84" cy="103" rx="15" ry="12" fill="#111" transform="rotate(-8,84,103)"/>
      <ellipse cx="116" cy="103" rx="15" ry="12" fill="#111" transform="rotate(8,116,103)"/>
      <circle cx="100" cy="66" r="25" fill="#222"/>
      <circle cx="91" cy="63" r="6.5" fill="white"/><circle cx="91" cy="63" r="4" fill="#0a0a0a"/><circle cx="89.5" cy="61.5" r="1.5" fill="white"/>
      <circle cx="109" cy="63" r="6.5" fill="white"/><circle cx="109" cy="63" r="4" fill="#0a0a0a"/><circle cx="107.5" cy="61.5" r="1.5" fill="white"/>
      <ellipse cx="91" cy="56" rx="6" ry="3" fill="#ff8800" opacity="0.5"/>
      <ellipse cx="109" cy="56" rx="6" ry="3" fill="#ff8800" opacity="0.5"/>
      <path d="M95,70 Q100,64 105,70 L108,76 Q100,73 92,76 Z" fill="#ff8800"/>
      <ellipse cx="140" cy="50" rx="9" ry="8" fill="#ffaa00" opacity="0.8"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#333" stroke-width="2"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#333" stroke-width="2"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#333" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#333" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#333" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#333" stroke-width="1.8"/>
    </svg>`,

    // 5 Starling
    5: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="50" y="120" width="100" height="11" rx="5" fill="#224422"/>
      <ellipse cx="100" cy="111" rx="19" ry="9" fill="#1a3a1a" transform="rotate(12,100,111)"/>
      <ellipse cx="100" cy="96" rx="29" ry="27" fill="#1a3a1a"/>
      <ellipse cx="84" cy="101" rx="15" ry="12" fill="#114411" transform="rotate(-8,84,101)"/>
      <ellipse cx="116" cy="101" rx="15" ry="12" fill="#114411" transform="rotate(8,116,101)"/>
      <ellipse cx="100" cy="95" rx="21" ry="19" fill="#336633" opacity="0.6"/>
      <circle cx="85" cy="88" r="2" fill="#88ff88" opacity="0.7"/>
      <circle cx="100" cy="83" r="2" fill="#88ff88" opacity="0.7"/>
      <circle cx="115" cy="88" r="2" fill="#88ff88" opacity="0.7"/>
      <circle cx="90" cy="100" r="2" fill="#aaddff" opacity="0.7"/>
      <circle cx="110" cy="100" r="2" fill="#aaddff" opacity="0.7"/>
      <circle cx="100" cy="107" r="2" fill="#88ff88" opacity="0.7"/>
      <circle cx="100" cy="66" r="23" fill="#1a3a1a"/>
      <circle cx="100" cy="64" r="18" fill="#336633"/>
      <circle cx="91" cy="62" r="6" fill="white"/><circle cx="91" cy="62" r="3.8" fill="#0a1a0a"/><circle cx="89.5" cy="60.5" r="1.4" fill="white"/>
      <circle cx="109" cy="62" r="6" fill="white"/><circle cx="109" cy="62" r="3.8" fill="#0a1a0a"/><circle cx="107.5" cy="60.5" r="1.4" fill="white"/>
      <polygon points="100,70 112,74 100,78" fill="#cccc00"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#224422" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#224422" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#224422" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#224422" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#224422" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#224422" stroke-width="1.5"/>
    </svg>`,

    // 6 Great Spotted Woodpecker
    6: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <rect x="90" y="20" width="18" height="140" rx="9" fill="#8b5e3c"/>
      <rect x="94" y="24" width="6" height="130" rx="3" fill="#6b4226"/>
      <ellipse cx="100" cy="152" rx="30" ry="6" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="28" ry="26" fill="#222"/>
      <ellipse cx="84" cy="100" rx="14" ry="10" fill="#fff" />
      <ellipse cx="116" cy="100" rx="14" ry="10" fill="#fff"/>
      <ellipse cx="100" cy="98" rx="22" ry="20" fill="#f8f4f0"/>
      <ellipse cx="100" cy="94" rx="14" ry="12" fill="#cc2222"/>
      <circle cx="100" cy="70" r="22" fill="#222"/>
      <ellipse cx="100" cy="66" rx="10" ry="8" fill="#cc2222"/>
      <circle cx="91" cy="68" r="5.5" fill="white"/><circle cx="91" cy="68" r="3.5" fill="#0a0a0a"/><circle cx="89.5" cy="66.5" r="1.3" fill="white"/>
      <circle cx="109" cy="68" r="5.5" fill="white"/><circle cx="109" cy="68" r="3.5" fill="#0a0a0a"/><circle cx="107.5" cy="66.5" r="1.3" fill="white"/>
      <polygon points="100,75 118,79 100,83" fill="#333"/>
      <line x1="94" y1="122" x2="86" y2="138" stroke="#444" stroke-width="2.5"/>
      <line x1="106" y1="122" x2="114" y2="138" stroke="#444" stroke-width="2.5"/>
      <line x1="86" y1="138" x2="76" y2="136" stroke="#444" stroke-width="2"/>
      <line x1="86" y1="138" x2="88" y2="144" stroke="#444" stroke-width="2"/>
      <line x1="114" y1="138" x2="124" y2="136" stroke="#444" stroke-width="2"/>
      <line x1="114" y1="138" x2="112" y2="144" stroke="#444" stroke-width="2"/>
    </svg>`,

    // 7 Jay
    7: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="50" y="120" width="100" height="11" rx="5" fill="#8b6344"/>
      <ellipse cx="100" cy="111" rx="20" ry="10" fill="#cc8844" transform="rotate(10,100,111)"/>
      <ellipse cx="100" cy="96" rx="30" ry="27" fill="#cc8844"/>
      <ellipse cx="83" cy="101" rx="15" ry="13" fill="#aa6633" transform="rotate(-8,83,101)"/>
      <ellipse cx="117" cy="101" rx="15" ry="13" fill="#aa6633" transform="rotate(8,117,101)"/>
      <rect x="84" y="90" width="10" height="16" rx="2" fill="#4488ff" opacity="0.8"/>
      <rect x="84" y="90" width="10" height="4" rx="1" fill="#2266cc"/>
      <rect x="84" y="94" width="10" height="4" rx="1" fill="#6699ff"/>
      <rect x="84" y="98" width="10" height="4" rx="1" fill="#2266cc"/>
      <rect x="84" y="102" width="10" height="4" rx="1" fill="#6699ff"/>
      <ellipse cx="100" cy="93" rx="18" ry="15" fill="#f0ddc0"/>
      <ellipse cx="96" cy="87" rx="7" ry="6" fill="#fff8e8" opacity="0.4"/>
      <circle cx="100" cy="65" r="24" fill="#cc8844"/>
      <ellipse cx="100" cy="62" rx="20" ry="10" fill="#fff" opacity="0.5"/>
      <ellipse cx="100" cy="59" rx="15" ry="6" fill="#333"/>
      <circle cx="90" cy="64" r="6" fill="white"/><circle cx="90" cy="64" r="4" fill="#1a0a00"/><circle cx="88.5" cy="62.5" r="1.4" fill="white"/>
      <circle cx="110" cy="64" r="6" fill="white"/><circle cx="110" cy="64" r="4" fill="#1a0a00"/><circle cx="108.5" cy="62.5" r="1.4" fill="white"/>
      <polygon points="100,71 113,75 100,79" fill="#556644"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#8b6344" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#8b6344" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#8b6344" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#8b6344" stroke-width="1.5"/>
    </svg>`,

    // 8 Nuthatch
    8: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="50" ry="6" fill="#00000018"/>
      <rect x="88" y="15" width="16" height="140" rx="8" fill="#8b6344" transform="rotate(-20,96,85)"/>
      <ellipse cx="100" cy="97" rx="28" ry="25" fill="#4477aa"/>
      <ellipse cx="84" cy="100" rx="14" ry="11" fill="#2255aa" transform="rotate(-7,84,100)"/>
      <ellipse cx="116" cy="100" rx="14" ry="11" fill="#2255aa" transform="rotate(7,116,100)"/>
      <ellipse cx="100" cy="97" rx="21" ry="18" fill="#f0c080"/>
      <ellipse cx="96" cy="90" rx="8" ry="7" fill="#f8d8a0" opacity="0.5"/>
      <ellipse cx="100" cy="115" rx="14" ry="9" fill="#cc7744"/>
      <circle cx="100" cy="67" r="23" fill="#4477aa"/>
      <ellipse cx="100" cy="63" rx="21" ry="9" fill="#112244"/>
      <circle cx="91" cy="65" r="6" fill="white"/><circle cx="91" cy="65" r="3.8" fill="#111"/><circle cx="89.5" cy="63.5" r="1.4" fill="white"/>
      <circle cx="109" cy="65" r="6" fill="white"/><circle cx="109" cy="65" r="3.8" fill="#111"/><circle cx="107.5" cy="63.5" r="1.4" fill="white"/>
      <polygon points="100,72 118,76 100,79" fill="#334455"/>
      <line x1="93" y1="120" x2="87" y2="132" stroke="#4477aa" stroke-width="1.8"/>
      <line x1="107" y1="120" x2="113" y2="132" stroke="#4477aa" stroke-width="1.8"/>
      <line x1="87" y1="132" x2="79" y2="134" stroke="#4477aa" stroke-width="1.5"/>
      <line x1="87" y1="132" x2="88" y2="137" stroke="#4477aa" stroke-width="1.5"/>
      <line x1="113" y1="132" x2="121" y2="134" stroke="#4477aa" stroke-width="1.5"/>
      <line x1="113" y1="132" x2="112" y2="137" stroke="#4477aa" stroke-width="1.5"/>
    </svg>`,

    // 9 Tawny Owl
    9: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="155" rx="55" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="38" ry="50" fill="#886633"/>
      <ellipse cx="80" cy="98" rx="18" ry="28" fill="#6b4f22" transform="rotate(-5,80,98)"/>
      <ellipse cx="120" cy="98" rx="18" ry="28" fill="#6b4f22" transform="rotate(5,120,98)"/>
      <ellipse cx="100" cy="100" rx="28" ry="38" fill="#aa8844"/>
      <ellipse cx="92" cy="105" rx="10" ry="14" fill="#cc9944" opacity="0.6"/>
      <ellipse cx="108" cy="105" rx="10" ry="14" fill="#cc9944" opacity="0.6"/>
      <circle cx="100" cy="73" r="30" fill="#886633"/>
      <ellipse cx="100" cy="70" rx="28" ry="25" fill="#aa8844"/>
      <circle cx="87" cy="68" r="13" fill="#222" stroke="#886633" stroke-width="2"/>
      <circle cx="87" cy="68" r="10" fill="#ff9900"/>
      <circle cx="87" cy="68" r="7" fill="#111"/>
      <circle cx="85" cy="66" r="2.5" fill="white"/>
      <circle cx="113" cy="68" r="13" fill="#222" stroke="#886633" stroke-width="2"/>
      <circle cx="113" cy="68" r="10" fill="#ff9900"/>
      <circle cx="113" cy="68" r="7" fill="#111"/>
      <circle cx="111" cy="66" r="2.5" fill="white"/>
      <ellipse cx="86" cy="55" rx="8" ry="4" fill="#6b4f22" transform="rotate(-20,86,55)"/>
      <ellipse cx="114" cy="55" rx="8" ry="4" fill="#6b4f22" transform="rotate(20,114,55)"/>
      <polygon points="100,77 93,84 107,84" fill="#cc8833"/>
      <line x1="88" y1="144" x2="82" y2="156" stroke="#886633" stroke-width="3"/>
      <line x1="112" y1="144" x2="118" y2="156" stroke="#886633" stroke-width="3"/>
      <line x1="82" y1="156" x2="72" y2="154" stroke="#886633" stroke-width="2.5"/>
      <line x1="82" y1="156" x2="84" y2="162" stroke="#886633" stroke-width="2.5"/>
      <line x1="118" y1="156" x2="128" y2="154" stroke="#886633" stroke-width="2.5"/>
      <line x1="118" y1="156" x2="116" y2="162" stroke="#886633" stroke-width="2.5"/>
    </svg>`,

    // 10 Great Tit
    10: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="50" ry="6" fill="#00000018"/>
      <rect x="53" y="120" width="94" height="10" rx="5" fill="#5a8a22"/>
      <ellipse cx="100" cy="111" rx="18" ry="9" fill="#3a6a10" transform="rotate(8,100,111)"/>
      <ellipse cx="100" cy="96" rx="27" ry="26" fill="#5a8a22"/>
      <ellipse cx="85" cy="100" rx="14" ry="11" fill="#3a6a10" transform="rotate(-7,85,100)"/>
      <ellipse cx="115" cy="100" rx="14" ry="11" fill="#3a6a10" transform="rotate(7,115,100)"/>
      <ellipse cx="100" cy="94" rx="20" ry="17" fill="#ffee44"/>
      <rect x="96" y="88" width="8" height="25" rx="3" fill="#222"/>
      <ellipse cx="96" cy="87" rx="8" ry="6" fill="#fff880" opacity="0.4"/>
      <circle cx="100" cy="65" r="23" fill="#111"/>
      <ellipse cx="87" cy="62" rx="11" ry="9" fill="white"/>
      <ellipse cx="113" cy="62" rx="11" ry="9" fill="white"/>
      <circle cx="91" cy="63" r="6" fill="white"/><circle cx="91" cy="63" r="4" fill="#111"/><circle cx="89.5" cy="61.5" r="1.4" fill="white"/>
      <circle cx="109" cy="63" r="6" fill="white"/><circle cx="109" cy="63" r="4" fill="#111"/><circle cx="107.5" cy="61.5" r="1.4" fill="white"/>
      <polygon points="100,71 112,75 100,79" fill="#556644"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#5a8a22" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#5a8a22" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#5a8a22" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#5a8a22" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#5a8a22" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#5a8a22" stroke-width="1.5"/>
    </svg>`,

    // 11 Treecreeper
    11: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="45" ry="6" fill="#00000018"/>
      <rect x="92" y="15" width="20" height="140" rx="10" fill="#8b6344"/>
      <rect x="96" y="18" width="8" height="136" rx="4" fill="#6b4226" opacity="0.6"/>
      <ellipse cx="102" cy="98" rx="24" ry="22" fill="#998866" transform="rotate(15,102,98)"/>
      <ellipse cx="89" cy="100" rx="12" ry="10" fill="#776644" transform="rotate(-5,89,100)"/>
      <ellipse cx="113" cy="100" rx="12" ry="10" fill="#776644" transform="rotate(5,113,100)"/>
      <ellipse cx="102" cy="96" rx="17" ry="15" fill="#f0ecd8"/>
      <ellipse cx="99" cy="90" rx="7" ry="6" fill="#fffae8" opacity="0.4"/>
      <circle cx="102" cy="68" r="21" fill="#998866"/>
      <ellipse cx="102" cy="65" rx="19" ry="8" fill="#776644"/>
      <ellipse cx="92" cy="64" rx="9" ry="8" fill="#ddd8c0"/>
      <ellipse cx="112" cy="64" rx="9" ry="8" fill="#ddd8c0"/>
      <circle cx="93" cy="66" r="5.5" fill="white"/><circle cx="93" cy="66" r="3.5" fill="#1a1a00"/><circle cx="91.5" cy="64.5" r="1.3" fill="white"/>
      <circle cx="111" cy="66" r="5.5" fill="white"/><circle cx="111" cy="66" r="3.5" fill="#1a1a00"/><circle cx="109.5" cy="64.5" r="1.3" fill="white"/>
      <path d="M102,73 Q112,70 120,76" fill="none" stroke="#665533" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="96" y1="118" x2="90" y2="130" stroke="#998866" stroke-width="1.8"/>
      <line x1="108" y1="118" x2="114" y2="130" stroke="#998866" stroke-width="1.8"/>
    </svg>`,

    // 12 Lapwing
    12: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="52" y="122" width="96" height="10" rx="5" fill="#334422"/>
      <ellipse cx="100" cy="112" rx="22" ry="10" fill="#334422" transform="rotate(8,100,112)"/>
      <ellipse cx="100" cy="97" rx="30" ry="27" fill="#334422"/>
      <ellipse cx="84" cy="101" rx="16" ry="12" fill="#2a3a18" transform="rotate(-7,84,101)"/>
      <ellipse cx="116" cy="101" rx="16" ry="12" fill="#2a3a18" transform="rotate(7,116,101)"/>
      <ellipse cx="100" cy="94" rx="20" ry="17" fill="#f0ead8"/>
      <ellipse cx="96" cy="88" rx="8" ry="7" fill="#fff8e8" opacity="0.4"/>
      <circle cx="100" cy="65" r="23" fill="#334422"/>
      <ellipse cx="100" cy="55" rx="4" ry="14" fill="#334422"/>
      <ellipse cx="100" cy="50" rx="3" ry="8" fill="#111"/>
      <ellipse cx="100" cy="62" rx="18" ry="9" fill="#111"/>
      <circle cx="91" cy="63" r="6" fill="white"/><circle cx="91" cy="63" r="4" fill="#1a1a00"/><circle cx="89.5" cy="61.5" r="1.4" fill="white"/>
      <circle cx="109" cy="63" r="6" fill="white"/><circle cx="109" cy="63" r="4" fill="#1a1a00"/><circle cx="107.5" cy="61.5" r="1.4" fill="white"/>
      <polygon points="100,71 113,75 100,79" fill="#334422"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#334422" stroke-width="1.8"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#334422" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#334422" stroke-width="1.5"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#334422" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#334422" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#334422" stroke-width="1.5"/>
    </svg>`,

    // 13 Barn Owl
    13: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="155" rx="55" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="36" ry="48" fill="#ddcc88"/>
      <ellipse cx="82" cy="98" rx="17" ry="26" fill="#ccbb77" transform="rotate(-5,82,98)"/>
      <ellipse cx="118" cy="98" rx="17" ry="26" fill="#ccbb77" transform="rotate(5,118,98)"/>
      <ellipse cx="100" cy="102" rx="26" ry="36" fill="#f8f4ec"/>
      <circle cx="100" cy="72" r="29" fill="#ddcc88"/>
      <path d="M70,75 Q100,50 130,75 Q115,90 100,92 Q85,90 70,75Z" fill="#f8f4ec"/>
      <circle cx="87" cy="70" r="11" fill="#111" stroke="#ddcc88" stroke-width="1.5"/>
      <circle cx="87" cy="70" r="8" fill="#1a1200"/>
      <circle cx="85" cy="68" r="2.5" fill="white"/>
      <circle cx="113" cy="70" r="11" fill="#111" stroke="#ddcc88" stroke-width="1.5"/>
      <circle cx="113" cy="70" r="8" fill="#1a1200"/>
      <circle cx="111" cy="68" r="2.5" fill="white"/>
      <polygon points="100,79 94,86 106,86" fill="#ddcc88"/>
      <line x1="88" y1="144" x2="82" y2="156" stroke="#ddcc88" stroke-width="3"/>
      <line x1="112" y1="144" x2="118" y2="156" stroke="#ddcc88" stroke-width="3"/>
      <line x1="82" y1="156" x2="72" y2="154" stroke="#ddcc88" stroke-width="2.5"/>
      <line x1="82" y1="156" x2="84" y2="162" stroke="#ddcc88" stroke-width="2.5"/>
      <line x1="118" y1="156" x2="128" y2="154" stroke="#ddcc88" stroke-width="2.5"/>
      <line x1="118" y1="156" x2="116" y2="162" stroke="#ddcc88" stroke-width="2.5"/>
    </svg>`,

    // 14 Skylark
    14: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="148" rx="48" ry="6" fill="#00000018"/>
      <ellipse cx="100" cy="97" rx="28" ry="24" fill="#aa8844"/>
      <ellipse cx="84" cy="100" rx="14" ry="10" fill="#886633" transform="rotate(-7,84,100)"/>
      <ellipse cx="116" cy="100" rx="14" ry="10" fill="#886633" transform="rotate(7,116,100)"/>
      <ellipse cx="100" cy="116" rx="12" ry="7" fill="#886633"/>
      <ellipse cx="100" cy="95" rx="19" ry="16" fill="#f0e0b0"/>
      <ellipse cx="96" cy="89" rx="8" ry="6" fill="#fff8e0" opacity="0.4"/>
      <circle cx="100" cy="68" r="21" fill="#aa8844"/>
      <ellipse cx="100" cy="58" rx="3" ry="10" fill="#886633"/>
      <ellipse cx="100" cy="55" rx="2.5" ry="6" fill="#664422"/>
      <ellipse cx="100" cy="65" rx="17" ry="8" fill="#886633"/>
      <circle cx="91" cy="66" r="5.5" fill="white"/><circle cx="91" cy="66" r="3.5" fill="#1a1000"/><circle cx="89.5" cy="64.5" r="1.3" fill="white"/>
      <circle cx="109" cy="66" r="5.5" fill="white"/><circle cx="109" cy="66" r="3.5" fill="#1a1000"/><circle cx="107.5" cy="64.5" r="1.3" fill="white"/>
      <polygon points="100,72 111,76 100,80" fill="#886633"/>
      <line x1="93" y1="118" x2="87" y2="130" stroke="#aa8844" stroke-width="1.8"/>
      <line x1="107" y1="118" x2="113" y2="130" stroke="#aa8844" stroke-width="1.8"/>
      <line x1="87" y1="130" x2="79" y2="132" stroke="#aa8844" stroke-width="1.5"/>
      <line x1="87" y1="130" x2="88" y2="135" stroke="#aa8844" stroke-width="1.5"/>
      <line x1="113" y1="130" x2="121" y2="132" stroke="#aa8844" stroke-width="1.5"/>
      <line x1="113" y1="130" x2="112" y2="135" stroke="#aa8844" stroke-width="1.5"/>
    </svg>`,

    // 15 Yellowhammer
    15: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="50" ry="6" fill="#00000018"/>
      <rect x="52" y="120" width="96" height="11" rx="5" fill="#aa8800"/>
      <ellipse cx="100" cy="111" rx="18" ry="9" fill="#887700" transform="rotate(8,100,111)"/>
      <ellipse cx="100" cy="96" rx="28" ry="26" fill="#aa8800"/>
      <ellipse cx="84" cy="100" rx="14" ry="11" fill="#887700" transform="rotate(-7,84,100)"/>
      <ellipse cx="116" cy="100" rx="14" ry="11" fill="#887700" transform="rotate(7,116,100)"/>
      <ellipse cx="100" cy="94" rx="20" ry="17" fill="#ffee00"/>
      <ellipse cx="96" cy="88" rx="8" ry="6" fill="#ffff88" opacity="0.4"/>
      <circle cx="100" cy="65" r="23" fill="#ffee00"/>
      <ellipse cx="100" cy="60" rx="20" ry="9" fill="#ddcc00"/>
      <ellipse cx="100" cy="57" rx="12" ry="5" fill="#aa9900"/>
      <circle cx="91" cy="64" r="6" fill="white"/><circle cx="91" cy="64" r="4" fill="#1a1a00"/><circle cx="89.5" cy="62.5" r="1.4" fill="white"/>
      <circle cx="109" cy="64" r="6" fill="white"/><circle cx="109" cy="64" r="4" fill="#1a1a00"/><circle cx="107.5" cy="62.5" r="1.4" fill="white"/>
      <polygon points="100,71 112,75 100,79" fill="#666644"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#aa8800" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#aa8800" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#aa8800" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#aa8800" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#aa8800" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#aa8800" stroke-width="1.5"/>
    </svg>`,

    // 16 Pheasant
    16: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="90" cy="152" rx="65" ry="7" fill="#00000018"/>
      <ellipse cx="140" cy="110" rx="10" ry="40" fill="#cc7733" transform="rotate(-30,140,110)"/>
      <ellipse cx="90" cy="100" rx="35" ry="28" fill="#cc5500"/>
      <ellipse cx="72" cy="103" rx="17" ry="14" fill="#aa3300" transform="rotate(-8,72,103)"/>
      <ellipse cx="108" cy="103" rx="17" ry="14" fill="#aa3300" transform="rotate(8,108,103)"/>
      <ellipse cx="90" cy="97" rx="25" ry="21" fill="#dd7744"/>
      <circle cx="90" cy="68" r="22" fill="#005500"/>
      <ellipse cx="90" cy="65" rx="20" ry="9" fill="#007700"/>
      <ellipse cx="78" cy="63" rx="8" ry="6" fill="#cc0000"/>
      <ellipse cx="102" cy="63" rx="8" ry="6" fill="#cc0000"/>
      <circle cx="82" cy="65" r="5.5" fill="white"/><circle cx="82" cy="65" r="3.5" fill="#0a0a0a"/><circle cx="80.5" cy="63.5" r="1.3" fill="white"/>
      <circle cx="98" cy="65" r="5.5" fill="white"/><circle cx="98" cy="65" r="3.5" fill="#0a0a0a"/><circle cx="96.5" cy="63.5" r="1.3" fill="white"/>
      <polygon points="90,72 102,76 90,80" fill="#cc7722"/>
      <line x1="83" y1="124" x2="77" y2="136" stroke="#cc5500" stroke-width="2"/>
      <line x1="97" y1="124" x2="103" y2="136" stroke="#cc5500" stroke-width="2"/>
      <line x1="77" y1="136" x2="69" y2="138" stroke="#cc5500" stroke-width="1.8"/>
      <line x1="77" y1="136" x2="78" y2="141" stroke="#cc5500" stroke-width="1.8"/>
      <line x1="103" y1="136" x2="111" y2="138" stroke="#cc5500" stroke-width="1.8"/>
      <line x1="103" y1="136" x2="102" y2="141" stroke="#cc5500" stroke-width="1.8"/>
    </svg>`,

    // 17 Kingfisher
    17: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="150" rx="45" ry="6" fill="#00000018"/>
      <rect x="60" y="118" width="80" height="8" rx="4" fill="#6b4226" opacity="0.6"/>
      <ellipse cx="100" cy="108" rx="18" ry="9" fill="#0066aa" transform="rotate(5,100,108)"/>
      <ellipse cx="100" cy="95" rx="25" ry="23" fill="#0066aa"/>
      <ellipse cx="86" cy="98" rx="13" ry="10" fill="#0044aa" transform="rotate(-7,86,98)"/>
      <ellipse cx="114" cy="98" rx="13" ry="10" fill="#0044aa" transform="rotate(7,114,98)"/>
      <ellipse cx="100" cy="94" rx="18" ry="15" fill="#ee6600"/>
      <ellipse cx="96" cy="88" rx="7" ry="6" fill="#ff9944" opacity="0.4"/>
      <circle cx="100" cy="67" r="22" fill="#0066aa"/>
      <ellipse cx="100" cy="63" rx="20" ry="9" fill="#004488"/>
      <ellipse cx="88" cy="63" rx="9" ry="8" fill="#ee6600" opacity="0.7"/>
      <ellipse cx="112" cy="63" rx="9" ry="8" fill="#ee6600" opacity="0.7"/>
      <circle cx="91" cy="64" r="5.5" fill="white"/><circle cx="91" cy="64" r="3.5" fill="#0a0a20"/><circle cx="89.5" cy="62.5" r="1.3" fill="white"/>
      <circle cx="109" cy="64" r="5.5" fill="white"/><circle cx="109" cy="64" r="3.5" fill="#0a0a20"/><circle cx="107.5" cy="62.5" r="1.3" fill="white"/>
      <polygon points="100,71 125,75 100,79" fill="#333"/>
      <line x1="93" y1="119" x2="87" y2="131" stroke="#0066aa" stroke-width="1.8"/>
      <line x1="107" y1="119" x2="113" y2="131" stroke="#0066aa" stroke-width="1.8"/>
      <line x1="87" y1="131" x2="79" y2="133" stroke="#0066aa" stroke-width="1.5"/>
      <line x1="113" y1="131" x2="121" y2="133" stroke="#0066aa" stroke-width="1.5"/>
    </svg>`,

    // 18 Grey Heron
    18: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="155" rx="40" ry="6" fill="#00000018"/>
      <rect x="96" y="80" width="8" height="80" rx="4" fill="#778899"/>
      <ellipse cx="100" cy="95" rx="26" ry="18" fill="#aabbcc"/>
      <ellipse cx="86" cy="97" rx="14" ry="12" fill="#778899" transform="rotate(-5,86,97)"/>
      <ellipse cx="114" cy="97" rx="14" ry="12" fill="#778899" transform="rotate(5,114,97)"/>
      <ellipse cx="100" cy="93" rx="18" ry="14" fill="#eef0f4"/>
      <circle cx="100" cy="65" r="20" fill="#aabbcc"/>
      <ellipse cx="100" cy="60" rx="18" ry="8" fill="#eef0f4"/>
      <ellipse cx="100" cy="56" rx="6" ry="4" fill="#111"/>
      <ellipse cx="78" cy="64" rx="5" ry="3" fill="#111" transform="rotate(10,78,64)"/>
      <circle cx="91" cy="64" r="5.5" fill="white"/><circle cx="91" cy="64" r="3.5" fill="#1a1a1a"/><circle cx="89.5" cy="62.5" r="1.3" fill="white"/>
      <circle cx="109" cy="64" r="5.5" fill="white"/><circle cx="109" cy="64" r="3.5" fill="#1a1a1a"/><circle cx="107.5" cy="62.5" r="1.3" fill="white"/>
      <polygon points="100,71 125,74 100,77" fill="#ddaa00"/>
      <line x1="97" y1="155" x2="91" y2="166" stroke="#778899" stroke-width="3"/>
      <line x1="103" y1="155" x2="109" y2="166" stroke="#778899" stroke-width="3"/>
      <line x1="91" y1="166" x2="79" y2="164" stroke="#778899" stroke-width="2"/>
      <line x1="91" y1="166" x2="93" y2="172" stroke="#778899" stroke-width="2"/>
      <line x1="109" y1="166" x2="121" y2="164" stroke="#778899" stroke-width="2"/>
      <line x1="109" y1="166" x2="107" y2="172" stroke="#778899" stroke-width="2"/>
    </svg>`,

    // 19 Mallard
    19: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="95" cy="152" rx="60" ry="7" fill="#00000018"/>
      <ellipse cx="95" cy="104" rx="42" ry="26" fill="#226633"/>
      <ellipse cx="74" cy="105" rx="20" ry="17" fill="#115522" transform="rotate(-5,74,105)"/>
      <ellipse cx="116" cy="105" rx="20" ry="17" fill="#115522" transform="rotate(5,116,105)"/>
      <ellipse cx="95" cy="103" rx="30" ry="20" fill="#2a7a40"/>
      <ellipse cx="130" cy="108" rx="18" ry="10" fill="#cc8822"/>
      <circle cx="95" cy="73" r="24" fill="#226633"/>
      <ellipse cx="95" cy="70" rx="22" ry="11" fill="#1a5528"/>
      <ellipse cx="95" cy="67" rx="14" ry="7" fill="#338844"/>
      <circle cx="86" cy="71" r="6" fill="white"/><circle cx="86" cy="71" r="4" fill="#0a1a0a"/><circle cx="84.5" cy="69.5" r="1.4" fill="white"/>
      <circle cx="104" cy="71" r="6" fill="white"/><circle cx="104" cy="71" r="4" fill="#0a1a0a"/><circle cx="102.5" cy="69.5" r="1.4" fill="white"/>
      <ellipse cx="100" cy="62" rx="3" ry="6" fill="#ffcc00"/>
      <polygon points="95,79 110,83 95,87" fill="#ffaa00"/>
      <line x1="88" y1="126" x2="82" y2="138" stroke="#226633" stroke-width="2.5"/>
      <line x1="102" y1="126" x2="108" y2="138" stroke="#226633" stroke-width="2.5"/>
      <line x1="82" y1="138" x2="74" y2="140" stroke="#226633" stroke-width="2"/>
      <line x1="82" y1="138" x2="83" y2="143" stroke="#226633" stroke-width="2"/>
      <line x1="108" y1="138" x2="116" y2="140" stroke="#226633" stroke-width="2"/>
      <line x1="108" y1="138" x2="107" y2="143" stroke="#226633" stroke-width="2"/>
    </svg>`,

    // 20 Moorhen
    20: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="52" y="122" width="96" height="10" rx="5" fill="#223344"/>
      <ellipse cx="100" cy="113" rx="20" ry="9" fill="#1a2a33" transform="rotate(7,100,113)"/>
      <ellipse cx="100" cy="97" rx="30" ry="27" fill="#223344"/>
      <ellipse cx="84" cy="101" rx="15" ry="12" fill="#1a2a33" transform="rotate(-7,84,101)"/>
      <ellipse cx="116" cy="101" rx="15" ry="12" fill="#1a2a33" transform="rotate(7,116,101)"/>
      <ellipse cx="100" cy="95" rx="21" ry="18" fill="#334455"/>
      <ellipse cx="96" cy="89" rx="8" ry="7" fill="#445566" opacity="0.5"/>
      <circle cx="100" cy="65" r="23" fill="#223344"/>
      <circle cx="91" cy="64" r="6" fill="white"/><circle cx="91" cy="64" r="4" fill="#0a0a18"/><circle cx="89.5" cy="62.5" r="1.4" fill="white"/>
      <circle cx="109" cy="64" r="6" fill="white"/><circle cx="109" cy="64" r="4" fill="#0a0a18"/><circle cx="107.5" cy="62.5" r="1.4" fill="white"/>
      <rect x="94" y="55" width="12" height="9" rx="3" fill="#ee1100"/>
      <polygon points="100,71 113,75 100,79" fill="#eecc00"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#223344" stroke-width="1.8"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#223344" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#223344" stroke-width="1.5"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#223344" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#223344" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#223344" stroke-width="1.5"/>
    </svg>`,

    // 21 Reed Warbler
    21: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="150" rx="45" ry="6" fill="#00000018"/>
      <rect x="95" y="15" width="10" height="140" rx="5" fill="#7a8833" opacity="0.8"/>
      <ellipse cx="100" cy="97" rx="24" ry="21" fill="#aa8844"/>
      <ellipse cx="86" cy="100" rx="12" ry="10" fill="#886633" transform="rotate(-6,86,100)"/>
      <ellipse cx="114" cy="100" rx="12" ry="10" fill="#886633" transform="rotate(6,114,100)"/>
      <ellipse cx="100" cy="111" rx="10" ry="6" fill="#886633"/>
      <ellipse cx="100" cy="95" rx="17" ry="14" fill="#f8e8c0"/>
      <ellipse cx="97" cy="89" rx="7" ry="5" fill="#fff8e0" opacity="0.4"/>
      <circle cx="100" cy="70" r="19" fill="#aa8844"/>
      <ellipse cx="100" cy="67" rx="17" ry="7" fill="#886633"/>
      <ellipse cx="91" cy="67" rx="8" ry="7" fill="#f0ddb0"/>
      <ellipse cx="109" cy="67" rx="8" ry="7" fill="#f0ddb0"/>
      <circle cx="92" cy="68" r="5" fill="white"/><circle cx="92" cy="68" r="3" fill="#1a1000"/><circle cx="90.5" cy="66.5" r="1.2" fill="white"/>
      <circle cx="108" cy="68" r="5" fill="white"/><circle cx="108" cy="68" r="3" fill="#1a1000"/><circle cx="106.5" cy="66.5" r="1.2" fill="white"/>
      <polygon points="100,75 115,78 100,81" fill="#886633"/>
      <line x1="94" y1="116" x2="88" y2="128" stroke="#aa8844" stroke-width="1.8"/>
      <line x1="106" y1="116" x2="112" y2="128" stroke="#aa8844" stroke-width="1.8"/>
    </svg>`,

    // 22 Little Egret
    22: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="155" rx="42" ry="6" fill="#00000018"/>
      <rect x="96" y="85" width="8" height="75" rx="4" fill="#eeeee8"/>
      <ellipse cx="100" cy="100" rx="28" ry="22" fill="#f8f8f4"/>
      <ellipse cx="85" cy="102" rx="15" ry="12" fill="#eeeee8" transform="rotate(-5,85,102)"/>
      <ellipse cx="115" cy="102" rx="15" ry="12" fill="#eeeee8" transform="rotate(5,115,102)"/>
      <ellipse cx="100" cy="116" rx="10" ry="16" fill="#f8f8f4"/>
      <ellipse cx="92" cy="120" rx="5" ry="12" fill="#eeeee0" transform="rotate(-15,92,120)"/>
      <ellipse cx="108" cy="120" rx="5" ry="12" fill="#eeeee0" transform="rotate(15,108,120)"/>
      <circle cx="100" cy="66" r="21" fill="#f8f8f4"/>
      <ellipse cx="100" cy="62" rx="18" ry="8" fill="#eeeee8"/>
      <ellipse cx="100" cy="55" rx="4" ry="9" fill="#333"/>
      <circle cx="91" cy="64" r="5.5" fill="white"/><circle cx="91" cy="64" r="3.5" fill="#0a100a"/><circle cx="89.5" cy="62.5" r="1.3" fill="white"/>
      <circle cx="109" cy="64" r="5.5" fill="white"/><circle cx="109" cy="64" r="3.5" fill="#0a100a"/><circle cx="107.5" cy="62.5" r="1.3" fill="white"/>
      <polygon points="100,71 120,74 100,77" fill="#cccc00"/>
      <line x1="97" y1="155" x2="91" y2="165" stroke="#cccc00" stroke-width="3"/>
      <line x1="103" y1="155" x2="109" y2="165" stroke="#cccc00" stroke-width="3"/>
      <line x1="91" y1="165" x2="79" y2="163" stroke="#cccc00" stroke-width="2"/>
      <line x1="91" y1="165" x2="93" y2="170" stroke="#cccc00" stroke-width="2"/>
      <line x1="109" y1="165" x2="121" y2="163" stroke="#cccc00" stroke-width="2"/>
    </svg>`,

    // 23 Puffin
    23: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="48" ry="7" fill="#00000018"/>
      <rect x="56" y="120" width="88" height="10" rx="5" fill="#cc3300"/>
      <ellipse cx="100" cy="110" rx="22" ry="14" fill="#111"/>
      <ellipse cx="100" cy="97" rx="32" ry="30" fill="#111"/>
      <ellipse cx="82" cy="102" rx="16" ry="14" fill="#0a0a0a" transform="rotate(-8,82,102)"/>
      <ellipse cx="118" cy="102" rx="16" ry="14" fill="#0a0a0a" transform="rotate(8,118,102)"/>
      <ellipse cx="100" cy="95" rx="22" ry="20" fill="#f8f4f0"/>
      <ellipse cx="96" cy="88" rx="9" ry="8" fill="#fff8f4" opacity="0.5"/>
      <circle cx="100" cy="65" r="26" fill="#111"/>
      <ellipse cx="100" cy="62" rx="22" ry="12" fill="#f8f4f0"/>
      <circle cx="90" cy="63" r="7" fill="white"/><circle cx="90" cy="63" r="4.5" fill="#0a0a0a"/><circle cx="88" cy="61" r="1.8" fill="white"/>
      <circle cx="110" cy="63" r="7" fill="white"/><circle cx="110" cy="63" r="4.5" fill="#0a0a0a"/><circle cx="108" cy="61" r="1.8" fill="white"/>
      <ellipse cx="90" cy="56" rx="6" ry="3.5" fill="#ee6600" opacity="0.6"/>
      <ellipse cx="110" cy="56" rx="6" ry="3.5" fill="#ee6600" opacity="0.6"/>
      <path d="M88,72 Q100,68 112,72 L114,82 Q107,76 100,76 Q93,76 86,82 Z" fill="#ee6600"/>
      <rect x="97" y="74" width="6" height="8" rx="1" fill="#ffcc00"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#cc3300" stroke-width="2"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#cc3300" stroke-width="2"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#cc3300" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#cc3300" stroke-width="1.8"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#cc3300" stroke-width="1.8"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#cc3300" stroke-width="1.8"/>
    </svg>`,

    // 24 Gannet
    24: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="55" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="40" ry="24" fill="#f8f4ec"/>
      <ellipse cx="76" cy="102" rx="20" ry="14" fill="#eeeee4" transform="rotate(-10,76,102)"/>
      <ellipse cx="124" cy="102" rx="20" ry="14" fill="#eeeee4" transform="rotate(10,124,102)"/>
      <ellipse cx="100" cy="100" rx="28" ry="17" fill="#f8f8f0"/>
      <ellipse cx="65" cy="100" rx="10" ry="5" fill="#111" transform="rotate(-15,65,100)"/>
      <ellipse cx="135" cy="100" rx="10" ry="5" fill="#111" transform="rotate(15,135,100)"/>
      <circle cx="100" cy="68" r="22" fill="#ffee88"/>
      <ellipse cx="100" cy="65" rx="20" ry="9" fill="#ffe060"/>
      <circle cx="91" cy="66" r="6" fill="white"/><circle cx="91" cy="66" r="4" fill="#1a1a00"/><circle cx="89.5" cy="64.5" r="1.4" fill="white"/>
      <circle cx="109" cy="66" r="6" fill="white"/><circle cx="109" cy="66" r="4" fill="#1a1a00"/><circle cx="107.5" cy="64.5" r="1.4" fill="white"/>
      <ellipse cx="91" cy="58" rx="7" ry="3" fill="#4488cc" opacity="0.6"/>
      <ellipse cx="109" cy="58" rx="7" ry="3" fill="#4488cc" opacity="0.6"/>
      <polygon points="100,73 125,76 100,79" fill="#888877"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#888" stroke-width="2"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#888" stroke-width="2"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#888" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#888" stroke-width="1.8"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#888" stroke-width="1.8"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#888" stroke-width="1.8"/>
    </svg>`,

    // 25 Oystercatcher
    25: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <rect x="52" y="122" width="96" height="10" rx="5" fill="#cc2200"/>
      <ellipse cx="100" cy="112" rx="20" ry="10" fill="#111" transform="rotate(8,100,112)"/>
      <ellipse cx="100" cy="97" rx="30" ry="27" fill="#111"/>
      <ellipse cx="84" cy="101" rx="15" ry="12" fill="#0a0a0a" transform="rotate(-7,84,101)"/>
      <ellipse cx="116" cy="101" rx="15" ry="12" fill="#0a0a0a" transform="rotate(7,116,101)"/>
      <ellipse cx="100" cy="95" rx="21" ry="18" fill="#f8f4f0"/>
      <circle cx="100" cy="65" r="23" fill="#111"/>
      <circle cx="91" cy="63" r="7" fill="white"/><circle cx="91" cy="63" r="5" fill="#cc3300"/><circle cx="91" cy="63" r="3" fill="#0a0a0a"/><circle cx="89.5" cy="61.5" r="1.2" fill="white"/>
      <circle cx="109" cy="63" r="7" fill="white"/><circle cx="109" cy="63" r="5" fill="#cc3300"/><circle cx="109" cy="63" r="3" fill="#0a0a0a"/><circle cx="107.5" cy="61.5" r="1.2" fill="white"/>
      <polygon points="100,71 124,75 100,79" fill="#cc4400"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#cc2200" stroke-width="2"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#cc2200" stroke-width="2"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#cc2200" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#cc2200" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#cc2200" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#cc2200" stroke-width="1.8"/>
    </svg>`,

    // 26 Herring Gull
    26: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="58" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="44" ry="24" fill="#aabbcc"/>
      <ellipse cx="72" cy="102" rx="22" ry="14" fill="#9aabbc" transform="rotate(-10,72,102)"/>
      <ellipse cx="128" cy="102" rx="22" ry="14" fill="#9aabbc" transform="rotate(10,128,102)"/>
      <ellipse cx="100" cy="100" rx="30" ry="18" fill="#f8f8f8"/>
      <ellipse cx="62" cy="102" rx="12" ry="6" fill="#667788" transform="rotate(-12,62,102)"/>
      <ellipse cx="138" cy="102" rx="12" ry="6" fill="#667788" transform="rotate(12,138,102)"/>
      <circle cx="100" cy="66" r="23" fill="#f8f8f8"/>
      <ellipse cx="100" cy="62" rx="21" ry="10" fill="#eeeee8"/>
      <circle cx="91" cy="65" r="6" fill="white"/><circle cx="91" cy="65" r="4" fill="#1a1a1a"/><circle cx="89.5" cy="63.5" r="1.4" fill="white"/>
      <circle cx="109" cy="65" r="6" fill="white"/><circle cx="109" cy="65" r="4" fill="#1a1a1a"/><circle cx="107.5" cy="63.5" r="1.4" fill="white"/>
      <ellipse cx="91" cy="57" rx="6" ry="3" fill="#ffcc00" opacity="0.7"/>
      <ellipse cx="109" cy="57" rx="6" ry="3" fill="#ffcc00" opacity="0.7"/>
      <path d="M93,73 Q100,69 107,73 L110,80 Q100,76 90,80 Z" fill="#ffcc00"/>
      <circle cx="104" cy="77" r="2" fill="#cc2200"/>
      <line x1="93" y1="122" x2="87" y2="134" stroke="#aabbcc" stroke-width="2.5"/>
      <line x1="107" y1="122" x2="113" y2="134" stroke="#aabbcc" stroke-width="2.5"/>
      <line x1="87" y1="134" x2="79" y2="136" stroke="#aabbcc" stroke-width="2"/>
      <line x1="87" y1="134" x2="88" y2="139" stroke="#aabbcc" stroke-width="2"/>
      <line x1="113" y1="134" x2="121" y2="136" stroke="#aabbcc" stroke-width="2"/>
      <line x1="113" y1="134" x2="112" y2="139" stroke="#aabbcc" stroke-width="2"/>
    </svg>`,

    // 27 Turnstone
    27: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="150" rx="48" ry="6" fill="#00000018"/>
      <rect x="54" y="120" width="92" height="10" rx="5" fill="#cc7733"/>
      <ellipse cx="100" cy="111" rx="19" ry="9" fill="#aa5522" transform="rotate(8,100,111)"/>
      <ellipse cx="100" cy="97" rx="28" ry="25" fill="#cc7733"/>
      <ellipse cx="84" cy="100" rx="14" ry="11" fill="#aa5522" transform="rotate(-7,84,100)"/>
      <ellipse cx="116" cy="100" rx="14" ry="11" fill="#aa5522" transform="rotate(7,116,100)"/>
      <ellipse cx="100" cy="95" rx="20" ry="16" fill="#f0d0a0"/>
      <ellipse cx="96" cy="89" rx="8" ry="6" fill="#ffe8c0" opacity="0.4"/>
      <circle cx="100" cy="66" r="22" fill="#111"/>
      <ellipse cx="88" cy="63" rx="9" ry="8" fill="white"/>
      <ellipse cx="112" cy="63" rx="9" ry="8" fill="white"/>
      <ellipse cx="100" cy="60" rx="8" ry="5" fill="#cc7733"/>
      <circle cx="91" cy="65" r="6" fill="white"/><circle cx="91" cy="65" r="3.8" fill="#0a0a0a"/><circle cx="89.5" cy="63.5" r="1.4" fill="white"/>
      <circle cx="109" cy="65" r="6" fill="white"/><circle cx="109" cy="65" r="3.8" fill="#0a0a0a"/><circle cx="107.5" cy="63.5" r="1.4" fill="white"/>
      <polygon points="100,72 112,76 100,80" fill="#886644"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#cc7733" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#cc7733" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#cc7733" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#cc7733" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#cc7733" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#cc7733" stroke-width="1.5"/>
    </svg>`,

    // 28 Red Grouse
    28: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="55" ry="7" fill="#00000018"/>
      <rect x="48" y="122" width="104" height="10" rx="5" fill="#882222"/>
      <ellipse cx="100" cy="113" rx="24" ry="11" fill="#661818" transform="rotate(10,100,113)"/>
      <ellipse cx="100" cy="97" rx="34" ry="28" fill="#882222"/>
      <ellipse cx="82" cy="101" rx="18" ry="14" fill="#661818" transform="rotate(-8,82,101)"/>
      <ellipse cx="118" cy="101" rx="18" ry="14" fill="#661818" transform="rotate(8,118,101)"/>
      <ellipse cx="100" cy="95" rx="24" ry="20" fill="#aa4444"/>
      <ellipse cx="96" cy="88" rx="9" ry="8" fill="#cc6666" opacity="0.4"/>
      <circle cx="100" cy="64" r="25" fill="#882222"/>
      <ellipse cx="100" cy="58" rx="18" ry="6" fill="#cc0000"/>
      <ellipse cx="100" cy="56" rx="12" ry="4" fill="#ee2200"/>
      <circle cx="91" cy="64" r="6.5" fill="white"/><circle cx="91" cy="64" r="4" fill="#1a0000"/><circle cx="89.5" cy="62.5" r="1.5" fill="white"/>
      <circle cx="109" cy="64" r="6.5" fill="white"/><circle cx="109" cy="64" r="4" fill="#1a0000"/><circle cx="107.5" cy="62.5" r="1.5" fill="white"/>
      <polygon points="100,71 112,75 100,79" fill="#664433"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#882222" stroke-width="2"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#882222" stroke-width="2"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#882222" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#882222" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#882222" stroke-width="1.8"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#882222" stroke-width="1.8"/>
    </svg>`,

    // 29 Golden Eagle
    29: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="153" rx="60" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="55" ry="26" fill="#664400"/>
      <ellipse cx="66" cy="103" rx="28" ry="16" fill="#553300" transform="rotate(-12,66,103)"/>
      <ellipse cx="134" cy="103" rx="28" ry="16" fill="#553300" transform="rotate(12,134,103)"/>
      <ellipse cx="100" cy="99" rx="38" ry="20" fill="#886633"/>
      <ellipse cx="35" cy="104" rx="12" ry="6" fill="#111" transform="rotate(-18,35,104)"/>
      <ellipse cx="165" cy="104" rx="12" ry="6" fill="#111" transform="rotate(18,165,104)"/>
      <circle cx="100" cy="65" r="26" fill="#886633"/>
      <ellipse cx="100" cy="60" rx="24" ry="11" fill="#cc9900"/>
      <circle cx="89" cy="64" r="7" fill="white"/><circle cx="89" cy="64" r="4.5" fill="#1a1000"/><circle cx="87" cy="62" r="1.8" fill="white"/>
      <circle cx="111" cy="64" r="7" fill="white"/><circle cx="111" cy="64" r="4.5" fill="#1a1000"/><circle cx="109" cy="62" r="1.8" fill="white"/>
      <ellipse cx="89" cy="55" rx="7" ry="3.5" fill="#886633" transform="rotate(-10,89,55)"/>
      <ellipse cx="111" cy="55" rx="7" ry="3.5" fill="#886633" transform="rotate(10,111,55)"/>
      <path d="M90,73 Q100,68 110,73 L112,82 Q100,76 88,82 Z" fill="#cc8800"/>
      <line x1="90" y1="122" x2="84" y2="136" stroke="#664400" stroke-width="3"/>
      <line x1="110" y1="122" x2="116" y2="136" stroke="#664400" stroke-width="3"/>
      <line x1="84" y1="136" x2="74" y2="134" stroke="#664400" stroke-width="2.5"/>
      <line x1="84" y1="136" x2="86" y2="142" stroke="#664400" stroke-width="2.5"/>
      <line x1="116" y1="136" x2="126" y2="134" stroke="#664400" stroke-width="2.5"/>
      <line x1="116" y1="136" x2="114" y2="142" stroke="#664400" stroke-width="2.5"/>
    </svg>`,

    // 30 Curlew
    30: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="55" ry="7" fill="#00000018"/>
      <rect x="50" y="122" width="100" height="10" rx="5" fill="#998855"/>
      <ellipse cx="100" cy="112" rx="22" ry="10" fill="#776633" transform="rotate(8,100,112)"/>
      <ellipse cx="100" cy="97" rx="32" ry="28" fill="#998855"/>
      <ellipse cx="82" cy="101" rx="17" ry="13" fill="#776633" transform="rotate(-7,82,101)"/>
      <ellipse cx="118" cy="101" rx="17" ry="13" fill="#776633" transform="rotate(7,118,101)"/>
      <ellipse cx="100" cy="95" rx="23" ry="20" fill="#f0e0b8"/>
      <ellipse cx="96" cy="89" rx="9" ry="7" fill="#fff8d8" opacity="0.4"/>
      <circle cx="100" cy="66" r="23" fill="#998855"/>
      <ellipse cx="100" cy="62" rx="21" ry="9" fill="#776633"/>
      <ellipse cx="100" cy="59" rx="12" ry="5" fill="#554422"/>
      <circle cx="91" cy="64" r="6" fill="white"/><circle cx="91" cy="64" r="4" fill="#1a1000"/><circle cx="89.5" cy="62.5" r="1.4" fill="white"/>
      <circle cx="109" cy="64" r="6" fill="white"/><circle cx="109" cy="64" r="4" fill="#1a1000"/><circle cx="107.5" cy="62.5" r="1.4" fill="white"/>
      <path d="M100,72 Q115,68 132,72 Q138,76 136,80 Q120,75 100,76Z" fill="#554422"/>
      <line x1="93" y1="123" x2="87" y2="135" stroke="#998855" stroke-width="1.8"/>
      <line x1="107" y1="123" x2="113" y2="135" stroke="#998855" stroke-width="1.8"/>
      <line x1="87" y1="135" x2="79" y2="137" stroke="#998855" stroke-width="1.5"/>
      <line x1="87" y1="135" x2="88" y2="140" stroke="#998855" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="121" y2="137" stroke="#998855" stroke-width="1.5"/>
      <line x1="113" y1="135" x2="112" y2="140" stroke="#998855" stroke-width="1.5"/>
    </svg>`
  };
  return svgs[id] || svgs[1];
}

// ── NEW BIRDS 31–39 ──────────────────────────────────────────────────────
(function() {
  const _orig = getBirdSVG;
  const _new = {

    // 31 Wren
    31: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="38" ry="5" fill="#00000018"/>
      <rect x="62" y="120" width="76" height="9" rx="4" fill="#7a5530"/>
      <ellipse cx="72" cy="116" rx="7" ry="4" fill="#3a8030" transform="rotate(-15,72,116)"/>
      <ellipse cx="130" cy="115" rx="7" ry="4" fill="#3a8030" transform="rotate(12,130,115)"/>
      <ellipse cx="100" cy="112" rx="13" ry="7" fill="#7a5530" transform="rotate(30,100,112)"/>
      <ellipse cx="100" cy="98" rx="22" ry="20" fill="#aa7744"/>
      <ellipse cx="87" cy="101" rx="11" ry="9" fill="#886633" transform="rotate(-7,87,101)"/>
      <ellipse cx="113" cy="101" rx="11" ry="9" fill="#886633" transform="rotate(7,113,101)"/>
      <ellipse cx="100" cy="96" rx="16" ry="14" fill="#f0d8a8"/>
      <ellipse cx="97" cy="90" rx="6" ry="5" fill="#fff0c8" opacity="0.4"/>
      <circle cx="100" cy="70" r="18" fill="#aa7744"/>
      <ellipse cx="100" cy="67" rx="16" ry="7" fill="#886633"/>
      <ellipse cx="91" cy="67" rx="7" ry="6" fill="#ddc898"/>
      <ellipse cx="109" cy="67" rx="7" ry="6" fill="#ddc898"/>
      <circle cx="92" cy="69" r="5" fill="white"/><circle cx="92" cy="69" r="3" fill="#1a1000"/><circle cx="90.5" cy="67.5" r="1.1" fill="white"/>
      <circle cx="108" cy="69" r="5" fill="white"/><circle cx="108" cy="69" r="3" fill="#1a1000"/><circle cx="106.5" cy="67.5" r="1.1" fill="white"/>
      <polygon points="100,75 113,78 100,81" fill="#886633"/>
      <line x1="94" y1="120" x2="88" y2="131" stroke="#7a5530" stroke-width="1.5"/>
      <line x1="106" y1="120" x2="112" y2="131" stroke="#7a5530" stroke-width="1.5"/>
      <line x1="88" y1="131" x2="81" y2="133" stroke="#7a5530" stroke-width="1.3"/>
      <line x1="88" y1="131" x2="89" y2="136" stroke="#7a5530" stroke-width="1.3"/>
      <line x1="112" y1="131" x2="119" y2="133" stroke="#7a5530" stroke-width="1.3"/>
      <line x1="112" y1="131" x2="111" y2="136" stroke="#7a5530" stroke-width="1.3"/>
    </svg>`; },

    // 32 Jackdaw
    32: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="50" ry="6" fill="#00000018"/>
      <rect x="52" y="120" width="96" height="11" rx="5" fill="#334455"/>
      <ellipse cx="100" cy="111" rx="19" ry="9" fill="#223344" transform="rotate(8,100,111)"/>
      <ellipse cx="100" cy="96" rx="28" ry="26" fill="#334455"/>
      <ellipse cx="84" cy="100" rx="14" ry="11" fill="#223344" transform="rotate(-7,84,100)"/>
      <ellipse cx="116" cy="100" rx="14" ry="11" fill="#223344" transform="rotate(7,116,100)"/>
      <ellipse cx="100" cy="94" rx="20" ry="17" fill="#667788"/>
      <ellipse cx="96" cy="88" rx="8" ry="6" fill="#8899aa" opacity="0.4"/>
      <circle cx="100" cy="65" r="23" fill="#223344"/>
      <ellipse cx="100" cy="60" rx="20" ry="10" fill="#445566"/>
      <ellipse cx="88" cy="62" rx="10" ry="9" fill="#99aabb"/>
      <ellipse cx="112" cy="62" rx="10" ry="9" fill="#99aabb"/>
      <circle cx="91" cy="64" r="6.5" fill="white"/><circle cx="91" cy="64" r="4.5" fill="#88bbdd"/><circle cx="91" cy="64" r="2.5" fill="#1a2a3a"/><circle cx="89.5" cy="62.5" r="1" fill="white"/>
      <circle cx="109" cy="64" r="6.5" fill="white"/><circle cx="109" cy="64" r="4.5" fill="#88bbdd"/><circle cx="109" cy="64" r="2.5" fill="#1a2a3a"/><circle cx="107.5" cy="62.5" r="1" fill="white"/>
      <polygon points="100,71 113,75 100,79" fill="#334455"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#334455" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#334455" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#334455" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#334455" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#334455" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#334455" stroke-width="1.5"/>
    </svg>`; },

    // 33 Coal Tit
    33: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="46" ry="6" fill="#00000018"/>
      <rect x="55" y="120" width="90" height="10" rx="5" fill="#554433"/>
      <ellipse cx="100" cy="111" rx="17" ry="8" fill="#443322" transform="rotate(7,100,111)"/>
      <ellipse cx="100" cy="96" rx="25" ry="24" fill="#554433"/>
      <ellipse cx="86" cy="100" rx="13" ry="10" fill="#443322" transform="rotate(-7,86,100)"/>
      <ellipse cx="114" cy="100" rx="13" ry="10" fill="#443322" transform="rotate(7,114,100)"/>
      <ellipse cx="100" cy="94" rx="18" ry="16" fill="#f0e8d0"/>
      <ellipse cx="96" cy="88" rx="7" ry="5" fill="#fffce8" opacity="0.4"/>
      <circle cx="100" cy="65" r="21" fill="#111"/>
      <ellipse cx="88" cy="62" rx="9" ry="8" fill="white"/>
      <ellipse cx="112" cy="62" rx="9" ry="8" fill="white"/>
      <ellipse cx="100" cy="58" rx="7" ry="5" fill="#fff" opacity="0.8"/>
      <circle cx="91" cy="64" r="5.5" fill="white"/><circle cx="91" cy="64" r="3.5" fill="#111"/><circle cx="89.5" cy="62.5" r="1.2" fill="white"/>
      <circle cx="109" cy="64" r="5.5" fill="white"/><circle cx="109" cy="64" r="3.5" fill="#111"/><circle cx="107.5" cy="62.5" r="1.2" fill="white"/>
      <polygon points="100,71 111,74 100,77" fill="#443322"/>
      <line x1="93" y1="121" x2="87" y2="133" stroke="#554433" stroke-width="1.8"/>
      <line x1="107" y1="121" x2="113" y2="133" stroke="#554433" stroke-width="1.8"/>
      <line x1="87" y1="133" x2="79" y2="135" stroke="#554433" stroke-width="1.5"/>
      <line x1="87" y1="133" x2="88" y2="138" stroke="#554433" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="121" y2="135" stroke="#554433" stroke-width="1.5"/>
      <line x1="113" y1="133" x2="112" y2="138" stroke="#554433" stroke-width="1.5"/>
    </svg>`; },

    // 34 Swallow
    34: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="95" cy="148" rx="45" ry="5" fill="#00000018"/>
      <rect x="58" y="118" width="78" height="9" rx="4" fill="#224488"/>
      <ellipse cx="140" cy="120" rx="20" ry="5" fill="#224488" transform="rotate(-25,140,120)"/>
      <ellipse cx="55" cy="122" rx="20" ry="5" fill="#224488" transform="rotate(20,55,122)"/>
      <ellipse cx="97" cy="98" rx="26" ry="22" fill="#224488"/>
      <ellipse cx="83" cy="101" rx="13" ry="10" fill="#1a3366" transform="rotate(-7,83,101)"/>
      <ellipse cx="111" cy="101" rx="13" ry="10" fill="#1a3366" transform="rotate(7,111,101)"/>
      <ellipse cx="97" cy="96" rx="19" ry="16" fill="#f0f0f8"/>
      <ellipse cx="93" cy="90" rx="7" ry="6" fill="#fff" opacity="0.4"/>
      <ellipse cx="97" cy="103" rx="10" ry="7" fill="#cc3311"/>
      <circle cx="97" cy="68" r="21" fill="#224488"/>
      <ellipse cx="97" cy="64" rx="19" ry="9" fill="#1a3366"/>
      <ellipse cx="85" cy="64" rx="8" ry="7" fill="#cc3311"/>
      <circle cx="89" cy="66" r="5.5" fill="white"/><circle cx="89" cy="66" r="3.5" fill="#0a0a18"/><circle cx="87.5" cy="64.5" r="1.2" fill="white"/>
      <circle cx="105" cy="66" r="5.5" fill="white"/><circle cx="105" cy="66" r="3.5" fill="#0a0a18"/><circle cx="103.5" cy="64.5" r="1.2" fill="white"/>
      <polygon points="97,73 109,76 97,79" fill="#1a3366"/>
      <line x1="90" y1="119" x2="84" y2="131" stroke="#224488" stroke-width="1.8"/>
      <line x1="104" y1="119" x2="110" y2="131" stroke="#224488" stroke-width="1.8"/>
      <line x1="84" y1="131" x2="76" y2="133" stroke="#224488" stroke-width="1.5"/>
      <line x1="110" y1="131" x2="118" y2="133" stroke="#224488" stroke-width="1.5"/>
    </svg>`; },

    // 35 Red Kite
    35: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="153" rx="62" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="58" ry="22" fill="#cc5522"/>
      <ellipse cx="62" cy="103" rx="30" ry="13" fill="#aa3311" transform="rotate(-14,62,103)"/>
      <ellipse cx="138" cy="103" rx="30" ry="13" fill="#aa3311" transform="rotate(14,138,103)"/>
      <ellipse cx="100" cy="99" rx="40" ry="16" fill="#dd6633"/>
      <ellipse cx="30" cy="106" rx="13" ry="6" fill="#222" transform="rotate(-20,30,106)"/>
      <ellipse cx="170" cy="106" rx="13" ry="6" fill="#222" transform="rotate(20,170,106)"/>
      <ellipse cx="100" cy="115" rx="14" ry="22" fill="#cc5522" transform="rotate(0,100,115)"/>
      <ellipse cx="93" cy="130" rx="7" ry="12" fill="#aa3311" transform="rotate(-10,93,130)"/>
      <ellipse cx="107" cy="130" rx="7" ry="12" fill="#aa3311" transform="rotate(10,107,130)"/>
      <circle cx="100" cy="67" r="22" fill="#ffdd88"/>
      <ellipse cx="100" cy="63" rx="20" ry="9" fill="#eec866"/>
      <circle cx="90" cy="65" r="6" fill="white"/><circle cx="90" cy="65" r="4" fill="#1a1000"/><circle cx="88.5" cy="63.5" r="1.4" fill="white"/>
      <circle cx="110" cy="65" r="6" fill="white"/><circle cx="110" cy="65" r="4" fill="#1a1000"/><circle cx="108.5" cy="63.5" r="1.4" fill="white"/>
      <ellipse cx="90" cy="56" rx="7" ry="3.5" fill="#cc5522" transform="rotate(-10,90,56)"/>
      <ellipse cx="110" cy="56" rx="7" ry="3.5" fill="#cc5522" transform="rotate(10,110,56)"/>
      <path d="M90,73 Q100,68 110,73 L112,81 Q100,76 88,81 Z" fill="#ddaa00"/>
      <line x1="93" y1="122" x2="87" y2="136" stroke="#cc5522" stroke-width="2.5"/>
      <line x1="107" y1="122" x2="113" y2="136" stroke="#cc5522" stroke-width="2.5"/>
      <line x1="87" y1="136" x2="79" y2="134" stroke="#cc5522" stroke-width="2"/>
      <line x1="87" y1="136" x2="89" y2="142" stroke="#cc5522" stroke-width="2"/>
      <line x1="113" y1="136" x2="121" y2="134" stroke="#cc5522" stroke-width="2"/>
      <line x1="113" y1="136" x2="111" y2="142" stroke="#cc5522" stroke-width="2"/>
    </svg>`; },

    // 36 Buzzard
    36: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="153" rx="58" ry="7" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="52" ry="24" fill="#886633"/>
      <ellipse cx="65" cy="103" rx="26" ry="15" fill="#664422" transform="rotate(-12,65,103)"/>
      <ellipse cx="135" cy="103" rx="26" ry="15" fill="#664422" transform="rotate(12,135,103)"/>
      <ellipse cx="100" cy="100" rx="36" ry="18" fill="#aa8844"/>
      <ellipse cx="36" cy="106" rx="12" ry="6" fill="#333" transform="rotate(-18,36,106)"/>
      <ellipse cx="164" cy="106" rx="12" ry="6" fill="#333" transform="rotate(18,164,106)"/>
      <ellipse cx="100" cy="118" rx="12" ry="18" fill="#886633"/>
      <circle cx="100" cy="67" r="24" fill="#886633"/>
      <ellipse cx="100" cy="63" rx="22" ry="10" fill="#aa8844"/>
      <ellipse cx="100" cy="59" rx="14" ry="6" fill="#f0e0c0"/>
      <circle cx="90" cy="65" r="6.5" fill="white"/><circle cx="90" cy="65" r="4" fill="#1a1000"/><circle cx="88.5" cy="63.5" r="1.5" fill="white"/>
      <circle cx="110" cy="65" r="6.5" fill="white"/><circle cx="110" cy="65" r="4" fill="#1a1000"/><circle cx="108.5" cy="63.5" r="1.5" fill="white"/>
      <ellipse cx="90" cy="56" rx="7" ry="3.5" fill="#664422" transform="rotate(-10,90,56)"/>
      <ellipse cx="110" cy="56" rx="7" ry="3.5" fill="#664422" transform="rotate(10,110,56)"/>
      <path d="M91,73 Q100,69 109,73 L111,81 Q100,76 89,81 Z" fill="#cc9922"/>
      <line x1="93" y1="133" x2="87" y2="147" stroke="#886633" stroke-width="3"/>
      <line x1="107" y1="133" x2="113" y2="147" stroke="#886633" stroke-width="3"/>
      <line x1="87" y1="147" x2="77" y2="145" stroke="#886633" stroke-width="2.5"/>
      <line x1="87" y1="147" x2="89" y2="153" stroke="#886633" stroke-width="2.5"/>
      <line x1="113" y1="147" x2="123" y2="145" stroke="#886633" stroke-width="2.5"/>
      <line x1="113" y1="147" x2="111" y2="153" stroke="#886633" stroke-width="2.5"/>
    </svg>`; },

    // 37 Mute Swan
    37: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="95" cy="148" rx="65" ry="8" fill="#00000018"/>
      <ellipse cx="90" cy="132" rx="50" ry="14" fill="#e8f0f8"/>
      <ellipse cx="65" cy="130" rx="25" ry="12" fill="#f0f4fc" transform="rotate(-10,65,130)"/>
      <ellipse cx="115" cy="130" rx="25" ry="12" fill="#f0f4fc" transform="rotate(10,115,130)"/>
      <ellipse cx="90" cy="128" rx="35" ry="16" fill="#f8faff"/>
      <ellipse cx="90" cy="118" rx="20" ry="22" fill="#f8faff"/>
      <ellipse cx="83" cy="108" rx="10" ry="18" fill="#f0f4fc" transform="rotate(-15,83,108)"/>
      <circle cx="90" cy="80" r="20" fill="#f8faff"/>
      <ellipse cx="90" cy="76" rx="18" ry="9" fill="#f0f4fc"/>
      <circle cx="82" cy="79" r="5.5" fill="white"/><circle cx="82" cy="79" r="3.5" fill="#0a1010"/><circle cx="80.5" cy="77.5" r="1.3" fill="white"/>
      <circle cx="98" cy="79" r="5.5" fill="white"/><circle cx="98" cy="79" r="3.5" fill="#0a1010"/><circle cx="96.5" cy="77.5" r="1.3" fill="white"/>
      <rect x="82" y="70" width="16" height="7" rx="3" fill="#ee6600"/>
      <rect x="83" y="71" width="4" height="5" rx="2" fill="#111"/>
      <path d="M80,95 Q75,105 68,115" fill="none" stroke="#f0f4fc" stroke-width="8" stroke-linecap="round"/>
      <path d="M80,95 Q75,105 68,115" fill="none" stroke="#f8faff" stroke-width="5" stroke-linecap="round"/>
      <line x1="84" y1="143" x2="78" y2="153" stroke="#ee8800" stroke-width="3"/>
      <line x1="96" y1="143" x2="102" y2="153" stroke="#ee8800" stroke-width="3"/>
      <line x1="78" y1="153" x2="66" y2="151" stroke="#ee8800" stroke-width="2.5"/>
      <line x1="78" y1="153" x2="80" y2="158" stroke="#ee8800" stroke-width="2.5"/>
      <line x1="102" y1="153" x2="114" y2="151" stroke="#ee8800" stroke-width="2.5"/>
    </svg>`; },

    // 38 Cormorant
    38: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="153" rx="52" ry="7" fill="#00000018"/>
      <ellipse cx="95" cy="102" rx="32" ry="26" fill="#112233"/>
      <ellipse cx="78" cy="104" rx="17" ry="14" fill="#0a1a28" transform="rotate(-7,78,104)"/>
      <ellipse cx="112" cy="104" rx="17" ry="14" fill="#0a1a28" transform="rotate(7,112,104)"/>
      <ellipse cx="64" cy="96" rx="18" ry="8" fill="#112233" transform="rotate(-30,64,96)"/>
      <ellipse cx="126" cy="96" rx="18" ry="8" fill="#112233" transform="rotate(30,126,96)"/>
      <ellipse cx="95" cy="99" rx="23" ry="20" fill="#1a3344"/>
      <ellipse cx="91" cy="93" rx="9" ry="8" fill="#223a4a" opacity="0.6"/>
      <ellipse cx="95" cy="118" rx="14" ry="10" fill="#112233"/>
      <circle cx="95" cy="68" r="22" fill="#112233"/>
      <ellipse cx="95" cy="64" rx="20" ry="9" fill="#1a3344"/>
      <circle cx="86" cy="66" r="6" fill="white"/><circle cx="86" cy="66" r="4" fill="#0a0a14"/><circle cx="84.5" cy="64.5" r="1.4" fill="white"/>
      <circle cx="104" cy="66" r="6" fill="white"/><circle cx="104" cy="66" r="4" fill="#0a0a14"/><circle cx="102.5" cy="64.5" r="1.4" fill="white"/>
      <ellipse cx="86" cy="57" rx="7" ry="3.5" fill="#ee8800" opacity="0.8"/>
      <ellipse cx="104" cy="57" rx="7" ry="3.5" fill="#ee8800" opacity="0.8"/>
      <path d="M86,73 Q95,69 104,73 L107,82 Q95,76 83,82 Z" fill="#ee8800"/>
      <line x1="88" y1="125" x2="82" y2="137" stroke="#112233" stroke-width="2.5"/>
      <line x1="102" y1="125" x2="108" y2="137" stroke="#112233" stroke-width="2.5"/>
      <line x1="82" y1="137" x2="74" y2="139" stroke="#112233" stroke-width="2"/>
      <line x1="82" y1="137" x2="83" y2="142" stroke="#112233" stroke-width="2"/>
      <line x1="108" y1="137" x2="116" y2="139" stroke="#112233" stroke-width="2"/>
      <line x1="108" y1="137" x2="107" y2="142" stroke="#112233" stroke-width="2"/>
    </svg>`; },

    // 39 Merlin
    39: function(bg) { return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="${bg}"/>
      <ellipse cx="100" cy="152" rx="52" ry="6" fill="#00000018"/>
      <ellipse cx="100" cy="100" rx="50" ry="21" fill="#446688"/>
      <ellipse cx="65" cy="103" rx="25" ry="13" fill="#335577" transform="rotate(-12,65,103)"/>
      <ellipse cx="135" cy="103" rx="25" ry="13" fill="#335577" transform="rotate(12,135,103)"/>
      <ellipse cx="100" cy="100" rx="34" ry="16" fill="#5577aa"/>
      <ellipse cx="38" cy="106" rx="11" ry="5" fill="#222" transform="rotate(-18,38,106)"/>
      <ellipse cx="162" cy="106" rx="11" ry="5" fill="#222" transform="rotate(18,162,106)"/>
      <ellipse cx="100" cy="116" rx="11" ry="18" fill="#f0d8a8"/>
      <ellipse cx="95" cy="122" rx="6" ry="10" fill="#e8cc90" transform="rotate(-5,95,122)"/>
      <circle cx="100" cy="68" r="22" fill="#446688"/>
      <ellipse cx="100" cy="64" rx="20" ry="9" fill="#335577"/>
      <ellipse cx="100" cy="60" rx="12" ry="5" fill="#f0d8a8"/>
      <ellipse cx="88" cy="63" rx="9" ry="8" fill="#f0d8a8" opacity="0.7"/>
      <circle cx="91" cy="65" r="6" fill="white"/><circle cx="91" cy="65" r="4" fill="#1a1a00"/><circle cx="89.5" cy="63.5" r="1.4" fill="white"/>
      <circle cx="109" cy="65" r="6" fill="white"/><circle cx="109" cy="65" r="4" fill="#1a1a00"/><circle cx="107.5" cy="63.5" r="1.4" fill="white"/>
      <ellipse cx="91" cy="56" rx="6" ry="3" fill="#cc4400" opacity="0.7"/>
      <ellipse cx="109" cy="56" rx="6" ry="3" fill="#cc4400" opacity="0.7"/>
      <path d="M91,73 Q100,69 109,73 L111,80 Q100,75 89,80 Z" fill="#ddaa00"/>
      <line x1="93" y1="131" x2="87" y2="143" stroke="#446688" stroke-width="2.5"/>
      <line x1="107" y1="131" x2="113" y2="143" stroke="#446688" stroke-width="2.5"/>
      <line x1="87" y1="143" x2="79" y2="141" stroke="#446688" stroke-width="2"/>
      <line x1="87" y1="143" x2="89" y2="149" stroke="#446688" stroke-width="2"/>
      <line x1="113" y1="143" x2="121" y2="141" stroke="#446688" stroke-width="2"/>
      <line x1="113" y1="143" x2="111" y2="149" stroke="#446688" stroke-width="2"/>
    </svg>`; },

  };

  window.getBirdSVG = function(id, bg) {
    if (_new[id]) return _new[id](bg || "#c8e8a8");
    return _orig(id, bg);
  };
})();
