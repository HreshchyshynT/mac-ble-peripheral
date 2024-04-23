import util from "util";
import bleno from "bleno";

import { ToggleMediaPlaybackCharacteristic } from "./toggle-media-playback-characteristic.js";

class MediaPlaybackService extends bleno.PrimaryService {
  constructor() {
    super({
      uuid: "12345678-1234-1234-1234-1234567890ab",
      characteristics: [new ToggleMediaPlaybackCharacteristic()],
    });
  }
}

export { MediaPlaybackService };
