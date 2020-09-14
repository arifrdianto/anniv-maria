import React from "react";
import "./App.css";
import Typed from "./Typed";
import "./Blink.css";

function App() {
  const Sound = new Audio(process.env.PUBLIC_URL + "up.mp3");
  Sound.play();

  return (
    <div className="App">
      <header className="App-header">
        <Typed
          heading="Teruntuk Istriku:"
          dataText={[
            "Tak terasa sudah satu tahun pernikahan ini kita lewati",
            "Kita telah melalui masa-masa suka maupun duka",
            "Lebih saling mengenal, mengetahui kelebihan dan kekurangan masing-masing",
            "Semoga itu yang menjadi dasar, untuk menjadi pasangan",
            "suami istri yang saling melengkapi",
            "dan saling menggenapi kedepannya.",
            "Selamat anniversary yang ke-1",
            "Dan juga...",
            "Selamat ulang tahun istriku",
            "Selamat menjadi ibu dari anak-anak",
            "Berkahilah keluarga kami, keturunan kami,",
            "jadikanlah keluarga kami",
            "untuk saling mengajarkan tentang akhlak dan keikhlasan,",
            "saling bisa menjaga diri disaat berjauhan",
            "dan saling memahami.",
            "Semoga Allah senantiasa melindungi dan",
            "menjaga kita dalam menempuh setiap langkah perjalanan",
            "Selalu bahagia bersama-sama selamanya",
            "Jakarta, 15 September 2020 00:08 WIB",
            "Dari suamimu yang ter-Ganteng :P",
          ]}
        />
      </header>
    </div>
  );
}

export default App;
