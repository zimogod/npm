<template>
    <span class="zimo">
      <button :class="[types,size]">
        <slot></slot>
      </button>
    </span>
</template>

<script>
export default {
  name: "zimo-btn",
  props:{
      types:{
          type:String,
          default:'info',
          validator(types){
              if(types && !["success","danger","info","primary"].includes(types)){
                  console.error("types类型必须为"+["success","danger","info","primary"].join("、"))
              }
              return true;
          }
      },
      size:{
          type:String,
          default:'normal'
      }
  }
};
</script>

<style lang="less">
  .zimo + .zimo {
    margin-left: 10px;
  }
  .zimo {
    .large {
      font-size: 16px;
      width: 100px;
      height: 40px;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
    .normal {
      font-size: 14px;
      width: 90px;
      height: 36px;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
    .small {
      font-size: 12px;
      width: 80px;
      height: 30px;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
    .mini {
      font-size: 10px;
      width: 70px;
      height: 26px;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
    .info {
      background: #8896b3;
    }
    .info:hover {
      opacity: 0.8;
    }
    .danger {
      background: #f56c6c;
    }
    .danger:hover {
      opacity: 0.8;
    }
    .primary {
      background: #409eff;
    }
    .primary:hover {
      opacity: 0.8;
    }
    .success {
      background: #5cb87a;
    }
    .success:hover {
      opacity: 0.8;
    }
  }
</style>
