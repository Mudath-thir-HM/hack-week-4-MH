/* DAW Instructors — data.js
 * All content lives here; nothing is fetched at runtime.
 * Source: DAW chronicles of Directors, SC CIs, JC CIs and nominal roll of DS (as at 26 Oct). Remarks column disregarded per client instruction.
 * DIR 12 JO Sunmonu: source reads '04 Dec 21'; corrected to 04 Dec 91 (sequence).
 * DIR 34 A Audu: source reads '10 Jul 21'; corrected to 10 Jul 23 (sequence).
 * JC CI 36 AT Mohammed, 39 JO Mamman, 41 TA Ezekiel: source held Excel serials 44403/45027/45712, converted to 26 Jul 21 / 11 Apr 23 / 24 Feb 25.
 * DS entries with Excel serial tenures (Chukwu, Daramola, Wonah, Masiyer, Adesanya, Baba, Solomon, Adamu, Idoko) converted; end date not recorded, shown as 'To date'.
 * DS 376 AO Idoko: source remark 'Yet to Complete'.
 * All other names, ranks and tenures are as recorded in the source rolls, including apparent anomalies.
 */
const DATA = {
 "meta": {
  "title": "Instructors",
  "subtitle": "Department of Air Warfare · Armed Forces Command and Staff College, Jaji",
  "generated": "2026-11-10",
  "notes": [
   "Source: DAW chronicles of Directors, SC CIs, JC CIs and nominal roll of DS (as at 26 Oct). Remarks column disregarded per client instruction.",
   "DIR 12 JO Sunmonu: source reads '04 Dec 21'; corrected to 04 Dec 91 (sequence).",
   "DIR 34 A Audu: source reads '10 Jul 21'; corrected to 10 Jul 23 (sequence).",
   "JC CI 36 AT Mohammed, 39 JO Mamman, 41 TA Ezekiel: source held Excel serials 44403/45027/45712, converted to 26 Jul 21 / 11 Apr 23 / 24 Feb 25.",
   "DS entries with Excel serial tenures (Chukwu, Daramola, Wonah, Masiyer, Adesanya, Baba, Solomon, Adamu, Idoko) converted; end date not recorded, shown as 'To date'.",
   "DS 376 AO Idoko: source remark 'Yet to Complete'.",
   "All other names, ranks and tenures are as recorded in the source rolls, including apparent anomalies."
  ]
 },
 "offices": [
  {
   "id": "dir",
   "name": "Directors of Air Warfare",
   "short": "Directors",
   "blurb": "Directors of the Department of Air Warfare since 1978."
  },
  {
   "id": "sc",
   "name": "Chief Instructors, Senior Course",
   "short": "SC Chief Instructors",
   "blurb": "Chief Instructors of the Senior Course since 1978."
  },
  {
   "id": "jc",
   "name": "Chief Instructors, Junior Course",
   "short": "JC Chief Instructors",
   "blurb": "Chief Instructors of the Junior Course since 1978."
  },
  {
   "id": "ds",
   "name": "Directing Staff",
   "short": "Directing Staff",
   "blurb": "The officers who have instructed at the Department since 1978."
  }
 ],
 "decades": [
  "1978 - 1989",
  "1990 - 1999",
  "2000 - 2009",
  "2010 - 2019",
  "2020 - To date"
 ],
 "people": [
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "U",
   "surname": "Mu'azu",
   "tenure": "03 Apr 78 - 25 Sep 99",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "GO",
   "surname": "Esho",
   "tenure": "24 Sep 79 - 05 Jan 81",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "CU",
   "surname": "Ugah",
   "tenure": "09 Feb 82 - 01 Dec 82",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "S",
   "surname": "Magaji",
   "tenure": "08 Feb 82 - 01 Dec 82",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "AH",
   "surname": "Lawal",
   "tenure": "01 Dec 82 - 20 Jan 84",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "AE",
   "surname": "Okpere",
   "tenure": "20 Jan 84 - 01 Mar 86",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "A",
   "surname": "Okpanachi",
   "tenure": "01 Mar 86 - 30 Jan 88",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "MM",
   "surname": "Aliyu",
   "tenure": "10 Jul 88 - 21 Feb 89",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "JA",
   "surname": "Mbaka",
   "tenure": "23 Feb 89 - 10 Sep 90",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "MA",
   "surname": "Johnson",
   "tenure": "10 Sep 90 - 10 Mar 91",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Gp Capt",
   "initials": "VO",
   "surname": "Omozokpia",
   "tenure": "11 Mar 91 - 03 Dec 91",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "JO",
   "surname": "Sunmonu",
   "tenure": "04 Dec 91 - 07 Oct 93",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "VC",
   "surname": "Akiti",
   "tenure": "08 Oct 93 - 26 Sep 94",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "JA",
   "surname": "Akawu",
   "tenure": "26 Sep 94 - 18 Aug 97",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "I",
   "surname": "Abdulrahman",
   "tenure": "18 Aug 97 - 18 Dec 98",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "EU",
   "surname": "Okundayo",
   "tenure": "18 Feb 99 - 28 Jul 99",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "JA",
   "surname": "Kolawole",
   "tenure": "28 Jul 99 - 15 May 01",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "KR",
   "surname": "Ekezie",
   "tenure": "26 Jul 01 - 10 Jan 03",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "TM",
   "surname": "Ato",
   "tenure": "10 Jan 03 - 17 Jan 04",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "I",
   "surname": "Danbauchi",
   "tenure": "17 Feb 04 - 08 Sep 06",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "JA",
   "surname": "Udo",
   "tenure": "08 Sep 06 - 09 Jan 07",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "SA",
   "surname": "Leks",
   "tenure": "09 Jan 07 - 08 Aug 07",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "MY",
   "surname": "Oladunni",
   "tenure": "08 Aug 07 - 29 Jan 10",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "GO",
   "surname": "Ekagbo",
   "tenure": "30 Jan 10 - 06 Dec 12",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "SG",
   "surname": "Jeff-Zanni",
   "tenure": "17 Dec 12 - 12 Oct 14",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "NO",
   "surname": "Oyibo",
   "tenure": "13 Oct 14 - 08 Feb 15",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "FM",
   "surname": "Makinde",
   "tenure": "09 Feb 15 - 16 Feb 16",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "AS",
   "surname": "Liman",
   "tenure": "22 Feb 16 - 30 May 17",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "NK",
   "surname": "Kumzhi",
   "tenure": "30 May 17 - 29 Aug 18",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "HI",
   "surname": "Alhaji",
   "tenure": "29 Aug 18 - 05 Jan 20",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "AY",
   "surname": "Dari",
   "tenure": "06 Jan 20 - 30 Mar 21",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "CO",
   "surname": "Obiabaka",
   "tenure": "31 Mar 21 - 06 Jan 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "EA",
   "surname": "Ola",
   "tenure": "06 Jan 23 - 03 Jul 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "A",
   "surname": "Audu",
   "tenure": "10 Jul 23 - 14 Aug 25",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "SM",
   "surname": "Chindo",
   "tenure": "15 Aug 25 - 12 Jan 26",
   "svc": null,
   "branch": null
  },
  {
   "office": "dir",
   "rank": "Air Cdre",
   "initials": "OO",
   "surname": "Obasa",
   "tenure": "12 Jan 26 - To date",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "GP",
   "surname": "Trip",
   "tenure": "20 Aug 78 - 19 Feb 81",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "RF",
   "surname": "Saunders",
   "tenure": "19 Feb 81 - 24 Apr 83",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "KR",
   "surname": "Edmound",
   "tenure": "24 Apr 83 - 28 Jun 85",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "PNLE",
   "surname": "Margound",
   "tenure": "28 Jun 85 - 31 Dec 86",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "MA",
   "surname": "Johnson",
   "tenure": "01 Jan 87 - 07 Nov 87",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "PO",
   "surname": "Ugbana",
   "tenure": "07 Nov 87 - 02 Jan 90",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "SY",
   "surname": "Ojibara",
   "tenure": "02 Jan 90 - 04 Nov 90",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "MN",
   "surname": "Umaru",
   "tenure": "04 Nov 90 - 15 May 92",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "JD",
   "surname": "Wuyep",
   "tenure": "16 May 92 - 25 Jul 93",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "I",
   "surname": "Abdulrahaman",
   "tenure": "26 Jul 93 - 06 Feb 94",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OB",
   "surname": "Akpotaire",
   "tenure": "07 Feb 94 - 20 Jul 94",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "DD",
   "surname": "Edafioka",
   "tenure": "20 Jul 94 - 15 Aug 94",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "KR",
   "surname": "Ekezie",
   "tenure": "07 Jul 96 - 11 Dec 97",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "A",
   "surname": "Andre",
   "tenure": "14 Jan 97 - 22 Jan 97",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "ER",
   "surname": "Ejeh",
   "tenure": "12 Dec 97 - 13 Sep 98",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "I",
   "surname": "Danbauchi",
   "tenure": "14 Sep 98 - 31 Aug 00",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "JD",
   "surname": "Ahwin",
   "tenure": "31 Aug 00 - 08 Aug 01",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "SA",
   "surname": "Leks",
   "tenure": "31 Aug 00 - 08 Sep 00",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "CI",
   "surname": "Shekarau",
   "tenure": "08 Sep 00 - 29 Apr 02",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "II",
   "surname": "Nnamani",
   "tenure": "09 Aug 01 - 29 Jul 02",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "I",
   "surname": "Salihu",
   "tenure": "09 Apr 02 - 25 Aug 04",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "MN",
   "surname": "Ekwere",
   "tenure": "29 Jul 02 - 30 Aug 04",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "DE",
   "surname": "Abdullahi",
   "tenure": "25 Aug 04 - 30 Jun 06",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "MA",
   "surname": "Akisanmi",
   "tenure": "30 Aug 04 - 01 Sep 05",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OM",
   "surname": "Onoh",
   "tenure": "02 Sep 05 - 16 May 06",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "A",
   "surname": "Bala",
   "tenure": "16 May 06 - 12 Jan 09",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "KM",
   "surname": "Akinlade",
   "tenure": "30 Jun 06 - 30 Jun 08",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "HC",
   "surname": "Okpala",
   "tenure": "09 Jul 08 - 29 Oct 10",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "SI",
   "surname": "Usman",
   "tenure": "12 Oct 09 - 09 Aug 10",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "MG",
   "surname": "Abdul-Wahab",
   "tenure": "28 Oct 10 - 14 Aug 11",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "EA",
   "surname": "Wonah",
   "tenure": "29 Oct 10 - 23 Aug 12",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "PD",
   "surname": "Masiyer",
   "tenure": "23 Aug 12 - 16 Jun 13",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "PB",
   "surname": "Phillips",
   "tenure": "16 May 13 - 18 Nov 14",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "AO",
   "surname": "Shogbanmu",
   "tenure": "18 Nov 14 - 01 Jan 15",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "CO",
   "surname": "Obiabaka",
   "tenure": "04 Apr 16 - 28 Aug 17",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OT",
   "surname": "Salami",
   "tenure": "28 Aug 17 - 14 Sep 18",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "SA",
   "surname": "Madaki",
   "tenure": "14 Sep 18 - 29 Aug 19",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "SA",
   "surname": "Eyoma",
   "tenure": "29 Aug 19 - 06 Apr 21",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "M",
   "surname": "Yahaya",
   "tenure": "06 Apr 21 - 02 Sep 21",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OO",
   "surname": "Obasa",
   "tenure": "02 Sep 21 - 04 Feb 22",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "",
   "surname": "Umeadi",
   "tenure": "04 Oct 22 - 03 Feb 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OO",
   "surname": "Obasa",
   "tenure": "03 Oct 22 - 03 Jan 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "EA",
   "surname": "Ogiriki",
   "tenure": "03 Jan 23 - 21 Jul 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "HI",
   "surname": "Medugu",
   "tenure": "21 Jul 23 - 03 Oct 23",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "OJ",
   "surname": "Umeadi",
   "tenure": "03 Oct 23 - 16 Feb 25",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "E",
   "surname": "Ekpo",
   "tenure": "22 Jul 23 - 14 Feb 25",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "DE",
   "surname": "Daniels",
   "tenure": "17 Apr 25 - Oct 26",
   "svc": null,
   "branch": null
  },
  {
   "office": "sc",
   "rank": "Gp Capt",
   "initials": "UU",
   "surname": "Akeel",
   "tenure": "4 Nov 26 - To date",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "GC",
   "surname": "Gayton",
   "tenure": "1978 - 1981",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "GG",
   "surname": "Mclachan",
   "tenure": "1981 - 1983",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "R",
   "surname": "Evans",
   "tenure": "1983 - 1985",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "RJ",
   "surname": "Barret",
   "tenure": "1985 - 1986",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "PG",
   "surname": "Asemota",
   "tenure": "1986 - 1988",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "MN",
   "surname": "Umoru",
   "tenure": "1988 - 1989",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "PY",
   "surname": "Biakpara",
   "tenure": "Feb 1989 - Aug 1989",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "WO",
   "surname": "Pratt",
   "tenure": "Aug 1989 - 27 Dec 1990",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Abdulrahman",
   "tenure": "28 Dec 90 - 22 Dec 91",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "IA",
   "surname": "Abdulrahman",
   "tenure": "23 Dec 91 - 02 Jun 92",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "OT",
   "surname": "Ajomale",
   "tenure": "03 Jun 92 - 14 Sep 92",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "BO",
   "surname": "Obadan",
   "tenure": "14 Sep 92 - 04 Jan 95",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "BO",
   "surname": "Obadan",
   "tenure": "04 Jan 95 - 16 Jan 95",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Wg Cdr",
   "initials": "GO",
   "surname": "Olanrewaju",
   "tenure": "27 Feb 95 - 03 Jul 95",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "GO",
   "surname": "Olanrewaju",
   "tenure": "03 Jul 95 - 08 Aug 97",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "SBE",
   "surname": "Gerevbie",
   "tenure": "08 Aug 97 - 25 Jul 99",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "JO",
   "surname": "Babalola",
   "tenure": "26 Jul 99 - 07 Aug 01",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "MM",
   "surname": "Audu-Bida",
   "tenure": "22 Nov 99 - 14 Dec 00",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "II",
   "surname": "Nnamani",
   "tenure": "31 Mar 00 - 09 Aug 01",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AT",
   "surname": "Mu'azu",
   "tenure": "09 Aug 01 - 11 Aug 03",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "M",
   "surname": "Lord-Mallam",
   "tenure": "11 Aug 03 - 17 May 04",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "UC",
   "surname": "Oche",
   "tenure": "01 Sep 04 - 20 Nov 05",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AS",
   "surname": "Maigari",
   "tenure": "21 Nov 05 - 30 Jul 07",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "IJ",
   "surname": "Yahaya",
   "tenure": "30 Jul 07 - 16 Feb 09",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "MS",
   "surname": "Usman",
   "tenure": "28 Feb 09 - 16 Aug 10",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "MO",
   "surname": "Olatunji",
   "tenure": "06 Jan 11 - 11 Aug 11",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "MC",
   "surname": "Nnaji",
   "tenure": "28 Jul 11 - 21 Jun 13",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "HI",
   "surname": "Alhaji",
   "tenure": "21 Jun 13 - 21 Dec 14",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AO",
   "surname": "Shogbanmu",
   "tenure": "01 Jan 15 - 18 Sep 15",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "YA",
   "surname": "Katabiya",
   "tenure": "19 Sep 15 - 16 Aug 16",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AI",
   "surname": "Hanidu",
   "tenure": "16 Aug 16 - 22 May 17",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "PJ",
   "surname": "Edem",
   "tenure": "22 May 17 - 26 Aug 19",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "A",
   "surname": "Audu",
   "tenure": "26 Aug 19 - 16 Jan 20",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "M",
   "surname": "Yahaya",
   "tenure": "12 Mar 21 - 06 Apr 21",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AS",
   "surname": "Abubakar",
   "tenure": "03 Aug 20 - 26 Jul 21",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AT",
   "surname": "Mohammed",
   "tenure": "26 Jul 21 - To date",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "AO",
   "surname": "Ogunmola",
   "tenure": "01 Jul 21 - 16 May 22",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "EA",
   "surname": "Ogiriki",
   "tenure": "16 May 22 - Dec 22",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "JO",
   "surname": "Mamman",
   "tenure": "11 Apr 23 - To date",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "M",
   "surname": "Sani",
   "tenure": "03 Oct 23 - Dec 25",
   "svc": null,
   "branch": null
  },
  {
   "office": "jc",
   "rank": "Gp Capt",
   "initials": "TA",
   "surname": "Ezekiel",
   "tenure": "24 Feb 25 - To date",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "BR",
   "surname": "Bedves",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "",
   "surname": "Davies",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "P",
   "surname": "Goodman",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "RG",
   "surname": "Leckey",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AMS",
   "surname": "O'neil",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "V",
   "surname": "Omozokpia",
   "tenure": "1978 - 1980",
   "svc": "NAF/322",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JD",
   "surname": "Smith",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AM",
   "surname": "Carter",
   "tenure": "1978 - 1980",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JE",
   "surname": "Owen",
   "tenure": "1981 - 1982",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JD",
   "surname": "Skinner",
   "tenure": "1981 - 1982",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MJ",
   "surname": "Gibbons",
   "tenure": "1983 - 1984",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "DAH",
   "surname": "Jackson",
   "tenure": "1985 - 1986",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SM",
   "surname": "Adams",
   "tenure": "09 Oct 76 - 20 Jan 81",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "E",
   "surname": "Omeruah",
   "tenure": "01 Aug 78 - 30 Jul 80",
   "svc": "NAF/562",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EW",
   "surname": "Gosling",
   "tenure": "24 Aug 78 - 09 Nov 80",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DM",
   "surname": "Smith",
   "tenure": "24 Aug 78 - 09 Nov 80",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "LD",
   "surname": "Koinyan",
   "tenure": "01 Nov 78 - 22 Jan 79",
   "svc": "NAF/190",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EU",
   "surname": "Edet",
   "tenure": "19 Feb 79 - 21 Dec 81",
   "svc": "NAF/378",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "CC",
   "surname": "Ohadomere",
   "tenure": "19 Feb 79 - 21 Dec 81",
   "svc": "NAF/418",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "SY",
   "surname": "Ojibara",
   "tenure": "19 Feb 79 - 21 Dec 81",
   "svc": "NAF/372",
   "branch": "Met"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MN",
   "surname": "Umaru",
   "tenure": "19 Feb 79 - 21 Dec 81",
   "svc": "NAF/364",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "FO",
   "surname": "Ajobena",
   "tenure": "19 Jan 80 - 30 Dec 82",
   "svc": "NAF/396",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "D",
   "surname": "Ekanem",
   "tenure": "19 Jan 80 - 21 Jan 82",
   "svc": "NAF/405",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "I",
   "surname": "Alkali",
   "tenure": "25 Feb 80 - 01 Jul 81",
   "svc": "NAF/274",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MA",
   "surname": "Johnson",
   "tenure": "25 Feb 80 - 15 Aug 82",
   "svc": "NAF/320",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JI",
   "surname": "Airiohuodion",
   "tenure": "01 Nov 80 - 15 Aug 83",
   "svc": "NAF/234",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PD",
   "surname": "Ugbana",
   "tenure": "01 Nov 80 - 06 Dec 82",
   "svc": "NAF/187",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "R",
   "surname": "Dickson",
   "tenure": "06 Jan 81 - 04 Feb 83",
   "svc": "NAF/172",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PJ",
   "surname": "Mellish",
   "tenure": "06 Jan 81 - 19 May 83",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "EO",
   "surname": "Ajewole",
   "tenure": "17 Aug 81 - 06 Jul 83",
   "svc": "NAF476",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "DD",
   "surname": "Edafioka",
   "tenure": "17 Aug 81 - 06 Jul 84",
   "svc": "NAF/454",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "RJ",
   "surname": "Starter",
   "tenure": "17 Aug 81 - 06 Jul 84",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GO",
   "surname": "Agboneni",
   "tenure": "14 Jan 82 - 02 Feb 84",
   "svc": "NAF/409",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "VC",
   "surname": "Akiti",
   "tenure": "15 Aug 82 - 10 Sep 84",
   "svc": "NAF/427",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "PG",
   "surname": "Asemota",
   "tenure": "10 Sep 82 - 04 Aug 84",
   "svc": "NAF/397",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "WP",
   "surname": "Steel",
   "tenure": "10 Sep 82 - 04 Aug 84",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "LU",
   "surname": "Iyoho",
   "tenure": "07 Dec 82 - 28 Aug 84",
   "svc": "NAF/424",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "D",
   "surname": "Pachman",
   "tenure": "04 Feb 83 - 18 Mar 85",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OJ",
   "surname": "Ajayi",
   "tenure": "15 Mar 83 - 18 Mar 85",
   "svc": "NAF/353",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "K",
   "surname": "Richard",
   "tenure": "13 May 83 - 18 May 85",
   "svc": "NAF/137",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RN",
   "surname": "Ekunno",
   "tenure": "01 Aug 83 - 04 Aug 86",
   "svc": "NAF/195",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "KR",
   "surname": "Ekezie",
   "tenure": "30 Mar 84 - 02 Jun 86",
   "svc": "NAF/553",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GO",
   "surname": "Olanrewaju",
   "tenure": "30 Mar 84 - 02 Jun 86",
   "svc": "NAF/558",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "IA",
   "surname": "Abdulrahaman",
   "tenure": "06 Aug 84 - 30 Sep 86",
   "svc": "NAF/449",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "K",
   "surname": "Ejere",
   "tenure": "06 Aug 84 - 13 Jun 86",
   "svc": "NAF/460",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "OG",
   "surname": "Martins",
   "tenure": "06 Aug 84 - 30 Sep 86",
   "svc": "NAF/443",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PY",
   "surname": "Biakpara",
   "tenure": "10 Sep 84 - 01 Aug 87",
   "svc": "NAF/371",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RB",
   "surname": "Ogunbumi",
   "tenure": "10 Sep 84 - 11 May 87",
   "svc": "NAF/408",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Ogundana",
   "tenure": "10 Sep 84 - 01 Aug 87",
   "svc": "NAF/393",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AWJ",
   "surname": "Foulkes",
   "tenure": "18 Mar 85 - 03 Jul 86",
   "svc": "RAF",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "EE",
   "surname": "Ekpo",
   "tenure": "11 Nov 85 - 18 May 88",
   "svc": "NAF/1317",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "A",
   "surname": "Rufai",
   "tenure": "01 Jan 86 - 18 Mar 88",
   "svc": "NAF/381",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RB",
   "surname": "Suara",
   "tenure": "27 Jan 86 - 01 Feb 88",
   "svc": "NAF/364",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "IO",
   "surname": "Nkanga",
   "tenure": "04 Aug 86 - 22 Oct 87",
   "svc": "NAF/455",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "BO",
   "surname": "Obadan",
   "tenure": "04 Aug 86 - 01 Nov 88",
   "svc": "NAF/528",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JA",
   "surname": "Okosun",
   "tenure": "04 Aug 86 - 10 Nov 88",
   "svc": "NAF/524",
   "branch": "Nav"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NE",
   "surname": "Eduok",
   "tenure": "26 Sep 86 - 01 Aug 87",
   "svc": "NAF/340",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Kolawole",
   "tenure": "26 Sep 86 - 01 Feb 88",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "WO",
   "surname": "Pratt",
   "tenure": "26 Sep 86 - 22 Jan 89",
   "svc": "NAF/293",
   "branch": "Regt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "PAT",
   "surname": "Orkuma",
   "tenure": "05 Jan 87 - 01 Jul 88",
   "svc": "NAF/699",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "SE",
   "surname": "Osugo",
   "tenure": "05 Jan 87 - 06 Aug 89",
   "svc": "NAF/864",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GO",
   "surname": "Uduokhai",
   "tenure": "05 Jan 87 - 19 Aug 90",
   "svc": "NAF/594",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EU",
   "surname": "Okundaye",
   "tenure": "01 Aug 87 - 20 Sep 89",
   "svc": "NAF/448",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MO",
   "surname": "Salami",
   "tenure": "01 Aug 87 - 02 Jan 90",
   "svc": "NAF/392",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "K",
   "surname": "Alimi",
   "tenure": "07 Sep 87 - 17 Aug 89",
   "svc": "NAF/565",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "FF",
   "surname": "Adigun",
   "tenure": "15 Dec 87 - 21 May 90",
   "svc": "NAF/501",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Abdul-Rahaman",
   "tenure": "25 Feb 88 - 02 Jan 90",
   "svc": "NAF/449",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "I",
   "surname": "Kefas",
   "tenure": "25 Feb 88 - 02 Jan 90",
   "svc": "NAF/404",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OS",
   "surname": "Ajibulu",
   "tenure": "10 Apr 88 - 10 Apr 90",
   "svc": "NAF/250",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JO",
   "surname": "Ojikutu",
   "tenure": "21 Jun 88 - 22 Dec 90",
   "svc": "NAF/467",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "OT",
   "surname": "Ajomale",
   "tenure": "20 Jul 88 - 21 May 90",
   "svc": "NAF/572",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JOP",
   "surname": "Akingbala",
   "tenure": "20 Jul 88 - 21 May 90",
   "svc": "NAF/502",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "FE",
   "surname": "Ateru",
   "tenure": "20 Jul 88 - 21 May 90",
   "svc": "NAF/556",
   "branch": "Dentistry"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TM",
   "surname": "Ato",
   "tenure": "01 Nov 88 - 02 Jan 91",
   "svc": "NAF/599",
   "branch": "Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Odesola",
   "tenure": "14 Sep 89 - 15 Sep 91",
   "svc": "NAF/475",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KET",
   "surname": "Oyerinde",
   "tenure": "25 Sep 89 - 26 Sep 91",
   "svc": "NAF/757",
   "branch": "EDN"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SN",
   "surname": "Ugbor",
   "tenure": "25 Sep 89 - 26 Sep 91",
   "svc": "NAF/763",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "ER",
   "surname": "Ejeh",
   "tenure": "02 Jan 90 - Jan 92",
   "svc": "NAF/597",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AU",
   "surname": "Agbonlahor",
   "tenure": "18 Jan 90 - Feb 91",
   "svc": "NAF/633",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TO",
   "surname": "Shodeinde",
   "tenure": "18 Jan 90 - 17 Jan 92",
   "svc": "NAF/566",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Andre",
   "tenure": "21 May 90 - 21 May 92",
   "svc": "NAF/578",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HOJ",
   "surname": "Dada",
   "tenure": "21 May 90 - 20 May 92",
   "svc": "NAF/469",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "IN",
   "surname": "Ejiofor",
   "tenure": "21 May 90 - May 92",
   "svc": "NAF/619",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "I",
   "surname": "Komo",
   "tenure": "21 May 90 - Jun 92",
   "svc": "NAF/621",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EC",
   "surname": "Agu",
   "tenure": "30 Jun 90 - 29 Jun 92",
   "svc": "NAF/482",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JD",
   "surname": "Wuyep",
   "tenure": "02 Jul 90 - 15 May 92",
   "svc": "NAF/463",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Disu",
   "tenure": "09 Aug 90 - 08 Aug 92",
   "svc": "NAF/504",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "CAC",
   "surname": "Olajide",
   "tenure": "23 Dec 90 - 22 Jun 92",
   "svc": "NAF/625",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MM",
   "surname": "Audu-Bida",
   "tenure": "28 Dec 90 - 27 Dec 91",
   "svc": "NAF/637",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "KOB",
   "surname": "Sotonwa",
   "tenure": "28 Dec 90 - 27 Dec 92",
   "svc": "NAF/689",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "OO",
   "surname": "Petinrin",
   "tenure": "25 Mar 91 - 28 Dec 93",
   "svc": "NAF/773",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "BG",
   "surname": "Danbaba",
   "tenure": "24 Jun 91 - 09 Nov 93",
   "svc": "NAF/781",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "S",
   "surname": "Atawodi",
   "tenure": "17 Jul 91 - 17 May 93",
   "svc": "NAF/555",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Bala",
   "tenure": "17 Jul 91 - 17 Feb 93",
   "svc": "NAF/560",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JO",
   "surname": "Duke",
   "tenure": "17 Jul 91 - 23 Aug 93",
   "svc": "NAF/554",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "YS",
   "surname": "Ndauno",
   "tenure": "10 Nov 91 - 09 Nov 93",
   "svc": "NAF/628",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "DO",
   "surname": "Obaisa",
   "tenure": "10 Nov 91 - 09 Nov 93",
   "svc": "NAF/775",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "FR",
   "surname": "Obiuwevbi",
   "tenure": "10 Nov 91 - 09 Nov 93",
   "svc": "NAF/777",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OB",
   "surname": "Akpotaire",
   "tenure": "16 Apr 92 - 25 May 94",
   "svc": "NAF/574",
   "branch": "Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PC",
   "surname": "Dike",
   "tenure": "16 Apr 92 - 25 May 94",
   "svc": "NAF/584",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "I",
   "surname": "Danbauchi",
   "tenure": "04 May 92 - 25 May 94",
   "svc": "NAF/642",
   "branch": "NAV"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BO",
   "surname": "Kotti",
   "tenure": "04 May 92 - 25 May 94",
   "svc": "NAF/620",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OC",
   "surname": "Obierika",
   "tenure": "31 Jul 92 - 31 Jul 94",
   "svc": "NAF/593",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "OA",
   "surname": "Olagoke",
   "tenure": "06 Sep 92 - 15 Feb 94",
   "svc": "NAF/1012",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AT",
   "surname": "Muazu",
   "tenure": "07 Sep 92 - 15 Feb 95",
   "svc": "NAF/1067",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GB",
   "surname": "Odesola",
   "tenure": "21 Sep 92 - 20 Sep 94",
   "svc": "NAF/1060",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "II",
   "surname": "Nnamani",
   "tenure": "08 Feb 93 - 15 Feb 95",
   "svc": "NAF/798",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AC",
   "surname": "Nyananyo",
   "tenure": "08 Feb 93 - 15 Feb 95",
   "svc": "NAF/926",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "WE",
   "surname": "Ahagbuje",
   "tenure": "25 Feb 93 - 15 Feb 95",
   "svc": "NAF/899",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SI",
   "surname": "Awofodu",
   "tenure": "17 Aug 93 - Aug 96",
   "svc": "NAF/580",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AO",
   "surname": "Ayeni",
   "tenure": "17 Aug 93 - Jul 96",
   "svc": "NAF/1018",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JO",
   "surname": "Onekutu",
   "tenure": "17 Aug 93 - 28 Aug 95",
   "svc": "NAF/641",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "EU",
   "surname": "Ukaegbu",
   "tenure": "17 Aug 93 - Jul 96",
   "svc": "NAF/1064",
   "branch": "NAV"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SAT",
   "surname": "Easterbrook",
   "tenure": "08 Oct 93 - 05 Aug 96",
   "svc": "NAF/686",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Soewu",
   "tenure": "03 Jan 94 - 15 Aug 95",
   "svc": "NAF/639",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GF",
   "surname": "Abdul",
   "tenure": "18 Feb 94 - 05 Aug 96",
   "svc": "NAF/618",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FO",
   "surname": "Gbadebo",
   "tenure": "17 May 94 - 01 May 96",
   "svc": "NAF/588",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Leks",
   "tenure": "30 May 94 - 15 Jul 96",
   "svc": "NAF/925",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CO",
   "surname": "Onugha",
   "tenure": "01 Jul 94 - 15 Jul 96",
   "svc": "NAF/631",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JO",
   "surname": "Babalola",
   "tenure": "19 Sep 94 - Apr 97",
   "svc": "NAF/1021",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AR",
   "surname": "Okanlawon",
   "tenure": "19 Sep 94 - Mar 97",
   "svc": "NAF/1019",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "OM",
   "surname": "Onoh",
   "tenure": "19 Sep 94 - Aug 97",
   "svc": "NAF/1089",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JO",
   "surname": "Oshoniyi",
   "tenure": "13 Mar 95 - Sep 98",
   "svc": "NAF/1088",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JA",
   "surname": "Udo",
   "tenure": "15 May 95 - Sep 98",
   "svc": "NAF/804",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TO",
   "surname": "Araki",
   "tenure": "31 Jul 95 - Sep 98",
   "svc": "NAF/911",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MY",
   "surname": "Oladunni",
   "tenure": "31 Jul 95 - Sep 98",
   "svc": "NAF/1100",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EE",
   "surname": "Oisamoje",
   "tenure": "30 Aug 95 - 10 May 96",
   "svc": "NAF/917",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "O",
   "surname": "Allwell-Brown",
   "tenure": "12 Sep 95 - 10 May 96",
   "svc": "NAF/1194",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JD",
   "surname": "Ahwin",
   "tenure": "01 May 96 - Sep 98",
   "svc": "NAF/776",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JB",
   "surname": "Ajeye",
   "tenure": "01 May 96 - Sep 98",
   "svc": "NAF/783",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EB",
   "surname": "Fisher",
   "tenure": "01 May 96 - 21 Jul 99",
   "svc": "NAF/1009",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SBE",
   "surname": "Gberevbie",
   "tenure": "01 May 96 - Jul 97",
   "svc": "NAF/687",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SB",
   "surname": "Naniwono",
   "tenure": "01 May 96 - Oct 98",
   "svc": "NAF/801",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NB",
   "surname": "Nnoruka",
   "tenure": "01 May 96 - Sep 98",
   "svc": "NAF/1015",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SO",
   "surname": "Smith",
   "tenure": "01 May 96 - Sep 98",
   "svc": "NAF/1077",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GI",
   "surname": "Amore",
   "tenure": "15 Jul 96 - Sep 98",
   "svc": "NAF/1001",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TD",
   "surname": "Iruenabere",
   "tenure": "30 Jul 96 - Sep 98",
   "svc": "NAF/1032",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CI",
   "surname": "Shekarau",
   "tenure": "06 Aug 96 - Oct 98",
   "svc": "NAF/1030",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MN",
   "surname": "Ekwere",
   "tenure": "21 Aug 96 - Oct 98",
   "svc": "NAF/1047",
   "branch": "Nav"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PI",
   "surname": "Okereke",
   "tenure": "21 Aug 96 - Oct 98",
   "svc": "NAF/1363",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CE",
   "surname": "Aroriode",
   "tenure": "16 Sep 96 - Oct 98",
   "svc": "NAF/1059",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "V",
   "surname": "Isong",
   "tenure": "26 Nov 96 - 18 Apr 98",
   "svc": "NAF/693",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AS",
   "surname": "Abdulsalam",
   "tenure": "28 Jul 97 - 21 Jul 99",
   "svc": "NAF/1106",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IV",
   "surname": "Anagor",
   "tenure": "28 Jul 97 - 21 Jul 99",
   "svc": "NAF/1049",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HA",
   "surname": "Na-shehu",
   "tenure": "28 Jul 97 - 21 Jul 99",
   "svc": "NAF/1112",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "A",
   "surname": "Saddiq",
   "tenure": "28 Jul 97 - 21 Jul 99",
   "svc": "NAF/938",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "I",
   "surname": "Salihu",
   "tenure": "30 Jul 97 - 21 Jul 99",
   "svc": "NAF/1086",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NE",
   "surname": "Offor",
   "tenure": "06 Aug 97 - 21 Jul 99",
   "svc": "NAF/1136",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HA",
   "surname": "Owie",
   "tenure": "11 Aug 97 - 24 May 99",
   "svc": "NAF/1148",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RJ",
   "surname": "Peters",
   "tenure": "11 Aug 97 - 21 Jul 99",
   "svc": "NAF/1097",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SP",
   "surname": "Okenu",
   "tenure": "26 Jan 98 - 20 Jun 00",
   "svc": "NAF/1094",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OT",
   "surname": "Okorodudu",
   "tenure": "30 Jan 98 - 28 Jan 00",
   "svc": "NAF/1014",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "A",
   "surname": "Bala",
   "tenure": "02 Mar 98 - 20 Jan 00",
   "svc": "NAF/1131",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Balogun",
   "tenure": "09 Mar 98 - 15 Jun 00",
   "svc": "NAF/1119",
   "branch": "EE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MB",
   "surname": "Usman",
   "tenure": "09 Mar 98 - 14 Dec 00",
   "svc": "NAF/1123",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BE",
   "surname": "Osim",
   "tenure": "13 Mar 98 - 23 Aug 99",
   "svc": "NAF/1276",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GS",
   "surname": "Dama",
   "tenure": "16 Mar 98 - 12 Nov 99",
   "svc": "NAF/1025",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RO",
   "surname": "Nwafor",
   "tenure": "16 Mar 98 - 15 Jun 00",
   "svc": "NAF/1285",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Kure",
   "tenure": "17 Mar 98 - 15 Jun 00",
   "svc": "NAF/1162",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NA",
   "surname": "Spiff",
   "tenure": "23 Mar 98 - 15 Jun 00",
   "svc": "NAF/1122",
   "branch": "Air Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MO",
   "surname": "Aiyelowo",
   "tenure": "16 Nov 98 - 14 Dec 00",
   "svc": "NAF/1297",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MM",
   "surname": "Igho",
   "tenure": "16 Nov 98 - 14 Dec 00",
   "svc": "NAF/1101",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Bankole",
   "tenure": "23 Nov 98 - 14 Dec 00",
   "svc": "NAF/1348",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MA",
   "surname": "Akinsanmi",
   "tenure": "21 Jul 99 - 26 Jul 01",
   "svc": "NAF/1168",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JD",
   "surname": "Dania",
   "tenure": "21 Jul 99 - 17 Jul 01",
   "svc": "NAF/1160",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "M",
   "surname": "Lord-Mallam",
   "tenure": "21 Jul 99 - 26 Jul 01",
   "svc": "NAF/1354",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TT",
   "surname": "Agbecha",
   "tenure": "26 Jul 99 - 17 Jul 01",
   "svc": "NAF/1289",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GO",
   "surname": "Ekagbo",
   "tenure": "26 Jul 99 - 17 Jul 01",
   "svc": "NAF/1159",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IC",
   "surname": "Ogbu",
   "tenure": "26 Jul 99 - 17 Jul 01",
   "svc": "NAF/1331",
   "branch": "Nav"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CA",
   "surname": "Oriaku",
   "tenure": "26 Jul 99 - 17 Jul 01",
   "svc": "NAF/1134",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BE",
   "surname": "Oyobolo",
   "tenure": "26 Jul 99 - 25 Jul 01",
   "svc": "NAF/1372",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Shomade",
   "tenure": "26 Jul 99 - 17 Jul 01",
   "svc": "NAF/1274",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DS",
   "surname": "Dillimono",
   "tenure": "04 Oct 99 - 26 Jul 01",
   "svc": "NAF/1120",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DE",
   "surname": "Abdullahi",
   "tenure": "03 Nov 99 - 23 Jul 01",
   "svc": "NAF/1402",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KM",
   "surname": "Akinlade",
   "tenure": "03 Nov 99 - 12 Oct 01",
   "svc": "NAF/1371",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FB",
   "surname": "Nyoyoko",
   "tenure": "03 Nov 99 - 20 Aug 01",
   "svc": "NAF/1437",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SB",
   "surname": "Abubakar",
   "tenure": "04 Nov 99 - 20 Aug 01",
   "svc": "NAF/1433",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TO",
   "surname": "Badiru",
   "tenure": "05 Nov 99 - 17 Apr 00",
   "svc": "NAF/1290",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EO",
   "surname": "Akinduro",
   "tenure": "06 Nov 99 - 09 Aug 01",
   "svc": "NAF/1512",
   "branch": "Info"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AG",
   "surname": "Tsakr",
   "tenure": "15 Nov 99 - 20 Aug 01",
   "svc": "NAF/1432",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Osanyinbi",
   "tenure": "03 Dec 99 - 09 Aug 01",
   "svc": null,
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GC",
   "surname": "Gamadeku",
   "tenure": "21 Jan 00 - 19 Jan 02",
   "svc": "GH/1637",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PO",
   "surname": "Gbujie",
   "tenure": "21 Feb 00 - 17 Jul 01",
   "svc": "NAF/1490",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NL",
   "surname": "Bekom",
   "tenure": "17 Apr 00 - 17 Jul 01",
   "svc": "NAF/1487",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CN",
   "surname": "Chukwu",
   "tenure": "17 Apr 00 - 08 Apr 02",
   "svc": "NAF/1419",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MM",
   "surname": "Maisaka",
   "tenure": "17 Apr 00 - 24 Aug 01",
   "svc": "NAF/1706",
   "branch": "Medical"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Odun-Ayo",
   "tenure": "17 Apr 00 - 18 Mar 02",
   "svc": "NAF/1510",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NB",
   "surname": "Rindaps",
   "tenure": "17 Apr 00 - 02 Jan 02",
   "svc": "NAF/1413",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OC",
   "surname": "Oguejiofor",
   "tenure": "02 Oct 00 - 01 Sep 02",
   "svc": "NAF/1421",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SN",
   "surname": "Suleiman",
   "tenure": "02 Oct 00 - 03 Oct 02",
   "svc": "NAF/1711",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DY",
   "surname": "Balyu",
   "tenure": "04 Oct 00 - 01 Aug 02",
   "svc": "NAF/1387",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JA",
   "surname": "Gbamwuan",
   "tenure": "04 Oct 00 - 01 Sep 02",
   "svc": "NAF/1568",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "UC",
   "surname": "Oche",
   "tenure": "04 Oct 00 - 01 Sep 02",
   "svc": "NAF/1504",
   "branch": "EE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BA",
   "surname": "Omirin",
   "tenure": "04 Oct 00 - 01 Sep 02",
   "svc": "NAF/1534",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HA",
   "surname": "Sabo",
   "tenure": "04 Oct 00 - 01 Sep 02",
   "svc": "NAF/1830",
   "branch": "Law"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JB",
   "surname": "Adigun",
   "tenure": "19 Jan 01 - 09 Jan 03",
   "svc": "NAF/1550",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KO",
   "surname": "George",
   "tenure": "19 Apr 01 - 03 Apr 03",
   "svc": "NAF/1852",
   "branch": "Arch"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JC",
   "surname": "Ifemeje",
   "tenure": "19 Jul 01 - 03 Jul 03",
   "svc": "NAF/1545",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IO",
   "surname": "Agbeje",
   "tenure": "23 Jul 01 - 03 Jul 03",
   "svc": "NAF/1522",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "ITS",
   "surname": "Tiza",
   "tenure": "23 Jul 01 - 30 Oct 01",
   "svc": "NAF/1847",
   "branch": "Medical"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Dambo",
   "tenure": "26 Jul 01 - 03 Jul 03",
   "svc": "NAF/1575",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Adeyeye",
   "tenure": "10 Aug 01 - 18 Jan 02",
   "svc": "NAF/1515",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MN",
   "surname": "Orijiude",
   "tenure": "04 Oct 01 - 03 Oct 02",
   "svc": "NAF/1569",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KA",
   "surname": "Musa-Fari",
   "tenure": "07 Jan 02 - 12 Jan 04",
   "svc": "NAF/1612",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Baderinwa",
   "tenure": "08 Jan 02 - 06 Feb 04",
   "svc": "NAF/1857",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FP",
   "surname": "Ikpe",
   "tenure": "08 Jan 02 - 28 Nov 03",
   "svc": "NAF/1562",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FM",
   "surname": "Makinde",
   "tenure": "08 Jan 02 - 06 Feb 04",
   "svc": "NAF/1841",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "I",
   "surname": "Umaru",
   "tenure": "09 Jan 02 - 13 Feb 04",
   "svc": "NAF/1677",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JO",
   "surname": "Azubuine",
   "tenure": "14 Jan 02 - 06 Feb 04",
   "svc": "NAF/1598",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JN",
   "surname": "Igboneme",
   "tenure": "14 Jan 02 - 31 May 04",
   "svc": "NAF/1751",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Ogunjobi",
   "tenure": "14 Jan 02 - 12 Jan 04",
   "svc": "NAF/1614",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SI",
   "surname": "Usman",
   "tenure": "14 Jan 02 - 06 Feb 04",
   "svc": "NAF/1953",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Akinyele",
   "tenure": "16 Jan 02 - 28 Nov 03",
   "svc": "NAF/1956",
   "branch": "Air Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Iya",
   "tenure": "17 Jan 02 - 03 Feb 04",
   "svc": "NAF/1429",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Zannah",
   "tenure": "18 Mar 02 - 13 Feb 04",
   "svc": "NAF/1425",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KE",
   "surname": "Adediji",
   "tenure": "23 Apr 02 - 23 Apr 04",
   "svc": "NAF/1741",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "LT",
   "surname": "Danbaki",
   "tenure": "26 Jul 02 - 28 Apr 04",
   "svc": "NAF/1589",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BE",
   "surname": "Inyang",
   "tenure": "26 Jul 02 - 25 Jul 04",
   "svc": "NAF/15899",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "ZB",
   "surname": "Gora",
   "tenure": "29 Jul 02 - 14 Sep 04",
   "svc": "NAF/1500",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GM",
   "surname": "Gumi",
   "tenure": "29 Jul 02 - 28 Sep 04",
   "svc": "NAF1839",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CO",
   "surname": "Ibeakanma",
   "tenure": "07 Aug 02 - 06 Aug 04",
   "svc": "NAF/1682",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Jekennu",
   "tenure": "16 Aug 02 - 15 Aug 04",
   "svc": "NAF/1684",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "GM",
   "surname": "Iliyasu",
   "tenure": "14 Jan 03 - 13 Jan 05",
   "svc": "NAF/1831",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SG",
   "surname": "Jeff-Zanni",
   "tenure": "14 Apr 03 - 08 Mar 04",
   "svc": "NAF/1723",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AI",
   "surname": "Ocholi",
   "tenure": "14 Apr 03 - 18 Feb 05",
   "svc": "NAF/1580",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Olabisi",
   "tenure": "21 Apr 03 - 18 Feb 05",
   "svc": "NAF/1909",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BC",
   "surname": "Ugwueke",
   "tenure": "22 Apr 03 - 13 Feb 05",
   "svc": "NAF/1770",
   "branch": "Air Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KG",
   "surname": "Lar",
   "tenure": "05 May 03 - 18 Feb 05",
   "svc": "NAF/1882",
   "branch": "Air Police"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "LS",
   "surname": "Alao",
   "tenure": "08 Dec 03 - 20 Jan 06",
   "svc": "NAF/1961",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AS",
   "surname": "Maigari",
   "tenure": "08 Dec 03 - 20 Nov 05",
   "svc": "NAF/1597",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EO",
   "surname": "Ohanele",
   "tenure": "08 Dec 03 - 20 Jan 06",
   "svc": "NAF/2032",
   "branch": "Aerial Surv"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CE",
   "surname": "Okoye",
   "tenure": "08 Dec 03 - 20 Jan 06",
   "svc": "NAF/1716",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "MA",
   "surname": "Soladoye",
   "tenure": "08 Dec 03 - 22 Aug 05",
   "svc": "NAF/1850",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "TV",
   "surname": "Udoh",
   "tenure": "08 Dec 03 - 20 Jul 06",
   "svc": "NAF/1843",
   "branch": "IT"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IJ",
   "surname": "Yahaya",
   "tenure": "08 Dec 03 - 20 Jan 06",
   "svc": "NAF/1959",
   "branch": "Build Tech"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FA",
   "surname": "Ayamgha",
   "tenure": "05 Jan 04 - 03 Jan 06",
   "svc": "GH/1975",
   "branch": "Admin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AS",
   "surname": "Liman",
   "tenure": "16 Feb 04 - 10 Jul 05",
   "svc": "NAF/2099",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IT",
   "surname": "Ali",
   "tenure": "17 Feb 04 - 20 Jan 06",
   "svc": "NAF/2087",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "CD",
   "surname": "Otegbade",
   "tenure": "16 Apr 04 - 29 Jan 07",
   "svc": "NAF/1755",
   "branch": "Met"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HC",
   "surname": "Okpala",
   "tenure": "03 May 04 - 28 Apr 06",
   "svc": "NAF/1904",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SG",
   "surname": "Shehu",
   "tenure": "10 May 04 - 18 Feb 05",
   "svc": "NAF/2010",
   "branch": "Info"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CT",
   "surname": "Dii",
   "tenure": "19 May 04 - 01 Sep 05",
   "svc": "NAF/1903",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BA",
   "surname": "Adekoya",
   "tenure": "27 Aug 04 - 07 Jan 06",
   "svc": "NAF/1775",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OJ",
   "surname": "Osahor",
   "tenure": "05 Oct 04 - 29 Sep 06",
   "svc": "NAF/1778",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MG",
   "surname": "Abdul-Wahab",
   "tenure": "31 Jan 05 - 29 Jan 07",
   "svc": "NAF/1880",
   "branch": "Met"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NE",
   "surname": "Calmday",
   "tenure": "31 Jan 05 - 29 Sep 06",
   "svc": "NAF/2092",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CN",
   "surname": "Udeagulu",
   "tenure": "31 Jan 05 - 23 Jun 06",
   "svc": "NAF/2033",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MS",
   "surname": "Usman",
   "tenure": "31 Jan 05 - 12 Dec 06",
   "svc": "NAF/1783",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MO",
   "surname": "Olatunji",
   "tenure": "28 Feb 05 - 30 Jun 07",
   "svc": "NAF/2049",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CI",
   "surname": "Oghomwen",
   "tenure": "14 Mar 05 - 29 Aug 06",
   "svc": "NAF/1913",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Tuwase",
   "tenure": "29 Aug 05 - 30 Jun 07",
   "svc": "NAF/2079",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CA",
   "surname": "Ogbeche",
   "tenure": "01 Sep 05 - 23 Mar 07",
   "svc": "NAF/2047",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RN",
   "surname": "Ekeh",
   "tenure": "05 Sep 05 - 04 Sep 07",
   "svc": "NAF/2035",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AS",
   "surname": "Ogunmodede",
   "tenure": "20 Sep 05 - 04 Dec 07",
   "svc": "NAF/2132",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EK",
   "surname": "Adedokun",
   "tenure": "21 Nov 05 - 20 Nov 07",
   "svc": "NAF/2080",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HEO",
   "surname": "Eze",
   "tenure": "07 Dec 05 - 07 Aug 07",
   "svc": "NAF/2088",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NO",
   "surname": "Oyibo",
   "tenure": "07 Dec 05 - 12 Dec 06",
   "svc": "NAF/2037",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AL",
   "surname": "Lawson",
   "tenure": "03 Jan 06 - 07 Jan 08",
   "svc": "GH/1912",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SO",
   "surname": "Makinde",
   "tenure": "03 Jan 06 - 03 Jan 08",
   "svc": "NAF/2045",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IH",
   "surname": "Etukudo",
   "tenure": "12 Apr 06 - 11 Apr 08",
   "svc": "NAF/2157",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "S",
   "surname": "Olatunde",
   "tenure": "26 Apr 06 - 25 Apr 08",
   "svc": "NAF/2159",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "A",
   "surname": "Durotoye",
   "tenure": "02 May 06 - 01 May 08",
   "svc": "NAF/2127",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EO",
   "surname": "Chukwu",
   "tenure": "05 Jun 06 - To date",
   "svc": "NAF/2135",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IO",
   "surname": "Daramola",
   "tenure": "12 Jun 06 - To date",
   "svc": "NAF/2158",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EA",
   "surname": "Wonah",
   "tenure": "21 Jun 06 - To date",
   "svc": "NAF/2075",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PD",
   "surname": "Masiyer",
   "tenure": "26 Jun 06 - To date",
   "svc": "NAF/2123",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Adesanya",
   "tenure": "15 Dec 06 - To date",
   "svc": "NAF/2093",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JK",
   "surname": "Baba",
   "tenure": "15 Dec 06 - To date",
   "svc": "NAF/1916",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CU",
   "surname": "Nwagwu",
   "tenure": "08 Jan 07 - 07 Jan 09",
   "svc": "NAF/2170",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BD",
   "surname": "Solomon",
   "tenure": "08 Jan 07 - To date",
   "svc": "NAF/2150",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AI",
   "surname": "Adamu",
   "tenure": "04 Jun 07 - To date",
   "svc": "NAF/2153",
   "branch": "Pay"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "PN",
   "surname": "Dimfwina",
   "tenure": "06 Aug 07 - 04 May 09",
   "svc": "NAF/2040",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KK",
   "surname": "Olowo",
   "tenure": "06 Aug 07 - 05 Aug 09",
   "svc": "NAF/1915",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DG",
   "surname": "Prayero",
   "tenure": "06 Aug 07 - 25 Feb 09",
   "svc": "NAF/2072",
   "branch": "Pilot"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AR",
   "surname": "Salami",
   "tenure": "10 Dec 07 - 10 Dec 09",
   "svc": "NAF/2139",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NFK",
   "surname": "Dzokoto",
   "tenure": "02 Jan 08 - 05 Jan 10",
   "svc": "GH/2175",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Amodu",
   "tenure": "14 Jan 08 - 14 Jan 10",
   "svc": "NAF/2186",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CC",
   "surname": "Ozougwu",
   "tenure": "14 Jan 08 - 14 Jan 10",
   "svc": "NAF/2142",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KK",
   "surname": "Obidake",
   "tenure": "16 Jan 08 - 16 Jan 10",
   "svc": "NAF/2128",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OO",
   "surname": "Ogunmola",
   "tenure": "21 Jan 08 - 21 Jan 10",
   "svc": "NAF/2141",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AE",
   "surname": "Nweke",
   "tenure": "09 Jun 08 - 08 Jun 10",
   "svc": "NAF/2187",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "K",
   "surname": "Aliyu",
   "tenure": "09 Jul 08 - 08 Jul 10",
   "svc": "NAF/2125",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PB",
   "surname": "Phillips",
   "tenure": "17 Jul 08 - 16 Jul 10",
   "svc": "NAF/2238",
   "branch": "Regt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HI",
   "surname": "Alhaji",
   "tenure": "11 Aug 08 - 10 Aug 10",
   "svc": "NAF/2211",
   "branch": "CE"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "MC",
   "surname": "Nnaji",
   "tenure": "12 Jan 09 - 11 Jan 11",
   "svc": "NAF/2130",
   "branch": "C-E"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "D",
   "surname": "Ladan",
   "tenure": "04 Feb 09 - 03 Feb 11",
   "svc": "NAF/2154",
   "branch": "C-E"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CO",
   "surname": "Obiabaka",
   "tenure": "16 Feb 09 - 15 Feb 11",
   "svc": "NAF/2254",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "EA",
   "surname": "Ejodame",
   "tenure": "17 Feb 09 - 16 Feb 11",
   "svc": "NAF/2419",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GI",
   "surname": "Jibia",
   "tenure": "02 Mar 09 - 01 Mar 11",
   "svc": "NAF2322",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "S",
   "surname": "Lawal",
   "tenure": "02 Mar 09 - 01 Mar 11",
   "svc": "NAF/2119",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Akinbuwa",
   "tenure": "11 May 09 - 10 May 11",
   "svc": "NAF/2262",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EP",
   "surname": "Efanga",
   "tenure": "03 Aug 09 - 02 Aug 11",
   "svc": "NAF/2257",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AR",
   "surname": "Salami",
   "tenure": "10 Dec 09 - 29 Jan 10",
   "svc": "NAF/2139",
   "branch": "C-E"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IM",
   "surname": "Issaka",
   "tenure": "05 Jan 10 - 04 Jan 12",
   "svc": "GH/2449",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MC",
   "surname": "Ekwueme",
   "tenure": "10 Jan 10 - 09 Jan 13",
   "svc": "NAF/2249",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "UU",
   "surname": "Idris",
   "tenure": "25 Jan 10 - 23 Jan 12",
   "svc": "NAF/2437",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Kotun",
   "tenure": "01 Mar 10 - 09 Jan 13",
   "svc": "NAF/2283",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "G",
   "surname": "Adamu",
   "tenure": "13 Aug 10 - 12 Aug 12",
   "svc": "NAF/2307",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NK",
   "surname": "Kumzhi",
   "tenure": "13 Oct 10 - 05 Sep 11",
   "svc": "NAF/2181",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Shogbanmu",
   "tenure": "04 Jan 11 - 03 Jan 13",
   "svc": "NAF/2242",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "E",
   "surname": "Akintunde",
   "tenure": "21 Jan 11 - 30 Jan 13",
   "svc": "NAF/2420",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OO",
   "surname": "Oyesola",
   "tenure": "29 Apr 11 - 28 Apr 13",
   "svc": "NAF/2308",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Eyoma",
   "tenure": "03 May 11 - 02 May 13",
   "svc": "NAF/2321",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "NM",
   "surname": "Saidu",
   "tenure": "11 May 11 - 20 Nov 12",
   "svc": "NAF/2434",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "YA",
   "surname": "Katabiya",
   "tenure": "13 Jul 11 - 12 Jul 13",
   "svc": "NAF/2289",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "RK",
   "surname": "Olanrewaju",
   "tenure": "13 Jul 11 - 12 Jul 13",
   "svc": "NAF/2253",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AL",
   "surname": "Dakwat",
   "tenure": "05 Oct 11 - 04 Oct 13",
   "svc": "NAF/2319",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "PJ",
   "surname": "Edem",
   "tenure": "06 Oct 11 - 05 Oct 13",
   "svc": "NAF/2332",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OF",
   "surname": "Akinboyewa",
   "tenure": "31 Oct 11 - 01 Nov 13",
   "svc": "NAF/2309",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JA",
   "surname": "Ashirifie",
   "tenure": "25 Jan 12 - 24 Jan 14",
   "svc": "GH/2380",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "E",
   "surname": "Benson",
   "tenure": "19 Mar 12 - 18 Mar 14",
   "svc": "NAF/2517",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "SM",
   "surname": "Chindo",
   "tenure": "19 Mar 12 - 18 Mar 14",
   "svc": "NAF/2490",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AG",
   "surname": "Kehinde",
   "tenure": "11 Apr 12 - 10 Feb 14",
   "svc": "NAF/2228",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "EOE",
   "surname": "Ebiowe",
   "tenure": "20 Apr 12 - 19 Apr 14",
   "svc": "NAF/2215",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NB",
   "surname": "Folaji",
   "tenure": "07 Jun 12 - 06 Jun 14",
   "svc": "NAF/2315",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AY",
   "surname": "Dari",
   "tenure": "17 Sep 12 - 16 Sep 14",
   "svc": "NAF/2221",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "A",
   "surname": "Audu",
   "tenure": "28 Mar 13 - 27 Mar 15",
   "svc": "NAF/2433",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CC",
   "surname": "Ohanele",
   "tenure": "28 Mar 13 - 27 Mar 15",
   "svc": "NAF/2446",
   "branch": "Lab Sc"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "NS",
   "surname": "Hassan",
   "tenure": "31 Mar 13 - 01 Apr 15",
   "svc": "NAF/2513",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AI",
   "surname": "Hanidu",
   "tenure": "16 Nov 13 - 21 Apr 15",
   "svc": "NAF/2297",
   "branch": "C-E"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "OT",
   "surname": "Salami",
   "tenure": "17 Jul 13 - 16 Jul 15",
   "svc": "NAF/2292",
   "branch": "C-E"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IF",
   "surname": "Bassey",
   "tenure": "24 Jul 13 - 23 Jul 15",
   "svc": "NAF/2364",
   "branch": "Catering"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AT",
   "surname": "Adejimi",
   "tenure": "07 Aug 13 - 06 Aug 15",
   "svc": "NAF/2528",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AS",
   "surname": "Abubakar",
   "tenure": "07 Oct 13 - 06 Oct 15",
   "svc": "NAF/2520",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EA",
   "surname": "Ola",
   "tenure": "10 Nov 13 - 09 Nov 15",
   "svc": "NAF/2424",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TN",
   "surname": "Okai",
   "tenure": "20 Jan 14 - 19 Jan 16",
   "svc": "GH/2732",
   "branch": "Admin"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "CE",
   "surname": "Akubue",
   "tenure": "19 Feb 14 - 18 Feb 16",
   "svc": "NAF/2331",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "SA",
   "surname": "Madaki",
   "tenure": "19 Feb 14 - 18 Feb 16",
   "svc": "NAF/2329",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "KI",
   "surname": "Ukanwa",
   "tenure": "25 Mar 14 - 24 Mar 16",
   "svc": "NAF/2505",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DO",
   "surname": "Babalola",
   "tenure": "24 Oct 14 - 23 Oct 16",
   "svc": "NAF/2443",
   "branch": "Pharm"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AT",
   "surname": "Mohammed",
   "tenure": "03 Nov 14 - 02 Nov 16",
   "svc": "NAF/2489",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BO",
   "surname": "Amuneni",
   "tenure": "04 Mar 15 - 03 Mar 17",
   "svc": "NAF/2507",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MI",
   "surname": "Salawudeen",
   "tenure": "09 Mar 15 - 08 Mar 17",
   "svc": "NAF/2780",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NVE",
   "surname": "Uzodinma",
   "tenure": "16 Mar 15 - 15 Mar 17",
   "svc": "NAF/2547",
   "branch": "Physiotherapist"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OO",
   "surname": "Obasa",
   "tenure": "01 May 15 - 01 May 17",
   "svc": "NAF/2509",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "IO",
   "surname": "Adewunmi",
   "tenure": "12 May 15 - 11 May 17",
   "svc": "NAF/2351",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "BO",
   "surname": "Tongha",
   "tenure": "14 May 15 - 13 May 17",
   "svc": "NAF/2677",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MM",
   "surname": "Abdullahi",
   "tenure": "29 Jun 15 - 28 Jun 17",
   "svc": "NAF/2670",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JO",
   "surname": "Mamman",
   "tenure": "27 Jul 15 - 31 Dec 17",
   "svc": "NAF/2681",
   "branch": "Pers"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Bagale",
   "tenure": "05 Oct 15 - 31 Dec 17",
   "svc": "NAF/2756",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "OR",
   "surname": "Akinlofa",
   "tenure": "27 Oct 15 - 26 Oct 17",
   "svc": "NAF/2416",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Abu",
   "tenure": "27 Oct 15 - 26 Oct 17",
   "svc": "NAF/2504",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "CO",
   "surname": "Olayera",
   "tenure": "27 Oct 15 - 26 Oct 17",
   "svc": "NAF/2423",
   "branch": "Regt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IT",
   "surname": "Shankyula",
   "tenure": "27 Oct 15 - 26 Oct 18",
   "svc": "NAF/2781",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IE",
   "surname": "Ugbene",
   "tenure": "17 Mar 16 - 16 Mar 18",
   "svc": "NAF/2783",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CS",
   "surname": "Haruna",
   "tenure": "13 May 16 - 12 May 18",
   "svc": "NAF/2760",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Ogunmola",
   "tenure": "04 Jul 16 - 03 Jul 18",
   "svc": "NAF/2609",
   "branch": "Pharm"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MA",
   "surname": "Imam",
   "tenure": "31 Oct 16 - 30 Oct 18",
   "svc": "NAF/2591",
   "branch": "AP"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MI",
   "surname": "Salmanu",
   "tenure": "25 Nov 16 - 24 Nov 18",
   "svc": "NAF/2515",
   "branch": "Info"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DE",
   "surname": "Daniel",
   "tenure": "23 Mar 17 - 22 Mar 19",
   "svc": "NAF/2692",
   "branch": "Pharm"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SA",
   "surname": "Ochai",
   "tenure": "07 Jul 17 - 06 Jun 19",
   "svc": "NAF/2695",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EA",
   "surname": "Ogiriki",
   "tenure": "12 Jun 17 - 11 Jun 19",
   "svc": "NAF/2664",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OJ",
   "surname": "Umeadi",
   "tenure": "03 Jul 17 - 02 Jul 19",
   "svc": "NAF/2682",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AF",
   "surname": "Funsho-Ako",
   "tenure": "09 Oct 17 - 08 Oct 19",
   "svc": "NAF/2896",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PC",
   "surname": "Ofili",
   "tenure": "09 Oct 17 - 08 Oct 19",
   "svc": "NAF/2774",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MK",
   "surname": "Nanle",
   "tenure": "28 Dec 17 - 28 Dec 19",
   "svc": "NAF/2773",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Makama",
   "tenure": "08 Jan 18 - 08 Jan 20",
   "svc": "NAF/2659",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "M",
   "surname": "Sani",
   "tenure": "08 Jan 18 - 08 Jan 20",
   "svc": "NAF/2662",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "M",
   "surname": "Awuah",
   "tenure": "19 Jan 18 - 19 Jan 20",
   "svc": "GH/2793",
   "branch": "Admin"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "SO",
   "surname": "Uguzo",
   "tenure": "06 Jun 18 - 05 Jun 20",
   "svc": "NAF/2907",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HI",
   "surname": "Medugu",
   "tenure": "13 Sep 18 - 12 Sep 20",
   "svc": "NAF/2770",
   "branch": "Admin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "M",
   "surname": "Yahaya",
   "tenure": "14 Sep 18 - 13 Sep 20",
   "svc": "NAF/2589",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IA",
   "surname": "Irom",
   "tenure": "24 Sep 18 - 23 Sep 20",
   "svc": "NAF/2766",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "JC",
   "surname": "Igwenagun",
   "tenure": "26 Feb 19 - 25 Feb 21",
   "svc": "NAF/2871",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "AS",
   "surname": "Adamu",
   "tenure": "13 Mar 19 - 12 Mar 21",
   "svc": "NAF/2905",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "GP",
   "surname": "Yusuf",
   "tenure": "18 Mar 19 - 17 Mar 21",
   "svc": "NAF/2964",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GE",
   "surname": "Abbe",
   "tenure": "18 Apr 19 - 17 Apr 21",
   "svc": "NAF/2752",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "TE",
   "surname": "Odesola",
   "tenure": "30 Sep 19 - 29 Sep 21",
   "svc": "NAF/2915",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "F",
   "surname": "Kaze",
   "tenure": "30 Sep 19 - 29 Sep 21",
   "svc": "NAF/2958",
   "branch": "EE"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "MK",
   "surname": "Arabi",
   "tenure": "30 Sep 19 - 29 Sep 21",
   "svc": "NAF/2942",
   "branch": "Fin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Opaleye",
   "tenure": "02 Oct 19 - 01 Oct 21",
   "svc": "NAF/2679",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "ZO",
   "surname": "Tamunonime",
   "tenure": "02 Oct 19 - 03 Oct 21",
   "svc": "NAF/2959",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "LA",
   "surname": "Mahmud",
   "tenure": "11 Oct 19 - 10 Oct 21",
   "svc": "NAF/2904",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "UK",
   "surname": "Osokogu",
   "tenure": "26 Jan 20 - 25 Jan 22",
   "svc": "NAF/2921",
   "branch": "Fin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "TA",
   "surname": "Ezekiel",
   "tenure": "06 Jul 20 - 05 Jul 22",
   "svc": "NAF/2693",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Idoko",
   "tenure": "06 Jul 20 - To date",
   "svc": "NAF/2865",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "M",
   "surname": "Musa",
   "tenure": "20 Jul 20 - 19 Jul 22",
   "svc": "NAF/2946",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "N",
   "surname": "Watafua",
   "tenure": "05 Oct 21 - 04 Oct 22",
   "svc": "NAF/2935",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AD",
   "surname": "Yakubu",
   "tenure": "06 Oct 20 - 05 Oct 22",
   "svc": "NAF/2961",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "UU",
   "surname": "Akeel",
   "tenure": "07 Oct 20 - 06 Oct 22",
   "svc": "NAF/2872",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MS",
   "surname": "Ikara",
   "tenure": "14 Oct 20 - 13 Oct 22",
   "svc": "NAF/2933",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AA",
   "surname": "Haruna",
   "tenure": "07 Jan 21 - 06 Jan 23",
   "svc": "NAF/2813",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PA",
   "surname": "Wuyep",
   "tenure": "26 Feb 21 - 25 Feb 23",
   "svc": "NAF/2898",
   "branch": "IT"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "G",
   "surname": "Maidawa",
   "tenure": "26 Feb 21 - 25 Feb 23",
   "svc": "NAF/2908",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OJ",
   "surname": "Nwabunze",
   "tenure": "26 Feb 21 - 25 Feb 23",
   "svc": "NAF/3092",
   "branch": "Pharmacist"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OB",
   "surname": "Aigbomian",
   "tenure": "05 Mar 21 - 04 Mar 23",
   "svc": "NAF/3023",
   "branch": "Radar"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BC",
   "surname": "Nwabuche",
   "tenure": "01 Jun 21 - 31 Mar 24",
   "svc": "NAF/2931",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "DM",
   "surname": "Istifanus",
   "tenure": "07 Jun 21 - 06 Jun 23",
   "svc": "NAF/2875",
   "branch": "Admin/Pers"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AE",
   "surname": "Ekpo",
   "tenure": "26 Jun 21 - 25 Jun 23",
   "svc": "NAF/2757",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "PO",
   "surname": "Atebe",
   "tenure": "17 Dec 21 - 02 Jan 24",
   "svc": "NAF/2997",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Sqn Ldr",
   "initials": "M",
   "surname": "Usman",
   "tenure": "04 Jan 22 - 03 Jan 24",
   "svc": "NAF/3224",
   "branch": "Works"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FM",
   "surname": "Amedi",
   "tenure": "14 Jan 22 - 13 Jan 24",
   "svc": "GH/3326",
   "branch": "Log"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OM",
   "surname": "Makinde",
   "tenure": "17 Jan 22 - 16 Jan 24",
   "svc": "NAF/2885",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AM",
   "surname": "Na'inna",
   "tenure": "26 Jan 22 - 25 Jan 24",
   "svc": "NAF/2965",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AA",
   "surname": "Awolola",
   "tenure": "11 Feb 22 - 10 Feb 24",
   "svc": "NAF/3147",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OJ",
   "surname": "Nwite",
   "tenure": "11 Mar 22 - 10 Mar 24",
   "svc": "NAF/2665",
   "branch": "Corp-Nav"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IT",
   "surname": "Mato",
   "tenure": "28 Apr 22 - 27 Apr 24",
   "svc": "NAF/2909",
   "branch": "Fin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "IJ",
   "surname": "Okoh",
   "tenure": "01 Jun 22 - 31 May 24",
   "svc": "NAF/2971",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "VC",
   "surname": "Akiti",
   "tenure": "21 Jun 22 - 20 Jun 24",
   "svc": "NAF/2986",
   "branch": "ATC"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SI",
   "surname": "Tahir",
   "tenure": "24 Jun 22 - 23 Jun 24",
   "svc": "NAF/3024",
   "branch": "Edn"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "OB",
   "surname": "Ogundana",
   "tenure": "22 Sep 22 - 21 Sep 24",
   "svc": "NAF/2776",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NA",
   "surname": "Omoregie",
   "tenure": "29 Sep 22 - 28 Sep 24",
   "svc": "NAF/2937",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "Y",
   "surname": "Ahmed",
   "tenure": "16 Mar 23 - 15 Mar 25",
   "svc": "NAF/3148",
   "branch": "Comms"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "HN",
   "surname": "Ngulde",
   "tenure": "21 Aug 23 - 20 Aug 25",
   "svc": "NAF/3122",
   "branch": "EE"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "NE",
   "surname": "Efanga",
   "tenure": "18 Sep 23 - 17 Sep 25",
   "svc": "NAF/3197",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MM",
   "surname": "Yerima",
   "tenure": "19 Sep 23 - 18 Sep 25",
   "svc": "NAF/4652",
   "branch": "MED"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "BU",
   "surname": "Kaoje",
   "tenure": "25 Sep 23 - To date",
   "svc": "NAF/3111",
   "branch": "Armt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AO",
   "surname": "Adejumo",
   "tenure": "06 Oct 23 - 05 Oct 25",
   "svc": "NAF/2973",
   "branch": "UAV - Optr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "GL",
   "surname": "Ibrahim",
   "tenure": "09 Oct 23 - To date",
   "svc": "NAF/3191",
   "branch": "Psychologist"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "US",
   "surname": "Mohammed",
   "tenure": "10 Oct 23 - 09 Oct 25",
   "svc": "NAF/3214",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "EO",
   "surname": "Ndah",
   "tenure": "16 Oct 23 - 15 Oct 25",
   "svc": "NAF/3203",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "S",
   "surname": "Ampaw",
   "tenure": "16 Jan 24 - 15 Jan 26",
   "svc": "GH/3407",
   "branch": "GAF"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "FJ",
   "surname": "Ibrahim",
   "tenure": "02 May 24 - 01 May 26",
   "svc": "NAF/3109",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Ajayi",
   "tenure": "02 May 24 - 01 May 26",
   "svc": "NAF/2996",
   "branch": "Supply"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "JP",
   "surname": "Omumene",
   "tenure": "03 May 24 - To date",
   "svc": "NAF/3157",
   "branch": "Med Lab Sc"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AM",
   "surname": "Amolegbe",
   "tenure": "06 May 24 - To date",
   "svc": "NAF/3129",
   "branch": "Fin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CC",
   "surname": "Ohanbunwa",
   "tenure": "06 May 24 - To date",
   "svc": "NAF/3284",
   "branch": "PE/Sports"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "AS",
   "surname": "Inusa",
   "tenure": "13 May 24 - 12 May 26",
   "svc": "NAF/3150",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SB",
   "surname": "Madaki",
   "tenure": "13 May 24 - To date",
   "svc": "NAF/3115",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "B",
   "surname": "Ibrahim",
   "tenure": "02 Aug 24 - 01 Aug 26",
   "svc": "NAF/3001",
   "branch": "Ac Engr"
  },
  {
   "office": "ds",
   "rank": "Gp Capt",
   "initials": "AA",
   "surname": "Kotti",
   "tenure": "04 Nov 24 - 03 Nov 26",
   "svc": "NAF/2957",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "S",
   "surname": "Musa",
   "tenure": "13 Feb 25 - To date",
   "svc": "NAF/3138",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "ZJ",
   "surname": "Ayankpele",
   "tenure": "17 Mar 25 - To date",
   "svc": "NAF/2983",
   "branch": "Fin"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "K",
   "surname": "Usman",
   "tenure": "21 Oct 25 - To date",
   "svc": "NAF/3313",
   "branch": "Plt"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "",
   "surname": "Akuamoah-Boateng",
   "tenure": "16 Jan 26 - To date",
   "svc": "GH/3704",
   "branch": "GAF"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "MO",
   "surname": "Egwurube",
   "tenure": "30 Jan 26 - To date",
   "svc": "NAF/3163",
   "branch": "Int"
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "CK",
   "surname": "Akuma",
   "tenure": "02 Feb 26 - To date",
   "svc": "NAF/3211",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "OA",
   "surname": "Fatokun",
   "tenure": "05 Mar 26 - To date",
   "svc": "NAF/3261",
   "branch": null
  },
  {
   "office": "ds",
   "rank": "Wg Cdr",
   "initials": "SB",
   "surname": "Farouk",
   "tenure": "18 Mar 26 - To date",
   "svc": "NAF/3153",
   "branch": "Plt"
  }
 ]
};
