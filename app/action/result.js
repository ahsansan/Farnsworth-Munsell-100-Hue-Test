'use server';

export async function matchColors(payload, dataAnswer) {
    let result = [];
    let totalCorrect = 0;
    let totalIncorrect = 0;

    // Loop untuk setiap item pada payload
    payload.forEach((item, index) => {
        item.testColor.forEach((colorItem) => {
        // Mencari warna yang sesuai pada dataAnswer berdasarkan warna yang sama
        const answer = dataAnswer[index].testColor.find(answerItem => answerItem.color === colorItem.color);
        
        if (answer) {
            // Menghitung perbedaan urutan antara posisi yang benar dan posisi yang dijawab
            const resultValue = Math.abs(parseInt(colorItem.order) - parseInt(answer.order));

            // Jika urutan sama, maka dianggap benar
            if (resultValue === 0) {
            totalCorrect++;
            } else {
            totalIncorrect++;
            }

            // Menambahkan hasil ke dalam array result
            result.push({
            color: colorItem.color,
            result: resultValue
            });
        }
        });
    });

    return {
        result,
        totalCorrect,
        totalIncorrect
    };
}