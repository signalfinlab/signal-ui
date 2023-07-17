<div class="page-button">

# 버튼

## Button 속성

| Attribute    | Description                      | Type    | Accepted Values                      | Default |
| :----------- | :------------------------------- | :------ | :----------------------------------- | :------ |
| color        | 배경색                           | string  | primary, kakao, lightblue, lightgray | primary |
| shape        | 외곽선 형태                      | string  | fill, line, text                     | fill    |
| disabled     | 비활성화 여부                    | boolean | true, false                          | false   |
| height       | height 기반의 버튼 크기 설정     | string  | xs, sm, md, lg, xl                   | xl      |
| isFull       | 100% 너비로 설정 여부            | boolean | true, false                          | false   |
| fullMargin   | isFull이 설정된 경우 좌우 마진값 | number  | —                                    | —       |
| icon         | 아이콘                           | string  | 폰트어썸 클래스이름 그대로           | —       |
| iconPosition | 아이콘 위치                      | string  | left, right                          | right   |
| loading      | 로딩표시 여부                    | boolean | true, false                          | false   |

## ButtonWrap 속성

| Attribute | Description                       | Type    | Accepted Values | Default |
| :-------- | :-------------------------------- | :------ | :-------------- | :------ |
| isFull    | 100% 너비로 설정 여부             | boolean | true, false     | false   |
| gridRatio | 감싼 버튼들의 가로 grid 비율설정. | string  | 1fr 2fr 3fr     | -       |
| isfloat   | 하단 플로팅 여부                  | boolean | true, false     | false   |

## Color

> 배경색, 기본값은 `primary`

<hb-button-wrap>
  <hb-button color="primary"> Primary </hb-button>
  <hb-button color="kakao"> Kakao </hb-button>
  <hb-button color="lightblue"> Lightblue </hb-button>
  <hb-button color="lightgray"> Lightgray </hb-button>
</hb-button-wrap>

```html
<hb-button color="primary"> Primary </hb-button>
<hb-button color="kakao"> Kakao </hb-button>
<hb-button color="lightblue"> Lightblue </hb-button>
<hb-button color="lightgray"> Lightgray </hb-button>
```

## Shape

> 모양, 기본값은 `fill`

<hb-button-wrap>
  <hb-button shape="fill"> Fill Primary </hb-button>
  <hb-button shape="line"> Line Primary </hb-button>
  <hb-button shape="line" color="gray"> Line Gray </hb-button>
  <hb-button shape="text"> Text Primary </hb-button>
</hb-button-wrap>

```html
<hb-button shape="fill"> Fill Primary </hb-button>
<hb-button shape="line"> Line Primary </hb-button>
<hb-button shape="line" color="gray"> Line Gray </hb-button>
<hb-button shape="text"> Text Primary </hb-button>
```

## Disabled

> 비활성화 여부, 기본값은 `false`

<hb-button-wrap>
  <hb-button color="primary" disabled> Primary </hb-button>
  <hb-button color="kakao" disabled> Kakao </hb-button>
  <hb-button shape="line" disabled > Line </hb-button>
  <hb-button shape="text" disabled > Text </hb-button>
</hb-button-wrap>

```html
<hb-button color="primary" disabled> Primary </hb-button>
<hb-button color="kakao" disabled> Kakao </hb-button>
<hb-button shape="line" disabled> Line </hb-button>
<hb-button shape="text" disabled> Text </hb-button>
```

## Height

> `height` 기반의 버튼 크기 설정, 기본값은 `xl`, CTA용.

<hb-button-wrap>
  <hb-button height="xs"> Extra Small </hb-button>
  <hb-button height="sm"> Small </hb-button>
  <hb-button height="md"> Medium </hb-button>
  <hb-button height="lg"> Large </hb-button>
  <hb-button height="xl"> Extra Large </hb-button>
</hb-button-wrap>

```html
<hb-button height="xs"> Extra Small </hb-button>
<hb-button height="sm"> Small </hb-button>
<hb-button height="md"> Medium </hb-button>
<hb-button height="lg"> Large </hb-button>
<hb-button height="xl"> Extra Large </hb-button>
```

## isFull

> 100% 너비로 설정 여부, 기본값은 `false`

<div style="width: 200px"><hb-button isFull> 가득찬 너비 </hb-button></div>

```html
<div style="width: 200px">
  <hb-button isFull> 가득찬 너비 </hb-button>
</div>
```

## Icon

> 폰트어썸 아이콘, `icon` 값은 폰트어썸 클래스이름 그대로 사용, `iconPosition` 미지정시 기본값은 `right`

<hb-button-wrap>
  <hb-button icon="fa-solid fa-arrow-right" iconPosition="right">오른쪽 아이콘</hb-button>
  <hb-button icon="fa-regular fa-book-blank" iconPosition="left">왼쪽 아이콘</hb-button>
  <hb-button color="kakao" icon="fa-solid fa-comment" iconPosition="left">카톡으로 비교견적 받기</hb-button>
</hb-button-wrap>

```html
<hb-button icon="fa-solid fa-arrow-right" iconPosition="right">오른쪽 아이콘</hb-button>
<hb-button icon="fa-regular fa-book-blank" iconPosition="left">왼쪽 아이콘</hb-button>
```

## Loading

> 로딩표시 여부, 기본값은 `false`, 오른쪽 아이콘 설정된 경우도 로딩으로 자동 대체됨.

<hb-button loading >다운받기</hb-button>

```html
<hb-button loading>다운받기</hb-button>
```

## 그 외 예제들

### 링크걸기

> a 링크가 반드시 구현되어야 하는 경우가 있다.

<a href="https://www.signalplanner.co.kr"> <hb-button >시그널 플래너 바로가기</hb-button></a>

```html
<a href="https://www.signalplanner.co.kr">
  <hb-button>시그널 플래너 바로가기</hb-button>
</a>
```

### 가로 여러 개 버튼

<hb-button-wrap style="width: 300px" >
  <hb-button> 시작하기 </hb-button>
  <hb-button shape="line">다음에 하기</hb-button>
</hb-button-wrap>

```html
<hb-button-wrap style="width: 300px">
  <hb-button> 시작하기 </hb-button>
  <hb-button shape="line">다음에 하기</hb-button>
</hb-button-wrap>
```

### 가로 여러 개 버튼 너비 비율

> `hb-button-wrap`에 `gridRatio` 옵션을 추가하면 `grid-template-columns` 값이 세팅됩니다. 예) `display: grid; grid-template-columns: 1fr 2fr 3fr;`

<hb-button-wrap style="width: 500px" gridRatio="1fr 2fr 3fr" >
  <hb-button> 하나 </hb-button>
  <hb-button> 두울 </hb-button>
  <hb-button> 세엣 </hb-button>
</hb-button-wrap>

```html
<hb-button-wrap style="width: 500px" gridRatio="1fr 2fr 3fr">
  <hb-button> 하나 </hb-button>
  <hb-button> 두울 </hb-button>
  <hb-button> 세엣 </hb-button>
</hb-button-wrap>
```

### 세로 여러 개 버튼

<hb-button-wrap style="width: 200px" isFull>
  <hb-button> 시작하기 </hb-button>
  <hb-button shape="line">다음에 하기</hb-button>
</hb-button-wrap>

```html
<hb-button-wrap style="width: 200px" isFull>
  <hb-button> 시작하기 </hb-button>
  <hb-button shape="line">다음에 하기</hb-button>
</hb-button-wrap>
```

### 로딩 상태 제어

<hb-button :loading="loading" @click="onClickDown">다운받기</hb-button>

```html
<template>
  <hb-button :loading="loading" @click="onClickDown">다운받기</hb-button>
</template>

<script>
  data(){
    return {
      loading: false
    }
  },

  methods: {
    onClickDown(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000)
    }
  }
</script>
```

### 하단 고정 버튼

> 모바일에서 CTA버튼으로 많이 사용되는 하당 고정 버튼 구현방법. `uppertext`는 별도로 스타일 덮어씌어서 구현해주세요.

<!-- 실제 코드를 넣으면 가이드 사이트 하단에 고정되어 버리므로, 코드를 넣지 않고 이미지로 대체합니다. -->
<img src="/images/button/example1.png" style="width: 300px; border: 1px solid #ddd"/>

```html
<hb-button-wrap isFull isFloat>
  <div class="uppertext">본인인증은 본인명의 휴대폰만 가능합니다.</div>
  <hb-button> 마이데이터로 보험 확인하기 </hb-button>
</hb-button-wrap>
```

### 스타일 직접 지정

> 위 스타일 외 스타일을 직접 지정하는 경우 아래와 같이 합니다.  
> (만약 자주 사용된다면, 논의를 거쳐 위와 같이 옵션화를 하도록 합니다.)

#### 1. 간단한 경우, 인라인으로 작성해도 무방합니다.

<hb-button style="background-color:#f2f5ff; color:#5c7cfa">인라인 스타일 작성</hb-button>

```html
<hb-button style="background-color:#f2f5ff; color:#5c7cfa">인라인 스타일 작성</hb-button>
```

#### 2. 복잡한 경우, 별도 클래스를 지정하여 스타일시트에 작성합니다.

<hb-button class="blahblah-naver-button">클래스 지정 스타일 </hb-button>

```html
<template>
  <hb-button class="blahblah-naver-button">클래스 지정 스타일 작성</hb-button>
</template>
<style lang="scss">
  /* 이 스타일은 button.scss에 작성하지 않습니다.*/
  /* 해당 피쳐의 스타일시트에 작성합니다. */
  .hb-button.blahblah-naver-button {
    width: 200px;
    background-color: rgb(1, 199, 60);
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(1 199 60 / 80%);
  }
</style>
```

_주의 : 작성 위치. 이 클래스 관련 스타일은 컴포넌트의 스타일시트 (button.scss)에 작성하지 않습니다. 해당 피쳐의 스타일시트에 작성합니다._

#### 2-1. 실제 예: 자동차 보험비교 하단 연하늘 버튼

<hb-button shape="text" class="alice-blue"> 카톡 공유 </hb-button>

```html
<hb-button shape="text" class="alice-blue"> 카톡 공유 </hb-button>

<style lang="scss">
  .hb-button--text.alice-blue {
    background-color: #f2f5ff;
  }
</style>
```

텍스트버튼에 커스텀 배경색을 지정했습니다.

</div>

<script>
import HbButton from '@components/hb-button/index.vue'
import HbButtonWrap from '@components/hb-button-wrap/index.vue'
export default {
  name: 'page-button',
  components: {
    HbButton,
    HbButtonWrap
  },
  
  data(){
    return {
      loading: false
    }
  },

  methods: {
    onClickDown(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000)
    }
  }
}

</script>

<style lang="scss">
.page-button {
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
