
export const parse = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = new RegExp('[a-zA-Z0-9]+');
    const str = e.currentTarget.value;
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}   