import { Button, Group } from "@mantine/core";

export default function IndexPage() {
  return (
    <div>
      <iframe
        className="aspect-video h-auto w-full"
        src="https://www.skaping.com/cypress-mountain/mount-strachan"
        loading="lazy"
        title="Sky Chair Camera"
      />
      <iframe
        src="https://relay.ozolio.com//pub.api?cmd=explore&amp;oid=CID_YBLM00000045&amp;channel=0"
        title="Grouse Plaza"
      />
      <iframe
        src="https://www.youtube.com/embed/yQdKq9NuEa0"
        title="Stoke-O-Meter Snowcam | Mt Seymour Ski Area, Vancouver, BC"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <iframe
        src="https://www.youtube.com/embed/vLawo-FrBKk"
        title="Mystery Peak Webcam | Mt Seymour Ski Area, Vancouver, BC"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <iframe
        id="webcam_brownrice__player_1"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlerroundhouse"
        referrerPolicy="origin"
        title="Roundhouse Lodge, Whistler Mountain"
        allowFullScreen
      />

      <iframe
        id="webcam_brownrice__player_3"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlerblackcomb"
        referrerPolicy="origin"
        loading="lazy"
        title="Rendezvous Lodge, Blackcomb Mountain"
        allowFullScreen
      />
      <iframe
        id="webcam_brownrice__player_6"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlervillagefitz"
        title="Whistler Village"
        allowFullScreen
      />
      <iframe
        id="webcam_brownrice__player_5"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlerpeak"
        allowFullScreen
        title="Whistler Peak"
      />
      <iframe
        id="webcam_brownrice__player_7"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlercreekside"
        title="Whistler Creekside"
        allowFullScreen
      />
      <iframe
        id="webcam_brownrice__player_8"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlerglacier"
        title="Whistler Glacier"
        allowFullScreen
      />
      <iframe
        id="webcam_brownrice__player_9"
        className="webcam_brownrice__player"
        src="//player.brownrice.com/embed/whistlersnowstack"
        title="Snow Ruler"
        allowFullScreen
      />
    </div>
  );
}
