import { Octagon } from "@/components/extra-icons";
import { TextArea } from "@/components/ui/textarea";
import { TextFieldRoot } from "@/components/ui/textfield";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import { createSignal } from "solid-js";

export default function App() {
  const [info, setInfo] = createSignal("ALTO EN");

  function handleClick() {
    let octagonContainer = document.getElementById("octagon-container");
    if (!octagonContainer) return;

    domtoimage.toBlob(octagonContainer, { quality: 1 }).then(function (blob) {
      FileSaver.saveAs(blob, `octagon-${info()}.png`);
    });
  }

  return (
    <div class="flex flex-col items-center justify-around h-[90vh] max-w-[600px] mx-auto font-sans">
      <h1 class="text-center font-bold text-lg">OCTAGONAL WARNING</h1>
      <div id="octagon-container" class="relative w-4/5">
        <div>
          <Octagon />
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-[9vw] leading-[1.2em] md:text-[55px]">
          <p class="m-[1.2em] text-center">{info()?.toUpperCase()}</p>
        </div>
      </div>
      <TextFieldRoot value={info()} onChange={setInfo}>
        <TextArea
          name="info"
          id="info"
          placeholder="The text inside the octagon goes here"
        />
      </TextFieldRoot>
      <button
        onClick={handleClick}
        class="border-none bg-black text-white rounded-[5px] p-[10px] text-[1em] cursor-pointer"
      >
        Download
      </button>
      <div class="text-[1.3em]">
        <span>
          Created by{" "}
          <a
            href="https://twitter.com/cristianbgp"
            target="blank"
            rel="noopener"
            class="no-underline text-black font-bold cursor-pointer"
          >
            @cristianbgp
          </a>
        </span>
      </div>
    </div>
  );
}
