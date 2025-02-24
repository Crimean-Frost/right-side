export default {
    execute: (text?: string | null) => {
        if (!text) return ''
        let count = 0;
        let positions: number[] = [];
        text = text.replace(/<\/?p>/g, '');
        text = text.replace('<meta charset="utf-8">', '');
        text = text.replace(/>(?=[^\s<])/g, (match, offset) => {
            if (count > 0 && offset !== 0) {
                positions.push(offset + 1);
                return '> ';
            }
            count++;
            return '>';
        });
        const prepositions = [
            'без', 'для', 'над', 'под',
            'при', 'про', 'через', 'вокруг', 'вместо', 'внутри', 'впереди', 'ее', 'ему',
            'вследствие', 'наподобие', 'насчёт', "или", 'средств', 'вашей', "его", "свой", "поэтому", "после", "таких", "такой", "такая", "такое", "что", "что-то", "где-то", "зачем-то", "почему-то", "никто", "чтобы", "почти", "потом", "если", "пока", "она", "всем", "всех", "вся", "весь", "как", "даже", "итоге", "это", "этот", "эта", "этой", "этого", "того", "той", "новый", "новая", "новое", "том", "тому", "той", "их", "уже"];

        let res: string = text?.split(' ').filter(item => item.trim().length > 0).map(word => {
            const small = word.trim().length < 3 && !word.trim().includes('.') && !word.trim().includes(',') && !word.trim().includes('-') && !word.trim().includes('—') && word !== 'ее' && word !== 'Мы' && word !== 'мы'

            if (!/^\d+(,|%)?$/.test(word) && prepositions.some((item => small || word === item || word === (item.charAt(0).toUpperCase() + item.slice(1))))) {
                return word + '\u00A0'
            } else {
                return word + ' '
            }
        }).join('');
        res = res.replace(/(\s)-/g, '\u00A0-');
        res = res.replace(/(\s)—/g, '\u00A0—');
        positions.forEach(position => {
            res = res.slice(0, position) + res.slice(position + 1); // Удаляем пробел
        });
        return res;
    }
}

