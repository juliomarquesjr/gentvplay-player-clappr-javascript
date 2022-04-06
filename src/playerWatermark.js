var player = new Clappr.Player({
  source: "https://cdn-gentv.ciclano.io:1443/gentv/gentv/playlist.m3u8",
  poster:
    "https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.6435-9/49947955_1921048967944814_113947883249598464_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHnOJokakCydvvPK-MMT5ko2rZzH36WhJjatnMffpaEmIE63MAyvnpaxRFrltj0qqAKZpfwLp-9u4KIwAs8-13J&_nc_ohc=LbzX4Sp2qEUAX_gW-nk&tn=2sYqZMP6dlnxw2Ni&_nc_pt=1&_nc_ht=scontent.fpoa11-1.fna&oh=00_AT9Js_udfqVLx7gEtl2PUOi8L0k7OG-NQxZ-yUMOCTN0mQ&oe=62709559",
  watermark:
    "https://gentvplay.com.br/assets/logotop-4da130af3f80b87f51c0d491a90732a41b7ae00e33490fba7191842edf3ff868.png",
  plugins: [ChromecastPlugin],
  parentId: ".gentvplayer",
  autoPlay: true,
  mute: true,
  width: "100%",
  height: "100%",
  mediacontrol: { seekbar: "#F8F8FF", buttons: "#FFFAFA" },
  customData: {
    licenseURL: "http://gentvplay.com.br",
  },
  chromecast: {
    appId: "9DFB77C0",
    contentType: "video/mp4",
    media: {
      type: ChromecastPlugin.Movie,
      title: "GenTV Play",
      subtitle: "Assista a nossa programação ao vivo",
    },
  },
});
