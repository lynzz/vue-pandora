<template>
  <div id="app">
    <div class="main-wrapper">
      <nav-view></nav-view>
      <section class="main-container">
        <router-view class="view"></router-view>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style lang="sass">

@import '../node_modules/highlight.js/styles/color-brewer.css';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}

body {
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  overflow: auto;
  font-weight: 300;
}

a {
  color: #4078c0;
  text-decoration: none;
}

.hljs {
  padding: 20px 25px;
  background-color: #f9fafc;
  margin-bottom: 25px;
}
.main-wrapper {
  background: #f9f9f9
}

.main-container {
  padding-top: 55px;

  h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
  }
  h3 {
    font-size: 22px;
    margin: 46px 0 16px;
  }
  h2, h3, h4, h5 {
    font-weight: normal;
    color: #1f2f3d;
  }
  p {
    font-size: 14px;
    margin: 16px 0;
    color: #5e6d82;
  }
}
.demo {
  margin: 20px 0;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.main-container {
  margin-left: 260px;
  padding: 30px 40px 120px;
  animation: xRightMatrix .5s ease-out;
  background: #fff;
  min-height: 500px;
}

.main-container-center {
  margin: 0 auto;
  padding: 30px 80px 120px;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  width: 80%;
  height: 100%;
}

.aside-container {
  width: 260px;
  background: #F9F9F9;
  padding-top: 10px;
  padding-bottom: 50px;
  float: left;
}

.aside-container ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.aside-container > ul > li {
  overflow: hidden;
  list-style-type: none;
}

.aside-container li a:hover {
  background-color: #eaf8fe;
}
.aside-container li a.router-link-active {
  color: #2db7f5;
  border-right: 2px solid #2db7f5;
}

.aside-container li h4 {
  font-size: 14px;
  font-weight: 600;
  padding: 10px 0 10px 46px;
  margin: 0;
  color: #5C6B77;
  cursor: pointer;
  transition: background .5s, border .5s;
  border-left: 3px solid transparent;
  position: relative;
  z-index: 1;
  background: #F9F9F9;
  position: relative;
}

.aside-container li h4:after {
  position: absolute;
  top: 11px;
  right: 30px;
  content: "\e600";
  font-family: "anticon";
  transform: scale(0.6);
  font-size: 12px;
  color: #5C6B76;
  opacity: 0;
  -webkit-transform: scale(0.6) rotate(180deg);
  transform: scale(0.6) rotate(180deg);
  transition: all 0.3s ease;
}

.aside-container li[open=open] h4:after {
  -webkit-transform: scale(0.6) rotate(0deg);
  transform: scale(0.6) rotate(0deg);
}

.aside-container li:hover h4:after {
  opacity: 0.8;
}

.aside-container li > ul.aside-list-show {
  display: block;
}

.aside-container li > ul li {
  border-left: 3px solid transparent;
}

.aside-container li a {
  line-height: 40px;
  height: 40px;
  display: block;
  padding-left: 60px;
  font-size: 14px;
  color: #5C6B76;
}

.aside-container li.type-divider {
  font-size: 12px;
  -webkit-transform:  scale(0.9);
  transform: scale(0.9);
  transform-origin: 0 50%;
  color: #aaa;
  text-shadow: 0px 1px 0px #FFF;
  margin: 6px 0 6px 48px;
}

.aside-container > ul > li > a {
  padding-left: 46px;
  font-size: 14px;
  border-left: 3px solid transparent;
}

.aside-container > ul > li.current > a {
  border-left: 0;
}

.aside-container .chinese {
  font-size: 12px;
  margin-left: 6px;
  font-weight: normal;
  opacity: 0.67;
}

.aside-container li a:hover {
  color: #6EB4E0;
}

.aside-container .current {
  background: #fff;
  border-left: 3px solid #71B5DE;
  color: #71B5DE;
}

.aside-container .current a {
  color: #71B5DE;
}

.xRightMatrix {
  animation: xRightMatrix .5s ease-out;
}

@keyframes xRightMatrix {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
