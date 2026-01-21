import { Helmet } from 'react-helmet-async';
import { PlayCircleIcon, ClockIcon, EyeIcon, FolderIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import { videoTutorials } from '../../data/resourcesData';

const VideoTutorialsPage = () => {
  const categories = [...new Set(videoTutorials.map((video) => video.category))];

  return (
    <>
      <Helmet>
        <title>Video Tutorials - Learn How to Use Invoicer</title>
        <meta
          name="description"
          content="Watch step-by-step video tutorials to learn how to use Invoicer. From getting started to advanced features."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Video Tutorials
              </h1>
              <p className="text-xl text-white/90">
                Watch step-by-step guides to master Invoicer
              </p>
            </div>
          </Container>
        </Section>

        {/* Category Filter */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                <button className="px-6 py-2 bg-[#163300] text-white rounded-full font-semibold hover:bg-[#0d1f00] transition-colors">
                  All Videos
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:border-[#163300] hover:text-[#163300] transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Video Grid */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoTutorials.map((video) => (
                  <a
                    key={video.id}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
                  >
                    {/* Thumbnail */}
                    <div className="relative bg-gradient-to-br from-[#163300] to-[#0d1f00] aspect-video flex items-center justify-center group-hover:scale-105 transition-transform">
                      <PlayCircleIcon className="h-20 w-20 text-white/90 group-hover:text-[#9FE870] transition-colors" />

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-2 py-1 bg-[#9FE870]/20 text-[#163300] rounded text-xs font-semibold">
                          {video.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                        {video.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4" />
                          {video.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <EyeIcon className="h-4 w-4" />
                          {video.views} views
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Browse by Category */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Browse by Category
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {categories.map((category) => {
                  const categoryVideos = videoTutorials.filter((v) => v.category === category);
                  return (
                    <div
                      key={category}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#163300] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <FolderIcon className="h-6 w-6 text-[#163300]" />
                        <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {categoryVideos.length} video{categoryVideos.length !== 1 ? 's' : ''}
                      </p>
                      <ul className="space-y-2">
                        {categoryVideos.map((video) => (
                          <li key={video.id}>
                            <a
                              href={video.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-600 hover:text-[#163300] transition-colors line-clamp-1"
                            >
                              • {video.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Subscribe CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">🎬</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our YouTube Channel
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get notified when we publish new tutorials and tips
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://youtube.com/@invoicerapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#9FE870] text-[#163300] rounded-lg font-semibold hover:bg-[#8FD860] transition-colors"
                >
                  Subscribe Now
                </a>
                <a
                  href="https://apps.apple.com/app/invoicer/id6751941791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Download App
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default VideoTutorialsPage;
