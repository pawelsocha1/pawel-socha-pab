export class Note {
    title: string;
    content: string;
    createDate?: string;
    tags?: Array<string>;
    id?: number;
}

const note = {
    title: "hahaaa",
};
note.title = "bleee";

const str = "12";
const nm = +str;

const samochody: any[] = [];
const benz = { nazwa: "Audi", rok: 2015 };
const bmw = { nazwa: "BMW", rok: 2010 };

samochody.push(benz, bmw);

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = [1, 2, 3, 4, 5, 6, 11];
const b = [...a1, ...a2];

b.forEach((value) => { });

for (const item of b) {
}


const audiIndex = samochody.findIndex((samochody) => samochody.nazwa === "Audi");
const audiIndex2 = samochody.findIndex(szukaj);
const audiCopy = samochody.find(szukaj);

function szukaj(samochody: any) {
    return samochody.nazwa === "Audi";
}

b.splice(0, 1);

const przed2022 = samochody.filter((st) => st.rok < 2012);
const n = samochody.filter((st) => st.nazwa != "Audi");

samochody.map((st) => {
    st.samochody++;
    return st;
});

for (const stKey in samochody) {
    const im = samochody[stKey];
}

class Samochod {
    nazwa: string;
    rok: number;
    _konie: number;
    constructor(st: Samochod) {
        this.nazwa = st.nazwa;
        this.rok = st.rok;
    }

    get konie(): number {
        return this._konie;
    }
    set konie(value: number) {
        this._konie = value;
    }
    getKonie(): number {
        return this._konie;
    }
}

let lambo: Samochod;

function multByTwoWithGuard(value:string|number):number{
    if(typeof value ==='number'){
        return value*2
    }else{
        return +value*2;
    }
}
