
const Myvideo = () => {
  const playbackId = "zSTtz6Ob02qGM4JVSew45HeW01FTM7yeX9WeEruDVleOM";

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">
        My Cinematic Work
      </h2>

      <div className="aspect-video w-full overflow-hidden rounded-2xl">
        <iframe
          src={`https://player.mux.com/${playbackId}`}
          title="My cinematic video"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </section>
  );
};

export default Myvideo;
