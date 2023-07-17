<div class="page-layout">

# 레이아웃

> 여기서는 가이드만 제공하고, 레이아웃에 대한 실제 코드는 `planner-webview`와 `mydata-www-insurance` 프로젝트에서 각각 유지보수 합니다.

## 속성

| Attribute       | Description                                               | Type    | Accepted Values                 | Default |
| :-------------- | :-------------------------------------------------------- | :------ | :------------------------------ | :------ |
| title           | 헤더 타이틀                                               | string  | -                               | -       |
| titleAlign      | 타이틀 정렬                                   | string  | left, center, right             | center  |
| isDeadEnd       | 현재 막다른 길인지 여부                          | boolean | true, false                     | false   |
| isShowLeftIcon  | 왼쪽 아이콘 노출 여부                           | boolean | true, false                     | true    |
| isShowRightIcon | 오른쪽 아이콘 노출 여부                           | boolean | true, false                     | false   |
| headerPosition  | 헤더 position 스타일                            | string  | fixed, absolute                 | fixed   |
| headerDisplay   | 헤더 display 스타일                            | string  | flex, block, inline, none       | flex    |
| backUrl         | 막다른 길이 아닌경우 뒤로가기 버튼 동작시 backUrl 로 이동 | string  | full url 아니고 path입력해야함. | -       |

## nuxt2 `planner-webview` 에서 사용법

<img src="/images/layout/example1.png" style="width: 300px; border: 1px solid #ddd"/>

```html
<script>
  export default {
    layout: 'basic',
    data() {
      return {
        headerData: {
          title: '본인인증',
          titleAlign: 'center',
          isDeadEnd: true,
          isShowLeftIcon: true,
          isShowRightIcon: false,
          headerPosition: 'fixed',
          headerDisplay: 'flex',
        },
      };
    },
  };
</script>
```

## nuxt3 `mydata-www-insurance` 에서 사용법

<img src="/images/layout/example1.png" style="width: 300px; border: 1px solid #ddd"/>

```html
<script setup>
  definePageMeta({
    layout: 'basic',
    title: '본인인증',
    titleAlign: 'center',
    isDeadEnd: true,
    isShowLeftIcon: true,
    isShowRightIcon: false,
    headerPosition: 'fixed',
    headerDisplay: 'flex',
  });
</script>
```

</div>

<script>
export default {
  name: 'page-layout',

}

</script>

<style lang="scss">
.page-layout {
  
}
</style>
