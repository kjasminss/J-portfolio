document.addEventListener("DOMContentLoaded", () => { /* 等 HTML 載入完成後才執行 */

  const toTopButton = document.querySelector(".to-top"); /* 抓回到頂部按鈕 */

  if (toTopButton) { /* 如果頁面上有 to-top 按鈕 */
    window.addEventListener("scroll", () => { /* 監聽頁面滾動 */
      if (window.scrollY > 50) { /* 滾動超過 50px */
        toTopButton.classList.add("show"); /* 顯示按鈕 */
      } else { /* 滾動小於 50px */
        toTopButton.classList.remove("show"); /* 隱藏按鈕 */
      }
    });

    toTopButton.addEventListener("click", () => { /* 點擊 to-top 按鈕 */
      window.scrollTo({
        top: 0, /* 回到頁面最上方 */
        behavior: "smooth" /* 平滑滾動 */
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal"); /* 抓所有 reveal 元素 */

function showRevealItems() { /* 建立顯示動畫的 function */
  revealItems.forEach((item, index) => { /* 逐一處理每個 reveal 元素 */
    const rect = item.getBoundingClientRect(); /* 取得元素位置 */
    const isInView = rect.top < window.innerHeight * 0.85; /* 元素進入畫面 85% 高度時觸發 */

    if (isInView) { /* 如果元素進入畫面 */
      item.style.transitionDelay = `${index * 0.12}s`; /* 依照順序延遲出現 */
      item.classList.add("is-visible"); /* 加上顯示 class */
    }
  });
}

window.addEventListener("scroll", showRevealItems); /* 滾動時檢查 */
window.addEventListener("resize", showRevealItems); /* 視窗縮放時檢查 */
showRevealItems(); /* 頁面一載入就先檢查一次 */

/* ===== side-nav scroll active ===== */

const sections = document.querySelectorAll("section[id]"); 
/* 抓所有有 id 的 section（就是你剛加的那些） */

const navLinks = document.querySelectorAll(".case-menu a"); 
/* 抓左側 menu 的所有連結 */

window.addEventListener("scroll", () => {
  let current = ""; /* 用來記錄目前在哪個 section */

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; 
    /* 減 120 是因為你有 fixed nav + padding，不然會太早判定 */

    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id"); 
      /* 把目前 section 的 id 記起來 */
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active"); 
    /* 先全部移除 active */

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active"); 
      /* 如果 href = 當前 section，就加 active */
    }
  });
});

});