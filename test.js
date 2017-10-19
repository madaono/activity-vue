var mo = [
  {
    "files": [
      {
        "fname": "民间赤脚大师为你解读万物之神奇",
        "md5": null,
        "fsize": 5558869,
        "thumb": null,
        "recommendDate": 1490256284488,
        "path": "MD5:e25d51de15b7ca48016ab4b5b15502f0",
        "category": "video",
        "duration": 126000,
        "isInvalid": false,
        "isTop": false,
        "thumbUrl": "http://video.kuaiya.cn/img/03d26431745b4e054627cb88963bb64e/XMjY0NTQ3ODMyOA==?e=2354256284&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:67eFv3r7Jp-bXrUGXEjwoPojFcQ=",
        "artist": null,
        "url": "http://video.kuaiya.cn/avatar/03d26431745b4e054627cb88963bb64e/XMjY0NTQ3ODMyOA==.mp4?e=1490515484&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:ah6KYJGz_fsWzysymrScvgVMqB8=",
        "cpt": 0,
        "description": "民间赤脚大师为你解读万物之神奇",
        "sptn": 0,
        "cmtn": 0,
        "dln": 0,
        "sht": 0,
        "ac": 0,
        "limitTime": -1,
        "flag": 0,
        "xflag": 0
      },
      {
        "fname": "小学生性教育读本应该是这样的",
        "md5": null,
        "fsize": 11543853,
        "thumb": null,
        "recommendDate": 1490255851008,
        "path": "MD5:ed1cb53240def2a5b74f6517a3fb25e4",
        "category": "video",
        "duration": 296000,
        "isInvalid": false,
        "isTop": false,
        "thumbUrl": "http://video.kuaiya.cn/img/03d26431745b4e054627cb88963bb64e/XMjY0NjgwMDcwOA==?e=2354255850&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:F8VbVH88ri9bpmBlZ9uZQcAd03c=",
        "artist": null,
        "url": "http://video.kuaiya.cn/avatar/03d26431745b4e054627cb88963bb64e/XMjY0NjgwMDcwOA==.mp4?e=1490515050&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:BP8EPT6qatS2xmFfzamriDw13vs=",
        "cpt": 0,
        "description": "小学生性教育读本应该是这样的",
        "sptn": 0,
        "cmtn": 0,
        "dln": 0,
        "sht": 0,
        "ac": 0,
        "limitTime": -1,
        "flag": 0,
        "xflag": 0
      }
    ],
    "_id": "25860704"
  },
  {
    "files": [
      {
        "fname": "不会讲情话",
        "md5": null,
        "fsize": 2662202,
        "thumb": null,
        "recommendDate": 1490082504095,
        "path": "MD5:0d4c3105fba42cd2e53605d711955095",
        "category": "audio",
        "duration": 234000,
        "isInvalid": false,
        "isTop": false,
        "thumbUrl": "avatar/music/singer/10026.jpg?e=2350108286&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:0tBH0l9WgpB3-oudDq8lFIDFOW8=",
        "artist": null,
        "url": "http://video.kuaiya.cn/avatar/music/song/10026/1078151.mp3?e=1486367486&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:myE6H_LGQv3sLuxEloeo8Rjz-Ms=",
        "cpt": 1,
        "description": "",
        "sptn": 0,
        "cmtn": 0,
        "dln": 0,
        "sht": 0,
        "ac": 0,
        "limitTime": -1,
        "flag": 0,
        "xflag": 0
      },
      {
        "fname": "我要我快乐",
        "md5": null,
        "fsize": 2326778,
        "thumb": null,
        "recommendDate": 1490082500436,
        "path": "MD5:65111f89747a0c3233948d12a20794a3",
        "category": "audio",
        "duration": 206000,
        "isInvalid": false,
        "isTop": false,
        "thumbUrl": "avatar/music/singer/10026.jpg?e=2350108286&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:0tBH0l9WgpB3-oudDq8lFIDFOW8=",
        "artist": null,
        "url": "http://video.kuaiya.cn/avatar/music/song/10026/1078152.mp3?e=1486367486&token=rQ7At7jVvB9Y5MUc9YfG7C8pEkCJH6ZWgHuEVZNH:DYVIiCxwLVMEJnCAdCCZG7PC3ZQ=",
        "cpt": 1,
        "description": "",
        "sptn": 0,
        "cmtn": 0,
        "dln": 0,
        "sht": 0,
        "ac": 0,
        "limitTime": -1,
        "flag": 0,
        "xflag": 0
      }
    ],
    "_id": "267433"
  }
];
var moA=[]
  function doit() {
    mo.map(function (val,index,arr) {
      val.files[0].id=val._id
      val.files[1].id=val._id
      moA = moA.concat(val.files)
    })
  }
doit();
console.log(moA)
