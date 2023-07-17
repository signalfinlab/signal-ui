<div class="page-checkbox">

# 버튼

## Checkbox 속성

| Attribute       | Description                              | Type     | Accepted Values | Default |
| :-------------- | :--------------------------------------- | :------- | :-------------- | :------ |
| checked (v-model)         | 체크여부                                 | boolean  | true, false     | false   |
| label           | 라벨, slot이 있는경우 slot이 우선합니다. | string   | —               | —       |
| shape           | 형태                                     | string   | box, line       | box     |
| size            | size 기반의 버튼 크기 설정               | string   | h2, h3, h4      | h4      |
| useBracket      | 브라켓 사용여부                          | boolean  | true, false     | false   |
| animation       | 애니메이션 사용여부                      | boolean  | true, false     | false   |

## Checkbox 이벤트

| Event           | Description                    | Type     | Param              |
| :-------------- | :----------------------------- | :------- | :----------------- |
| clickBracket | 브라켓이 설정된 경우 사용가능. 브라켓 클릭시 실행 | function | click event object |
| change | 값이 변경될 때 실행 | function | click event object |

## 1. Checked

> 체크 여부. 기본값은 `false`

<hb-checkbox> 미설정시 </hb-checkbox><br>
<hb-checkbox :checked="false"> :checked 값으로 false 설정시 (미설정시와 동일) </hb-checkbox><br>
<hb-checkbox :checked="true"> :checked 값으로 true 설정시 </hb-checkbox><br>
<hb-checkbox v-model="checkModel"> v-model 설정시 </hb-checkbox><br>

```html
<template>
  <hb-checkbox> 미설정시 </hb-checkbox>
  <hb-checkbox :checked="false"> :checked 값으로 false 설정시 (미설정시와 동일) </hb-checkbox>
  <hb-checkbox :checked="true"> :checked 값으로 true 설정시 </hb-checkbox>
  <hb-checkbox v-model="checkModel"> v-model 설정시 </hb-checkbox>
</template>
<script>
  export default {
    data(){
      return {
        checkModel: true,
      }
    }
  };
</script>
```

## 2. Label

> 라벨. <br>
> 만약 라벨과 슬럿 모두에 값이 있는 경우라면 slot의 값이 우선합니다. <br>
> 비워둘 수도 있습니다.

<hb-checkbox label="라벨에 값을 적은 경우"/> <br>
<hb-checkbox> 슬럿에 값을 적은 경우 </hb-checkbox> <br>
<hb-checkbox label="둘다 쓰면 라벨 패"> 둘다 쓰면 슬럿 승 </hb-checkbox> <br>
<hb-checkbox /> <br>

```html
<hb-checkbox label="라벨에 값을 적은 경우" />
<hb-checkbox> 슬럿에 값을 적은 경우 </hb-checkbox>
<hb-checkbox label="둘다 쓰면 라벨 패">둘다 쓰면 슬럿 승</hb-checkbox>
<hb-checkbox />
```

## 3. Shape

> 형태. 기본값은 `box`, 그 외 옵션은 `line`이 있습니다.

<hb-checkbox> 미설정시 </hb-checkbox> <br>
<hb-checkbox shape="box"> box 설정시. 글자는 볼드로 나옵니다. (미설정시와 동일) </hb-checkbox> <br>
<hb-checkbox shape="line"> line 설정시. 박스대신 연한 회색체크가 기본적으로 보여집니다. 글자는 노멀로 약간 연하게 나옵니다. </hb-checkbox> <br>

```html
<hb-checkbox> 미설정시 </hb-checkbox>
<hb-checkbox shape="box"> box 설정시. 글자는 볼드로 나옵니다. (미설정시와 동일) </hb-checkbox>
<hb-checkbox shape="line"> line 설정시. 박스대신 연한 회색체크가 기본적으로 보여집니다. 글자는 노멀로 약간 연하게 나옵니다. </hb-checkbox>
```

## 4. Size

> 형태. 미 설정시 기본값은 `h4`, 그 외 옵션은 `h3`, `h2`이 있습니다.

<hb-checkbox> 미설정시 </hb-checkbox> <br>
<hb-checkbox size="h4"> h4로 설정한 경우 (미설정시와 동일) </hb-checkbox> <br>
<hb-checkbox size="h3"> h3로 설정한 경우 </hb-checkbox> <br>
<hb-checkbox size="h2"> h2로 설정한 경우 </hb-checkbox> <br>
<br>
<small style="display: block; opacity: 0.5; font-weight: bold; margin: 40px 0 30px 0">아래는 shape="line" 일 때</small>
<hb-checkbox shape="line"> 미설정시 </hb-checkbox> <br>
<hb-checkbox shape="line" size="h4"> h4로 설정한 경우 (미설정시와 동일) </hb-checkbox> <br>
<hb-checkbox shape="line" size="h3"> h3로 설정한 경우 </hb-checkbox> <br>
<hb-checkbox shape="line" size="h2"> h2로 설정한 경우 </hb-checkbox> <br>

```html
<hb-checkbox> 미설정시 </hb-checkbox> <br />
<hb-checkbox size="h4"> h4로 설정한 경우 (미설정시와 동일) </hb-checkbox>
<hb-checkbox size="h3"> h3로 설정한 경우 </hb-checkbox>
<hb-checkbox size="h2"> h2로 설정한 경우 </hb-checkbox>

아래는 shape="line" 일 때
<hb-checkbox shape="line"> 미설정시 </hb-checkbox>
<hb-checkbox shape="line" size="h4"> h4로 설정한 경우 (미설정시와 동일) </hb-checkbox>
<hb-checkbox shape="line" size="h3"> h3로 설정한 경우 </hb-checkbox>
<hb-checkbox shape="line" size="h2"> h2로 설정한 경우 </hb-checkbox>
```

## 5. Bracket

> 꺾쇠 여부. 기본값은 `false`

<div style="width: 300px">
  <hb-checkbox> 미설정시. 꺾쇠 없음. </hb-checkbox> <br />
  <hb-checkbox :useBracket="false"> :useBracket 값으로 false (미설정시와 동일) </hb-checkbox> <br />
  <hb-checkbox :useBracket="true"> :useBracket 값으로 true - 오른쪽 끝에 꺾쇠가 생깁니다.</hb-checkbox> <br />
  <hb-checkbox :useBracket="true"> 트루 </hb-checkbox> <br />
  <hb-checkbox :useBracket="true" size="h3"> 트루 h3 </hb-checkbox> <br />
  <hb-checkbox :useBracket="true" size="h2"> 트루 h2 </hb-checkbox> <br />
</div>
<br />

```html
<div style="width: 300px">
  <hb-checkbox> 미설정시. 꺾쇠 없음. </hb-checkbox>
  <hb-checkbox :useBracket="false"> :useBracket 값으로 false (미설정시와 동일) </hb-checkbox>
  <hb-checkbox :useBracket="true"> :useBracket 값으로 true - 오른쪽 끝에 꺾쇠가 생깁니다.</hb-checkbox>
  <hb-checkbox :useBracket="true"> 트루 </hb-checkbox>
  <hb-checkbox :useBracket="true" size="h3"> 트루 h3 </hb-checkbox>
  <hb-checkbox :useBracket="true" size="h2"> 트루 h2 </hb-checkbox>
</div>
```

## 6. Animation

> 체크박스 애니메이션. 기본값은 `false`

<hb-checkbox> 미설정시. 애니메이션 없음. </hb-checkbox> <br>
<hb-checkbox :animation="false"> :animation 값으로 false. (미설정시와 동일) </hb-checkbox> <br>
<hb-checkbox :animation="true"> :animation 값으로 true - 애니메이션이 생깁니다. </hb-checkbox> <br>
<hb-checkbox :animation="true" size="h3"> 애니 있음, h3 </hb-checkbox> <br>
<hb-checkbox :animation="true" size="h2"> 애니 있음, h2 </hb-checkbox> <br>

<small style="display: block; opacity: 0.5; font-weight: bold; margin: 40px 0 30px 0">아래는 shape="line" 일 때</small>
<hb-checkbox shape="line"> 미설정시. 애니메이션 없음. </hb-checkbox> <br>
<hb-checkbox shape="line" :animation="false">:animation 값으로 false. (미설정시와 동일) </hb-checkbox> <br>
<hb-checkbox shape="line" :animation="true"> :animation 값으로 true - 애니메이션이 생깁니다. </hb-checkbox> <br>
<hb-checkbox shape="line" :animation="true" size="h3"> 애니 있음, h3 </hb-checkbox> <br>
<hb-checkbox shape="line" :animation="true" size="h2"> 애니 있음, h2 </hb-checkbox> <br>

```html
<hb-checkbox> 미설정시. 애니메이션 없음. </hb-checkbox>
<hb-checkbox :animation="false"> :animation 값으로 false. (미설정시와 동일) </hb-checkbox>
<hb-checkbox :animation="true"> :animation 값으로 true - 애니메이션이 생깁니다. </hb-checkbox>
<hb-checkbox :animation="true" size="h3"> 애니 있음, h3 </hb-checkbox>
<hb-checkbox :animation="true" size="h2"> 애니 있음, h2 </hb-checkbox>

아래는 shape="line" 일 때
<hb-checkbox shape="line"> 미설정시. 애니메이션 없음. </hb-checkbox>
<hb-checkbox shape="line" :animation="false">:animation 값으로 false. (미설정시와 동일) </hb-checkbox>
<hb-checkbox shape="line" :animation="true"> :animation 값으로 true - 애니메이션이 생깁니다. </hb-checkbox>
<hb-checkbox shape="line" :animation="true" size="h3"> 애니 있음, h3 </hb-checkbox>
<hb-checkbox shape="line" :animation="true" size="h2"> 애니 있음, h3 </hb-checkbox>
```

## 7. clickBracket 꺽쇠클릭 이벤트

> 리다이렉트 등 꺽쇠 클릭시 실행되는 콜백함수 등록하기

<div style="width: 300px">
  <hb-checkbox :useBracket="true" @clickBracket="handleClickBraket"> :useBracket 값으로 true - 오른쪽 끝에 꺾쇠가 생깁니다.</hb-checkbox> <br />
</div>
<br />

```html
<template>
  <div style="width: 300px">
    <hb-checkbox :useBracket="true" @clickBracket="handleClickBraket"> :useBracket 값으로 true - 오른쪽 끝에 꺾쇠가 생깁니다.</hb-checkbox>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClickBraket() {
        alert('click');
      },
    },
  };
</script>
```

## 8. change 이벤트

> change 이벤트에 함수를 등록해놓으면, 체크박스 값이 변경될때 실행됩니다.

<div style="width: 300px">
  <hb-checkbox @change="handleChangeCheckbox"> 변경되면 alert </hb-checkbox> <br />
</div>
<br />

```html
<template>
  <div style="width: 300px">
    <hb-checkbox @change="handleChangeCheckbox"> 변경되면 alert </hb-checkbox> <br />
  </div>
</template>
<script>
  export default {
    methods: {
      handleChangeCheckbox(){
        alert('changed!');
      }
    },
  };
</script>
```

</div>

<script setup>
const handleClickBraket = () => {
  alert('clicked!')
}

const handleChangeCheckbox = () => {
  alert('changed!')
}
</script>

<script>
import HbCheckbox from '@components/hb-checkbox/index.vue'
export default {
  name: 'page-checkbox',
  components: {
    HbCheckbox,
  },
  
  data(){
    return {
      loading: false,
      checkModel: false,
    }
  },


}

</script>

<style lang="scss">
.page-checkbox {
  .hb-button--text.alice-blue {
    background-color: #f2f5ff;
  }

  .blahblah-naver-button {
    width: 200px;
    background-color: rgb(1, 199, 60);
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(1 199 60 / 80%);
  }

}
</style>
