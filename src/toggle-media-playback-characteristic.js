import bleno from "bleno";
import robot from "robotjs";

class ToggleMediaPlaybackCharacteristic extends bleno.Characteristic {
  constructor() {
    super({
      uuid: "abcd1234-5678-1234-5678-1234567890ab",
      properties: ["write", "read"],
      descriptors: [
        new bleno.Descriptor({
          uuid: "2901",
          value: "Toggle media playback, read current playback state",
        }),
      ],
    });
  }

  onWriteRequest(data, offset, withoutResponse, callback) {
    console.log(
      "data " +
        data +
        ", offset: " +
        offset +
        "without response: " +
        withoutResponse,
    );
    // audio_play has the same keykode as audio_pause and it is toggling playback
    robot.keyTap("audio_play");
    callback(this.RESULT_SUCCESS);
  }
}

export { ToggleMediaPlaybackCharacteristic };
