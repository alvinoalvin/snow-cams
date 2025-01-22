import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  prisma.cams.createMany({
    data: [
      {
        title: "Top Of Skychair",
        mountain: "Cypress",
        type: "iframe",
        link: "https://www.skaping.com/cypress-mountain/mount-strachan",
      },
      {
        title: "Plaza Cam",
        mountain: "Cypress",
        type: "iframe",
        link: "https://www.youtube.com/embed/OSKgIDnBwwQ",
      },
      {
        title: "Eagle Chair",
        mountain: "Cypress",
        type: "iframe",
        link: "https://www.youtube.com/embed/GTQQdQ8VVKI",
      },
      {
        title: "Base",
        mountain: "Cypress",
        type: "iframe",
        link: "https://www.youtube.com/embed/DXyS3CxYtw0",
      },
      {
        title: "Lions Chair",
        mountain: "Cypress",
        type: "iframe",
        link: "https://www.youtube.com/embed/lLELhY85VxI",
      },
      {
        title: "Bear cam",
        mountain: "Grouse",
        type: "iframe",
        link: "https://relay.ozolio.com/pub.api?cmd=embed&oid=EMB_WFLP000001BF",
      },
      {
        title: "City View Cam",
        mountain: "Grouse",
        type: "iframe",
        link: "https://relay.ozolio.com/pub.api?cmd=embed&oid=EMB_FKTA0000027D",
      },
      {
        title: "Base",
        mountain: "Grouse",
        type: "iframe",
        link: "https://relay.ozolio.com//pub.api?cmd=explore&ampoid=CID_YBLM00000045&ampchannel=0",
      },
      {
        title: "Roundhouse Lodge, Whistler Mountain",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlerroundhouse",
      },
      {
        title: "Rendezvous Lodge, Blackcomb Mountain",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlerblackcomb",
      },
      {
        title: "Whistler Village",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlervillagefitz",
      },
      {
        title: "Whistler Peak",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlerpeak",
      },
      {
        title: "Whistler Creekside",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlercreekside",
      },
      {
        title: "Whistler Glacier",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlerglacier",
      },
      {
        title: "Snow Ruler",
        mountain: "Whistler",
        type: "iframe",
        link: "//player.brownrice.com/embed/whistlersnowstack",
      },
      {
        title: "Stoke-O-Meter Snowcam Vancouver, BC",
        mountain: "Seymour",
        type: "iframe",
        link: "https://www.youtube.com/embed/yQdKq9NuEa0",
      },
      {
        title: "Mystery Peak Webcam  Vancouver, BC",
        mountain: "Seymour",
        type: "iframe",
        link: " https://www.youtube.com/embed/vLawo-FrBKk",
      },
      {
        title: "Valley",
        mountain: "Sun Peaks",
        type: "image",
        link: "https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webCams/Valley.jpg",
      },
      {
        title: "Village Day Lodge Slopeside",
        mountain: "Sun Peaks",
        type: "image",
        link: " https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/Village%20Day%20Lodge%20Slopeside.jpg",
      },
      {
        title: "Elevation Chairlift",
        mountain: "Sun Peaks",
        type: "image",
        link: " https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/ele_view_of_morrisey.jpg",
      },
      {
        title: "Sundance Chairlift",
        mountain: "Sun Peaks",
        type: "image",
        link: "https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/sundance.jpg",
      },
      {
        title: "Orient Quad Base",
        mountain: "Sun Peaks",
        type: "image",
        link: "https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/sundance.jpg",
      },
      {
        title: "Mt. Tod, View from Mt. Morrisey",
        mountain: "Sun Peaks",
        type: "image",
        link: " https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/view%20of%20mt%20todd.jpg",
      },
      {
        title: "Village Clock Tower",
        mountain: "Sun Peaks",
        type: "image",
        link: "https://www.sunpeaksresort.com/sites/default/files/spr_website_data/webcams/Village%20Clock%20Tower.jpg",
      },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
}
main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});
