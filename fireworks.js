function launchFirework() {

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#b5179e",
        "#ffffff",
        "#ff85a1"
    ];

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);

    for (let i = 0; i < 60; i++) {

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = x + "px";
        spark.style.top = y + "px";

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 180;

        spark.style.setProperty(
            "--x",
            Math.cos(angle) * distance + "px"
        );

        spark.style.setProperty(
            "--y",
            Math.sin(angle) * distance + "px"
        );

        document.body.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 1800);

    }

}

setInterval(launchFirework, 4000);