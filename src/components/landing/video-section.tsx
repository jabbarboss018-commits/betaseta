export function VideoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-[4%]">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">Message from the Founder</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Hear from Dr. Muhammad Amjad Saqib, the founder and chairman of Akhuwat, as he shares the vision and impact of the foundation.
            </p>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls
            className="w-full h-full rounded-lg shadow-2xl"
            src="https://akhuwatloan.pk/wp-content/uploads/2025/06/WhatsApp-Video-2025-06-13-at-3.30.47-PM.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
