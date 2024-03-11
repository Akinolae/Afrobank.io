const banks = [
  {
    bank_name: "9mobile 9Payment Service Bank",
    bank_code: "120001",
    abbv: "9mobile-9payment-service-bank-ng",
  },
  {
    bank_name: "Abbey Mortgage Bank",
    bank_code: "801",
    abbv: "abbey-mortgage-bank",
  },
  { bank_name: "Above Only MFB", bank_code: "51204", abbv: "above-only-mfb" },
  { bank_name: "Abulesoro MFB", bank_code: "51312", abbv: "abulesoro-mfb-ng" },
  { bank_name: "Access Bank", bank_code: "044", abbv: "access-bank" },
  {
    bank_name: "Access Bank (Diamond)",
    bank_code: "063",
    abbv: "access-bank-diamond",
  },
  {
    bank_name: "Accion Microfinance Bank",
    bank_code: "602",
    abbv: "accion-microfinance-bank-ng",
  },
  {
    bank_name: "Ahmadu Bello University Microfinance Bank",
    bank_code: "50036",
    abbv: "ahmadu-bello-university-microfinance-bank-ng",
  },
  {
    bank_name: "Airtel Smartcash PSB",
    bank_code: "120004",
    abbv: "airtel-smartcash-psb-ng",
  },
  { bank_name: "AKU Microfinance Bank", bank_code: "51336", abbv: "aku-mfb" },
  { bank_name: "ALAT by WEMA", bank_code: "035A", abbv: "alat-by-wema" },
  { bank_name: "Amju Unique MFB", bank_code: "50926", abbv: "amju-unique-mfb" },
  {
    bank_name: "AMPERSAND MICROFINANCE BANK",
    bank_code: "51341",
    abbv: "ampersand-microfinance-bank-ng",
  },
  { bank_name: "Aramoko MFB", bank_code: "50083", abbv: "aramoko-mfb" },
  { bank_name: "ASO Savings and Loans", bank_code: "401", abbv: "asosavings" },
  {
    bank_name: "Astrapolaris MFB LTD",
    bank_code: "MFB50094",
    abbv: "astrapolaris-mfb",
  },
  {
    bank_name: "Bainescredit MFB",
    bank_code: "51229",
    abbv: "bainescredit-mfb",
  },
  {
    bank_name: "Banc Corp Microfinance Bank",
    bank_code: "50117",
    abbv: "banc-corp-microfinance-bank-ng",
  },
  {
    bank_name: "Bowen Microfinance Bank",
    bank_code: "50931",
    abbv: "bowen-microfinance-bank",
  },
  {
    bank_name: "Branch International Financial Services Limited",
    bank_code: "FC40163",
    abbv: "branch",
  },
  { bank_name: "Carbon", bank_code: "565", abbv: "carbon" },
  {
    bank_name: "CASHCONNECT MFB",
    bank_code: "865",
    abbv: "cashconnect-mfb-ng",
  },
  {
    bank_name: "CEMCS Microfinance Bank",
    bank_code: "50823",
    abbv: "cemcs-microfinance-bank",
  },
  {
    bank_name: "Chanelle Microfinance Bank Limited",
    bank_code: "50171",
    abbv: "chanelle-microfinance-bank-limited-ng",
  },
  { bank_name: "Citibank Nigeria", bank_code: "023", abbv: "citibank-nigeria" },
  {
    bank_name: "Consumer Microfinance Bank",
    bank_code: "50910",
    abbv: "consumer-microfinance-bank-ng",
  },
  { bank_name: "Corestep MFB", bank_code: "50204", abbv: "corestep-mfb" },
  {
    bank_name: "Coronation Merchant Bank",
    bank_code: "559",
    abbv: "coronation-merchant-bank-ng",
  },
  {
    bank_name: "County Finance Limited",
    bank_code: "FC40128",
    abbv: "county-finance-limited",
  },
  { bank_name: "Crescent MFB", bank_code: "51297", abbv: "crescent-mfb" },
  {
    bank_name: "Dot Microfinance Bank",
    bank_code: "50162",
    abbv: "dot-microfinance-bank-ng",
  },
  { bank_name: "Ecobank Nigeria", bank_code: "050", abbv: "ecobank-nigeria" },
  { bank_name: "Ekimogun MFB", bank_code: "50263", abbv: "ekimogun-mfb-ng" },
  {
    bank_name: "Ekondo Microfinance Bank",
    bank_code: "098",
    abbv: "ekondo-microfinance-bank-ng",
  },
  { bank_name: "Eyowo", bank_code: "50126", abbv: "eyowo" },
  {
    bank_name: "Fairmoney Microfinance Bank",
    bank_code: "51318",
    abbv: "fairmoney-microfinance-bank-ng",
  },
  { bank_name: "Fidelity Bank", bank_code: "070", abbv: "fidelity-bank" },
  { bank_name: "Firmus MFB", bank_code: "51314", abbv: "firmus-mfb" },
  {
    bank_name: "First Bank of Nigeria",
    bank_code: "011",
    abbv: "first-bank-of-nigeria",
  },
  {
    bank_name: "First City Monument Bank",
    bank_code: "214",
    abbv: "first-city-monument-bank",
  },
  {
    bank_name: "FirstTrust Mortgage Bank Nigeria",
    bank_code: "107",
    abbv: "firsttrust-mortgage-bank-nigeria-ng",
  },
  { bank_name: "FLOURISH MFB", bank_code: "50315", abbv: "flourish-mfb-ng" },
  {
    bank_name: "FSDH Merchant Bank Limited",
    bank_code: "501",
    abbv: "fsdh-merchant-bank-limited",
  },
  {
    bank_name: "Gateway Mortgage Bank LTD",
    bank_code: "812",
    abbv: "gateway-mortgage-bank",
  },
  { bank_name: "Globus Bank", bank_code: "00103", abbv: "globus-bank" },
  { bank_name: "GoMoney", bank_code: "100022", abbv: "gomoney" },
  {
    bank_name: "Goodnews Microfinance Bank",
    bank_code: "50739",
    abbv: "goodnews-microfinance-bank-ng",
  },
  {
    bank_name: "Greenwich Merchant Bank",
    bank_code: "562",
    abbv: "greenwich-merchant-bank-ng",
  },
  {
    bank_name: "Guaranty Trust Bank",
    bank_code: "058",
    abbv: "guaranty-trust-bank",
  },
  {
    bank_name: "Hackman Microfinance Bank",
    bank_code: "51251",
    abbv: "hackman-microfinance-bank",
  },
  {
    bank_name: "Hasal Microfinance Bank",
    bank_code: "50383",
    abbv: "hasal-microfinance-bank",
  },
  { bank_name: "Heritage Bank", bank_code: "030", abbv: "heritage-bank" },
  { bank_name: "HopePSB", bank_code: "120002", abbv: "hopepsb-ng" },
  {
    bank_name: "Ibile Microfinance Bank",
    bank_code: "51244",
    abbv: "ibile-mfb",
  },
  { bank_name: "Ikoyi Osun MFB", bank_code: "50439", abbv: "ikoyi-osun-mfb" },
  {
    bank_name: "Ilaro Poly Microfinance Bank",
    bank_code: "50442",
    abbv: "ilaro-poly-microfinance-bank-ng",
  },
  { bank_name: "Infinity MFB", bank_code: "50457", abbv: "infinity-mfb" },
  { bank_name: "Jaiz Bank", bank_code: "301", abbv: "jaiz-bank" },
  { bank_name: "Kadpoly MFB", bank_code: "50502", abbv: "kadpoly-mfb" },
  { bank_name: "Keystone Bank", bank_code: "082", abbv: "keystone-bank" },
  {
    bank_name: "Kredi Money MFB LTD",
    bank_code: "50200",
    abbv: "kredi-money-mfb",
  },
  { bank_name: "Kuda Bank", bank_code: "50211", abbv: "kuda-bank" },
  {
    bank_name: "Lagos Building Investment Company Plc.",
    bank_code: "90052",
    abbv: "lbic-plc",
  },
  { bank_name: "Links MFB", bank_code: "50549", abbv: "links-mfb" },
  {
    bank_name: "Living Trust Mortgage Bank",
    bank_code: "031",
    abbv: "living-trust-mortgage-bank",
  },
  { bank_name: "Lotus Bank", bank_code: "303", abbv: "lotus-bank" },
  { bank_name: "Mayfair MFB", bank_code: "50563", abbv: "mayfair-mfb" },
  { bank_name: "Mint MFB", bank_code: "50304", abbv: "mint-mfb" },
  {
    bank_name: "Moniepoint MFB",
    bank_code: "50515",
    abbv: "moniepoint-mfb-ng",
  },
  { bank_name: "MTN Momo PSB", bank_code: "120003", abbv: "mtn-momo-psb-ng" },
  {
    bank_name: "Optimus Bank Limited",
    bank_code: "00107",
    abbv: "optimus-bank-ltd",
  },
  { bank_name: "Paga", bank_code: "100002", abbv: "paga" },
  { bank_name: "PalmPay", bank_code: "999991", abbv: "palmpay" },
  { bank_name: "Parallex Bank", bank_code: "104", abbv: "parallex-bank" },
  {
    bank_name: "Parkway - ReadyCash",
    bank_code: "311",
    abbv: "parkway-ready-cash",
  },
  { bank_name: "Paycom", bank_code: "999992", abbv: "paycom" },
  {
    bank_name: "Peace Microfinance Bank",
    bank_code: "50743",
    abbv: "peace-microfinance-bank-ng",
  },
  {
    bank_name: "Personal Trust MFB",
    bank_code: "51146",
    abbv: "personal-trust-mfb-ng",
  },
  {
    bank_name: "Petra Mircofinance Bank Plc",
    bank_code: "50746",
    abbv: "petra-microfinance-bank-plc",
  },
  { bank_name: "Polaris Bank", bank_code: "076", abbv: "polaris-bank" },
  {
    bank_name: "Polyunwana MFB",
    bank_code: "50864",
    abbv: "polyunwana-mfb-ng",
  },
  {
    bank_name: "PremiumTrust Bank",
    bank_code: "105",
    abbv: "premiumtrust-bank-ng",
  },
  { bank_name: "Providus Bank", bank_code: "101", abbv: "providus-bank" },
  { bank_name: "QuickFund MFB", bank_code: "51293", abbv: "quickfund-mfb" },
  {
    bank_name: "Rand Merchant Bank",
    bank_code: "502",
    abbv: "rand-merchant-bank",
  },
  {
    bank_name: "Refuge Mortgage Bank",
    bank_code: "90067",
    abbv: "refuge-mortgage-bank",
  },
  {
    bank_name: "Rigo Microfinance Bank Limited",
    bank_code: "51286",
    abbv: "rigo-microfinance-bank-limited-ng",
  },
  {
    bank_name: "ROCKSHIELD MICROFINANCE BANK",
    bank_code: "50767",
    abbv: "rockshield-microfinance-bank-ng",
  },
  { bank_name: "Rubies MFB", bank_code: "125", abbv: "rubies-mfb" },
  {
    bank_name: "Safe Haven MFB",
    bank_code: "51113",
    abbv: "safe-haven-mfb-ng",
  },
  {
    bank_name: "Safe Haven Microfinance Bank Limited",
    bank_code: "951113",
    abbv: "safe-haven-microfinance-bank-limited-ng",
  },
  { bank_name: "Shield MFB", bank_code: "50582", abbv: "shield-mfb-ng" },
  {
    bank_name: "Solid Allianze MFB",
    bank_code: "51062",
    abbv: "solid-allianze-mfb",
  },
  { bank_name: "Solid Rock MFB", bank_code: "50800", abbv: "solid-rock-mfb" },
  {
    bank_name: "Sparkle Microfinance Bank",
    bank_code: "51310",
    abbv: "sparkle-microfinance-bank",
  },
  {
    bank_name: "Stanbic IBTC Bank",
    bank_code: "221",
    abbv: "stanbic-ibtc-bank",
  },
  {
    bank_name: "Standard Chartered Bank",
    bank_code: "068",
    abbv: "standard-chartered-bank",
  },
  { bank_name: "Stellas MFB", bank_code: "51253", abbv: "stellas-mfb" },
  { bank_name: "Sterling Bank", bank_code: "232", abbv: "sterling-bank" },
  { bank_name: "Suntrust Bank", bank_code: "100", abbv: "suntrust-bank" },
  { bank_name: "Supreme MFB", bank_code: "50968", abbv: "supreme-mfb-ng" },
  { bank_name: "TAJ Bank", bank_code: "302", abbv: "taj-bank" },
  {
    bank_name: "Tanadi Microfinance Bank",
    bank_code: "090560",
    abbv: "tanadi-microfinance-bank-ng",
  },
  { bank_name: "Tangerine Money", bank_code: "51269", abbv: "tangerine-money" },
  { bank_name: "TCF MFB", bank_code: "51211", abbv: "tcf-mfb" },
  { bank_name: "Titan Bank", bank_code: "102", abbv: "titan-bank" },
  { bank_name: "Titan Paystack", bank_code: "100039", abbv: "titan-paystack" },
  {
    bank_name: "U&C Microfinance Bank Ltd (U AND C MFB)",
    bank_code: "50840",
    abbv: "uc-microfinance-bank-ltd-u-and-c-mfb-ng",
  },
  { bank_name: "Uhuru MFB", bank_code: "MFB51322", abbv: "uhuru-mfb-ng" },
  {
    bank_name: "Unaab Microfinance Bank Limited",
    bank_code: "50870",
    abbv: "unaab-microfinance-bank-limited-ng",
  },
  { bank_name: "Unical MFB", bank_code: "50871", abbv: "unical-mfb" },
  {
    bank_name: "Unilag Microfinance Bank",
    bank_code: "51316",
    abbv: "unilag-microfinance-bank-ng",
  },
  {
    bank_name: "Union Bank of Nigeria",
    bank_code: "032",
    abbv: "union-bank-of-nigeria",
  },
  {
    bank_name: "United Bank For Africa",
    bank_code: "033",
    abbv: "united-bank-for-africa",
  },
  { bank_name: "Unity Bank", bank_code: "215", abbv: "unity-bank" },
  { bank_name: "VFD Microfinance Bank Limited", bank_code: "566", abbv: "vfd" },
  {
    bank_name: "Waya Microfinance Bank",
    bank_code: "51355",
    abbv: "waya-microfinance-bank-ng",
  },
  { bank_name: "Wema Bank", bank_code: "035", abbv: "wema-bank" },
  { bank_name: "Zenith Bank", bank_code: "057", abbv: "zenith-bank" },
];

export { banks };
