# 시작하기

- 본 UI 가이드는 [Vue3](https://vuejs.org/) / Sass / HTML 에 대한 지식을 전제로 하고 있습니다.
- [VitePress](https://vitepress.dev/) 프레임워크를 통해 제작된 사이트입니다.
- Node.js 16.x 이상에서만 정상적인 동작을 보장합니다.
- 타겟 프로젝트는 웹뷰 프로젝트(mydata-www-insurance)입니다.

## 기여하기

1. [깃헙](https://github.com/signalfinlab/habit-ui)에서 클론하기

```shell
$ git clone git@github.com:signalfinlab/habit-ui.git
$ cd habit-ui
$ yarn install
$ yarn doc:dev
```

2. 피처생성하기
3. Pull Request 보내기. 테스트페이지 자동생성 됩니다. `https://pr-{PR넘버}--habit-ui.netlify.app/`
4. 리뷰받기
5. Unit 테스트 통과
6. PR 닫기(main에 머지하기). 머지하면 자동배포 됩니다.

## Unit 테스트

`tests/unit` 폴더에 테스트 작성

```shell
$ yarn test
```

## 마일스톤

- [x] 헤더
- [x] 버튼
- [x] 이모지
- [x] 헤더 가이드 페이지
- [x] 하단 플로팅 버튼 추가
- [x] color 변수 네이밍 논의 및 적용
- [x] hb-button-wrap 속성 리팩토링 논의 및 최종 적용

---

- [ ] 로딩 체크아이콘
- [ ] font 스타일 정의 가이드 페이지
- [ ] hf 웹폰트 적용검토
- [ ] 탭
- [ ] 폼
- [ ] 하단 플로팅 배너

<script>
export default {
  name: 'page-guide',
}
</script>
