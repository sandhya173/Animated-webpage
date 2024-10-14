const canvas = document.getElementById('backgroundAnimation');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let treeHeight = 0;
let treeGrowing = true;

function drawTreeTrunk() {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height - treeHeight);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#8B4513';
    ctx.stroke();
}

function drawTreeLeaves() {
    if (treeHeight >= 150) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height - treeHeight - 30, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#228B22';
        ctx.fill();
    }
}

function animateTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (treeGrowing && treeHeight < 200) {
        treeHeight += 2;
    } else if (treeHeight >= 200) {
        treeGrowing = false;
    } else if (!treeGrowing && treeHeight > 0) {
        treeHeight -= 2;
    } else {
        treeGrowing = true;
    }

   
}