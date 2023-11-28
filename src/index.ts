
import { defaultWords } from "./defaultWords";

interface CheckFillProps {
    text: string;
    addWords?: string[];
    deleteWords?: string[];
    returnType?: number; // default 0
}

export const checkFill = (props: CheckFillProps): string | boolean => {
    if (props.addWords) {
        props.addWords.forEach((word) => {
            defaultWords.push(word);
        });
    }
    if (props.deleteWords) {
        props.deleteWords.forEach((data) => {
            const index = defaultWords.indexOf(data);
            if (index !== -1) {
                defaultWords.splice(index, 1);
            }
        });
    }

    const returnType = props.returnType !== undefined ? props.returnType : 0; // default  0

    if (returnType === 0) {
        const text = props.text.toLowerCase();

        const isMatch = defaultWords.some((word) => text.includes(word));

        return isMatch;
    }

    const regExpSource = defaultWords.join("|");
    const regExpFilter = new RegExp(regExpSource, "ig");
    const result = props.text.replace(regExpFilter, (word) =>
        replaceFunction(word)
    );

    return result;
};

const replaceFunction = (word: string): string => {
    let asteriks = "";
    for (let i = 0; i < word.length; i++) {
        asteriks += "*";
    }
    return asteriks;
};

