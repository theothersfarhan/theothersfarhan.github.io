<template>
  <span class="blob"></span>
</template>

<style lang="scss">
.blob {
  border-radius: 58% 42% 36% 64% / 88% 80% 96% 72%;
  z-index: 1;
  position: absolute;
  opacity: 0.15;
  width: 400px;
  aspect-ratio: 1/1;
  animation: animate 15s infinite;
  filter: blur(40px);
  background: linear-gradient(
    47deg,
    var(--color-primary) 47%,
    rgba(118, 74, 166, 1) 71%
  );

  /*  Optional  */
  /*   box-shadow: inset 50px 50px 17px 0px #ff588b,
    inset 100px 100px 17px 0px #66319f; */
}

@keyframes animate {
  0% {
    translate: 10% -5%;
  }
  50% {
    translate: 10% 30%;
  }
  100% {
    translate: 10% -5%;
  }
}
</style>
