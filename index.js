import bleno from "bleno";
import { MediaPlaybackService } from "./src/media-playback-service.js";

const name = "Mac-Media-Playback-Service";
const service = new MediaPlaybackService();

bleno.on("stateChange", function (state) {
  console.log(state);
  if (state === "poweredOn") {
    //
    // We will also advertise the service ID in the advertising packet,
    // so it's easier to find.
    //
    console.log("powered on, address: " + bleno.address);
    bleno.startAdvertising(name, [service.uuid], function (err) {
      if (err) {
        console.log("error during advertising: ", err);
      }
    });
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on("advertisingStart", function (err) {
  console.log("adbvertising started");
  if (!err) {
    // Once we are advertising, it's time to set up our services,
    // along with our characteristics.
    bleno.setServices([service]);
  }
});
