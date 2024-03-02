<template>
  <div class="relative scroll-smooth text-slate-200 bg-[#0d0b17]">
    <Head lang="en">
      <Title>Koel</Title>
      <Meta name="description" content="Music streaming server that works" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta charset="utf-8" />
      <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
      <Link rel="author" content="Phan An, me@phanan.net" />
    </Head>

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
  </div>
</template>
<script setup lang="ts">
</script>
