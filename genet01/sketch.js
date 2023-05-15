// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function () {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let x = 0;
    let y = 0;
    let rectSize = [200, 300];

    let lim = 200
    // 長方形を追加する。
    // let rect = new Path.Rectangle([x, y], rectSize);
    // rect.strokeColor = 'black';

    for (i = 0; i < lim; i+=2) {
        let rect = new Path.Rectangle([i, y], rectSize);
        rect.strokeColor = 'black';
    }

    // 画面を描く。
    view.draw();
});