<template>
  <LayoutSideBySide :reversed="true">
    <template #text-pane>
      <TypographyH2>
        Speaks <span style="color: #ffcf2d">Subsonic</span>
      </TypographyH2>

      <p>
        Koel speaks the Subsonic and OpenSubsonic API, so you're not stuck inside the web interface.
        Point any Subsonic-compatible client at your Koel library
        and stream away. Your library, your clients, your call.
      </p>
    </template>

    <template #media-pane>
      <WithBacklight :color="'#ffcf2d'">
        <WithGradientBorder class="rounded-lg sm:rounded-xl shadow-lg" color="#ffcf2d">
          <img
            alt="Feishin streaming a Koel library over the Subsonic API"
            class="rounded-lg sm:rounded-xl border border-[#ffcf2d]/20"
            src="@/assets/img/features/feishin.avif"
          >
        </WithGradientBorder>
      </WithBacklight>
    </template>
  </LayoutSideBySide>
</template>
