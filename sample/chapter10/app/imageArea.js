	// windowにDOMContentLoadedの処理を登録
	window.addEventListener('DOMContentLoaded', e => {
		// 画像エリアの要素
		const elImgA = document.querySelector('#imageArea');
		const elNoView = document.querySelector('#noView');
		const elFile = document.querySelector('#file');

		// Canvas関係の要素
		const canvas = document.querySelector('#view');
		const context = canvas.getContext('2d');

		//--------------------
		// 画像エリアにドロップしたときの処理
		elImgA.addEventListener('dragover', e => {
			e.preventDefault();
		});
		elImgA.addEventListener('dragleave', e => {
			e.preventDefault();
		});
		elImgA.addEventListener('drop', e => {
			e.preventDefault();
			uiReadImage(e.dataTransfer.files[0]);
		});

		// 画像エリアをクリックしたときの処理
		elImgA.addEventListener('click', e => {
			elFile.click();
		});
		elFile.addEventListener('change', e => {
			uiReadImage(e.target.files[0]);
		});

		//--------------------
		// 以降関数

		// 画像エリア ファイルの読み込み
		async function uiReadImage(file) {
			// 画像の読み込みとCanvasへの描画
			try {
				const dtURL = await readImage(file);
				await drawImage(dtURL, canvas, context);
			} catch(e) {
				return;
			}

			// 表示の変更
			elNoView.style.display = 'none';
			canvas.style.display = 'inline';

			// 読み込み時間の設定
			canvas.setAttribute('time', Date.now());

			// キャンバスの内容をストレージに保存
			saveStorageCanvas();
		}

		// 画像ファイルの読み込み
		function readImage(file) {
			return new Promise((resolve, reject) => {
				// ファイル種類の有効性の確認
				const re = /\.(png|jpg|jpeg|gif)$/i;
				if (! file.name.match(re)) {
					reject();
					return;
				}

				// ファイルの読み込み
				const reader = new FileReader();
				reader.onload = () => {
					resolve(reader.result);
				};
				reader.readAsDataURL(file);
			});
		}

		// 画像の描画
		function drawImage(url, canvas, context) {
			return new Promise((resolve, reject) => {
				// 画像を読み込み
				const img = new Image();
				img.src =url;
				img.onload = () => {
					// 横幅、高さの変数を作成
					const wC = canvas.width;
					const hC = canvas.height;
					const wI = img.width;
					const hI = img.height;

					// 読み込んだ画像を貼り付け
					context.drawImage(img, 0, 0, wI, hI,
						0, 0, wC, hC);
					resolve();
				};
			});
		}
	});