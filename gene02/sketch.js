// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function () {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let x = 0;
    let y = 0;

    let gap = 20;

    let lim = 500;

    for (i = 0; i < lim; i += 20) {
        for (j = 0; j < lim; j += 20) {
            let path = new Path.Line([0, 0], [i, j]);
            path.strokeColor = 'red';
        }
    }

    // 画面を描く。
    view.draw();
});