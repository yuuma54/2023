let item = 'ミカンジュース'

console.log(item + 'を飲んだ。');

function getDescription(name, price) {
    let res = '『' + name +'』' + price + '円';
    return res;
}

console.log('メニュー' + getDescription('パフェ', 860));