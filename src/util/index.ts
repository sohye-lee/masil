
export const parse = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = new RegExp('[a-zA-Z0-9]+');
    const str = e.currentTarget.value;
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}   


export const loading = () => {
    const sleep = (ms:number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const words = ['Loading...', 'Please wait...']
    const box = document.getElementById('loadingBox')!;
    let sleepTime = 100;
    let curWordIndex = 0;

    const typing = async ( ) => {
        while (true) {
            let curWord = words[curWordIndex];
            console.log(curWord);
            await sleep(1000)
            curWordIndex = curWordIndex + 1 | 3;
        }
    }

    typing();
}