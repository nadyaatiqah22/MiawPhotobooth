<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Miaw Photobooth</title>
 <link rel="icon" type="image/png" href="favicon.png">
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Pixel Font -->
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

  <style >
    
    body {
    
      font-family: 'Press Start 2P', cursive;
    }

    /* Floating image */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-14px); }
    }

    /* Sparkle blink */
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0.5); }
      50% { opacity: 1; transform: scale(1); }
    }

    /* Button bounce */
    @keyframes bounceSoft {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
  </style>
</head>

<body class="h-screen flex items-center justify-center bg-cover bg-center"
             style="background-image: url('frames/background4.jpg');">
<!-- Falling stars -->
<div class="stars fixed inset-0 pointer-events-none overflow-hidden z-0"></div>

  <div class="flex flex-col items-center text-center space-y-8">

    <!-- Title -->
    <h1 class="text-2xl text-pink-600 drop-shadow-lg">
      ✨ MIAW PHOTOBOOTH ✨
    </h1>

    <!-- Floating Image -->
    <div class="relative">
      <img
        src="frames/icon.png"
        alt="Cute Icon"
        class="w-44 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
        style="animation: float 3s ease-in-out infinite;"
      />

      <!-- Sparkles -->
      <span class="absolute -top-3 -right-3 text-xl" style="animation: sparkle 1.5s infinite;">✨</span>
      <span class="absolute bottom-2 -left-4 text-lg" style="animation: sparkle 2s infinite;">⭐</span>
    </div>

    <!-- Subtitle -->
    <p class="text-xs text-purple-700 leading-relaxed">
      Abadikan Setiap Momen Imutmu<br>
      Hanya Disini Mwehe
    </p>

    <!-- Start Button -->
    <a href="form1.html">
      <button
        class="px-12 py-4 rounded-xl text-sm text-white
               bg-pink-500 border-4 border-pink-300
               shadow-[6px_6px_0_#c084fc]
               hover:shadow-[8px_8px_0_#a855f7]
               transition-all"
        style="animation: bounceSoft 2s infinite;"
      >
        ▶ MULAI YUK!
      </button>
    </a>

    <!-- Footer text -->
    <p class="text-[10px] text-purple-600 opacity-70">
      By @nadyatiqah 💗
    </p>

  </div>

</body>


</html>
