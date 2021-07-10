# <img src='https://github.com/HeXavi8/ACIMG/blob/main/images/logo.png' height='60'/>

ACIMG(Arts & Culture Images) aims to create a nation wide image dataset of cultural relics and ancient buildings by college students from all over the country. This is carried out in the form of the matic image solicitation. For example, in the image project of Lingnan architecture, college students in Guangdong take pictures of typical Lingnan buildings in their study places or hometown with mobile phones and other photographing equipment, and then upload them to the ACIMG system.

## Table of Contents
* [Snapshots](#Snapshots)
* [Usage](#Usage)
* [Project Members](#Project_Members)
* [License](#License)

## Snapshots <a name="Snapshots"></a>

<img src='https://github.com/HeXavi8/ACIMG/blob/main/images/altas.png' width='200'/>&emsp;<img src='https://github.com/HeXavi8/ACIMG/blob/main/images/detail1.png' width='200'/>&emsp;<img src='https://github.com/HeXavi8/ACIMG/blob/main/images/detail2.png' width='200'/>&emsp;<img src='https://github.com/HeXavi8/ACIMG/blob/main/images/my.png' width='200'/>

## Usage <a name="Usage"></a>

Please clone the repository and run in Wechat Dvetools. (Front-end code only so far)

In app.js, the type of back-end files is json, please refer to [demo.json](https://github.com/HeXavi8/ACIMG/blob/main/data/demo.json) and [album.json](https://github.com/HeXavi8/ACIMG/blob/main/data/album.json)

```
  globalData: {
    userInfo: null,
    //Transfer files that are deployed in the database
    //The format can be referred to demo.json and album.json
    jsonUrlPrefix: "https://xxxx.xxxxxxxx.com/json/",
    imgUrlPrefix:"https://xxxx.xxxxxxxx.com/zimg/"
  }
```

## Project Members <a name="Project_Members"></a>
- [Xavi](https://github.com/HeXavi8) - **Xavi He** &lt; 825308876@qq.com&gt; (he/him)

Our code and design are far from perfect. If you have any suggestions or would like to contribute code, please feel free to contact us or make pull requests. </br>

## License <a name="License"></a>
[MIT](https://github.com/HeXavi8/ACIMG/blob/main/LICENSE)
