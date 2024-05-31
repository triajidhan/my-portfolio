const contentList = document.getElementsByClassName("content");
const headerStart = document.getElementById("header-start");
const headerEnd = document.getElementById("header-end");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const videoKucing = document.getElementById("video-kucing");
const audioBirthday = document.getElementById("audio-birthday");

Array.from(contentList).forEach((content, index) => {
    if (index === 8) {
        content.addEventListener("click", () => {
            Array.from(contentList).forEach((el, i) => {
                if (i === index - 1) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });
        });
    }
    else if (index !== 7) {
        content.addEventListener("click", () => {
            Array.from(contentList).forEach((el, i) => {
                if (i === index + 1) {
                    el.style.display = 'block';
                    if (i === 1) {
                        videoKucing.play();
                        videoKucing.loop = true;
                    } else if (i === 4) {
                        audioBirthday.play();
                        audioBirthday.loop = true;
                    }
                } else {
                    el.style.display = 'none';
                    if (i === 10 && index === 10) {
                        headerStart.style.display = 'none';
                        headerEnd.style.display = 'block';
                    }
                }
            });
        });
    }
});

btnYes.addEventListener("click", () => {
    Array.from(contentList).forEach((el, i) => {
        if (i === 9) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
})

btnNo.addEventListener("click", () => {
    Array.from(contentList).forEach((el, i) => {
        if (i === 8) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
})