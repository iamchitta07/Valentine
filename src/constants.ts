import STK1 from "/gifs/STK-1.webp";
import STK2 from "/gifs/STK-2.webp";
import STK3 from "/gifs/STK-3.webp";
import STK4 from "/gifs/STK-4.webp";
import STK5 from "/gifs/STK-5.webp";
import STK6 from "/gifs/STK-6.webp";
import STK7 from "/gifs/STK-7.webp";
import STK8 from "/gifs/STK-8.webp";
import STK9 from "/gifs/STK-9.webp";

import IMG1 from "/images/IMG-1.webp";
import IMG2 from "/images/IMG-2.webp";
import IMG3 from "/images/IMG-3.webp";
import IMG4 from "/images/IMG-4.webp";
import IMG5 from "/images/IMG-5.webp";
import IMG6 from "/images/IMG-6.webp";
import IMG7 from "/images/IMG-7.webp";
import IMG8 from "/images/IMG-8.webp";
import IMG9 from "/images/IMG-9.webp";
import IMG10 from "/images/IMG-10.webp";

import BACK1 from "/images/Card-1.webp";
import BACK2 from "/images/Card-2.webp";
import BACK3 from "/images/Card-3.webp";
import BACK4 from "/images/Card-4.webp";
import BACK5 from "/images/Card-5.webp";
import BACK6 from "/images/Card-6.webp";
import BACK7 from "/images/Card-7.webp";
import BACK8 from "/images/Card-8.webp";
import BACK9 from "/images/Card-9.webp";
import BACK10 from "/images/Card-10.webp";

import type { CardProps, CardMsg } from "./types";

export const GIFs: string[] = [STK1, STK2, STK3, STK4, STK5, STK6, STK7, STK8, STK9];
export const nickNames: Array<string> = [
  "Babeeee...",
  "Sanuuuu...",
  "Pglll...",
  "Khepiii...",
  "Hridoytukrooo...",
  "Januuu...",
  "Sonaaa...",
  "Pgllii...",
  "Darlinggg...",
];
export const noTexts: Array<string> = [
  "No 😠!",
  "Really 😒!",
  "Think again 🤨!",
  "I'll be hurt 🥹!",
  "Pleaseeee...🥺",
  "Give me a last chance 🥺!",
  "I am too bad 😭",
  "Last Chance 🤭",
];
export const loveText: string =
  "তুমি আবার এসো, করব আগের মতন-ই আপন।\nমানুষটা পাল্টে গেছি, কিন্ত ভালবাসা রয়ে গেলো সেই পুরাতন।\nমূল্য নেই তোমার কোন, কারণ তুমি অমুল্য রত্নের মত।\nহারিয়েছি! হারাচ্ছি! কিন্তু পুনরায় কেন নূতনের মত তোমায় খুঁজে পাচ্ছি?\nজীবনের শেষ হোক বা সময়ের, শুধুই তোমাকে পাশে চেয়েছি, শুধুই চেয়ে যাব।\nহারিয়ে গিয়েছিলাম স্রোতে, চলেছিলাম ভিন্ন এক নূতন উপকূলের সন্ধানে।\nপৌঁছে দেখি, সেই তুমিই আমার স্বাগতম অভিনন্দনে!\nধৈর্য, সময়ের পরীক্ষায় সবই তো পরীক্ষণ করলে!\nএখনও কী মনে হয়, ভুল ব্যক্তিকে ভালবাসলে?";

export const cards: CardProps[] = [
  {
    image: IMG9,
    title: "প্রথম সরস্বতী পূজো",
    description: "আমাদের কাটানো প্রথম সরস্বতী পূজো, একে অপরকে যখন স্বল্প স্বল্প চিনি।",
    backCard: BACK1
},
{
    image: IMG1,
    title: "দ্বিতীয় সরস্বতী পুজো",
    description:
    "দ্বিতীয় বার আমরা সরস্বতী পূজোতে একসাথে, একই রঙের শাড়ি, পাঞ্জাবি পরে বেরই, দিনটি এখনো স্মরণীয় থাকবে।",
    backCard: BACK2
},
{
    image: IMG2,
    title: "একান্ত সময়",
    description: "তোকে আনতে আসার সময়, কিছু সময় ব্যান্ডেল স্টেশন, একান্ত কিছু সময়।",
    backCard: BACK3
},
{
    image: IMG3,
    title: "রাঙামাটি",
    description: "প্রথমবার রাঙামাটিতে তোর সথে কাটানো কিছু সময়।",
    backCard: BACK9
},
{
    image: IMG4,
    title: "প্রিয়র জন্মদিনে",
    description: "প্রথমবার একসাথে তোর জন্মদিন সেলিব্রেট-এর কিছু সময়।",
    backCard: BACK5
},
{
    image: IMG5,
    title: "চাওয়ালা-তে কাটানো কিছু সময়",
    description: "সেই আমাদের প্রথম ডেট প্লেস, চাওয়ালা।",
    backCard: BACK6
},
{
    image: IMG6,
    title: "১২ই ফেব্রুয়ারি",
    description: "একসাথে আসা, সেই রাত ১১টায় জনশুন্য রাস্তা গুলো থেকে আন্টির এর তোর সাথে।",
    backCard: BACK7
},
{
    image: IMG7,
    title: "প্রথম দশমী",
    description: "সেই প্রথম দশমী, আমরা একসাথে ফাশীতলা ঘটে কাটানোর কিছু সময়।",
    backCard: BACK8
},
{
    image: IMG8,
    title: "ইকো পার্ক",
    description: "হঠাৎ দেখা বলে, পুরো ইকো পার্ক একসাথে ঘুরার কিছু সময়।",
    backCard: BACK4
},
{
    image: IMG10,
    title: "তৃতীয় সরস্বতী পূজো",
    description:
    "আমাদের একসাথে কাটানো তৃতীয় সরস্বতী পূজো, হ্যাঁ! সরস্বতী পুজোর দিন হ্য়তো ঘুরতে পারিনি, কিন্তু পরের দিন একসাথে অনেকটাই সময় কাটিয়েছিলাম।",
    backCard: BACK10
  },
];

export const cardMsg: CardMsg[] = [
  {title: '~My Dearest~', description: "Every moment with you is a treasure I hold dear..."},
  {title: '~Forever Yours~', description: "I love you more than words can express. Be my Valentine?"},
  {title: '~Always & Always~', description: "In every heartbeat, in every quiet moment, I find you. Loving you is my favourite forever."},
  {title: '~Just Us~', description: "Through laughter, chaos, and calm, I choose you—today, tomorrow, and every day after."},
  {title: '~With All My Heart~', description: "Every smile you share lights up my world, and every touch reminds me how lucky I am to love you."},
]