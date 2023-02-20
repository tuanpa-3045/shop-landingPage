let sale_counters = document.querySelectorAll('.time-count');
sale_counters.forEach((sale) => {
  let days = Math.floor(Math.random() * 10),
    hours = Math.floor(Math.random() * 24),
    minutes = Math.floor(Math.random() * 60),
    seconds = Math.floor(Math.random() * 60);
  sale.innerHTML = `<span>${days < 10 ? '0' + days : days}d</span> : <span>${
    hours < 10 ? '0' + hours : hours
  }h</span> : <span>${minutes < 10 ? '0' + minutes : minutes}m</span> : <span>${
    seconds < 10 ? '0' + seconds : seconds
  }s</span>`;
  const interval = setInterval(() => {
    if (seconds == 0) {
      if (minutes == 0) {
        if (hours == 0) {
          if (days == 0) {
            seconds = 0;
          } else {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        } else {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    let html = `<span>${days < 10 ? '0' + days : days}d</span> : <span>${
      hours < 10 ? '0' + hours : hours
    }h</span> : <span>${
      minutes < 10 ? '0' + minutes : minutes
    }m</span> : <span>${seconds < 10 ? '0' + seconds : seconds}s</span>`;
    sale.innerHTML = html;
  }, 1000);
  setTimeout(() => {
    sale.innerHTML = `<span class="btn-sale">End of discount hours</span>`;
    clearInterval(interval);
  }, (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000);
});
