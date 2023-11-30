document.addEventListener("DOMContentLoaded", function () {
  // Get input elements
  const side1 = document.getElementById("stat-1");
  const side2 = document.getElementById("stat-2");
  const side3 = document.getElementById("stat-3");
  const side4 = document.getElementById("stat-4");
  const side5 = document.getElementById("stat-5");

  // Get canvas element
  const canvas = document.getElementById("pentagonCanvas");
  const context = canvas.getContext("2d");

  // Event listener for input changes
  [side1, side2, side3, side4, side5].forEach(input => {
    input.addEventListener("input", drawPentagons);
  });

  // Initial draw
  drawPentagons();

  // Function to draw a single pentagon
  function drawPentagon(s1, s2, s3, s4, s5, lineWidth = 1, color = "#111", fillColor = "") {
    // Calculate coordinates of the pentagon vertices
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const angle = (Math.PI * 2) / 5;

    const x1 = centerX - Math.sin(0) * s1;
    const y1 = centerY - Math.cos(0) * s1;

    const x2 = centerX - Math.sin(angle) * s2;
    const y2 = centerY - Math.cos(angle) * s2;

    const x3 = centerX - Math.sin(angle * 2) * s3;
    const y3 = centerY - Math.cos(angle * 2) * s3;

    const x4 = centerX - Math.sin(angle * 3) * s4;
    const y4 = centerY - Math.cos(angle * 3) * s4;

    const x5 = centerX - Math.sin(angle * 4) * s5;
    const y5 = centerY - Math.cos(angle * 4) * s5;

    // Draw the pentagon
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.lineTo(x4, y4);
    context.lineTo(x5, y5);
    context.closePath();

    // Set the line width
    context.lineWidth = lineWidth;

    // Set the line color
    context.strokeStyle = color;

    // Draw with the specified line width and color
    context.stroke();

    // Fill the area with the specified fill color
    if (fillColor) {
      context.fillStyle = fillColor;
      context.fill();
    }

    // Draw axis lines
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(x1, y1);

    context.moveTo(centerX, centerY);
    context.lineTo(x2, y2);

    context.moveTo(centerX, centerY);
    context.lineTo(x3, y3);

    context.moveTo(centerX, centerY);
    context.lineTo(x4, y4);

    context.moveTo(centerX, centerY);
    context.lineTo(x5, y5);

    // Set the line width for axis lines
    context.lineWidth = 1;

    // Set the line color for axis lines
    context.strokeStyle = "#111";

    // Draw axis lines
    context.stroke();
  }

  // Function to draw multiple pentagons
  function drawPentagons() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Get side lengths
    const s1 = parseInt(side1.value);
    const s2 = parseInt(side2.value);
    const s3 = parseInt(side3.value);
    const s4 = parseInt(side4.value);
    const s5 = parseInt(side5.value);

    // Draw the first pentagon with a different line width, color, and background color
    drawPentagon(s1, s2, s3, s4, s5, 4, "#000", "rgba(26,88,189,0.9)");

    // Draw the second pentagon with fixed values and default color
    drawPentagon(25, 25, 25, 25, 25);

    // Draw the third pentagon with fixed values and default color
    drawPentagon(50, 50, 50, 50, 50);

    // Draw the four pentagon with fixed values and default color
    drawPentagon(75, 75, 75, 75, 75);

    // Draw the five pentagon with fixed values and default color
    drawPentagon(100, 100, 100, 100, 100);
  }
});
