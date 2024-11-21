/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

export default async function Awaiter(time=1000) {
    if ( typeof time!=='number'  ) throw new Error("Awaiting Time is not a number");
    if ( time.toString()==='NaN' ) throw new Error("Awaiting Time can not be NaN");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('completed')
        }, time);
    })
}