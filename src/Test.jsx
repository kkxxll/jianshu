import React, { Component } from 'react';

import './Test.css';

import axios from 'axios';
import './mock/list';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.setMarkers = this.setMarkers.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {
    const promist = new Promise(function(resolve, reject) {
      var BMap = window.BMap;
      var mymap = new BMap.Map('container');
      var point = new BMap.Point(116.404, 39.915);
      mymap.centerAndZoom(point, 15);
      mymap.enableScrollWheelZoom(true);
      mymap.panTo(new BMap.Point(116.409, 39.918));
      resolve(mymap);
    });
    promist
      .then(mymap => {
        this.getCityList(mymap);
        return mymap;
      })
      .then(mymap => {
        this.getLocation(mymap);
        return mymap;
      })
      .then(mymap => {
        this.setMarkers(mymap);
      });
  }
  setMarkers(mymap) {
    axios
      .get('/maplist')
      .then(res => {
        const data = res.data;
        this.setState({
          list: data.list
        });
        return mymap;
      })
      .then(mymap => {
        let BMap = window.BMap;
        this.state.list.forEach((item, idx) => {
          let point = new BMap.Point(item.lat, item.lan);
          let marker = new BMap.Marker(point);
          marker.disableDragging(true);
          mymap.addOverlay(marker);
          let label = new BMap.Label(`${idx} 我是文字标注哦, ${item.teaNum}`, {
            offset: new BMap.Size(20, -10)
          });
          marker.setLabel(label);
          console.log(idx)
        });
      });
  }
  getLocation(mymap) {
    let BMap = window.BMap;
    // 定位
    function myFun(result) {
      var cityName = result.name;
      mymap.setCenter(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }
  getCityList(mymap) {
    let BMap = window.BMap;
    // 城市列表
    let size = new BMap.Size(20, 20);
    mymap.addControl(
      new BMap.CityListControl({
        anchor: window.BMAP_ANCHOR_TOP_LEFT,
        offset: size,
        // // 切换城市之间事件
        // onChangeBefore: function(){
        //    console.log('before');
        // },
        // // 切换城市之后事件
        // onChangeAfter:function(){
        //   console.log('after');
        // },
        onChangeSuccess: function(e) {
          console.log(e.point);
        }
      })
    );
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div id="container" style={{ height: '100%' }}>
          sddf
        </div>
      </div>
    );
  }
}
