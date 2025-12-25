const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const photoBtn = document.getElementById("photoBtn");
const downloadBtn = document.getElementById("downloadBtn");

let shots = [];
let shotCount = 0;

// kamera 16:9
navigator.mediaDevices.getUserMedia({
  video: { width: 1280, height: 720 }
}).then(stream => video.srcObject = stream);

// ambil foto per shot
function takePhoto() {
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = 720;
  tempCanvas.height = 405; // 16:9
  const tctx = tempCanvas.getContext("2d");

  tctx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
  shots.push(tempCanvas);
}

// tombol foto
photoBtn.addEventListener("click", () => {
  if (shotCount < 3) {
    takePhoto();
    shotCount++;

    photoBtn.innerText = `📷 Foto (${shotCount}/3)`;

    // jeda 1 detik
    setTimeout(() => {
      if (shotCount === 3) {
        renderFinal();
      }
    }, 800);
  }
});

// gabung ke frame
function renderFinal() {
  const frame = new Image();
  frame.src = "frames/frames4.png";

  frame.onload = () => {
    // posisi foto sesuai lubang frame
    ctx.drawImage(shots[0], 60, 70, 600, 350);
    ctx.drawImage(shots[1], 60, 560, 600, 350);
    ctx.drawImage(shots[2], 60, 1050, 600, 350);

    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

    canvas.classList.remove("hidden");
    downloadBtn.classList.remove("hidden");
    photoBtn.classList.add("hidden");
  };
}

// download
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "photobooth-3shot.png";
  link.href = canvas.toDataURL();
  link.click();
});
