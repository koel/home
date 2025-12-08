<template>
  <MainHeader />

  <div class="relative -top-[65px]">
    <WithTopGlow>
      <Jumbotron />
    </WithTopGlow>
  </div>

  <WithTopGlow class="-top-[780px]">
    <div class="space-y-64 py-24 border-t border-white/10">
      <Features />
      <MobileApps />
      <KoelPlus />
    </div>
  </WithTopGlow>

  <MainFooter />
</template>
