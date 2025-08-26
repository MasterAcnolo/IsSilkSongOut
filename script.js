const countdown = document.getElementById("countdown");
    const silkSong = new Date("2025-09-04T16:00:00");

    function mettreAJourCompteur() {
      const maintenant = new Date();
      const diffMs = silkSong - maintenant;

      if (diffMs <= 0) {
        countdown.textContent = "SILKSONG EST LA 🎉";
        clearInterval(timer);
        return;
      }

      const totalSecs = Math.floor(diffMs / 1000);
      const secs = totalSecs % 60;
      const totalMins = Math.floor(totalSecs / 60);
      const mins = totalMins % 60;
      const totalHours = Math.floor(totalMins / 60);
      const hours = totalHours % 24;
      const days = Math.floor(totalHours / 24);

      countdown.textContent = `${days} jour${days !== 1 ? 's' : ''}, ${hours}h ${mins}min ${secs}s`;
    }

    mettreAJourCompteur();
    const timer = setInterval(mettreAJourCompteur, 1000);